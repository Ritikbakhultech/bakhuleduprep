import React, { useState } from 'react';
import { X, BookOpen, Check, Copy, Printer, HelpCircle, ChevronRight, Bookmark } from 'lucide-react';
import { ncertSolutionsData } from '../data/ncertSolutionsData';
import { useUserProgress } from '../context/UserProgressContext';

export const NcertSolutionsModal = ({ chapterId, onClose }) => {
  const { toggleBookmark, isBookmarked } = useUserProgress();
  const [copiedId, setCopiedId] = useState(null);

  // Fallback to sample chapter if specific chapterId not present in sample dataset
  const activeData = ncertSolutionsData[chapterId] || ncertSolutionsData["c12-phy-1"];
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const activeQuestion = activeData.questions[selectedQuestionIndex] || activeData.questions[0];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 flex items-center justify-center text-emerald-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-forest-800 text-emerald-200 uppercase tracking-wider">
                  Class {activeData.classLevel} {activeData.subjectName}
                </span>
                <span className="text-xs text-forest-300">Chapter {activeData.chapterNumber}</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                {activeData.chapterTitle} • NCERT Verified Solutions
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Solutions"
              className="p-2 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors hidden sm:flex items-center gap-1.5 text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Sidebar and Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          
          {/* Question List Sidebar */}
          <div className="md:col-span-4 border-r border-slate-200 bg-slate-50/70 p-4 overflow-y-auto max-h-48 md:max-h-none">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Exercises & In-Text</span>
              <span className="text-[11px] font-normal text-slate-400">{activeData.questions.length} Solved Questions</span>
            </div>

            <div className="space-y-1.5">
              {activeData.questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuestionIndex(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-sm flex flex-col gap-1 ${
                    selectedQuestionIndex === idx
                      ? 'bg-white border-forest-600 shadow-xs'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-forest-900">{q.exercise}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      q.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-700' :
                      q.difficulty === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {q.question}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 space-y-1">
              <div className="font-semibold flex items-center gap-1.5 text-forest-900">
                <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
                <span>Marking Scheme Criteria</span>
              </div>
              <p className="text-[11px] text-emerald-800 leading-relaxed">
                Step-by-step marking aligns strictly with CBSE Class 11 & 12 Evaluator guidelines. Full marks require explicit given values, formulas, calculations, and final unit statements.
              </p>
            </div>
          </div>

          {/* Active Solution Workspace */}
          <div className="md:col-span-8 p-6 overflow-y-auto space-y-6">
            
            {/* Question Banner */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-2.5 py-0.5 bg-forest-900 text-white rounded text-xs font-semibold">
                  {activeQuestion.exercise}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500">Weightage: {activeQuestion.marks} Marks</span>
                  <button
                    onClick={() => toggleBookmark({
                      id: activeQuestion.id,
                      title: `${activeData.subjectName} ${activeQuestion.exercise}`,
                      type: "NCERT Solution",
                      subject: activeData.subjectName
                    })}
                    className="p-1 text-slate-400 hover:text-amber-500"
                    title="Bookmark Question"
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked(activeQuestion.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>
                </div>
              </div>
              <h4 className="text-base font-semibold text-slate-900 leading-snug">
                {activeQuestion.question}
              </h4>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <span>Verified Step-by-Step Solution</span>
                <span className="flex-1 border-t border-slate-200"></span>
              </h5>

              {activeQuestion.steps.map((step) => (
                <div key={step.stepNumber} className="border border-slate-200 rounded-lg p-4 bg-white hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-forest-100 text-forest-800 text-xs font-bold flex items-center justify-center">
                      {step.stepNumber}
                    </span>
                    <h6 className="text-sm font-semibold text-slate-800">{step.title}</h6>
                  </div>
                  <pre className="text-xs text-slate-700 font-sans whitespace-pre-wrap leading-relaxed bg-slate-50 p-3 rounded border border-slate-100">
                    {step.content}
                  </pre>
                </div>
              ))}
            </div>

            {/* Final Answer Highlight Box */}
            <div className="p-4 rounded-xl bg-forest-50 border border-forest-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-forest-900 tracking-wider">Final Answer:</div>
                <div className="text-sm font-bold text-forest-950 mt-0.5">{activeQuestion.answer}</div>
              </div>
              <button
                onClick={() => handleCopy(activeQuestion.answer, activeQuestion.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-forest-800 bg-white border border-forest-300 rounded-lg hover:bg-forest-100 transition-colors"
              >
                {copiedId === activeQuestion.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-forest-700" />
                    <span>Copy Answer</span>
                  </>
                )}
              </button>
            </div>

            {/* Teacher's Key Insight Alert */}
            {activeQuestion.keyInsight && (
              <div className="p-3.5 rounded-lg bg-softblue-50 border border-softblue-200 text-xs text-softblue-900 flex items-start gap-2.5">
                <span className="font-bold text-softblue-700 whitespace-nowrap">💡 Exam Tip:</span>
                <p className="leading-relaxed text-softblue-900">
                  {activeQuestion.keyInsight}
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer Navigation */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div>
            Question {selectedQuestionIndex + 1} of {activeData.questions.length}
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled={selectedQuestionIndex === 0}
              onClick={() => setSelectedQuestionIndex(prev => prev - 1)}
              className="px-3 py-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Previous
            </button>
            <button
              disabled={selectedQuestionIndex === activeData.questions.length - 1}
              onClick={() => setSelectedQuestionIndex(prev => prev + 1)}
              className="px-3 py-1.5 rounded bg-forest-900 text-white hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-1"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
