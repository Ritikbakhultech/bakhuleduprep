import React, { useState } from 'react';
import { 
  User, 
  Flame, 
  CheckCircle2, 
  Clock, 
  Award, 
  Bookmark, 
  Plus, 
  Trash2, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  Calendar,
  Check,
  Percent,
  Sparkles
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import { subjectsData } from '../data/subjectsData';

export const DashboardPage = ({ 
  onOpenQuiz, 
  onOpenFormulas, 
  onOpenNcert, 
  onOpenNotes,
  setCurrentView,
  onSelectSubject 
}) => {
  const { 
    currentUser, 
    completedChapters, 
    toggleChapterCompletion, 
    quizHistory, 
    pendingTopics, 
    togglePendingTopic, 
    addPendingTopic,
    bookmarks 
  } = useUserProgress();

  const [newTopicText, setNewTopicText] = useState('');
  const [newTopicSubject, setNewTopicSubject] = useState('Physics');
  const [newTopicPriority, setNewTopicPriority] = useState('High');

  // Compute overall stats
  const totalAvailableChapters = subjectsData.reduce((acc, sub) => acc + sub.chapters.length, 0);
  const completedChaptersCount = completedChapters.length;
  const overallMasteryPercent = Math.round((completedChaptersCount / totalAvailableChapters) * 100);

  // Compute average test score
  const avgTestScore = quizHistory.length > 0
    ? Math.round(quizHistory.reduce((acc, q) => acc + q.percentage, 0) / quizHistory.length)
    : 0;

  const handleAddTopic = (e) => {
    e.preventDefault();
    if (!newTopicText.trim()) return;
    addPendingTopic({
      subject: newTopicSubject,
      chapter: "Custom Revision",
      topic: newTopicText.trim(),
      priority: newTopicPriority,
      dueDate: "This Week"
    });
    setNewTopicText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-forest-900 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-xs">
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  {currentUser.name}
                </h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800 font-bold">
                  Class {currentUser.classLevel}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {currentUser.stream} • Target: <span className="font-semibold text-slate-700">{currentUser.targetExam}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
              <Flame className="w-5 h-5 text-amber-500 fill-amber-400" />
              <div>
                <div className="text-xs font-bold leading-tight">{currentUser.studyStreakDays} Day Streak</div>
                <div className="text-[10px] text-amber-700">Consistency Master</div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-forest-50 border border-forest-200 text-forest-900">
              <CheckCircle2 className="w-5 h-5 text-forest-700" />
              <div>
                <div className="text-xs font-bold leading-tight">{completedChaptersCount} Done</div>
                <div className="text-[10px] text-forest-700">Chapter Modules</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Metric 1: Completed Chapters */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider">Curriculum Mastery</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-serif font-bold text-slate-900">{overallMasteryPercent}%</span>
            <span className="text-xs text-slate-500">({completedChaptersCount}/{totalAvailableChapters} chapters)</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-forest-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${overallMasteryPercent}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            Based on active Class 11 and Class 12 CBSE standard syllabus.
          </p>
        </div>

        {/* Metric 2: Average Test Scores */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider">Diagnostic Quizzes</span>
            <Award className="w-4 h-4 text-forest-700" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-serif font-bold text-slate-900">{avgTestScore}%</span>
            <span className="text-xs text-slate-500">Avg. Accuracy</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-softblue-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${avgTestScore}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{quizHistory.length} tests taken</span>
            <button
              onClick={() => onOpenQuiz()}
              className="text-forest-800 font-semibold hover:underline"
            >
              Take New Test →
            </button>
          </div>
        </div>

        {/* Metric 3: Pending Topics */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider">Pending Action Topics</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-serif font-bold text-slate-900">{pendingTopics.length}</span>
            <span className="text-xs text-slate-500">Topics scheduled</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-amber-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(pendingTopics.length * 20, 100)}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            Prioritized derivations and problem sets for this week.
          </p>
        </div>

      </div>

      {/* Main Grid: Pending Topics & Quiz History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Pending Topics & To-Do (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold font-serif text-slate-900">
                  Pending Study Topics & Derivations
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Check off items as you revise to keep your streak active.
                </p>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                {pendingTopics.length} Active
              </span>
            </div>

            {/* Add Topic Input Form */}
            <form onSubmit={handleAddTopic} className="flex gap-2">
              <input
                type="text"
                placeholder="Add a new derivation or formula to revise..."
                value={newTopicText}
                onChange={(e) => setNewTopicText(e.target.value)}
                className="flex-1 px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-forest-600"
              />
              <select
                value={newTopicSubject}
                onChange={(e) => setNewTopicSubject(e.target.value)}
                className="px-2.5 py-2 text-xs border border-slate-200 rounded-lg bg-white focus:outline-none focus:border-forest-600 text-slate-700"
              >
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
              </select>
              <button
                type="submit"
                className="px-3.5 py-2 rounded-lg bg-forest-900 text-white hover:bg-forest-800 text-xs font-bold transition-colors shrink-0"
              >
                <Plus className="w-4 h-4" />
              </button>
            </form>

            {/* List of Pending Topics */}
            <div className="space-y-2.5">
              {pendingTopics.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs">
                  🎉 All pending topics completed! Add more above.
                </div>
              ) : (
                pendingTopics.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-between gap-3 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => togglePendingTopic(item.id)}
                        className="mt-0.5 w-5 h-5 rounded border border-slate-300 hover:border-emerald-600 hover:bg-emerald-50 flex items-center justify-center transition-colors"
                        title="Mark Completed"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>

                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-slate-900 leading-snug">
                          {item.topic}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                          <span className="font-medium text-forest-800">{item.subject}</span>
                          <span>•</span>
                          <span>{item.chapter}</span>
                          <span>•</span>
                          <span className="text-slate-400">Due: {item.dueDate}</span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 rounded font-semibold shrink-0 ${
                      item.priority === 'High' ? 'bg-rose-50 text-rose-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                ))
              )}
            </div>

          </div>

          {/* Bookmarked Notes & Formula Sheets */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold font-serif text-slate-900 flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Saved Bookmarks & High-Yield Sheets</span>
              </h3>
              <span className="text-xs text-slate-500">{bookmarks.length} items</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bookmarks.map((b) => (
                <div 
                  key={b.id}
                  onClick={() => {
                    if (b.type.includes('Formula')) onOpenFormulas();
                    else onOpenNotes();
                  }}
                  className="p-3.5 rounded-lg border border-slate-200 hover:border-forest-300 hover:bg-forest-50/40 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800">{b.type} • {b.subject}</span>
                    <h5 className="text-xs font-semibold text-slate-900 mt-1 line-clamp-2">{b.title}</h5>
                  </div>
                  <span className="text-[11px] text-forest-700 font-semibold mt-3 hover:underline">Open Resource →</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Quiz Test Scores & Completed Chapters (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Test Scores History */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold font-serif text-slate-900">
                  Recent Practice Test Scores
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Automated diagnostic score reports</p>
              </div>
              <button
                onClick={() => onOpenQuiz()}
                className="text-xs font-semibold text-forest-800 hover:underline"
              >
                Take Quiz
              </button>
            </div>

            <div className="space-y-3">
              {quizHistory.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs">
                  No quizzes attempted yet. Try the Electrostatics sprint!
                </div>
              ) : (
                quizHistory.map((test) => (
                  <div key={test.id} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{test.quizTitle}</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                        test.percentage >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {test.percentage}%
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Score: <strong>{test.score}/{test.total}</strong> correct</span>
                      <span>Time: {test.timeSpent}</span>
                      <span>{test.date}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Syllabus Navigation */}
          <div className="bg-forest-950 text-white rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Next Step</span>
            </div>
            <h4 className="text-base font-bold font-serif">
              Revise Ray Optics & Lens Maker Derivation
            </h4>
            <p className="text-xs text-forest-200 leading-relaxed">
              Consistently tested in Section E (5 Marks) of CBSE Physics. Includes complete mathematical steps and sign conventions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenNcert('c12-phy-1')}
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold text-xs transition-colors"
              >
                Open NCERT Exercise
              </button>
              <button
                onClick={() => onOpenFormulas('Physics')}
                className="px-3 py-2 rounded-lg bg-forest-900 hover:bg-forest-800 text-white text-xs font-semibold transition-colors"
              >
                View Formula
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
