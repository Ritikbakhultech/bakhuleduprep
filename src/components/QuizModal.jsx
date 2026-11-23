import React, { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle, Clock, Award, RotateCcw, ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';
import { quizData } from '../data/quizData';
import { useUserProgress } from '../context/UserProgressContext';

export const QuizModal = ({ quizId, onClose }) => {
  const { recordQuizAttempt } = useUserProgress();

  const quiz = quizData.find(q => q.id === quizId) || quizData[0];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(quiz.durationMinutes * 60);

  // Countdown timer
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSelectOption = (qId, optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const finalScore = calculateScore();
    const percentage = Math.round((finalScore / quiz.totalQuestions) * 100);

    // Record into student progress history
    recordQuizAttempt({
      quizId: quiz.id,
      quizTitle: quiz.title,
      subject: quiz.subject,
      score: finalScore,
      total: quiz.totalQuestions,
      percentage: percentage,
      timeSpent: `${Math.round((quiz.durationMinutes * 60 - timeRemaining) / 60)} mins`
    });
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setTimeRemaining(quiz.durationMinutes * 60);
  };

  const activeQuestion = quiz.questions[currentQuestionIndex];
  const score = calculateScore();
  const percentage = Math.round((score / quiz.totalQuestions) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 flex items-center justify-center text-emerald-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-forest-800 text-emerald-200 uppercase tracking-wider">
                  Class {quiz.classLevel} {quiz.subject}
                </span>
                <span className="text-xs text-forest-300">Practice Quiz</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                {quiz.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!isSubmitted && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-forest-900 rounded-lg text-emerald-200 text-xs font-mono border border-forest-800">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{formatTime(timeRemaining)}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-2 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          
          {isSubmitted ? (
            /* Results Screen */
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="text-center p-8 rounded-2xl bg-forest-50 border border-forest-200">
                <div className="w-16 h-16 rounded-full bg-forest-900 text-emerald-300 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-serif text-forest-950">
                  {percentage >= 80 ? "Outstanding Mastery!" : percentage >= 50 ? "Solid Effort!" : "Keep Practicing!"}
                </h4>
                <p className="text-sm text-forest-800 mt-1 max-w-md mx-auto">
                  You scored <strong>{score} out of {quiz.totalQuestions}</strong> ({percentage}%). Recorded in your personal student dashboard.
                </p>

                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={handleRetake}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-white border border-forest-300 text-forest-900 hover:bg-forest-100 flex items-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retake Quiz</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 rounded-lg text-xs font-bold bg-forest-900 text-white hover:bg-forest-800 transition-colors shadow-xs"
                  >
                    Done & Return
                  </button>
                </div>
              </div>

              {/* Detailed Question Review */}
              <div className="space-y-4">
                <h5 className="font-bold text-sm text-slate-800 uppercase tracking-wider">
                  Detailed Answer Review & Solutions
                </h5>

                {quiz.questions.map((q, idx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correctIndex;

                  return (
                    <div key={q.id} className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500">Question {idx + 1}</span>
                        <span className={`text-xs px-2 py-0.5 rounded font-semibold flex items-center gap-1 ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {isCorrect ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-slate-800">{q.question}</p>

                      <div className="space-y-1.5 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isOptionCorrect = oIdx === q.correctIndex;
                          const wasUserChoice = oIdx === userAnswer;

                          return (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg text-xs border flex items-center justify-between ${
                                isOptionCorrect 
                                  ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-950'
                                  : wasUserChoice 
                                    ? 'bg-rose-50 border-rose-300 text-rose-950 line-through'
                                    : 'bg-slate-50/50 border-slate-200 text-slate-600'
                              }`}
                            >
                              <span>{opt}</span>
                              {isOptionCorrect && <span className="text-[10px] uppercase font-bold text-emerald-700">Correct Answer</span>}
                              {wasUserChoice && !isOptionCorrect && <span className="text-[10px] uppercase font-bold text-rose-600">Your Answer</span>}
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-3 rounded-lg bg-softblue-50/70 border border-softblue-100 text-xs text-softblue-950">
                        <div className="font-bold text-softblue-900 mb-0.5">Explanation:</div>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Active Question Taking View */
            <div className="space-y-6">
              
              {/* Progress and Question Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Question {currentQuestionIndex + 1} of {quiz.totalQuestions}</span>
                  <span>Topic: {activeQuestion.topic}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-forest-600 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / quiz.totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Statement */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                  {activeQuestion.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {activeQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswers[activeQuestion.id] === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(activeQuestion.id, idx)}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-forest-700 bg-forest-50/80 font-semibold text-forest-950 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                          isSelected ? 'bg-forest-800 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-forest-700 bg-forest-700' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          )}

        </div>

        {/* Bottom Actions Bar */}
        {!isSubmitted && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <button
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
              className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-medium text-slate-700 flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {currentQuestionIndex < quiz.totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  className="px-4 py-2 rounded-lg bg-forest-900 text-white hover:bg-forest-800 text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-bold transition-all shadow-xs"
                >
                  Submit & Check Score
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
