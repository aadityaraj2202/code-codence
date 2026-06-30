import { useState, useRef } from 'react';
import { ImagePlus, X } from 'lucide-react';
import type { Course } from '@/types/admin/course';
import { DUMMY_TRAINERS as TRAINERS } from '@/types/admin/student';

interface CourseFormProps {
  initialData?: Partial<Course>;
  onNext: (data: Partial<Course>) => void;
  onCancel: () => void;
}

export default function CourseForm({ initialData, onNext, onCancel }: CourseFormProps) {
  const [formData, setFormData] = useState({
    id: initialData?.id || `COURSE_${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
    name: initialData?.name || '',
    description: initialData?.description || '',
    duration: initialData?.duration || '3 Months',
    price: initialData?.price || 0,
    trainerId: initialData?.trainerId || 0,
    status: initialData?.status || 'Active',
    enrollments: initialData?.enrollments || 0,
    imageUrl: initialData?.imageUrl || ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setFormData(prev => ({ ...prev, imageUrl: ev.target?.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, imageUrl: '' }));
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Course Name is required';
    if (formData.price < 0) newErrors.price = 'Price must be positive';
    if (!formData.trainerId) newErrors.trainerId = 'Trainer selection is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext(formData as Partial<Course>);
    }
  };

  return (
    <form onSubmit={handleNext} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">

      {/* Course Image Upload */}
      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-700">Course Image</label>
        {formData.imageUrl ? (
          <div className="relative w-full h-40 rounded-xl overflow-hidden border border-slate-200 group">
            <img src={formData.imageUrl} alt="Course thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="px-3 py-1.5 bg-white text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Replace
              </button>
              <button
                type="button"
                onClick={removeImage}
                className="p-1.5 bg-white text-red-500 rounded-lg hover:bg-red-50 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => imageInputRef.current?.click()}
            className="w-full h-32 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-brand-400 hover:text-brand-500 hover:bg-brand-50/40 transition-all"
          >
            <ImagePlus size={28} />
            <span className="text-sm font-medium">Click to upload course thumbnail</span>
            <span className="text-xs text-slate-400">JPG, PNG or WebP · max 2MB</span>
          </button>
        )}
        <input
          ref={imageInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Course ID */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Course ID</label>
          <input
            type="text"
            readOnly
            className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl outline-none font-medium text-slate-500 cursor-not-allowed text-sm"
            value={formData.id}
          />
        </div>

        {/* Course Name */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Course Name *</label>
          <input
            type="text"
            placeholder="e.g. Python Basics"
            className={`w-full px-4 py-2 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Duration */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Duration *</label>
          <select
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          >
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="1 Year">1 Year</option>
          </select>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Price (INR) *</label>
          <input
            type="number"
            min="0"
            className={`w-full px-4 py-2 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm ${errors.price ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
          />
          {errors.price && <p className="text-xs text-red-500">{errors.price}</p>}
        </div>

        {/* Trainer */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Trainer *</label>
          <select
            className={`w-full px-4 py-2 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm ${errors.trainerId ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.trainerId}
            onChange={(e) => setFormData({ ...formData, trainerId: Number(e.target.value) })}
          >
            <option value="">Select a trainer</option>
            {TRAINERS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {errors.trainerId && <p className="text-xs text-red-500">{errors.trainerId}</p>}
        </div>

        {/* Total Students */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Total Students</label>
          <input
            type="number"
            min="0"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm"
            value={formData.enrollments}
            onChange={(e) => setFormData({ ...formData, enrollments: Number(e.target.value) })}
          />
        </div>

        {/* Status */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Status</label>
          <select
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Active' | 'Inactive' })}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

      </div>

      {/* Description */}
      <div className="space-y-1">
        <label className="text-sm font-semibold text-slate-700">Description</label>
        <textarea
          rows={3}
          placeholder="Brief overview of what students will learn..."
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm resize-none"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end gap-3">
        <button 
          type="button" 
          onClick={onCancel} 
          className="px-5 py-2.5 text-sm text-slate-700 font-bold hover:bg-slate-100 rounded-xl transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="px-6 py-2.5 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 hover:shadow-md transition-all text-sm"
        >
          Next: Content Upload
        </button>
      </div>
    </form>
  );
}

