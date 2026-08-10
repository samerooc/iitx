'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { formatExternalUrl } from '@/lib/utils';
import ImageCropModal from '@/components/ImageCropModal';
import {
  Lock,
  Crown,
  Bell,
  Vote,
  Image as ImageIcon,
  MessageSquare,
  Settings as SettingsIcon,
  ShieldCheck,
  UserPlus,
  Trash2,
  Edit,
  Plus,
  CheckCircle2,
  Calendar,
  BookOpen,
  LogOut,
  Upload,
  User,
  Users,
  Eye,
  AlertCircle,
  Wrench,
  Instagram,
  Ghost,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  Save,
  Check,
  X,
  Crop
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AdminPage() {
  const {
    currentAdmin,
    loginAdmin,
    logoutAdmin,
    hasPermission,
    ministers,
    addMinister,
    updateMinister,
    deleteMinister,
    notices,
    addNotice,
    deleteNotice,
    banners,
    addBanner,
    deleteBanner,
    polls,
    addPoll,
    deletePoll,
    events,
    addEvent,
    updateEvent,
    deleteEvent,
    resources,
    addResource,
    updateResource,
    deleteResource,
    tickets,
    updateTicketStatus,
    deleteTicket,
    registeredStudents,
    settings,
    updateSettings,
    adminsList,
    addSubAdmin,
    deleteSubAdmin,
    uploadFile
  } = useApp();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState('ministers');

  // Modal / Form Edit states
  const [editingMinister, setEditingMinister] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingResource, setEditingResource] = useState(null);
  const [editingNotice, setEditingNotice] = useState(null);

  // Poll Form States
  const [newPollQuestion, setNewPollQuestion] = useState('');
  const [newPollOptions, setNewPollOptions] = useState([{ text: '' }, { text: '' }]);

  // Image Cropper Modal State
  const [cropFile, setCropFile] = useState(null);
  const [cropTargetCallback, setCropTargetCallback] = useState(null);
  const [cropAspectRatio, setCropAspectRatio] = useState('1:1');

  // FAQ Manager State
  const [editingFaqIndex, setEditingFaqIndex] = useState(null);
  const [faqQ, setFaqQ] = useState('');
  const [faqA, setFaqA] = useState('');

  // New Item Form States
  const [newMinister, setNewMinister] = useState({
    name: '',
    portfolio: 'Cabinet Minister',
    tagline: '',
    description: '',
    photo_url: '',
    display_order: 1,
    instagram_url: '',
    twitter_url: '',
    linkedin_url: ''
  });

  const [newEvent, setNewEvent] = useState({
    title: '',
    category: 'Fest',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    location: 'Main Auditorium',
    organizer: 'Student Executive Council',
    description: '',
    imageUrl: ''
  });

  const [newResource, setNewResource] = useState({
    title: '',
    category: 'CS',
    type: 'PDF',
    author: 'Academic Cell',
    linkUrl: '',
    description: ''
  });

  const [newNotice, setNewNotice] = useState({
    title: '',
    content: '',
    category: 'Notice',
    priority: 'Medium',
    pinned: false,
    imageUrl: '',
    linkUrl: ''
  });

  // Settings local state
  const [settingsForm, setSettingsForm] = useState(settings);
  const [uploading, setUploading] = useState(false);

  // LOGIN SUBMIT HANDLER
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    const res = await loginAdmin(loginEmail, loginPass);
    if (!res.success) {
      setLoginError(res.error || 'Invalid credentials');
    }
  };

  // TRIGGER IMAGE CROPPER MODAL BEFORE UPLOADING TO SUPABASE
  const triggerCropper = (file, aspect, callback) => {
    if (!file) return;
    setCropFile(file);
    setCropAspectRatio(aspect);
    setCropTargetCallback(() => callback);
  };

  const handleCroppedUpload = async (compressedFile) => {
    setCropFile(null);
    setUploading(true);
    try {
      const url = await uploadFile(compressedFile);
      if (cropTargetCallback) {
        cropTargetCallback(url);
      }
    } catch (err) {
      alert('Upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  // FAQ ACTIONS
  const handleAddOrUpdateFaq = (e) => {
    e.preventDefault();
    if (!faqQ.trim() || !faqA.trim()) return;

    let currentFaqs = [...(settingsForm.helpFaqs || [])];
    if (editingFaqIndex !== null) {
      currentFaqs[editingFaqIndex] = { q: faqQ, a: faqA };
      setEditingFaqIndex(null);
    } else {
      currentFaqs.push({ q: faqQ, a: faqA });
    }

    const updated = { ...settingsForm, helpFaqs: currentFaqs };
    setSettingsForm(updated);
    updateSettings(updated);

    setFaqQ('');
    setFaqA('');
    alert('FAQ updated & saved to Supabase!');
  };

  const handleDeleteFaq = (index) => {
    const currentFaqs = (settingsForm.helpFaqs || []).filter((_, i) => i !== index);
    const updated = { ...settingsForm, helpFaqs: currentFaqs };
    setSettingsForm(updated);
    updateSettings(updated);
  };

  // 1. UNAUTHENTICATED LOGIN SCREEN
  if (!currentAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-obsidian text-white">
        <div className="w-full max-w-md glass-card p-8 rounded-3xl border border-surface-container-high dark:border-white/15 space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-secondary-container to-neon-saffron text-white flex items-center justify-center font-bold text-2xl shadow-glow-saffron">
              🏛️
            </div>
            <h1 className="font-headline text-2xl font-bold text-white">Admin Control Portal</h1>
            <p className="text-xs text-gray-400">Master & Sub-Admin RBAC Portal</p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Email / Username</label>
              <input
                type="text"
                required
                placeholder="master@iitrungta.fun"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:border-neon-saffron"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:border-neon-saffron"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron hover:opacity-95"
            >
              Sign In to Admin Portal
            </button>
          </form>

          <p className="text-[11px] text-gray-400 text-center">
            Default credentials: <span className="font-mono text-neon-saffron">master@iitrungta.fun / admin123</span>
          </p>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED ADMIN DASHBOARD
  const tabs = [
    { id: 'students', label: 'Registered Students', icon: Users, perm: 'all' },
    { id: 'ministers', label: 'Cabinet Ministers', icon: Crown, perm: 'ministers' },
    { id: 'notices', label: 'Notice Board & Banners', icon: Bell, perm: 'notices' },
    { id: 'events', label: 'Campus Events', icon: Calendar, perm: 'events' },
    { id: 'resources', label: 'Study Resources', icon: BookOpen, perm: 'resources' },
    { id: 'polls', label: 'Polls & Audits', icon: Vote, perm: 'polls' },
    { id: 'tickets', label: 'Grievance Desk', icon: MessageSquare, perm: 'tickets' },
    { id: 'settings', label: 'Site Settings & FAQs', icon: SettingsIcon, perm: 'settings' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* IMAGE CROPPER MODAL POPUP */}
      {cropFile && (
        <ImageCropModal
          file={cropFile}
          aspectRatio={cropAspectRatio}
          onCropComplete={handleCroppedUpload}
          onClose={() => setCropFile(null)}
        />
      )}

      {/* ADMIN HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-surface-container-high dark:border-white/10">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/30 uppercase">
              {currentAdmin.role}
            </span>
            <h1 className="font-headline text-2xl sm:text-3xl font-extrabold text-primary dark:text-white">
              Admin Executive Panel
            </h1>
          </div>
          <p className="text-xs text-outline dark:text-gray-400 mt-1">
            Logged in as <strong className="text-neon-saffron">{currentAdmin.name}</strong> ({currentAdmin.email})
          </p>
        </div>

        <button
          onClick={logoutAdmin}
          className="px-4 py-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold hover:bg-rose-500/20 flex items-center space-x-1.5"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* ADMIN TABS NAVIGATION */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const allowed = hasPermission(tab.perm);

          if (!allowed) return null;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-2 shrink-0 transition-all ${
                isActive
                  ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                  : 'bg-surface-container dark:bg-white/5 text-on-surface dark:text-gray-300 border border-surface-container-high dark:border-white/5 hover:border-neon-saffron'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: REGISTERED STUDENTS */}
      {activeTab === 'students' && (
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
                Registered Student Union Passes & Voters
              </h3>
              <p className="text-xs text-outline dark:text-gray-400">
                View all students who issued digital passes or voted in campus polls.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
              {registeredStudents.length} Students Logged
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-surface-container dark:border-white/10 text-outline dark:text-gray-400 font-bold uppercase">
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Pass ID / Roll No</th>
                  <th className="p-3">Instagram (@)</th>
                  <th className="p-3">Snapchat (@)</th>
                  <th className="p-3">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container dark:divide-white/5 text-on-surface dark:text-gray-300">
                {registeredStudents.map((stud, idx) => (
                  <tr key={idx} className="hover:bg-white/5">
                    <td className="p-3 font-bold text-primary dark:text-white">{stud.voter_name || stud.name}</td>
                    <td className="p-3 font-mono text-neon-saffron">{stud.id || stud.rollNo || '2024-SU-001'}</td>
                    <td className="p-3 text-pink-400">{stud.insta_username ? `@${stud.insta_username}` : 'N/A'}</td>
                    <td className="p-3 text-amber-400">{stud.snap_username ? `@${stud.snap_username}` : 'N/A'}</td>
                    <td className="p-3 text-gray-400">{stud.created_at ? stud.created_at.split('T')[0] : 'Today'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CABINET MINISTERS MANAGEMENT */}
      {activeTab === 'ministers' && (
        <div className="space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <Crown className="w-5 h-5 text-neon-saffron" />
              <span>{editingMinister ? 'Edit Cabinet Minister' : 'Add New Cabinet Minister'}</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingMinister) {
                  updateMinister(editingMinister.id, newMinister);
                  setEditingMinister(null);
                  alert('Minister updated successfully!');
                } else {
                  addMinister(newMinister);
                  alert('Minister added to Cabinet!');
                }
                setNewMinister({ name: '', portfolio: 'Cabinet Minister', tagline: '', description: '', photo_url: '', display_order: 1, instagram_url: '', twitter_url: '', linkedin_url: '' });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Minister Name *</label>
                  <input type="text" required value={newMinister.name} onChange={(e) => setNewMinister({ ...newMinister, name: e.target.value })} placeholder="e.g. Rohan Verma" className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Portfolio Title *</label>
                  <input type="text" required value={newMinister.portfolio} onChange={(e) => setNewMinister({ ...newMinister, portfolio: e.target.value })} placeholder="e.g. President / General Secretary" className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Tagline Quote</label>
                  <input type="text" value={newMinister.tagline} onChange={(e) => setNewMinister({ ...newMinister, tagline: e.target.value })} placeholder="24x7 Library & Campus Digital Transparency" className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Photo URL / Crop Upload (1:1)</label>
                  <div className="flex items-center space-x-2">
                    <input type="text" value={newMinister.photo_url} onChange={(e) => setNewMinister({ ...newMinister, photo_url: e.target.value })} placeholder="https://..." className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                    <label className="px-3 py-2 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-bold cursor-pointer shrink-0 flex items-center space-x-1">
                      <Crop className="w-4 h-4 text-neon-saffron" />
                      <span>{uploading ? 'Compressing...' : 'Crop & Upload'}</span>
                      <input type="file" accept="image/*" onChange={(e) => triggerCropper(e.target.files[0], '1:1', (url) => setNewMinister((prev) => ({ ...prev, photo_url: url })))} className="hidden" />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Description / Bio</label>
                <textarea rows={3} value={newMinister.description} onChange={(e) => setNewMinister({ ...newMinister, description: e.target.value })} placeholder="Full biography statement..." className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>

              <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                {editingMinister ? 'Update Minister Profile' : 'Add Minister'}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ministers.map((m) => (
              <div key={m.id} className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={m.photo_url || m.photoUrl} alt={m.name} className="w-12 h-12 rounded-xl object-cover ring-2 ring-neon-saffron" />
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white">{m.name}</h4>
                    <p className="text-xs text-neon-saffron font-semibold">{m.portfolio}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => { setEditingMinister(m); setNewMinister(m); }} className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deleteMinister(m.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: NOTICES */}
      {activeTab === 'notices' && (
        <div className="space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <Bell className="w-5 h-5 text-neon-saffron" />
              <span>{editingNotice ? 'Edit Notice' : 'Add New Notice'}</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingNotice) {
                  // Notice edit isn't fully implemented in AppContext, so fallback to add
                  deleteNotice(editingNotice.id);
                  addNotice(newNotice);
                } else {
                  addNotice(newNotice);
                }
                setNewNotice({ title: '', content: '', category: 'Notice', priority: 'Medium', pinned: false, imageUrl: '', linkUrl: '' });
                setEditingNotice(null);
                alert('Notice Saved!');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Title *</label>
                <input type="text" required value={newNotice.title} onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Content *</label>
                <textarea rows={3} required value={newNotice.content} onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Category</label>
                  <select value={newNotice.category} onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white">
                    <option>Notice</option>
                    <option>Alert</option>
                    <option>Update</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Priority</label>
                  <select value={newNotice.priority} onChange={(e) => setNewNotice({ ...newNotice, priority: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <input type="checkbox" checked={newNotice.pinned} onChange={(e) => setNewNotice({ ...newNotice, pinned: e.target.checked })} />
                  <span className="text-xs font-bold text-white">Pin Notice</span>
                </div>
              </div>
              <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                {editingNotice ? 'Update Notice' : 'Add Notice'}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            {notices.map((n) => (
              <div key={n.id} className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-white">{n.title}</h4>
                  <p className="text-xs text-gray-400">{n.category} • {n.priority} • {n.pinned ? 'Pinned' : 'Normal'}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => { setEditingNotice(n); setNewNotice(n); }} className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deleteNotice(n.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: EVENTS */}
      {activeTab === 'events' && (
        <div className="space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-neon-saffron" />
              <span>{editingEvent ? 'Edit Event' : 'Add New Event'}</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingEvent) {
                  updateEvent(editingEvent.id, newEvent);
                  setEditingEvent(null);
                  alert('Event updated!');
                } else {
                  addEvent(newEvent);
                  alert('Event added!');
                }
                setNewEvent({ title: '', category: 'Fest', date: new Date().toISOString().split('T')[0], time: '10:00 AM', location: '', organizer: '', description: '', imageUrl: '' });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Title *</label>
                  <input type="text" required value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Category</label>
                  <select value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white">
                    <option>Fest</option>
                    <option>Seminar</option>
                    <option>Workshop</option>
                    <option>Sports</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Date *</label>
                  <input type="date" required value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Time</label>
                  <input type="text" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
              </div>
              <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                {editingEvent ? 'Update Event' : 'Add Event'}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((ev) => (
              <div key={ev.id} className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 flex flex-col justify-between space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white">{ev.title}</h4>
                    <p className="text-xs text-gray-400">{ev.date} at {ev.time}</p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <button onClick={() => { setEditingEvent(ev); setNewEvent(ev); }} className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deleteEvent(ev.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: RESOURCES */}
      {activeTab === 'resources' && (
        <div className="space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-neon-saffron" />
              <span>{editingResource ? 'Edit Resource' : 'Add New Resource'}</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editingResource) {
                  updateResource(editingResource.id, newResource);
                  setEditingResource(null);
                  alert('Resource updated!');
                } else {
                  addResource(newResource);
                  alert('Resource added!');
                }
                setNewResource({ title: '', category: 'CS', type: 'PDF', author: 'Academic Cell', linkUrl: '', description: '' });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Title *</label>
                  <input type="text" required value={newResource.title} onChange={(e) => setNewResource({ ...newResource, title: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Link URL *</label>
                  <input type="url" required value={newResource.linkUrl} onChange={(e) => setNewResource({ ...newResource, linkUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Category</label>
                  <select value={newResource.category} onChange={(e) => setNewResource({ ...newResource, category: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white">
                    <option>CS</option><option>EE</option><option>ME</option><option>CE</option><option>General</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                {editingResource ? 'Update Resource' : 'Add Resource'}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources.map((r) => (
              <div key={r.id} className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-white">{r.title}</h4>
                  <p className="text-xs text-gray-400">{r.category} • {r.type} by {r.author}</p>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <button onClick={() => { setEditingResource(r); setNewResource(r); }} className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deleteResource(r.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: POLLS */}
      {activeTab === 'polls' && (
        <div className="space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <Vote className="w-5 h-5 text-neon-saffron" />
              <span>Create New Poll</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const validOptions = newPollOptions.filter(o => o.text.trim());
                if (validOptions.length < 2) return alert('Need at least 2 options');
                addPoll(newPollQuestion, validOptions);
                alert('Poll created!');
                setNewPollQuestion('');
                setNewPollOptions([{text: ''}, {text: ''}]);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Question *</label>
                <input type="text" required value={newPollQuestion} onChange={(e) => setNewPollQuestion(e.target.value)} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Options</label>
                {newPollOptions.map((opt, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <input type="text" required value={opt.text} onChange={(e) => {
                      const newOpts = [...newPollOptions];
                      newOpts[i].text = e.target.value;
                      setNewPollOptions(newOpts);
                    }} placeholder={`Option ${i + 1}`} className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                    {i >= 2 && (
                      <button type="button" onClick={() => setNewPollOptions(newPollOptions.filter((_, idx) => idx !== i))} className="p-2 bg-rose-500/10 text-rose-400 rounded-xl"><X className="w-4 h-4" /></button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={() => setNewPollOptions([...newPollOptions, {text: ''}])} className="text-xs text-neon-saffron font-bold flex items-center space-x-1 mt-2">
                  <Plus className="w-3 h-3" /> <span>Add Option</span>
                </button>
              </div>
              
              <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                Create Poll
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {polls.map((p) => (
              <div key={p.id} className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-primary dark:text-white">{p.question}</h4>
                  <p className="text-xs text-gray-400">{p.totalVotes || 0} Total Votes</p>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <button onClick={() => deletePoll(p.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: TICKETS */}
      {activeTab === 'tickets' && (
        <div className="space-y-6">
          <h3 className="font-headline font-bold text-xl text-primary dark:text-white">Grievance Desk Tickets</h3>
          <div className="grid grid-cols-1 gap-4">
            {tickets.map((t) => (
              <div key={t.id} className="p-5 rounded-3xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white">{t.subject}</h4>
                    <p className="text-xs text-gray-400 font-semibold">{t.authorName} ({t.authorEmail}) • {t.category}</p>
                  </div>
                  <span className={`px-2 py-1 text-[10px] font-bold rounded-full border uppercase ${t.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                    {t.status || 'Open'}
                  </span>
                </div>
                <p className="text-xs text-outline dark:text-gray-300">{t.message}</p>
                <div className="flex items-center space-x-2 pt-2 border-t border-white/10">
                  {t.status !== 'Resolved' && (
                    <button onClick={() => updateTicketStatus(t.id, 'Resolved')} className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold text-xs">Mark Resolved</button>
                  )}
                  <button onClick={() => deleteTicket(t.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
            {tickets.length === 0 && <p className="text-gray-400 text-sm">No tickets found.</p>}
          </div>
        </div>
      )}

      {/* TAB 8: SITE SETTINGS & FAQ MANAGER */}
      {activeTab === 'settings' && (
        <div className="space-y-8">
          
          {/* FAQ MANAGER SECTION */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-neon-saffron" />
              <span>{editingFaqIndex !== null ? 'Edit FAQ Item' : 'Add New FAQ Item'}</span>
            </h3>

            <form onSubmit={handleAddOrUpdateFaq} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Question Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How do I vote in Executive Elections?"
                  value={faqQ}
                  onChange={(e) => setFaqQ(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Answer Explanation *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Detailed answer provided to students..."
                  value={faqA}
                  onChange={(e) => setFaqA(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                />
              </div>

              <div className="flex items-center space-x-3">
                <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                  {editingFaqIndex !== null ? 'Update FAQ Item' : 'Add FAQ to Support Page'}
                </button>
                {editingFaqIndex !== null && (
                  <button type="button" onClick={() => { setEditingFaqIndex(null); setFaqQ(''); setFaqA(''); }} className="px-4 py-3 rounded-xl bg-surface-container dark:bg-white/10 text-xs font-bold">
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>

            <div className="space-y-3 pt-4 border-t border-surface-container dark:border-white/10">
              <h4 className="font-bold text-sm text-primary dark:text-white uppercase tracking-wider">Active Support FAQs</h4>
              {(settingsForm.helpFaqs || []).map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 flex items-start justify-between gap-4">
                  <div>
                    <h5 className="font-bold text-xs text-neon-saffron">{faq.q}</h5>
                    <p className="text-xs text-gray-300 mt-1">{faq.a}</p>
                  </div>
                  <div className="flex items-center space-x-2 shrink-0">
                    <button onClick={() => { setEditingFaqIndex(idx); setFaqQ(faq.q); setFaqA(faq.a); }} className="p-2 rounded-xl bg-amber-500/10 text-amber-400"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDeleteFaq(idx)} className="p-2 rounded-xl bg-rose-500/10 text-rose-400"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GENERAL SITE SETTINGS & MAINTENANCE TOGGLE */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <SettingsIcon className="w-5 h-5 text-neon-saffron" />
              <span>General Site Settings & Maintenance Controls</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateSettings(settingsForm);
                alert('Site settings & maintenance configuration updated successfully!');
              }}
              className="space-y-6"
            >
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wrench className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-sm text-white">System Maintenance Mode</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settingsForm.maintenanceMode}
                      onChange={(e) => setSettingsForm({ ...settingsForm, maintenanceMode: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-saffron"></div>
                  </label>
                </div>
                <input
                  type="text"
                  value={settingsForm.maintenanceMessage || ''}
                  onChange={(e) => setSettingsForm({ ...settingsForm, maintenanceMessage: e.target.value })}
                  placeholder="Custom Maintenance Banner Message..."
                  className="w-full px-4 py-2 rounded-xl bg-obsidian/60 border text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Contact Phone</label>
                  <input type="text" value={settingsForm.contactPhone} onChange={(e) => setSettingsForm({ ...settingsForm, contactPhone: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-white/5 border text-xs text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Contact Email</label>
                  <input type="text" value={settingsForm.contactEmail} onChange={(e) => setSettingsForm({ ...settingsForm, contactEmail: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-white/5 border text-xs text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Campus Address</label>
                  <input type="text" value={settingsForm.campusAddress} onChange={(e) => setSettingsForm({ ...settingsForm, campusAddress: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-white/5 border text-xs text-white" />
                </div>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                Save All Site Settings
              </button>
            </form>
          </div>

        </div>
      )}

    </div>
  );
}
