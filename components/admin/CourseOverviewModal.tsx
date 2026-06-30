import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, BookOpen, User, Clock, Users, Tag, FileText, Video, ClipboardList, HelpCircle } from 'lucide-react';
import type { Course } from '@/types/admin/course';
import { DUMMY_TRAINERS } from '@/types/admin/student';

interface CourseOverviewModalProps {
  course: Course | null;
  onClose: () => void;
}

type Tab = 'overview' | 'content' | 'assignments' | 'quiz';

export default function CourseOverviewModal({ course, onClose }: CourseOverviewModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  if (!course) return null;

  const trainerName = DUMMY_TRAINERS.find(t => t.id === course.trainerId)?.name ?? 'Unknown Trainer';

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview',     label: 'Overview',    icon: <BookOpen size={16} /> },
    { id: 'content',      label: 'Content',     icon: <Video size={16} /> },
    { id: 'assignments',  label: 'Assignments', icon: <ClipboardList size={16} /> },
    { id: 'quiz',         label: 'Quiz',        icon: <HelpCircle size={16} /> },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">

        {/* Course Image / Header Banner */}
        {course.imageUrl ? (
          <div className="relative h-44 shrink-0">
            <img src={course.imageUrl} alt={course.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white rounded-full transition-colors"
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-3 left-5">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                course.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-slate-500 text-white'
              }`}>
                {course.status}
              </span>
              <h2 className="text-xl font-bold text-white mt-1 drop-shadow">{course.name}</h2>
            </div>
          </div>
        ) : (
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-start bg-gradient-to-r from-brand-50 to-white shrink-0">
            <div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                course.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
              }`}>
                {course.status}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">{course.name}</h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{course.id}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-slate-100 bg-white shrink-0 px-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-brand-600 text-brand-700'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto flex-1 p-6 bg-slate-50/30">

          {activeTab === 'overview' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: <Tag size={18} />,    label: 'Course ID',  value: course.id },
                  { icon: <Clock size={18} />,  label: 'Duration',   value: course.duration },
                  { icon: <Users size={18} />,  label: 'Enrolled',   value: `${course.enrollments} Students` },
                  { icon: <User size={18} />,   label: 'Trainer',    value: trainerName },
                ].map(item => (
                  <div key={item.label} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-1.5 text-brand-600 mb-1">{item.icon}</div>
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    <p className="text-sm font-bold text-slate-800 truncate">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-600">Tuition Fee</span>
                <span className="text-2xl font-bold text-brand-700">${course.price.toLocaleString()}</span>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-slate-700 font-semibold text-sm">
                  <FileText size={16} /> Description
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.description?.trim()
                    ? course.description
                    : 'No description provided for this course.'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="animate-in fade-in duration-200 space-y-3">
              {(course.content?.videos?.length ?? 0) > 0 ? (
                course.content!.videos.map((v, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm">
                    <Video size={18} className="text-brand-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 truncate">{v.name}</span>
                    <span className="ml-auto text-xs text-slate-400">{(v.size / 1024 / 1024).toFixed(1)} MB</span>
                  </div>
                ))
              ) : (
                <EmptyTab icon={<Video size={32} />} label="No video content uploaded yet." />
              )}
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="animate-in fade-in duration-200 space-y-3">
              {(course.content?.assignments?.length ?? 0) > 0 ? (
                course.content!.assignments.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm">
                    <ClipboardList size={18} className="text-brand-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 truncate">{a.name}</span>
                  </div>
                ))
              ) : (
                <EmptyTab icon={<ClipboardList size={32} />} label="No assignments uploaded yet." />
              )}
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="animate-in fade-in duration-200 space-y-3">
              {(course.content?.quizzes?.length ?? 0) > 0 ? (
                course.content!.quizzes.map((q, i) => (
                  <div key={q.id} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800 mb-2">Q{i + 1}. {q.question}</p>
                    <ul className="space-y-1">
                      {q.options.map((opt, oi) => (
                        <li
                          key={oi}
                          className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
                            opt === q.answer
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-slate-50 text-slate-600 border border-slate-100'
                          }`}
                        >
                          {opt === q.answer ? '✓ ' : ''}{opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <EmptyTab icon={<HelpCircle size={32} />} label="No quizzes added yet." />
              )}
            </div>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}

function EmptyTab({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="py-12 flex flex-col items-center justify-center gap-3 text-slate-400">
      {icon}
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}

