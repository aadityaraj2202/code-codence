import { useState, useRef, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import ProfileModal from './ProfileModal';

interface AdminDropdownProps {
  onLogout?: () => void;
}

export default function AdminDropdown({ onLogout }: AdminDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const displayName = 'Admin User';
  const initial = displayName.charAt(0).toUpperCase();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 cursor-pointer transition-colors">
          <span className="w-8 h-8 rounded-full bg-[#646cff] shadow-sm text-white flex items-center justify-center font-bold text-sm">{initial}</span>
          <span className="font-semibold text-sm pr-2 text-slate-700 hidden sm:block">{displayName}</span>
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-[240px] rounded-[12px] shadow-lg overflow-hidden z-50 bg-white border border-slate-200 flex flex-col">
            <div className="p-4 bg-slate-100 text-slate-900 flex flex-col">
              <span className="font-bold">{displayName}</span>
              <span className="text-sm text-slate-600 truncate">admin@codence.com</span>
            </div>
            <div className="p-2 bg-slate-50 flex flex-col gap-1">
              <button onClick={() => { setIsOpen(false); setIsProfileModalOpen(true); }} className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white rounded-md transition-colors">
                <User size={18} />
                Profile Settings
              </button>
              <button onClick={() => { setIsOpen(false); onLogout?.(); }} className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors">
                <LogOut size={18} />
                Log out
              </button>
            </div>
          </div>
        )}
      </div>

      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </>
  );
}

