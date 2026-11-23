import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Award, 
  BookOpen, 
  FileText, 
  Bookmark, 
  ChevronRight, 
  Check, 
  Filter, 
  Zap,
  Atom,
  FlaskConical,
  Compass,
  Dna,
  Code2
} from 'lucide-react';
import { subjectsData } from '../data/subjectsData';
import { useUserProgress } from '../context/UserProgressContext';

export const SubjectPage = ({ 
  subjectId, 
  onBack, 
  onOpenNcert, 
  onOpenNotes, 
  onOpenPyq, 
  onOpenFormulas, 
  onOpenQuiz 
}) => {
  const { completedChapters, toggleChapterCompletion } = useUserProgress();
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'pending' | 'completed'
  const [expandedChapterId, setExpandedChapterId] = useState(null);

  // Find subject or default to Class 12 Physics
  const subject = subjectsData.find(s => s.id === subjectId) || subjectsData[0];

  const totalChapters = subject.chapters.length;
  const completedCount = subject.chapters.filter(ch => completedChapters.includes(ch.id)).length;
  const progressPercent = Math.round((completedCount / totalChapters) * 100);

  const filteredChapters = subject.chapters.filter(ch => {
    const isCompleted = completedChapters.includes(ch.id);
    if (filterMode === 'completed') return isCompleted;
    if (filterMode === 'pending') return !isCompleted;
    return true;
  });

  const getSubjectIcon = () => {
    switch (subject.icon) {
      case 'Atom': return <Atom className="w-8 h-8 text-forest-700" />;
      case 'FlaskConical': return <FlaskConical className="w-8 h-8 text-forest-700" />;
      case 'Compass': return <Compass className="w-8 h-8 text-softblue-700" />;
      case 'Dna': return <Dna className="w-8 h-8 text-forest-700" />;
      case 'Zap': return <Zap className="w-8 h-8 text-forest-700" />;
      case 'Code2': return <Code2 className="w-8 h-8 text-softblue-700" />;
      default: return <BookOpen className="w-8 h-8 text-forest-700" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-forest-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Subjects Overview</span>
      </button>

      {/* Subject Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center shrink-0">
              {getSubjectIcon()}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800">
                  Class {subject.classLevel}
                </span>
                <span className="text-xs font-mono text-slate-400">Subject Code: {subject.code}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                {subject.name} Curriculum & Learning Modules
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                {subject.description}
              </p>
            </div>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 gap-2 shrink-0">
            <div className="text-right">
              <div className="text-xs text-slate-500 font-medium">Estimated Syllabus Time</div>
              <div className="text-base font-bold font-serif text-slate-900">{subject.estimatedHours} Study Hours</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 font-medium">CBSE Weightage</div>
              <div className="text-sm font-semibold text-forest-800">70-80 Theory Marks</div>
            </div>
          </div>
        </div>

        {/* Progress Tracker Bar */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Your Subject Progress:</span>
              <span className="text-slate-600">{completedCount} of {totalChapters} chapters completed</span>
            </div>
            <span className="font-bold text-forest-800 text-sm">{progressPercent}% Mastered</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-forest-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Subject Navigation Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filterMode === 'all'
                  ? 'bg-forest-900 text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Chapters ({totalChapters})
            </button>
            <button
              onClick={() => setFilterMode('pending')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filterMode === 'pending'
                  ? 'bg-forest-900 text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Pending ({totalChapters - completedCount})
            </button>
            <button
              onClick={() => setFilterMode('completed')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filterMode === 'completed'
                  ? 'bg-forest-900 text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Completed ({completedCount})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenFormulas(subject.name)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-forest-700" />
              <span>{subject.name} Formulas</span>
            </button>
            <button
              onClick={() => onOpenPyq(subject.id)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-forest-700" />
              <span>Previous Year Papers</span>
            </button>
          </div>
        </div>

      </div>

      {/* Chapter List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold font-serif text-slate-900">
          Structured Chapter Modules
        </h3>

        {filteredChapters.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
            No chapters found under "{filterMode}".
          </div>
        ) : (
          filteredChapters.map((chapter) => {
            const isCompleted = completedChapters.includes(chapter.id);
            const isExpanded = expandedChapterId === chapter.id;

            return (
              <div 
                key={chapter.id}
                className={`bg-white rounded-xl border transition-all ${
                  isCompleted 
                    ? 'border-emerald-200 bg-emerald-50/20' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                
                {/* Chapter Row Main Summary */}
                <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  <div className="flex items-start gap-4">
                    {/* Completion Checkmark Toggle Button */}
                    <button
                      onClick={() => toggleChapterCompletion(chapter.id)}
                      title={isCompleted ? "Mark as Incomplete" : "Mark Chapter as Complete"}
                      className={`mt-1 w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isCompleted
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-slate-300 hover:border-forest-600 text-transparent hover:text-slate-300'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-forest-800">
                          Chapter {chapter.number}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                          chapter.difficulty.includes('Easy') ? 'bg-emerald-50 text-emerald-800' :
                          chapter.difficulty.includes('Hard') ? 'bg-rose-50 text-rose-800' : 'bg-amber-50 text-amber-800'
                        }`}>
                          {chapter.difficulty}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500">{chapter.duration}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs font-semibold text-slate-700">~{chapter.marksWeightage} Marks</span>
                      </div>

                      <h4 className={`text-base sm:text-lg font-bold ${isCompleted ? 'text-slate-700 line-through' : 'text-slate-900'}`}>
                        {chapter.title}
                      </h4>

                      <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                        {chapter.description}
                      </p>

                      {/* Key Concepts Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {chapter.keyConcepts.map((kc, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                            {kc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Right Side */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-end gap-2 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <button
                        onClick={() => onOpenNcert(chapter.id)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-forest-400 hover:bg-forest-50 text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-forest-700" />
                        <span>NCERT ({chapter.ncertSolutionsCount})</span>
                      </button>

                      <button
                        onClick={() => onOpenNotes()}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-forest-400 hover:bg-forest-50 text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1"
                      >
                        <FileText className="w-3.5 h-3.5 text-forest-700" />
                        <span>Handout</span>
                      </button>

                      <button
                        onClick={() => onOpenQuiz()}
                        className="px-3 py-1.5 rounded-lg bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <Award className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Quiz</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setExpandedChapterId(isExpanded ? null : chapter.id)}
                      className="text-xs text-forest-800 hover:text-forest-950 font-semibold flex items-center gap-1 mt-1"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Concept Overview'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                </div>

                {/* Expanded Concept & Syllabus Breakdown */}
                {isExpanded && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 space-y-3 rounded-b-xl animate-in fade-in duration-150">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-slate-500">Core Summary:</span>
                      <p className="mt-1 leading-relaxed text-slate-800 text-sm">
                        {chapter.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-800">NCERT Coverage:</span>
                        <p className="text-slate-500 mt-0.5">{chapter.ncertSolutionsCount} Step-by-Step Questions</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-800">Previous Year Papers:</span>
                        <p className="text-slate-500 mt-0.5">{chapter.pyqCount} Board Questions Tagged</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-800">Assessment:</span>
                        <p className="text-slate-500 mt-0.5">{chapter.quizQuestionsCount} Question Practice Test</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
