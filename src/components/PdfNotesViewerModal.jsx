import React, { useState } from 'react';
import { X, Download, Printer, ZoomIn, ZoomOut, Bookmark, FileText, CheckCircle2 } from 'lucide-react';
import { downloadableNotes } from '../data/sampleNotesData';
import { useUserProgress } from '../context/UserProgressContext';

export const PdfNotesViewerModal = ({ noteId, onClose }) => {
  const { toggleBookmark, isBookmarked } = useUserProgress();
  const [fontSize, setFontSize] = useState('base'); // 'sm' | 'base' | 'lg'
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Active note lookup or fallback
  const note = downloadableNotes.find(n => n.id === noteId) || downloadableNotes[0];

  const handleDownload = () => {
    // Generate clean text/markdown representation for instant student download
    let textContent = `${note.title.toUpperCase()}\n`;
    textContent += `Class: ${note.classLevel} | Subject: ${note.subject} | Chapter: ${note.chapter}\n`;
    textContent += `========================================================\n\n`;
    textContent += `CORE HIGHLIGHTS:\n- ${note.highlights.join('\n- ')}\n\n`;
    textContent += `========================================================\n\n`;

    note.sections.forEach(sec => {
      textContent += `${sec.heading}\n`;
      textContent += `--------------------------------------------------------\n`;
      textContent += `${sec.content}\n\n`;
    });

    textContent += `\nPublished by VidyaSetu Learning Initiative | CBSE Rationalized Syllabus`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${note.chapter.replace(/\s+/g, '_')}_Revision_Notes.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Top Control Header */}
        <div className="px-6 py-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest-900 border border-forest-800 flex items-center justify-center text-emerald-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-forest-800 text-emerald-200 uppercase tracking-wider">
                  Class {note.classLevel} {note.subject}
                </span>
                <span className="text-xs text-forest-300">Handout ({note.size})</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                {note.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center bg-forest-900 rounded-lg p-0.5 border border-forest-800 mr-2">
              <button
                onClick={() => setFontSize('sm')}
                className={`p-1.5 rounded text-xs transition-colors ${fontSize === 'sm' ? 'bg-forest-700 text-white font-bold' : 'text-forest-300 hover:text-white'}`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`p-1.5 rounded text-xs transition-colors ${fontSize === 'base' ? 'bg-forest-700 text-white font-bold' : 'text-forest-300 hover:text-white'}`}
                title="Normal text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`p-1.5 rounded text-xs transition-colors ${fontSize === 'lg' ? 'bg-forest-700 text-white font-bold' : 'text-forest-300 hover:text-white'}`}
                title="Large text"
              >
                A+
              </button>
            </div>

            <button
              onClick={handlePrint}
              title="Print document"
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
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-forest-300 hover:text-white hover:bg-forest-900 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Note Document Reader Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-50/50">
          
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-xs border border-slate-200">
            
            {/* Header Document Metadata */}
            <div className="border-b border-slate-200 pb-6 mb-8">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>VidyaSetu Academic Notes • High-Yield Revision</span>
                <span>Last Updated: {note.lastUpdated}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                {note.title}
              </h1>
              <p className="text-sm text-slate-600 mt-2 font-medium">
                Comprehensive summary designed for quick memorization before CBSE Board & Competitive Exams.
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {note.highlights.map((h, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-forest-50 text-forest-800 border border-forest-100 font-medium">
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Note Sections */}
            <div className={`space-y-8 ${fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-base' : 'text-sm'}`}>
              {note.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-serif font-bold text-slate-900 text-lg border-b border-slate-100 pb-2 text-forest-950 flex items-center justify-between">
                    <span>{section.heading}</span>
                    <button
                      onClick={() => toggleBookmark({
                        id: `${note.id}-sec-${idx}`,
                        title: section.heading,
                        type: "Note Section",
                        subject: note.subject
                      })}
                      className="text-slate-400 hover:text-amber-500"
                      title="Bookmark section"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked(`${note.id}-sec-${idx}`) ? 'fill-amber-500 text-amber-500' : ''}`} />
                    </button>
                  </h3>
                  <div className="text-slate-700 leading-relaxed whitespace-pre-line font-sans bg-slate-50/60 p-4 rounded-lg border border-slate-100">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Citation */}
            <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-400 flex items-center justify-between">
              <span>Standard CBSE Curriculum Aligned • Verified by Senior Educators</span>
              <span>Page 1 of {note.pages}</span>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div>
            Format: High-Resolution Printable Handout • Size: {note.size}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="text-forest-800 font-medium hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Offline Copy</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
