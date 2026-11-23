import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Download, 
  HelpCircle, 
  Layers, 
  Flame, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { subjectsData } from '../data/subjectsData';
import { SubjectCard } from '../components/SubjectCard';
import { useUserProgress } from '../context/UserProgressContext';

export const HomePage = ({ 
  onSelectSubject, 
  setCurrentView,
  onOpenNcert,
  onOpenPyq,
  onOpenNotes,
  onOpenFormulas,
  onOpenQuiz
}) => {
  const { activeClassFilter, setActiveClassFilter, completedChapters } = useUserProgress();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter subjects based on active tab ('11' or '12') and search
  const filteredSubjects = subjectsData.filter(s => {
    const matchesClass = s.classLevel === activeClassFilter;
    const matchesSearch = searchQuery === '' || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.chapters.some(ch => ch.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesClass && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-12">
      
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 pb-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-semibold">
            <GraduationCap className="w-4 h-4 text-forest-700" />
            <span>Strictly Aligned with Rationalized NCERT & CBSE Curriculum</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
            Your Complete Learning Companion for <span className="text-forest-900 underline decoration-forest-400 decoration-wavy decoration-2">Classes 11 & 12.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Distraction-free, structured, and deep conceptual mastery. Chapter-by-chapter theory, verified NCERT solutions, downloadable revision handouts, and past 10-year board question papers.
          </p>

          {/* Quick Hub Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setActiveClassFilter('11');
                setCurrentView('class-11');
              }}
              className="px-6 py-3 rounded-xl bg-forest-950 text-white hover:bg-forest-900 font-semibold text-sm transition-all shadow-xs flex items-center gap-2"
            >
              <span>Explore Class 11 Hub</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>

            <button
              onClick={() => {
                setActiveClassFilter('12');
                setCurrentView('class-12');
              }}
              className="px-6 py-3 rounded-xl bg-white text-forest-950 border border-forest-800 hover:bg-forest-50 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <span>Explore Class 12 Hub</span>
              <ArrowRight className="w-4 h-4 text-forest-700" />
            </button>

            <button
              onClick={() => onOpenFormulas()}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
            >
              Formula Sheets
            </button>
          </div>

          {/* Quick Academic Features Ticker */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-slate-100 max-w-3xl mx-auto">
            <div className="space-y-0.5">
              <div className="text-xl font-bold font-serif text-forest-900">100% Free</div>
              <div className="text-xs text-slate-500">Zero ads, no paywalls</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-xl font-bold font-serif text-forest-900">450+ Exercises</div>
              <div className="text-xs text-slate-500">Verified NCERT steps</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-xl font-bold font-serif text-forest-900">10 Years</div>
              <div className="text-xs text-slate-500">Past board papers</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-xl font-bold font-serif text-forest-900">Interactive</div>
              <div className="text-xs text-slate-500">Timed chapter quizzes</div>
            </div>
          </div>

        </div>
      </section>

      {/* Class Level Selector & Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Class Selection Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 w-full sm:w-auto">
            <button
              onClick={() => setActiveClassFilter('11')}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeClassFilter === '11'
                  ? 'bg-forest-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Class 11 Foundation</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${activeClassFilter === '11' ? 'bg-forest-800 text-emerald-200' : 'bg-slate-200 text-slate-700'}`}>
                4 Core Subjects
              </span>
            </button>

            <button
              onClick={() => setActiveClassFilter('12')}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeClassFilter === '12'
                  ? 'bg-forest-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Class 12 Boards & Entrance</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${activeClassFilter === '12' ? 'bg-forest-800 text-emerald-200' : 'bg-slate-200 text-slate-700'}`}>
                5 Core Subjects
              </span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search Class ${activeClassFilter} chapters or topics...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-forest-600 shadow-xs"
            />
          </div>

        </div>

        {/* Section Heading */}
        <div className="mt-8 mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Class {activeClassFilter} Subjects & Comprehensive Learning Modules
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select any subject to access structured chapter notes, NCERT solutions, and test series.
            </p>
          </div>
          <button
            onClick={() => setCurrentView(`class-${activeClassFilter}`)}
            className="text-xs font-semibold text-forest-800 hover:text-forest-950 flex items-center gap-1 hover:underline"
          >
            <span>View Full Syllabus</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Subjects Grid */}
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

      </section>

      {/* Core Academic Pillars Section */}
      <section className="bg-slate-50/80 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-forest-800">Everything You Need In One Place</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Structured Tools Built for 16–18 Year Olds
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Carefully organized modules to prevent overwhelm, eliminate digital distraction, and foster deep conceptual retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: NCERT Textbook Solutions */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 hover:border-forest-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-800">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">NCERT Textbook Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step verified explanations for all in-text questions, chapter exercises, and exemplar problems. Detailed given data, formulas, and examiner marking breakdown.
              </p>
              <button
                onClick={() => onOpenNcert()}
                className="text-xs font-semibold text-forest-800 hover:text-forest-950 flex items-center gap-1.5 pt-1"
              >
                <span>Browse Solved Exercises</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pillar 2: Downloadable Notes & PDFs */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 hover:border-forest-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-800">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">Downloadable Notes & PDFs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, distraction-free printable handouts crafted for quick revision before exams. Highlighted formulas, key derivations, and bulleted takeaways in high resolution.
              </p>
              <button
                onClick={() => onOpenNotes()}
                className="text-xs font-semibold text-forest-800 hover:text-forest-950 flex items-center gap-1.5 pt-1"
              >
                <span>Read Revision Handouts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pillar 3: Previous Year Papers (PYQs) */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 hover:border-forest-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-800">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">Previous Year Question Papers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Past 10 years of official CBSE and board examination papers. Filterable by year, subject, and set with official step-by-step marking rubrics.
              </p>
              <button
                onClick={() => onOpenPyq()}
                className="text-xs font-semibold text-forest-800 hover:text-forest-950 flex items-center gap-1.5 pt-1"
              >
                <span>Explore Board Papers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pillar 4: Practice Quizzes & Mock Exams */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 hover:border-forest-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-softblue-50 border border-softblue-100 flex items-center justify-center text-softblue-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">Practice Quizzes & Mocks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Interactive timed assessments to identify weak areas. Real-time feedback, detailed explanation for every choice, and automatic synchronization with your dashboard.
              </p>
              <button
                onClick={() => onOpenQuiz()}
                className="text-xs font-semibold text-softblue-700 hover:text-softblue-900 flex items-center gap-1.5 pt-1"
              >
                <span>Launch Practice Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pillar 5: Important Formulas & Revision Sheets */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 hover:border-forest-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-softblue-50 border border-softblue-100 flex items-center justify-center text-softblue-700">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">Formula Bank & Derivations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Searchable, categorised repository of all foundational formulas with symbol definitions, SI units, and conditions of application. One-click formula copying.
              </p>
              <button
                onClick={() => onOpenFormulas()}
                className="text-xs font-semibold text-softblue-700 hover:text-softblue-900 flex items-center gap-1.5 pt-1"
              >
                <span>Search Formula Sheets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pillar 6: Personal Student Dashboard */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 hover:border-forest-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800">
                <Flame className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">Personal Progress Dashboard</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time tracking of completed chapters, pending syllabus topics, study streaks, and quiz test analytics. Never lose track of what to study next.
              </p>
              <button
                onClick={() => setCurrentView('dashboard')}
                className="text-xs font-semibold text-forest-800 hover:text-forest-950 flex items-center gap-1.5 pt-1"
              >
                <span>View Your Analytics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Trust & Academic Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-forest-950 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Academic Integrity Guaranteed</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              A Distraction-Free Sanctuary for Board Preparation
            </h3>
            <p className="text-xs text-forest-200 leading-relaxed">
              We eliminate autoplaying videos, intrusive animations, push notifications, and ads. Only clean typography, pure white backgrounds, and verified academic references.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                setActiveClassFilter('12');
                setCurrentView('class-12');
              }}
              className="px-6 py-3 rounded-xl bg-white text-forest-950 font-bold text-xs hover:bg-forest-50 transition-colors text-center"
            >
              Start Class 12 Syllabus
            </button>
            <button
              onClick={() => {
                setActiveClassFilter('11');
                setCurrentView('class-11');
              }}
              className="px-6 py-3 rounded-xl bg-forest-900 border border-forest-800 text-white font-bold text-xs hover:bg-forest-800 transition-colors text-center"
            >
              Start Class 11 Syllabus
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
