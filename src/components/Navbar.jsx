import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Award, 
  Bookmark, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  CheckCircle2,
  Search,
  LogIn
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

export const Navbar = ({ 
  currentView, 
  setCurrentView, 
  onOpenAuth, 
  onOpenQuiz,
  onOpenFormulaBank,
  onOpenNcert,
  onOpenPyq,
  onOpenNotes
}) => {
  const { isSignedIn, currentUser, activeClassFilter, setActiveClassFilter } = useUserProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const navItemClass = (viewName) => `
    px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg
    ${currentView === viewName 
      ? 'text-forest-900 bg-forest-50 font-semibold' 
      : 'text-slate-600 hover:text-forest-900 hover:bg-slate-50'}
  `;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => setCurrentView('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-forest-900 flex items-center justify-center text-white shadow-sm group-hover:bg-forest-800 transition-colors">
              <GraduationCap className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-forest-950 font-serif">VidyaSetu</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 bg-emerald-100 text-forest-800 rounded">Classes 11 & 12</span>
              </div>
              <p className="text-[11px] text-slate-500 font-normal leading-none mt-0.5">Simple & Distraction-Free Learning</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => setCurrentView('home')}
              className={navItemClass('home')}
            >
              Home
            </button>

            <button 
              onClick={() => {
                setActiveClassFilter('11');
                setCurrentView('class-11');
              }}
              className={navItemClass('class-11')}
            >
              Class 11
            </button>

            <button 
              onClick={() => {
                setActiveClassFilter('12');
                setCurrentView('class-12');
              }}
              className={navItemClass('class-12')}
            >
              Class 12
            </button>

            <button 
              onClick={() => setCurrentView('subjects')}
              className={navItemClass('subjects')}
            >
              All Subjects
            </button>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                onBlur={() => setTimeout(() => setResourcesDropdownOpen(false), 200)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  ['ncert', 'pyq', 'formulas', 'notes', 'quiz-center'].includes(currentView)
                    ? 'text-forest-900 bg-forest-50 font-semibold'
                    : 'text-slate-600 hover:text-forest-900 hover:bg-slate-50'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-1.5 z-50 text-slate-700 animate-in fade-in slide-in-from-top-1">
                  <div 
                    onClick={() => {
                      setCurrentView('ncert');
                      setResourcesDropdownOpen(false);
                    }}
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-forest-50 cursor-pointer text-sm"
                  >
                    <BookOpen className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="font-medium text-slate-900">NCERT Solutions</div>
                      <div className="text-xs text-slate-500">Step-by-step verified answers</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      setCurrentView('pyq');
                      setResourcesDropdownOpen(false);
                    }}
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-forest-50 cursor-pointer text-sm"
                  >
                    <FileText className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="font-medium text-slate-900">Previous Year Papers (PYQs)</div>
                      <div className="text-xs text-slate-500">10-year papers with marking schemes</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      setCurrentView('formulas');
                      setResourcesDropdownOpen(false);
                    }}
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-forest-50 cursor-pointer text-sm"
                  >
                    <Award className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="font-medium text-slate-900">Formula Sheets & Notes</div>
                      <div className="text-xs text-slate-500">High-yield revision formulas</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      setCurrentView('quiz-center');
                      setResourcesDropdownOpen(false);
                    }}
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-forest-50 cursor-pointer text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="font-medium text-slate-900">Practice Quizzes & Mocks</div>
                      <div className="text-xs text-slate-500">Interactive timed chapter quizzes</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      setCurrentView('notes');
                      setResourcesDropdownOpen(false);
                    }}
                    className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-forest-50 cursor-pointer text-sm border-t border-slate-100 mt-1"
                  >
                    <Bookmark className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="font-medium text-slate-900">Downloadable Notes & PDFs</div>
                      <div className="text-xs text-slate-500">Printable chapter handouts</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => setCurrentView('dashboard')}
              className={navItemClass('dashboard')}
            >
              Dashboard
            </button>
          </nav>

          {/* Right Action: Sign In or User Profile */}
          <div className="hidden md:flex items-center gap-3">
            {isSignedIn ? (
              <div 
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full border border-slate-200 hover:border-forest-300 hover:bg-forest-50/50 cursor-pointer transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-forest-800 text-white flex items-center justify-center text-xs font-semibold">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-slate-800 leading-tight">{currentUser.name}</div>
                  <div className="text-[10px] text-slate-500 leading-none">Class {currentUser.classLevel}</div>
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-forest-950 bg-white border border-forest-800 hover:bg-forest-50 rounded-lg transition-colors shadow-xs"
              >
                <LogIn className="w-4 h-4 text-forest-800" />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {!isSignedIn && (
              <button
                onClick={onOpenAuth}
                className="px-2.5 py-1.5 text-xs font-medium text-forest-900 border border-forest-800 rounded"
              >
                Sign In
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => {
              setCurrentView('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-forest-50"
          >
            Home
          </button>
          <button
            onClick={() => {
              setActiveClassFilter('11');
              setCurrentView('class-11');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-forest-50"
          >
            Class 11 Hub
          </button>
          <button
            onClick={() => {
              setActiveClassFilter('12');
              setCurrentView('class-12');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-forest-50"
          >
            Class 12 Hub
          </button>
          <button
            onClick={() => {
              setCurrentView('subjects');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-forest-50"
          >
            All Subjects
          </button>
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-400 px-3 uppercase tracking-wider mb-1">Resources</div>
            <button
              onClick={() => {
                setCurrentView('ncert');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:bg-forest-50 rounded"
            >
              NCERT Solutions
            </button>
            <button
              onClick={() => {
                setCurrentView('pyq');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:bg-forest-50 rounded"
            >
              Previous Year Question Papers
            </button>
            <button
              onClick={() => {
                setCurrentView('formulas');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:bg-forest-50 rounded"
            >
              Important Formulas & Sheets
            </button>
            <button
              onClick={() => {
                setCurrentView('quiz-center');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:bg-forest-50 rounded"
            >
              Practice Quizzes & Tests
            </button>
            <button
              onClick={() => {
                setCurrentView('notes');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-sm text-slate-700 hover:bg-forest-50 rounded"
            >
              Downloadable Notes & PDFs
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-forest-800 bg-forest-50 rounded-md"
            >
              Student Dashboard
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
