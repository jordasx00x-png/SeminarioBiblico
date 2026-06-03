import React, { useState, useEffect } from 'react';
import { X, Save, User as UserIcon, Phone, Mail } from 'lucide-react';
import { User } from 'firebase/auth';

interface UserProfileData {
  fullName: string;
  phoneNumber: string;
  email: string;
}

interface ProfileModalProps {
  user: User | null;
  onClose: () => void;
  onSave?: (data: UserProfileData) => void;
}

export function ProfileModal({ user, onClose, onSave }: ProfileModalProps) {
  const [profile, setProfile] = useState<UserProfileData>({
    fullName: user?.displayName || '',
    phoneNumber: '',
    email: user?.email || '',
  });

  useEffect(() => {
    // Load from local storage
    if (user) {
      try {
        const saved = localStorage.getItem(`profile_${user.uid}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          setProfile(prev => ({
            ...prev,
            ...parsed
          }));
        }
      } catch (e) {
        console.warn("Could not load profile", e);
      }
    }
  }, [user]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      try {
        localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profile));
      } catch (e) {
        console.error("Could not save profile", e);
      }
    }
    if (onSave) onSave(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-5 border-b border-[#E0D7C6]">
          <h2 className="text-xl font-bold text-[#1A2533] uppercase tracking-widest font-sans flex items-center gap-2">
            <UserIcon size={20} className="text-[#7F1D1D]" /> 
            Configurar Cuenta
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest font-sans">
              Nombre Completo
            </label>
            <div className="relative">
              <UserIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={profile.fullName}
                onChange={e => setProfile({...profile, fullName: e.target.value})}
                placeholder="Nombre para tu certificado"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-[#E0D7C6] rounded outline-none focus:border-[#7F1D1D] focus:ring-1 focus:ring-[#7F1D1D] transition-all font-sans text-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest font-sans">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={profile.email}
                onChange={e => setProfile({...profile, email: e.target.value})}
                placeholder="tu@correo.com"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-[#E0D7C6] rounded outline-none focus:border-[#7F1D1D] focus:ring-1 focus:ring-[#7F1D1D] transition-all font-sans text-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest font-sans">
              Número de Teléfono
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                value={profile.phoneNumber}
                onChange={e => setProfile({...profile, phoneNumber: e.target.value})}
                placeholder="+1 234 567 890"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-[#E0D7C6] rounded outline-none focus:border-[#7F1D1D] focus:ring-1 focus:ring-[#7F1D1D] transition-all font-sans text-sm"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-[#E0D7C6] mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors uppercase tracking-wider font-sans"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#1A2533] text-white rounded text-sm font-bold hover:bg-black transition-colors uppercase tracking-wider font-sans shadow shadow-[#1A2533]/20 flex items-center gap-2"
            >
              <Save size={16} /> Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
