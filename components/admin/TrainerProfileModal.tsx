import { createPortal } from 'react-dom';
import { X, Mail, Phone, BookOpen, Clock, Edit2, Trash2 } from 'lucide-react';
import type { Trainer } from '@/types/admin/trainer';

interface TrainerProfileModalProps {
  trainer: Trainer | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TrainerProfileModal({ trainer, isOpen, onClose }: TrainerProfileModalProps) {
  if (!isOpen || !trainer) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="px-6 pb-6 pt-10 bg-gradient-to-br from-indigo-600 to-brand-700 relative flex flex-col items-center">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-colors">
            <X size={20} />
          </button>
          
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-brand-600 text-4xl font-bold shadow-lg border-4 border-white">
            {trainer.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold text-white mt-3">{trainer.name}</h2>
          <p className="text-white/80 font-medium">{trainer.role}</p>

          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
              trainer.status === 'Active' ? 'bg-emerald-400 text-emerald-950 border border-emerald-300' :
              'bg-slate-300 text-slate-800'
            }`}>
              {trainer.status}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto w-full flex-1 bg-slate-50/50">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Contact Details */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-800 border-b border-slate-50 pb-2">Contact Info</h3>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-50 rounded-xl text-brand-600"><Mail size={18} /></div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Email Address</p>
                  <p className="text-sm font-medium text-slate-900">{trainer.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600"><Phone size={18} /></div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Phone Number</p>
                  <p className="text-sm font-medium text-slate-900">{trainer.phone}</p>
                </div>
              </div>
            </div>

            {/* General Overview */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-800 border-b border-slate-50 pb-2">Professional Info</h3>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600"><Clock size={18} /></div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Experience</p>
                  <p className="text-sm font-medium text-slate-900">{trainer.experience}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600"><BookOpen size={18} /></div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Courses</p>
                  <p className="text-sm font-medium text-slate-900">{trainer.courses} Assigned</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Expertise */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3 ml-1">Domain Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {trainer.expertise.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Course IDs Placeholder (would be actual course lookups ideally) */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3 ml-1">Assigned Classes (IDs)</h3>
              <div className="flex flex-wrap gap-2">
                {trainer.assignedCourseIds.map(course => (
                  <span key={course} className="px-3 py-1.5 bg-brand-50 text-brand-700 rounded-lg text-xs font-bold border border-brand-100">
                    Course #{course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-white flex items-center justify-between shrink-0 rounded-b-2xl">
          <button 
            className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors flex items-center gap-2"
            title="Delete Trainer"
          >
            <Trash2 size={20} />
          </button>
          
          <div className="flex gap-2">
            <button onClick={onClose} className="px-5 py-2.5 text-sm text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-colors">
              Close Profile
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 hover:shadow-md transition-all text-sm">
              <Edit2 size={16} /> Edit Mentor
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}

