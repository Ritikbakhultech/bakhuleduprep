import React, { useState } from 'react';
import { X, Search, Copy, Check, Bookmark, BookOpen, Filter } from 'lucide-react';
import { formulaData } from '../data/formulaData';
import { useUserProgress } from '../context/UserProgressContext';

export const FormulaBankModal = ({ onClose, initialSubject }) => {
  const { toggleBookmark, isBookmarked } = useUserProgress();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(initialSubject || 'all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (formulaText, id) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFormulas = formulaData.filter(f => {
    const matchesSearch = 
      f.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.chapter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesSubject = selectedSubject === 'all' || f.subject.toLowerCase() === selectedSubject.toLowerCase();
    const matchesClass = selectedClass === 'all' || f.classLevel === selectedClass;

    return matchesSearch && matchesSubject && matchesClass;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 flex items-center justify-center text-emerald-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-forest-800 text-emerald-200 uppercase tracking-wider">
                Revision Repository
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                Master Formula Sheets & Key Equations
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search formulas, laws, terms..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-forest-600"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {/* Subject Selector */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-forest-600 text-slate-700"
            >
              <option value="all">All Subjects</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
            </select>

            {/* Class Selector */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-forest-600 text-slate-700"
            >
              <option value="all">Class 11 & 12</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>

            <span className="text-xs text-slate-500 whitespace-nowrap ml-1">
              ({filteredFormulas.length} formulas)
            </span>
          </div>

        </div>

        {/* Formulas Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredFormulas.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No formulas matching "{searchTerm}". Try clearing filters.
            </div>
          ) : (
            filteredFormulas.map((f) => (
              <div 
                key={f.id}
                className="border border-slate-200 rounded-xl p-5 bg-white hover:border-slate-300 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-forest-100 text-forest-800">
                      Class {f.classLevel} • {f.subject}
                    </span>
                    <span className="text-xs font-semibold text-slate-600">{f.chapter}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(f.formula, f.id)}
                      className="px-2.5 py-1 rounded text-xs border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-1 transition-colors"
                      title="Copy formula text"
                    >
                      {copiedId === f.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => toggleBookmark({
                        id: f.id,
                        title: f.title,
                        type: "Formula",
                        subject: `${f.subject} ${f.classLevel}`
                      })}
                      className="p-1 text-slate-400 hover:text-amber-500"
                      title="Bookmark formula"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked(f.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900">{f.title}</h4>

                {/* Formula Display Box */}
                <div className="formula-box p-3.5 rounded-lg text-slate-900 font-mono text-sm sm:text-base font-semibold tracking-wide">
                  {f.formula}
                </div>

                {/* Symbols & Condition Notes */}
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong>Symbols:</strong> {f.symbols}</div>
                  <div><strong>Application / Note:</strong> {f.notes}</div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {f.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>High-yield formulas for quick memorization</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-forest-900 text-white hover:bg-forest-800 font-medium"
          >
            Close Formula Bank
          </button>
        </div>

      </div>
    </div>
  );
};
