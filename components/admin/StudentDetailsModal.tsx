import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Phone, Mail, BookOpen, GraduationCap, Calendar, CreditCard, Loader2 } from 'lucide-react';
import { type Student, DUMMY_COURSES, DUMMY_TRAINERS } from '@/types/admin/student';

interface StudentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
  onDelete: (id: number) => void;
}

export default function StudentDetailsModal({ isOpen, onClose, student, onDelete }: StudentDetailsModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  if (!isOpen || !student) return null;

  const courseName = student.courseName || DUMMY_COURSES.find(c => c.id === student.courseId)?.name || student.courseId;
  const trainerName = student.trainerName || DUMMY_TRAINERS.find(t => t.id === student.trainerId)?.name || student.trainerId;

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this student?")) {
      setIsDeleting(true);
      setTimeout(() => {
        setIsDeleting(false);
        onDelete(student.id);
        onClose();
      }, 800);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="px-6 pb-6 pt-8 bg-gradient-to-br from-brand-600 to-indigo-700 relative flex flex-col items-center">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-colors">
            <X size={20} />
          </button>
          
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-600 text-3xl font-bold shadow-lg border-4 border-white">
            {student.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold text-white mt-3">{student.name}</h2>
          <span className={`mt-2 px-3 py-1 rounded-full text-xs font-bold ${
            student.status === 'Active' ? 'bg-emerald-400/20 text-emerald-100 border border-emerald-400/30' :
            student.status === 'Graduated' ? 'bg-blue-400/20 text-blue-100 border border-blue-400/30' :
            'bg-amber-400/20 text-amber-100 border border-amber-400/30'
          }`}>
            {student.status}
          </span>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto w-full flex-1">
          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-50 rounded-lg text-slate-500"><Mail size={18} /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Email Address</p>
                <p className="text-sm font-medium text-slate-900">{student.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-50 rounded-lg text-slate-500"><Phone size={18} /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Phone Number</p>
                <p className="text-sm font-medium text-slate-900">{student.phone}</p>
              </div>
            </div>
          </div>

          <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">Enrollment Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-brand-50 rounded-lg text-brand-600"><BookOpen size={18} /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Course Name</p>
                <p className="text-sm font-medium text-slate-900">{courseName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><GraduationCap size={18} /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Trainer</p>
                <p className="text-sm font-medium text-slate-900">{trainerName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-50 rounded-lg text-slate-500"><Calendar size={18} /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Join Date</p>
                <p className="text-sm font-medium text-slate-900">{student.joinDate}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-50 rounded-lg text-slate-500"><CreditCard size={18} /></div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Payment Status</p>
                <p className="text-sm font-medium text-slate-900">{student.paymentStatus || 'Paid'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 rounded-b-2xl">
          <button 
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-4 py-2 text-sm text-red-600 font-bold hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isDeleting ? <Loader2 size={16} className="animate-spin" /> : 'Delete Student'}
          </button>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-5 py-2 text-sm text-slate-600 font-bold hover:bg-slate-200/50 rounded-xl transition-colors">
              Close
            </button>
            <button className="px-6 py-2 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 hover:shadow-md transition-all text-sm invisible">
              Edit 
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}

