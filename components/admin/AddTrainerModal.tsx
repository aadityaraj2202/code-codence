import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import TrainerForm from './TrainerForm';
import type { Trainer } from '@/types/admin/trainer';

interface AddTrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (trainer: Trainer) => void;
}

export default function AddTrainerModal({ isOpen, onClose, onSuccess }: AddTrainerModalProps) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (data: Partial<Trainer>) => {
    setLoading(true);
    // Simulate POST /api/trainers
    setTimeout(() => {
      setLoading(false);
      onSuccess(data as Trainer);
      onClose();
    }, 1000);
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-200">
        
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white shrink-0 relative z-10 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Add New Trainer</h2>
            <p className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">Enter expert details into the system.</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative z-10">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 bg-white custom-scrollbar relative z-0">
          <TrainerForm 
            onCancel={onClose}
            onSubmit={handleSubmit}
            isLoading={loading}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

