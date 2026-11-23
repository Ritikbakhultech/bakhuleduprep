import React, { useState } from 'react';
import { X, User, CheckCircle2, GraduationCap, ShieldCheck } from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

export const AuthModal = ({ onClose }) => {
  const { signIn, currentUser, isSignedIn } = useUserProgress();
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'custom'
  const [name, setName] = useState('');
  const [classLevel, setClassLevel] = useState('12');
  const [stream, setStream] = useState('Science (PCM)');

  const demoProfiles = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@school.edu",
      classLevel: "12",
      stream: "Science (PCM)",
      targetExam: "CBSE Boards & JEE 2025",
      studyStreakDays: 14,
      joinedDate: "August 2024"
    },
    {
      name: "Priya Patel",
      email: "priya.p@school.edu",
      classLevel: "11",
      stream: "Science (PCB / Pre-Medical)",
      targetExam: "CBSE Boards & NEET 2026",
      studyStreakDays: 21,
      joinedDate: "July 2024"
    },
    {
      name: "Rohan Verma",
      email: "rohan.v@school.edu",
      classLevel: "12",
      stream: "Science & Computer Science",
      targetExam: "CBSE Boards 2025",
      studyStreakDays: 9,
      joinedDate: "September 2024"
    }
  ];

  const handleSelectDemo = (profile) => {
    signIn(profile);
    onClose();
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    signIn({
      name: name.trim(),
      email: `${name.toLowerCase().replace(/\s+/g, '.') }@school.edu`,
      classLevel: classLevel,
      stream: stream,
      targetExam: `CBSE Class ${classLevel} Boards`,
      studyStreakDays: 1,
      joinedDate: "November 2024"
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-forest-900 border border-forest-800 flex items-center justify-center text-emerald-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Student Sign In</h3>
              <p className="text-[11px] text-forest-300">Sync your chapter progress & quiz analytics</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs">
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex-1 py-2.5 font-semibold text-center transition-colors ${
              activeTab === 'demo'
                ? 'bg-white text-forest-950 border-b-2 border-forest-800'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Instant Demo Profiles
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`flex-1 py-2.5 font-semibold text-center transition-colors ${
              activeTab === 'custom'
                ? 'bg-white text-forest-950 border-b-2 border-forest-800'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Enter Your Details
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {activeTab === 'demo' ? (
            <div className="space-y-3">
              <div className="text-xs text-slate-500 mb-2">
                Select a simulated student account to explore dashboard features and chapter tracking:
              </div>

              {demoProfiles.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectDemo(p)}
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-forest-600 hover:bg-forest-50/50 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-forest-900 text-white flex items-center justify-center font-bold text-xs">
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-forest-950">{p.name}</div>
                      <div className="text-xs text-slate-500">Class {p.classLevel} • {p.stream}</div>
                    </div>
                  </div>
                  <span className="text-xs text-forest-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Select →
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <form onSubmit={handleCustomSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Student Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-forest-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Grade Level</label>
                  <select
                    value={classLevel}
                    onChange={(e) => setClassLevel(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-forest-600 bg-white"
                  >
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Academic Stream</label>
                  <select
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-forest-600 bg-white"
                  >
                    <option value="Science (PCM)">Science (PCM)</option>
                    <option value="Science (PCB)">Science (PCB)</option>
                    <option value="Science (PCMB)">Science (PCMB)</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-forest-900 text-white font-bold text-xs hover:bg-forest-800 transition-colors shadow-xs mt-2"
              >
                Start Learning Distraction-Free
              </button>
            </form>
          )}

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero cookies tracking • No advertisements</span>
          </div>
        </div>

      </div>
    </div>
  );
};
