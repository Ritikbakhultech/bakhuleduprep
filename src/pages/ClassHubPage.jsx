import React, { useState } from 'react';
import { GraduationCap, ArrowRight, BookOpen, FileText, Award, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { subjectsData } from '../data/subjectsData';
import { SubjectCard } from '../components/SubjectCard';
import { useUserProgress } from '../context/UserProgressContext';

export const ClassHubPage = ({ 
  targetClass, 
  onSelectSubject, 
  onOpenNcert, 
  onOpenPyq, 
  onOpenFormulas, 
  onOpenNotes,
  onOpenQuiz,
  setCurrentView
}) => {
  const { completedChapters } = useUserProgress();
  const [selectedStream, setSelectedStream] = useState('all'); // 'all' | 'pcm' | 'pcb' | 'cs'

  const classSubjects = subjectsData.filter(s => s.classLevel === targetClass);

  const filteredSubjects = classSubjects.filter(sub => {
    if (selectedStream === 'pcm') return ['Physics', 'Chemistry', 'Mathematics'].includes(sub.name);
    if (selectedStream === 'pcb') return ['Physics', 'Chemistry', 'Biology'].includes(sub.name);
    if (selectedStream === 'cs') return ['Computer Science', 'Mathematics', 'Physics'].includes(sub.name);
    return true;
  });

  const totalClassChapters = classSubjects.reduce((acc, s) => acc + s.chapters.length, 0);
  const completedInClass = classSubjects.reduce((acc, s) => {
    return acc + s.chapters.filter(ch => completedChapters.includes(ch.id)).length;
  }, 0);
  const classProgressPercent = Math.round((completedInClass / totalClassChapters) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-forest-950 text-white rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-emerald-300 text-xs font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>CBSE & State Board Rationalized Curriculum</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Class {targetClass} Comprehensive Learning Hub
            </h1>
            <p className="text-xs sm:text-sm text-forest-200 max-w-2xl leading-relaxed">
              {targetClass === '11' 
                ? 'Lay the conceptual groundwork in mechanics, thermodynamics, mole concept, organic chemistry, and calculus foundations.'
                : 'Master senior secondary electrodynamics, chemical kinetics, differential and integral calculus, and modern physics.'}
            </p>
          </div>

          {/* Quick Progress Box */}
          <div className="bg-forest-900/90 border border-forest-800 p-4 rounded-xl text-center min-w-[200px]">
            <div className="text-xs text-forest-300 font-medium">Class {targetClass} Mastery</div>
            <div className="text-3xl font-serif font-bold text-white mt-1">{classProgressPercent}%</div>
            <div className="text-[11px] text-forest-300 mt-0.5">{completedInClass} of {totalClassChapters} chapters done</div>
          </div>
        </div>

        {/* Quick Resource Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-forest-900 text-xs">
          <button
            onClick={() => onOpenNcert()}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
            <span>Class {targetClass} NCERT Solutions</span>
          </button>
          <button
            onClick={() => onOpenPyq()}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-300" />
            <span>Class {targetClass} Board Papers</span>
          </button>
          <button
            onClick={() => onOpenFormulas()}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors flex items-center gap-1.5"
          >
            <Award className="w-3.5 h-3.5 text-emerald-300" />
            <span>Formula Repository</span>
          </button>
          <button
            onClick={() => onOpenQuiz()}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold transition-colors flex items-center gap-1.5 ml-auto"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Take Diagnostic Mock</span>
          </button>
        </div>
      </div>

      {/* Stream Filter Pills */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold font-serif text-slate-900">Class {targetClass} Subject Modules</h2>
          <p className="text-xs text-slate-500 mt-0.5">Filter subjects by your academic track or examination stream</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setSelectedStream('all')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              selectedStream === 'all' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Subjects ({classSubjects.length})
          </button>
          <button
            onClick={() => setSelectedStream('pcm')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              selectedStream === 'pcm' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PCM
          </button>
          <button
            onClick={() => setSelectedStream('pcb')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              selectedStream === 'pcb' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PCB
          </button>
          <button
            onClick={() => setSelectedStream('cs')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              selectedStream === 'cs' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            CS & Math
          </button>
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubjects.map(sub => (
          <SubjectCard
            key={sub.id}
            subject={sub}
            onSelectSubject={onSelectSubject}
            onOpenNcert={onOpenNcert}
            onOpenPyq={onOpenPyq}
            onOpenFormulas={onOpenFormulas}
          />
        ))}
      </div>

    </div>
  );
};
