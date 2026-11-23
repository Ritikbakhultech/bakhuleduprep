import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import { DashboardPage } from './pages/DashboardPage';
import { ClassHubPage } from './pages/ClassHubPage';
import { ResourcesPage } from './pages/ResourcesPage';

// Modals
import { NcertSolutionsModal } from './components/NcertSolutionsModal';
import { PdfNotesViewerModal } from './components/PdfNotesViewerModal';
import { PyqViewerModal } from './components/PyqViewerModal';
import { QuizModal } from './components/QuizModal';
import { FormulaBankModal } from './components/FormulaBankModal';
import { AuthModal } from './components/AuthModal';

import { UserProgressProvider } from './context/UserProgressContext';

function AppContent() {
  // Navigation View: 'home' | 'class-11' | 'class-12' | 'subjects' | 'subject-detail' | 'dashboard' | 'resources'
  const [currentView, setCurrentView] = useState('home');
  const [activeSubjectId, setActiveSubjectId] = useState('class-12-physics');

  // Modal states
  const [ncertModalChapterId, setNcertModalChapterId] = useState(null);
  const [notesModalNoteId, setNotesModalNoteId] = useState(null);
  const [pyqModalPaperId, setPyqModalPaperId] = useState(null);
  const [quizModalQuizId, setQuizModalQuizId] = useState(null);
  const [formulaModalSubject, setFormulaModalSubject] = useState(null);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Modal open handlers
  const handleOpenNcert = (chapterId = "c12-phy-1") => {
    setNcertModalChapterId(chapterId);
  };

  const handleOpenNotes = (noteId = "note-c12-phy-current") => {
    setNotesModalNoteId(noteId);
  };

  const handleOpenPyq = (paperId = "pyq-2024-cbse-12-phy") => {
    setPyqModalPaperId(paperId);
  };

  const handleOpenQuiz = (quizId = "quiz-phy-electrostatics") => {
    setQuizModalQuizId(quizId);
  };

  const handleOpenFormulas = (subjectName = null) => {
    setFormulaModalSubject(subjectName);
    setIsFormulaModalOpen(true);
  };

  const handleSelectSubject = (subjectId) => {
    setActiveSubjectId(subjectId);
    setCurrentView('subject-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render view router
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePage
            onSelectSubject={handleSelectSubject}
            setCurrentView={setCurrentView}
            onOpenNcert={handleOpenNcert}
            onOpenPyq={handleOpenPyq}
            onOpenNotes={handleOpenNotes}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
          />
        );

      case 'class-11':
        return (
          <ClassHubPage
            targetClass="11"
            onSelectSubject={handleSelectSubject}
            onOpenNcert={handleOpenNcert}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenNotes={handleOpenNotes}
            onOpenQuiz={handleOpenQuiz}
            setCurrentView={setCurrentView}
          />
        );

      case 'class-12':
        return (
          <ClassHubPage
            targetClass="12"
            onSelectSubject={handleSelectSubject}
            onOpenNcert={handleOpenNcert}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenNotes={handleOpenNotes}
            onOpenQuiz={handleOpenQuiz}
            setCurrentView={setCurrentView}
          />
        );

      case 'subjects':
      case 'resources':
        return (
          <ResourcesPage
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
            onSelectSubject={handleSelectSubject}
          />
        );

      case 'subject-detail':
        return (
          <SubjectPage
            subjectId={activeSubjectId}
            onBack={() => setCurrentView('home')}
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
          />
        );

      case 'dashboard':
        return (
          <DashboardPage
            onOpenQuiz={handleOpenQuiz}
            onOpenFormulas={handleOpenFormulas}
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            setCurrentView={setCurrentView}
            onSelectSubject={handleSelectSubject}
          />
        );

      // Direct shortcuts for resources
      case 'ncert':
        return (
          <ResourcesPage
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
            onSelectSubject={handleSelectSubject}
          />
        );

      case 'pyq':
        return (
          <ResourcesPage
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
            onSelectSubject={handleSelectSubject}
          />
        );

      case 'formulas':
        return (
          <ResourcesPage
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
            onSelectSubject={handleSelectSubject}
          />
        );

      case 'notes':
        return (
          <ResourcesPage
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
            onSelectSubject={handleSelectSubject}
          />
        );

      case 'quiz-center':
        return (
          <ResourcesPage
            onOpenNcert={handleOpenNcert}
            onOpenNotes={handleOpenNotes}
            onOpenPyq={handleOpenPyq}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
            onSelectSubject={handleSelectSubject}
          />
        );

      default:
        return (
          <HomePage
            onSelectSubject={handleSelectSubject}
            setCurrentView={setCurrentView}
            onOpenNcert={handleOpenNcert}
            onOpenPyq={handleOpenPyq}
            onOpenNotes={handleOpenNotes}
            onOpenFormulas={handleOpenFormulas}
            onOpenQuiz={handleOpenQuiz}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar
        currentView={currentView}
        setCurrentView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenQuiz={handleOpenQuiz}
        onOpenFormulaBank={handleOpenFormulas}
        onOpenNcert={handleOpenNcert}
        onOpenPyq={handleOpenPyq}
        onOpenNotes={handleOpenNotes}
      />

      <main className="flex-1">
        {renderCurrentView()}
      </main>

      <Footer setCurrentView={(view) => {
        setCurrentView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Interactive Modals */}
      {ncertModalChapterId && (
        <NcertSolutionsModal
          chapterId={ncertModalChapterId}
          onClose={() => setNcertModalChapterId(null)}
        />
      )}

      {notesModalNoteId && (
        <PdfNotesViewerModal
          noteId={notesModalNoteId}
          onClose={() => setNotesModalNoteId(null)}
        />
      )}

      {pyqModalPaperId && (
        <PyqViewerModal
          paperId={pyqModalPaperId}
          onClose={() => setPyqModalPaperId(null)}
        />
      )}

      {quizModalQuizId && (
        <QuizModal
          quizId={quizModalQuizId}
          onClose={() => setQuizModalQuizId(null)}
        />
      )}

      {isFormulaModalOpen && (
        <FormulaBankModal
          initialSubject={formulaModalSubject}
          onClose={() => {
            setIsFormulaModalOpen(false);
            setFormulaModalSubject(null);
          }}
        />
      )}

      {isAuthModalOpen && (
        <AuthModal
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <UserProgressProvider>
      <AppContent />
    </UserProgressProvider>
  );
}
