import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import CourseForm from './CourseForm';
import CourseContentUpload from './CourseContentUpload';
import type { Course, CourseContent } from '@/types/admin/course';

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (course: Course) => void;
  editCourse?: Course | null; // when provided â†’ edit mode
}

export default function AddCourseModal({ isOpen, onClose, onSuccess, editCourse }: AddCourseModalProps) {
  const isEditMode = Boolean(editCourse);

  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState<Partial<Course>>(editCourse ?? {});

  if (!isOpen) {
    if (step !== 1) setStep(1);
    return null;
  }

  const handleStep1Complete = (data: Partial<Course>) => {
    setCourseData(data);
    setStep(2);
  };

  const handleFinalSubmit = (contentData: CourseContent) => {
    setLoading(true);

    const finalCourse: Course = {
      ...(courseData as Course),
      // preserve original ID in edit mode
      id: isEditMode ? (editCourse!.id) : (courseData as Course).id,
      content: contentData,
    };

    // Simulate POST/PUT /api/courses
    setTimeout(() => {
      setLoading(false);
      onSuccess(finalCourse);
      onClose();
      setStep(1);
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
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {isEditMode ? 'Edit Course' : 'Add New Course'}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className={`h-1.5 w-12 rounded-full ${step >= 1 ? 'bg-brand-500' : 'bg-slate-200'} transition-colors`} />
              <div className={`h-1.5 w-12 rounded-full ${step >= 2 ? 'bg-brand-500' : 'bg-slate-200'} transition-colors`} />
              <span className="text-xs font-semibold text-slate-500 ml-2">Step {step} of 2</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors self-start"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50/30">
          {step === 1 ? (
            <CourseForm
              initialData={courseData}
              onNext={handleStep1Complete}
              onCancel={onClose}
            />
          ) : (
            <CourseContentUpload
              initialData={courseData.content}
              onBack={() => setStep(1)}
              onSubmit={handleFinalSubmit}
              isLoading={loading}
              submitLabel={isEditMode ? 'Save Changes' : undefined}
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

