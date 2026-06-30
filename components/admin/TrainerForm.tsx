import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import type { Trainer } from '@/types/admin/trainer';
import { DUMMY_COURSES } from '@/types/admin/student';

interface TrainerFormProps {
  initialData?: Partial<Trainer>;
  onSubmit: (data: Partial<Trainer>) => void;
  onCancel: () => void;
  isLoading: boolean;
}

const EXPERTISE_OPTIONS = [
  'Python', 'Data Science', 'Java', 'React', 'Node.js', 'UI/UX Design', 'DevOps', 'Machine Learning'
];

export default function TrainerForm({ initialData, onSubmit, onCancel, isLoading }: TrainerFormProps) {
  const [formData, setFormData] = useState({
    id: initialData?.id || `TRN-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    expertise: initialData?.expertise || [],
    assignedCourseIds: initialData?.assignedCourseIds || [],
    experience: initialData?.experience || '',
    status: initialData?.status || 'Active'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid unique email is required';
    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Numeric phone (10-15 digits) required';
    if (formData.expertise.length === 0) newErrors.expertise = 'Select at least one expertise';
    if (formData.assignedCourseIds.length === 0) newErrors.courses = 'Assign at least one course';
    
    // Check if experience is an empty string
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleExpertiseChange = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(skill)
        ? prev.expertise.filter(e => e !== skill)
        : [...prev.expertise, skill]
    }));
  };

  const handleCourseChange = (id: number) => {
    setFormData(prev => ({
      ...prev,
      assignedCourseIds: prev.assignedCourseIds.includes(id)
        ? prev.assignedCourseIds.filter(c => c !== id)
        : [...prev.assignedCourseIds, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData as Partial<Trainer>);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Trainer ID */}
        <div className="space-y-1 md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Trainer ID</label>
          <input 
            type="text" 
            readOnly
            className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl outline-none font-bold text-slate-500 cursor-not-allowed text-sm"
            value={formData.id}
          />
        </div>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Trainer Name *</label>
          <input 
            type="text" 
            placeholder="e.g. Raj Mehta"
            className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm font-medium ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Email Address *</label>
          <input 
            type="email" 
            placeholder="raj@email.com"
            className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm font-medium ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
          <input 
            type="text" 
            placeholder="10-15 digits"
            className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm font-medium ${errors.phone ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>

        {/* Experience */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Experience *</label>
          <input 
            type="text" 
            placeholder="e.g. 5 Years"
            className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm font-medium ${errors.experience ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          />
          {errors.experience && <p className="text-xs text-red-500">{errors.experience}</p>}
        </div>

        {/* Expertise (Multi-select) */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Expertise (Select Multiple) *</label>
          <div className="flex flex-wrap gap-2">
            {EXPERTISE_OPTIONS.map(skill => (
              <button
                key={skill}
                type="button"
                onClick={() => handleExpertiseChange(skill)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors flex items-center gap-1 ${
                  formData.expertise.includes(skill)
                    ? 'bg-brand-50 border-brand-300 text-brand-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {skill}
                {formData.expertise.includes(skill) && <X size={12} />}
              </button>
            ))}
          </div>
          {errors.expertise && <p className="text-xs text-red-500">{errors.expertise}</p>}
        </div>

        {/* Assigned Courses (Multi-select) */}
        <div className="space-y-2 md:col-span-2 border-t border-slate-100 pt-3">
          <label className="text-sm font-semibold text-slate-700">Assigned Courses *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DUMMY_COURSES.map(course => (
              <label key={course.id} className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={formData.assignedCourseIds.includes(course.id)}
                  onChange={() => handleCourseChange(course.id)}
                  className="w-4 h-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
                />
                <span className="text-sm font-medium text-slate-700 leading-tight">{course.name}</span>
              </label>
            ))}
          </div>
          {errors.courses && <p className="text-xs text-red-500">{errors.courses}</p>}
        </div>

        {/* Status */}
        <div className="space-y-1 md:col-span-2 border-t border-slate-100 pt-3">
          <label className="text-sm font-semibold text-slate-700">Status</label>
          <select 
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm font-medium"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Active' | 'Inactive' })}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

      </div>

      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end gap-3 sticky bottom-0 bg-white shadow-[0_-12px_12px_-12px_rgba(0,0,0,0.05)] pb-1">
        <button 
          type="button" 
          onClick={onCancel} 
          disabled={isLoading}
          className="px-5 py-2.5 text-sm text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-2.5 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 hover:-translate-y-0.5 shadow-lg shadow-brand-500/30 transition-all text-sm disabled:opacity-70 disabled:pointer-events-none disabled:transform-none disabled:shadow-none"
        >
          {isLoading && <Loader2 size={16} className="animate-spin" />}
          {isLoading ? 'Saving...' : 'Save Trainer'}
        </button>
      </div>
    </form>
  );
}

