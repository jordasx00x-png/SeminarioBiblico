import React, { useState, useEffect } from 'react';
import { X, Save, User as UserIcon, Phone, Mail, Bell, Clock } from 'lucide-react';
import { User } from 'firebase/auth';
import { motion } from 'motion/react';

interface UserProfileData {
  fullName: string;
  phoneNumber: string;
  email: string;
  studyReminderEnabled?: boolean;
  studyReminderTime?: string;
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
    studyReminderEnabled: false,
    studyReminderTime: '08:00'
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

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      try {
        localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profile));
      } catch (e) {
        console.error("Could not save profile", e);
      }
    }
    
    // Request notification permissions if enabling reminders
    if (profile.studyReminderEnabled && 'Notification' in window) {
      if (Notification.permission !== 'granted') {
        await Notification.requestPermission();
      }
    }
    
    if (onSave) onSave(profile);
    onClose();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        className="bg-white dark:bg-zinc-900 border border-transparent dark:border-zinc-800 rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto flex flex-col custom-scrollbar"
      >
        <div className="flex justify-between items-center p-5 border-b border-[#E0D7C6] dark:border-zinc-800 sticky top-0 bg-white dark:bg-zinc-900 z-10">
          <h2 className="text-xl font-bold text-[#1A2533] dark:text-stone-100 uppercase tracking-widest font-sans flex items-center gap-2">
            <UserIcon size={20} className="text-[#7F1D1D] dark:text-[#E0D7C6]" /> 
            Configurar Cuenta
          </h2>
          <button 
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-stone-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#1A2533] uppercase tracking-widest border-b pb-2">Datos Personales</h3>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-widest font-sans">
                Nombre Completo
              </label>
              <div className="relative">
                <UserIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={e => setProfile({...profile, fullName: e.target.value})}
                  placeholder="Nombre para tu certificado"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-[#E0D7C6] dark:border-zinc-700 dark:text-stone-100 rounded outline-none focus:border-[#7F1D1D] dark:focus:border-zinc-500 focus:ring-1 focus:ring-[#7F1D1D] transition-all font-sans text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-widest font-sans">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />
                <input
                  type="email"
                  value={profile.email}
                  onChange={e => setProfile({...profile, email: e.target.value})}
                  placeholder="tu@correo.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-[#E0D7C6] dark:border-zinc-700 dark:text-stone-100 rounded outline-none focus:border-[#7F1D1D] dark:focus:border-zinc-500 focus:ring-1 focus:ring-[#7F1D1D] transition-all font-sans text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-widest font-sans">
                Número de Teléfono
              </label>
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500" />
                <input
                  type="tel"
                  value={profile.phoneNumber}
                  onChange={e => setProfile({...profile, phoneNumber: e.target.value})}
                  placeholder="+1 234 567 890"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-[#E0D7C6] dark:border-zinc-700 dark:text-stone-100 rounded outline-none focus:border-[#7F1D1D] dark:focus:border-zinc-500 focus:ring-1 focus:ring-[#7F1D1D] transition-all font-sans text-sm"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#1A2533] uppercase tracking-widest border-b pb-2 flex items-center gap-2">
              <Bell size={16} /> Recordatorios
            </h3>
            
            <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <input 
                type="checkbox" 
                checked={!!profile.studyReminderEnabled}
                onChange={e => setProfile({...profile, studyReminderEnabled: e.target.checked})}
                className="w-4 h-4 text-[#7F1D1D] rounded focus:ring-[#7F1D1D]"
              />
              <div className="flex-1 flex flex-col">
                <span className="text-sm font-bold text-gray-800 font-sans">Activar recordatorio de estudio</span>
                <span className="text-xs text-gray-500 font-sans">Recibe una notificación diaria a la hora que elijas</span>
              </div>
            </label>
            
            {profile.studyReminderEnabled && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest font-sans">
                  Hora del Recordatorio
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="time"
                    value={profile.studyReminderTime || '08:00'}
                    onChange={e => setProfile({...profile, studyReminderTime: e.target.value})}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-[#E0D7C6] rounded outline-none focus:border-[#7F1D1D] focus:ring-1 focus:ring-[#7F1D1D] transition-all font-sans text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-[#E0D7C6] dark:border-zinc-800 mt-6 sticky bottom-0 bg-white pb-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-bold text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-stone-100 transition-colors uppercase tracking-wider font-sans"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#1A2533] dark:bg-[#7F1D1D] text-white rounded text-sm font-bold hover:bg-black dark:hover:bg-[#991B1B] transition-colors uppercase tracking-wider font-sans shadow shadow-[#1A2533]/20 flex items-center gap-2"
            >
              <Save size={16} /> Guardar
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
