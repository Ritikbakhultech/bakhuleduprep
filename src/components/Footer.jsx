import React from 'react';
import { GraduationCap, Heart, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';

export const Footer = ({ setCurrentView }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-forest-900 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="text-lg font-bold font-serif text-forest-950">VidyaSetu</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              A distraction-free, non-commercial learning sanctuary built exclusively for Class 11 and Class 12 students. Organized around official NCERT curriculum standards, clear conceptual derivations, and previous year board questions.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free & Open Academic Content</span>
            </div>
          </div>

          {/* Quick Hubs */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Academic Hubs</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentView('class-11')} className="hover:text-forest-800 transition-colors">
                  Class 11 Science Foundation
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('class-12')} className="hover:text-forest-800 transition-colors">
                  Class 12 Board Preparation
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('subjects')} className="hover:text-forest-800 transition-colors">
                  All Subjects & Syllabi
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('dashboard')} className="hover:text-forest-800 transition-colors">
                  Student Progress Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Curated Resources */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentView('ncert')} className="hover:text-forest-800 transition-colors">
                  NCERT Solutions (Step-by-Step)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('pyq')} className="hover:text-forest-800 transition-colors">
                  CBSE Previous Year Papers (PYQs)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('formulas')} className="hover:text-forest-800 transition-colors">
                  Important Formula Bank
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('quiz-center')} className="hover:text-forest-800 transition-colors">
                  Interactive Practice Quizzes
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('notes')} className="hover:text-forest-800 transition-colors">
                  Downloadable Revision PDFs
                </button>
              </li>
            </ul>
          </div>

          {/* Guidelines */}
          <div>
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-3">Study Philosophy</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Inspired by Khan Academy: master fundamentals deeply before attempting advanced speed drills. No clickbait, no algorithmic traps, just pure academic learning.
            </p>
            <div className="mt-3 inline-block px-2.5 py-1 bg-white border border-slate-200 rounded text-[11px] text-slate-600 font-mono">
              Aligned: CBSE 2024-25
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} VidyaSetu Learning Initiative. Dedicated to student focus and academic excellence.</p>
          <div className="flex items-center gap-6">
            <span>White Background • Dark Green & Soft Blue Accents</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
