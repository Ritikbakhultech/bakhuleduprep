import React, { useState } from 'react';
import { X, FileText, Download, Award, CheckCircle, HelpCircle, Layers, Printer } from 'lucide-react';
import { pyqData } from '../data/pyqData';

export const PyqViewerModal = ({ paperId, onClose }) => {
  const [activePaperIndex, setActivePaperIndex] = useState(
    paperId ? pyqData.findIndex(p => p.id === paperId) : 0
  );

  const paper = pyqData[activePaperIndex >= 0 ? activePaperIndex : 0];
  const [activeSectionTab, setActiveSectionTab] = useState('all');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    let pyqContent = `${paper.board.toUpperCase()} - CLASS ${paper.classLevel} ${paper.subject.toUpperCase()} (${paper.year})\n`;
    pyqContent += `Paper Code: ${paper.code} | ${paper.set} | Total Marks: ${paper.totalMarks} | Time: ${paper.timeAllowed}\n`;
    pyqContent += `=========================================================================\n\n`;
    pyqContent += `EXAMINATION BLUEPRINT:\n`;
    paper.sections.forEach(s => {
      pyqContent += `- ${s.name}: ${s.questionType} (${s.total} Marks)\n`;
    });
    pyqContent += `\n=========================================================================\n\n`;
    pyqContent += `SAMPLE QUESTIONS & EVALUATION MARKING SCHEMES:\n\n`;

    paper.sampleQuestions.forEach((q, i) => {
      pyqContent += `Q${q.qNum} [${q.type}] [Topic: ${q.topic}]:\n${q.text}\n`;
      if (q.options) {
        pyqContent += `Options:\n  ${q.options.join('\n  ')}\n`;
        pyqContent += `Correct Answer: ${q.correctOption}\n`;
      }
      pyqContent += `Official CBSE Marking Scheme Point:\n${q.markingPoint}\n\n`;
    });

    const blob = new Blob([pyqContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CBSE_${paper.classLevel}_${paper.subject}_${paper.year}_PYQ.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 flex items-center justify-center text-emerald-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-forest-800 text-emerald-200 uppercase tracking-wider">
                  {paper.board} • {paper.year}
                </span>
                <span className="text-xs text-forest-300">Code: {paper.code}</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                Class {paper.classLevel} {paper.subject} • Official Question Paper & Marking Scheme
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors hidden sm:flex items-center gap-1.5 text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                downloadSuccess 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Saved' : 'Download PYQ'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Switcher Tabs */}
        <div className="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="font-semibold text-slate-500 uppercase tracking-wider mr-2">Available Papers:</span>
          {pyqData.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePaperIndex(idx)}
              className={`px-3 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                activePaperIndex === idx
                  ? 'bg-white text-forest-950 border border-slate-300 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {p.year} • Class {p.classLevel} {p.subject}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Paper Blueprint Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-4 text-xs text-slate-700">
                <span><strong>Time Allowed:</strong> {paper.timeAllowed}</span>
                <span>•</span>
                <span><strong>Maximum Marks:</strong> {paper.totalMarks}</span>
                <span>•</span>
                <span><strong>Exam Set:</strong> {paper.set}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                Official CBSE Pattern
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-3">
              {paper.sections.map((sec, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200 text-center">
                  <div className="text-xs font-bold text-forest-900">{sec.name}</div>
                  <div className="text-[11px] text-slate-500 truncate" title={sec.questionType}>{sec.questionType}</div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">{sec.total} Marks</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Questions & Official Marking Schemas */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center justify-between">
              <span>Standard Questions & Official Model Answers</span>
              <span className="text-xs font-normal text-slate-500">Includes Evaluator Marking Distribution</span>
            </h4>

            {paper.sampleQuestions.map((q, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-white space-y-3 hover:border-slate-300 transition-colors">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-md bg-forest-900 text-white font-bold text-xs flex items-center justify-center">
                      Q{q.qNum}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{q.type}</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    Topic: {q.topic}
                  </span>
                </div>

                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {q.text}
                </p>

                {/* Multiple choice options if applicable */}
                {q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, oIdx) => (
                      <div 
                        key={oIdx}
                        className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                          opt === q.correctOption 
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold' 
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span>{opt}</span>
                        {opt === q.correctOption && (
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Marking Points Breakdown */}
                <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-forest-900">
                    <Award className="w-3.5 h-3.5 text-emerald-700" />
                    <span>CBSE Evaluator Marking Points:</span>
                  </div>
                  <p className="text-[11px] text-emerald-900 leading-relaxed">
                    {q.markingPoint}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Official CBSE Board Papers • Verified Answer Keys</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-forest-900 text-white hover:bg-forest-800 font-medium"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
