import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, Check, ShieldCheck, Loader2 } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [name, setName] = useState('Admin User');
  const [email] = useState('admin@codence.com');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{name?: string, newPass?: string, confirmPass?: string}>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Image must be less than 2MB');
      return;
    }
    setAvatarUrl(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    const newErrors: {name?: string, newPass?: string, confirmPass?: string} = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (newPassword && newPassword.length < 6) newErrors.newPass = 'New password must be at least 6 characters';
    if (newPassword && newPassword !== confirmPassword) newErrors.confirmPass = 'Passwords do not match';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1200);
    }, 900);
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-full">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white">
          <h2 className="text-xl font-bold text-slate-900">Profile Settings</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto w-full space-y-6 flex-1">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-5">
            <div className="w-20 h-20 rounded-full bg-indigo-50 border-2 border-indigo-100 border-dashed flex items-center justify-center text-indigo-500 relative overflow-hidden group shadow-sm shrink-0">
              {avatarUrl ? <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" /> : <span className="text-2xl font-bold">{name.charAt(0).toUpperCase()}</span>}
              <div onClick={() => fileInputRef.current?.click()} className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity text-white">
                <Upload size={18} />
                <span className="text-[10px] font-semibold mt-1">Change</span>
              </div>
              <input type="file" ref={fileInputRef} hidden accept="image/png, image/jpeg" onChange={handleImageUpload} />
            </div>
            <div className="flex-1 text-center sm:text-left pt-2">
              <h3 className="text-sm font-bold text-slate-800">Profile Image</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-[200px] mx-auto sm:mx-0">Upload a new avatar. Max 2MB (JPG, PNG).</p>
              <button onClick={() => fileInputRef.current?.click()} className="mt-3 px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-md text-xs font-semibold shadow-sm hover:bg-slate-50 transition-colors">Upload Default</button>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Display Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#3b82f6]/50 outline-none font-medium text-slate-900 text-sm transition-all shadow-sm ${errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'}`} />
              {errors.name && <p className="text-xs font-semibold text-red-500 px-1">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Email Address</label>
              <input value={email} readOnly className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none font-medium text-slate-500 text-sm shadow-sm bg-slate-100 cursor-not-allowed" />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2"><ShieldCheck size={18} className="text-[#3b82f6]" />Change Password</h3>
            <div className="space-y-3">
              <input type="password" placeholder="Current Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/50 outline-none font-medium text-slate-900 text-sm shadow-sm transition-all" />
              <div className="space-y-1">
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#3b82f6]/50 outline-none font-medium text-slate-900 text-sm shadow-sm transition-all ${errors.newPass ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'}`} />
                {errors.newPass && <p className="text-xs font-semibold text-red-500 px-1">{errors.newPass}</p>}
              </div>
              <div className="space-y-1">
                <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#3b82f6]/50 outline-none font-medium text-slate-900 text-sm shadow-sm transition-all ${errors.confirmPass ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'}`} />
                {errors.confirmPass && <p className="text-xs font-semibold text-red-500 px-1">{errors.confirmPass}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-white px-6 py-4 flex items-center justify-end gap-3 rounded-b-2xl shrink-0">
          <button onClick={onClose} disabled={loading} className="px-5 py-2.5 text-sm text-slate-700 font-bold hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50">Cancel</button>
          <button disabled={loading} onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 bg-[#4c5ffd] text-white font-bold rounded-xl hover:bg-[#3d4ce6] hover:shadow-md transition-all text-sm disabled:opacity-70 disabled:pointer-events-none min-w-[140px] justify-center">
            {loading ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : success ? <><Check size={16} /> Saved!</> : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

