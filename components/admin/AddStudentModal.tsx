import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import StudentForm from './StudentForm';
import type { Student } from '@/types/admin/student';

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (student: any) => void;
}

export default function AddStudentModal({ isOpen, onClose, onSuccess }: AddStudentModalProps) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (data: Partial<Student>) => {
    setLoading(true);
    // Simulate POST /api/students
    setTimeout(() => {
      setLoading(false);
      
      // Simulate ID generation and successful backend save
      const newStudent = {
        ...data,
        id: Math.floor(Math.random() * 10000)
      };
      
      onSuccess(newStudent);
      onClose();
    }, 1000);
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white shrink-0">
          <h2 className="text-xl font-bold text-slate-900">Add New Student</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          <StudentForm 
            onSubmit={handleSubmit} 
            isLoading={loading} 
            submitText="Add Student"
            onCancel={onClose}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

