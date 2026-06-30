import { useState, useRef } from 'react';
import { Upload, X, FileText, Video, ClipboardList, HelpCircle } from 'lucide-react';
import type { CourseContent, Quiz } from '@/types/admin/course';
import QuizBuilder from './QuizBuilder';

interface CourseContentUploadProps {
  initialData?: CourseContent;
  onBack: () => void;
  onSubmit: (content: CourseContent) => void;
  isLoading: boolean;
  submitLabel?: string;
}

export default function CourseContentUpload({ initialData, onBack, onSubmit, isLoading, submitLabel }: CourseContentUploadProps) {
  const [content, setContent] = useState<CourseContent>({
    videos: initialData?.videos || [],
    notes: initialData?.notes || [],
    assignments: initialData?.assignments || [],
    quizzes: initialData?.quizzes || []
  });

  const videoRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const assignRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (type: 'videos' | 'notes' | 'assignments', files: FileList | null) => {
    if (!files) return;
    setContent(prev => ({
      ...prev,
      [type]: [...prev[type], ...Array.from(files)]
    }));
  };

  const removeFile = (type: 'videos' | 'notes' | 'assignments', index: number) => {
    setContent(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const handleQuizzesChange = (quizzes: Quiz[]) => {
    setContent(prev => ({ ...prev, quizzes }));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      
      {/* Videos */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
          <Video size={18} className="text-rose-500" />
          <h3 className="font-bold text-slate-800 text-sm">Course Videos</h3>
          <span className="text-xs text-slate-400 ml-auto">MP4, MKV</span>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2">
          {content.videos.map((f, i) => (
            <div key={i} className="flex-shrink-0 relative w-32 h-24 bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center p-2 group">
              <button onClick={() => removeFile('videos', i)} className="absolute -top-2 -right-2 p-1 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-red-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"><X size={12} /></button>
              <Video size={24} className="text-slate-400 mb-1" />
              <span className="text-[10px] font-medium text-slate-600 truncate w-full text-center">{f.name}</span>
            </div>
          ))}
          <button 
            onClick={() => videoRef.current?.click()}
            className="flex-shrink-0 w-32 h-24 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-colors"
          >
            <Upload size={20} className="mb-1" />
            <span className="text-xs font-semibold">Upload Video</span>
          </button>
          <input type="file" multiple accept=".mp4,.mkv" hidden ref={videoRef} onChange={(e) => handleFileChange('videos', e.target.files)} />
        </div>
      </div>

      {/* Notes (PDF) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
          <FileText size={18} className="text-blue-500" />
          <h3 className="font-bold text-slate-800 text-sm">Study Notes</h3>
          <span className="text-xs text-slate-400 ml-auto">PDF Only</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.notes.map((f, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm group">
              <FileText size={14} className="text-slate-400" />
              <span className="text-xs font-medium text-slate-700 max-w-[150px] truncate">{f.name}</span>
              <button onClick={() => removeFile('notes', i)} className="text-slate-400 hover:text-red-500 ml-1"><X size={14} /></button>
            </div>
          ))}
          <button onClick={() => notesRef.current?.click()} className="flex items-center gap-2 px-3 py-1.5 border border-dashed border-slate-300 rounded-lg text-xs font-semibold text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-colors">
            <Upload size={14} /> Add Notes
          </button>
          <input type="file" multiple accept=".pdf" hidden ref={notesRef} onChange={(e) => handleFileChange('notes', e.target.files)} />
        </div>
      </div>

      {/* Assignments */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
          <ClipboardList size={18} className="text-emerald-500" />
          <h3 className="font-bold text-slate-800 text-sm">Assignments</h3>
          <span className="text-xs text-slate-400 ml-auto">PDF, DOCX</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.assignments.map((f, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm group">
              <ClipboardList size={14} className="text-slate-400" />
              <span className="text-xs font-medium text-slate-700 max-w-[150px] truncate">{f.name}</span>
              <button onClick={() => removeFile('assignments', i)} className="text-slate-400 hover:text-red-500 ml-1"><X size={14} /></button>
            </div>
          ))}
          <button onClick={() => assignRef.current?.click()} className="flex items-center gap-2 px-3 py-1.5 border border-dashed border-slate-300 rounded-lg text-xs font-semibold text-slate-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-colors">
            <Upload size={14} /> Add Assignment
          </button>
          <input type="file" multiple accept=".pdf,.doc,.docx" hidden ref={assignRef} onChange={(e) => handleFileChange('assignments', e.target.files)} />
        </div>
      </div>

      {/* Quizzes */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
          <HelpCircle size={18} className="text-indigo-500" />
          <h3 className="font-bold text-slate-800 text-sm">Course Quizzes</h3>
          <span className="text-xs text-slate-400 ml-auto">{content.quizzes.length} Questions</span>
        </div>
        <QuizBuilder quizzes={content.quizzes} onChange={handleQuizzesChange} />
      </div>

      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
        <button 
          type="button" 
          onClick={onBack} 
          disabled={isLoading}
          className="px-5 py-2.5 text-sm text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50"
        >
          Back to Specifics
        </button>
        <button 
          onClick={() => onSubmit(content)} 
          disabled={isLoading}
          className="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 hover:shadow-md transition-all text-sm disabled:opacity-70 flex items-center gap-2"
        >
          {isLoading ? 'Saving...' : (submitLabel ?? 'Save Course')}
        </button>
      </div>

    </div>
  );
}

