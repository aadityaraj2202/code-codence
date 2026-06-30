import { useState } from 'react';
import { type Student, DUMMY_TRAINERS, DUMMY_COURSES } from '@/types/admin/student';

interface StudentFormProps {
  initialData?: Partial<Student>;
  onSubmit: (data: Partial<Student>) => void;
  isLoading: boolean;
  submitText?: string;
  onCancel: () => void;
}

export default function StudentForm({ initialData, onSubmit, isLoading, submitText = "Save Changes", onCancel }: StudentFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    trainerId: initialData?.trainerId || 0,
    courseId: initialData?.courseId || 0,
    joinDate: initialData?.joinDate || new Date().toISOString().split('T')[0],
    status: (initialData?.status || 'Active') as 'Active' | 'Paused' | 'Graduated',
    paymentStatus: (initialData?.paymentStatus || 'Paid') as 'Paid' | 'Pending'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Valid 10-15 digit phone is required';
    if (!formData.trainerId) newErrors.trainerId = 'Please select a trainer';
    if (!formData.courseId) newErrors.courseId = 'Please select a course';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Full Name *</label>
          <input 
            type="text" 
            placeholder="e.g. Rahul Kumar"
            className={`w-full px-4 py-2 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
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
            placeholder="e.g. rahul@email.com"
            className={`w-full px-4 py-2 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
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
            className={`w-full px-4 py-2 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm ${errors.phone ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>

        {/* Join Date */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Join Date *</label>
          <input 
            type="date" 
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm"
            value={formData.joinDate}
            onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
          />
        </div>

        {/* Course */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Course *</label>
          <select 
            className={`w-full px-4 py-2 bg-slate-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm ${errors.courseId ? 'border-red-400' : 'border-slate-200'}`}
            value={formData.courseId}
            onChange={(e) => setFormData({ ...formData, courseId: Number(e.target.value) })}
          >
            <option value="">Select a course</option>
            {DUMMY_COURSES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          {errors.courseId && <p className="text-xs text-red-500">{errors.courseId}</p>}
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
            {DUMMY_TRAINERS.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>
          {errors.trainerId && <p className="text-xs text-red-500">{errors.trainerId}</p>}
        </div>

        {/* Status */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Status</label>
          <select 
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
          >
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Graduated">Graduated</option>
          </select>
        </div>

        {/* Payment Status */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-700">Payment Status</label>
          <select 
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500/50 outline-none transition-all text-sm"
            value={formData.paymentStatus}
            onChange={(e) => setFormData({ ...formData, paymentStatus: e.target.value as any })}
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-end gap-3">
        <button 
          type="button" 
          onClick={onCancel} 
          disabled={isLoading}
          className="px-5 py-2.5 text-sm text-slate-700 font-bold hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-2.5 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 hover:shadow-md transition-all text-sm disabled:opacity-70 disabled:pointer-events-none"
        >
          {isLoading ? 'Saving...' : submitText}
        </button>
      </div>
    </form>
  );
}

