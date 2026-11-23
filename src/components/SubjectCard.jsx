import React from 'react';
import { 
  Atom, 
  FlaskConical, 
  Compass, 
  Dna, 
  Code2, 
  Zap, 
  BookOpen, 
  FileText, 
  Award, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

export const SubjectCard = ({ 
  subject, 
  onSelectSubject, 
  onOpenNcert, 
  onOpenPyq, 
  onOpenFormulas 
}) => {
  const { completedChapters } = useUserProgress();

  // Compute how many chapters are completed in this subject
  const completedInSubject = subject.chapters.filter(ch => completedChapters.includes(ch.id)).length;
  const progressPercent = Math.round((completedInSubject / subject.totalChapters) * 100);

  // Map icon string to Lucide icon
  const getIcon = () => {
    switch (subject.icon) {
      case 'Atom': return <Atom className="w-6 h-6 text-forest-700" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-forest-700" />;
      case 'Compass': return <Compass className="w-6 h-6 text-softblue-700" />;
      case 'Dna': return <Dna className="w-6 h-6 text-forest-700" />;
      case 'Zap': return <Zap className="w-6 h-6 text-forest-700" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-softblue-700" />;
      default: return <BookOpen className="w-6 h-6 text-forest-700" />;
    }
  };

  return (
    <div className="academic-card p-6 flex flex-col justify-between hover:border-forest-300 group">
      
      <div>
        {/* Top bar with icon and class badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon()}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
              Class {subject.classLevel}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Code {subject.code}</span>
          </div>
        </div>

        {/* Subject Name and Description */}
        <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-forest-950 transition-colors">
          {subject.name}
        </h3>
        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {subject.description}
        </p>

        {/* Progress Bar & Chapter Counts */}
        <div className="mt-5 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="font-medium">
              {completedInSubject} of {subject.totalChapters} chapters done
            </span>
            <span className="font-bold text-forest-800">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-forest-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Featured Chapter Pills */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Sample Chapters:
          </div>
          <div className="text-xs text-slate-700 space-y-1">
            {subject.chapters.slice(0, 2).map((ch) => (
              <div key={ch.id} className="flex items-center gap-2 truncate">
                <span className="text-slate-400 font-mono text-[11px]">Ch {ch.number}.</span>
                <span className="truncate hover:text-forest-800 transition-colors">{ch.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
        <button
          onClick={() => onSelectSubject(subject.id)}
          className="w-full py-2.5 px-4 rounded-lg bg-forest-950 hover:bg-forest-900 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <span>Explore Chapter Modules</span>
          <ChevronRight className="w-4 h-4 text-emerald-300" />
        </button>

        <div className="grid grid-cols-3 gap-1.5 pt-1 text-[11px]">
          <button
            onClick={() => onOpenNcert(subject.chapters[0]?.id)}
            className="py-1.5 px-2 rounded border border-slate-200 hover:border-forest-300 hover:bg-forest-50/50 text-slate-700 font-medium text-center truncate"
            title="NCERT Solutions"
          >
            NCERT
          </button>
          <button
            onClick={() => onOpenPyq(subject.id)}
            className="py-1.5 px-2 rounded border border-slate-200 hover:border-forest-300 hover:bg-forest-50/50 text-slate-700 font-medium text-center truncate"
            title="Previous Year Papers"
          >
            PYQs
          </button>
          <button
            onClick={() => onOpenFormulas(subject.name)}
            className="py-1.5 px-2 rounded border border-slate-200 hover:border-forest-300 hover:bg-forest-50/50 text-slate-700 font-medium text-center truncate"
            title="Formulas"
          >
            Formulas
          </button>
        </div>
      </div>

    </div>
  );
};
