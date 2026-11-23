import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Award, 
  CheckCircle2, 
  Bookmark, 
  Download, 
  Search, 
  Filter, 
  ChevronRight, 
  Layers 
} from 'lucide-react';
import { subjectsData } from '../data/subjectsData';
import { downloadableNotes } from '../data/sampleNotesData';
import { pyqData } from '../data/pyqData';
import { quizData } from '../data/quizData';
import { formulaData } from '../data/formulaData';

export const ResourcesPage = ({ 
  onOpenNcert, 
  onOpenNotes, 
  onOpenPyq, 
  onOpenFormulas, 
  onOpenQuiz,
  onSelectSubject 
}) => {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'ncert' | 'pyq' | 'notes' | 'formulas' | 'quiz'
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Page Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-semibold">
          <Layers className="w-4 h-4 text-forest-700" />
          <span>Central Academic Repository</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
          Learning Resources & Study Bank
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Access verified textbook answers, past ten-year CBSE question papers, one-page formula sheets, and printable revision handouts without distractions.
        </p>
      </div>

      {/* Resource Category Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-semibold w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              activeTab === 'all' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Resources
          </button>
          <button
            onClick={() => setActiveTab('ncert')}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              activeTab === 'ncert' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            NCERT Solutions
          </button>
          <button
            onClick={() => setActiveTab('pyq')}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              activeTab === 'pyq' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PYQ Papers
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              activeTab === 'formulas' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Formulas
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              activeTab === 'notes' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            PDF Handouts
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-2 rounded-lg transition-colors ${
              activeTab === 'quiz' ? 'bg-white text-forest-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Quizzes
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search all resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-forest-600"
          />
        </div>
      </div>

      {/* Grid of Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card: NCERT Explorer */}
        {(activeTab === 'all' || activeTab === 'ncert') && (
          <div className="academic-card p-6 flex flex-col justify-between hover:border-forest-400">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-800">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-forest-100 text-forest-800">
                  Textbook Repository
                </span>
                <span className="text-xs text-slate-400">Classes 11 & 12</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900">
                NCERT Step-by-Step Textbook Solutions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete solutions for Physics, Chemistry, Mathematics, and Biology with CBSE evaluator marking schemes.
              </p>
            </div>
            <button
              onClick={() => onOpenNcert()}
              className="mt-6 w-full py-2.5 rounded-lg bg-forest-950 text-white font-semibold text-xs hover:bg-forest-900 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Launch NCERT Viewer</span>
              <ChevronRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        )}

        {/* Card: PYQ Board Papers */}
        {(activeTab === 'all' || activeTab === 'pyq') && (
          <div className="academic-card p-6 flex flex-col justify-between hover:border-forest-400">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-800">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-forest-100 text-forest-800">
                  Board Examinations
                </span>
                <span className="text-xs text-slate-400">2018 - 2024</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Past 10 Years Board Papers (PYQs)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Original question papers with official marking keys, section blueprints, and step-by-step scoring distributions.
              </p>
            </div>
            <button
              onClick={() => onOpenPyq()}
              className="mt-6 w-full py-2.5 rounded-lg bg-forest-950 text-white font-semibold text-xs hover:bg-forest-900 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Open Past Papers</span>
              <ChevronRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        )}

        {/* Card: Important Formulas */}
        {(activeTab === 'all' || activeTab === 'formulas') && (
          <div className="academic-card p-6 flex flex-col justify-between hover:border-forest-400">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-softblue-50 border border-softblue-100 flex items-center justify-center text-softblue-700">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-softblue-100 text-softblue-800">
                  Formula Repository
                </span>
                <span className="text-xs text-slate-400">120+ Key Laws</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Important Formulas & Derivation Sheets
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Searchable mathematical formulas with SI units, parameter symbols, conditions of validity, and one-click copy.
              </p>
            </div>
            <button
              onClick={() => onOpenFormulas()}
              className="mt-6 w-full py-2.5 rounded-lg bg-forest-950 text-white font-semibold text-xs hover:bg-forest-900 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Open Formula Bank</span>
              <ChevronRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        )}

        {/* Card: Downloadable Notes */}
        {(activeTab === 'all' || activeTab === 'notes') && (
          <div className="academic-card p-6 flex flex-col justify-between hover:border-forest-400">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-800">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-forest-100 text-forest-800">
                  Printable Handouts
                </span>
                <span className="text-xs text-slate-400">High-Res Text/PDF</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Downloadable Revision Handouts & PDFs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Distraction-free printable chapter summaries prepared by experienced faculty. Perfect for offline reading.
              </p>
            </div>
            <button
              onClick={() => onOpenNotes()}
              className="mt-6 w-full py-2.5 rounded-lg bg-forest-950 text-white font-semibold text-xs hover:bg-forest-900 flex items-center justify-center gap-2 transition-colors"
            >
              <span>View PDF Handouts</span>
              <ChevronRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        )}

        {/* Card: Practice Quizzes */}
        {(activeTab === 'all' || activeTab === 'quiz') && (
          <div className="academic-card p-6 flex flex-col justify-between hover:border-forest-400">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-softblue-50 border border-softblue-100 flex items-center justify-center text-softblue-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-softblue-100 text-softblue-800">
                  Timed Practice
                </span>
                <span className="text-xs text-slate-400">Diagnostic Tests</span>
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900">
                Practice Quizzes & Chapter Mocks
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Timed mock questions testing conceptual clarity with immediate rationale and question explanations.
              </p>
            </div>
            <button
              onClick={() => onOpenQuiz()}
              className="mt-6 w-full py-2.5 rounded-lg bg-forest-950 text-white font-semibold text-xs hover:bg-forest-900 flex items-center justify-center gap-2 transition-colors"
            >
              <span>Start Diagnostic Quiz</span>
              <ChevronRight className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
