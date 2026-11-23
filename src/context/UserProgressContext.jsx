import React, { createContext, useContext, useState, useEffect } from 'react';

const UserProgressContext = createContext(null);

const DEFAULT_USER = {
  name: "Aarav Sharma",
  email: "aarav.sharma@school.edu",
  classLevel: "12",
  stream: "Science (PCM)",
  targetExam: "CBSE Boards & JEE 2025",
  studyStreakDays: 14,
  joinedDate: "August 2024"
};

const DEFAULT_COMPLETED_CHAPTERS = [
  "c11-phy-1",
  "c11-phy-2",
  "c11-chem-1",
  "c11-chem-2",
  "c11-math-1",
  "c11-bio-1",
  "c12-phy-1",
  "c12-phy-2",
  "c12-chem-1",
  "c12-chem-2",
  "c12-math-1",
  "c12-math-2",
  "c12-bio-1",
  "c12-bio-2",
  "c12-cs-1",
  "c12-cs-2"
];

const DEFAULT_BOOKMARKS = [
  { id: "bm-1", title: "Lens Maker's Formula Derivation", type: "Formula", path: "/formulas", subject: "Physics 12" },
  { id: "bm-2", title: "Nernst Equation Stepwise Guide", type: "Note", path: "/notes", subject: "Chemistry 12" },
  { id: "bm-3", title: "King's Definite Integral Property", type: "Formula", path: "/formulas", subject: "Mathematics 12" }
];

const DEFAULT_QUIZ_HISTORY = [
  {
    id: "hist-1",
    quizId: "quiz-phy-electrostatics",
    quizTitle: "Electrostatics & Gauss's Law Mastery Test",
    subject: "Physics",
    score: 4,
    total: 5,
    percentage: 80,
    date: "Yesterday",
    timeSpent: "8 mins"
  },
  {
    id: "hist-2",
    quizId: "quiz-chem-solutions",
    quizTitle: "Solutions & Colligative Properties Diagnostic",
    subject: "Chemistry",
    score: 5,
    total: 5,
    percentage: 100,
    date: "3 days ago",
    timeSpent: "10 mins"
  }
];

const DEFAULT_PENDING_TOPICS = [
  { id: "pt-1", subject: "Physics", chapter: "Ray Optics", topic: "Derive Lens Maker's Formula step-by-step", priority: "High", dueDate: "Tomorrow" },
  { id: "pt-2", subject: "Mathematics", chapter: "Integrals", topic: "Solve 10 questions of Definite Integral Kings Property", priority: "High", dueDate: "Nov 26" },
  { id: "pt-3", subject: "Chemistry", chapter: "Electrochemistry", topic: "Practice 5 Nernst Equation cell EMF problems", priority: "Medium", dueDate: "Nov 28" },
  { id: "pt-4", subject: "Computer Science", chapter: "Data Structures", topic: "Implement Stack Pop with Underflow check in Python", priority: "Normal", dueDate: "Nov 30" }
];

export const UserProgressProvider = ({ children }) => {
  // Load from localStorage or defaults
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('vidyasetu_user');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  const [isSignedIn, setIsSignedIn] = useState(() => {
    return localStorage.getItem('vidyasetu_auth') === 'true';
  });

  const [completedChapters, setCompletedChapters] = useState(() => {
    const saved = localStorage.getItem('vidyasetu_completed_chapters');
    return saved ? JSON.parse(saved) : DEFAULT_COMPLETED_CHAPTERS;
  });

  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('vidyasetu_bookmarks');
    return saved ? JSON.parse(saved) : DEFAULT_BOOKMARKS;
  });

  const [quizHistory, setQuizHistory] = useState(() => {
    const saved = localStorage.getItem('vidyasetu_quiz_history');
    return saved ? JSON.parse(saved) : DEFAULT_QUIZ_HISTORY;
  });

  const [pendingTopics, setPendingTopics] = useState(() => {
    const saved = localStorage.getItem('vidyasetu_pending_topics');
    return saved ? JSON.parse(saved) : DEFAULT_PENDING_TOPICS;
  });

  // Selected Class in UI filter: '11' | '12' | 'all'
  const [activeClassFilter, setActiveClassFilter] = useState('12');

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('vidyasetu_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('vidyasetu_auth', isSignedIn ? 'true' : 'false');
  }, [isSignedIn]);

  useEffect(() => {
    localStorage.setItem('vidyasetu_completed_chapters', JSON.stringify(completedChapters));
  }, [completedChapters]);

  useEffect(() => {
    localStorage.setItem('vidyasetu_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('vidyasetu_quiz_history', JSON.stringify(quizHistory));
  }, [quizHistory]);

  useEffect(() => {
    localStorage.setItem('vidyasetu_pending_topics', JSON.stringify(pendingTopics));
  }, [pendingTopics]);

  // Toggle chapter completion
  const toggleChapterCompletion = (chapterId) => {
    setCompletedChapters(prev => {
      if (prev.includes(chapterId)) {
        return prev.filter(id => id !== chapterId);
      } else {
        return [...prev, chapterId];
      }
    });
  };

  const isChapterCompleted = (chapterId) => {
    return completedChapters.includes(chapterId);
  };

  // Record quiz completion
  const recordQuizAttempt = (attempt) => {
    const newEntry = {
      id: `hist-${Date.now()}`,
      date: "Just now",
      ...attempt
    };
    setQuizHistory(prev => [newEntry, ...prev]);
  };

  // Toggle bookmark
  const toggleBookmark = (item) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.id === item.id);
      if (exists) {
        return prev.filter(b => b.id !== item.id);
      } else {
        return [item, ...prev];
      }
    });
  };

  const isBookmarked = (itemId) => {
    return bookmarks.some(b => b.id === itemId);
  };

  // Add / complete pending topic
  const togglePendingTopic = (topicId) => {
    setPendingTopics(prev => prev.filter(t => t.id !== topicId));
  };

  const addPendingTopic = (topic) => {
    setPendingTopics(prev => [
      { id: `pt-${Date.now()}`, priority: "Normal", dueDate: "Soon", ...topic },
      ...prev
    ]);
  };

  // Auth actions
  const signIn = (userData) => {
    setCurrentUser(userData || DEFAULT_USER);
    setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
  };

  return (
    <UserProgressContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isSignedIn,
        signIn,
        signOut,
        completedChapters,
        toggleChapterCompletion,
        isChapterCompleted,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        quizHistory,
        recordQuizAttempt,
        pendingTopics,
        togglePendingTopic,
        addPendingTopic,
        activeClassFilter,
        setActiveClassFilter
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
