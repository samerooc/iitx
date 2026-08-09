'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';

export const dynamic = 'force-dynamic';

import {
  ShieldCheck,
  Plus,
  Trash2,
  Lock,
  Unlock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Vote,
  TrendingUp,
  MessageSquare,
  Sparkles,
  BarChart2,
  Upload,
  UserPlus,
  Users,
  Settings,
  Edit,
  Key,
  LogOut,
  Calendar,
  BookOpen,
  Image as ImageIcon,
  Check,
  Crown,
  Share2,
  Link as LinkIcon,
  Eye,
  FileSpreadsheet
} from 'lucide-react';

export default function AdminPage() {
  const {
    currentAdmin,
    loginAdmin,
    logoutAdmin,
    hasPermission,
    settings,
    updateSettings,
    adminsList,
    fetchAdmins,
    addSubAdmin,
    deleteSubAdmin,
    uploadFile,
    ministers,
    addMinister,
    deleteMinister,
    banners,
    addBanner,
    deleteBanner,
    notices,
    addNotice,
    deleteNotice,
    polls,
    addPoll,
    deletePoll,
    tickets,
    updateTicketStatus,
    deleteTicket
  } = useApp();

  // Login Form
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState('ministers');
  const [uploading, setUploading] = useState(false);

  // Settings State
  const [settingsForm, setSettingsForm] = useState(settings);

  // Minister Form
  const [ministerName, setMinisterName] = useState('');
  const [ministerPortfolio, setMinisterPortfolio] = useState('President');
  const [ministerTagline, setMinisterTagline] = useState('');
  const [ministerDesc, setMinisterDesc] = useState('');
  const [ministerPhoto, setMinisterPhoto] = useState('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400');
  const [ministerInsta, setMinisterInsta] = useState('');

  // Banner Form
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerSubtitle, setBannerSubtitle] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [bannerLink, setBannerLink] = useState('');

  // Notice Form
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [noticeImage, setNoticeImage] = useState('');
  const [noticeIsImportant, setNoticeIsImportant] = useState(false);

  // Poll Form
  const [pollTitle, setPollTitle] = useState('');
  const [cand1Name, setCand1Name] = useState('');
  const [cand1Photo, setCand1Photo] = useState('');
  const [cand2Name, setCand2Name] = useState('');
  const [cand2Photo, setCand2Photo] = useState('');

  // Voter Audit Modal
  const [auditVoters, setAuditVoters] = useState([]);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  // Sub-Admin Form
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [subPassword, setSubPassword] = useState('');
  const [subPerms, setSubPerms] = useState({
    ministers: true,
    polls: true,
    notices: true,
    banners: true,
    messages: true,
    settings: false
  });

  useEffect(() => {
    setSettingsForm(settings);
    if (currentAdmin?.role === 'MASTER_ADMIN') {
      fetchAdmins();
    }
  }, [settings, currentAdmin]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    const res = await loginAdmin(emailInput, passwordInput);
    if (!res.success) {
      setLoginError(res.error);
    }
  };

  const handleQuickLogin = async (usr, pwd) => {
    setEmailInput(usr);
    setPasswordInput(pwd);
    const res = await loginAdmin(usr, pwd);
    if (!res.success) setLoginError(res.error);
  };

  const handleFileUpload = async (file, setUrlFn) => {
    setUploading(true);
    try {
      const url = await uploadFile(file);
      setUrlFn(url);
    } catch (err) {
      alert('Upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    await updateSettings(settingsForm);
    alert('Supabase Site Settings updated successfully!');
  };

  const handleCreateMinister = async (e) => {
    e.preventDefault();
    await addMinister({
      name: ministerName,
      portfolio: ministerPortfolio,
      tagline: ministerTagline,
      description: ministerDesc,
      photo_url: ministerPhoto,
      instagram_url: ministerInsta,
      display_order: ministers.length + 1
    });
    setMinisterName('');
    setMinisterTagline('');
    setMinisterDesc('');
    alert('Cabinet Minister added to Supabase!');
  };

  const handleCreateBanner = async (e) => {
    e.preventDefault();
    await addBanner({
      title: bannerTitle,
      subtitle: bannerSubtitle,
      image_url: bannerImage,
      link_url: bannerLink
    });
    setBannerTitle('');
    setBannerSubtitle('');
    setBannerImage('');
    alert('Hero Banner added to Supabase!');
  };

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    await addNotice({
      title: noticeTitle,
      content: noticeContent,
      imageUrl: noticeImage,
      pinned: noticeIsImportant
    });
    setNoticeTitle('');
    setNoticeContent('');
    setNoticeImage('');
    alert('Notice published to Supabase database!');
  };

  const handleCreatePoll = async (e) => {
    e.preventDefault();
    await addPoll(pollTitle, [
      { text: cand1Name, photoUrl: cand1Photo },
      { text: cand2Name, photoUrl: cand2Photo }
    ]);
    setPollTitle('');
    setCand1Name('');
    setCand2Name('');
    alert('Poll & Candidates registered in Supabase!');
  };

  const handleFetchVoters = async (pollId) => {
    try {
      const res = await fetch(`/api/polls/${pollId}/voters`);
      const data = await res.json();
      setAuditVoters(data || []);
      setAuditModalOpen(true);
    } catch (e) {
      alert('Could not fetch voter records');
    }
  };

  const handleCreateSubAdmin = async (e) => {
    e.preventDefault();
    const perms = Object.keys(subPerms).filter((k) => subPerms[k]);
    const res = await addSubAdmin({
      name: subName,
      email: subEmail,
      password: subPassword,
      role: 'sub_admin',
      permissions: perms
    });
    if (res.error) alert(res.error);
    else {
      setSubName('');
      setSubEmail('');
      setSubPassword('');
      alert('Sub-Admin account created in Supabase admin_roles!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* UNAUTHENTICATED LOGIN SCREEN */}
      {!currentAdmin ? (
        <div className="max-w-md mx-auto glass-card p-8 rounded-3xl border border-surface-container-high dark:border-white/10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary text-white flex items-center justify-center font-bold shadow-glow-primary">
              <ShieldCheck className="w-8 h-8 text-neon-saffron" />
            </div>
            <h1 className="font-headline font-bold text-2xl text-primary dark:text-white">
              Supabase Admin Governance
            </h1>
            <p className="text-xs text-outline dark:text-gray-400">
              Sign in with your Supabase <code className="text-neon-saffron font-mono">admin_roles</code> email & password.
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                Admin Email / Username
              </label>
              <input
                type="text"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="masteradmin or admin@iitrungta.fun"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron hover:opacity-95"
            >
              Log In to Supabase Admin
            </button>
          </form>

          {/* Quick Demo Login Presets */}
          <div className="pt-4 border-t border-surface-container dark:border-white/10 space-y-2">
            <p className="text-[11px] font-bold text-outline dark:text-gray-400 uppercase tracking-wider text-center">
              Quick Admin Presets
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => handleQuickLogin('masteradmin', 'master123')}
                className="p-2 rounded-xl bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20 hover:bg-purple-500/20"
              >
                👑 Master Admin
              </button>
              <button
                onClick={() => handleQuickLogin('electioncommissioner', 'sub123')}
                className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20 hover:bg-emerald-500/20"
              >
                🗳️ Elections Sub-Admin
              </button>
            </div>
          </div>

        </div>
      ) : (
        <>
          {/* AUTHENTICATED HEADER BANNER */}
          <div className="p-6 rounded-3xl bg-surface-container dark:bg-obsidian-card border border-surface-container-high dark:border-white/10 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-secondary-container to-neon-saffron text-white flex items-center justify-center font-bold shadow-md">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="font-headline font-bold text-xl text-primary dark:text-white">
                    {currentAdmin.name}
                  </h1>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    currentAdmin.role === 'MASTER_ADMIN'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {currentAdmin.role === 'MASTER_ADMIN' ? 'Master Super Admin' : 'Sub-Admin'}
                  </span>
                </div>
                <p className="text-xs text-outline dark:text-gray-400 mt-0.5">
                  Connected to Supabase DB • Permissions: <span className="font-mono text-neon-saffron">{currentAdmin.permissions?.join(', ')}</span>
                </p>
              </div>
            </div>

            <button
              onClick={logoutAdmin}
              className="px-4 py-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/30 text-xs font-bold flex items-center space-x-1.5 hover:bg-rose-500 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* TAB NAVIGATION */}
          <div className="flex items-center space-x-2 border-b border-surface-container-high dark:border-white/10 pb-3 overflow-x-auto">
            {hasPermission('ministers') && (
              <button
                onClick={() => setActiveTab('ministers')}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'ministers'
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                    : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span>Cabinet & Ministers ({ministers.length})</span>
              </button>
            )}

            {hasPermission('notices') && (
              <button
                onClick={() => setActiveTab('notices')}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'notices'
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                    : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Notices Board ({notices.length})</span>
              </button>
            )}

            {hasPermission('polls') && (
              <button
                onClick={() => setActiveTab('polls')}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'polls'
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                    : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300'
                }`}
              >
                <Vote className="w-4 h-4" />
                <span>Polls & Voter Audit ({polls.length})</span>
              </button>
            )}

            {hasPermission('banners') && (
              <button
                onClick={() => setActiveTab('banners')}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'banners'
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                    : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Home Hero Banners ({banners.length})</span>
              </button>
            )}

            {hasPermission('messages') && (
              <button
                onClick={() => setActiveTab('messages')}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'messages'
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                    : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Messages ({tickets.length})</span>
              </button>
            )}

            {hasPermission('settings') && (
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'settings'
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                    : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Supabase Site Settings</span>
              </button>
            )}

            {currentAdmin.role === 'MASTER_ADMIN' && (
              <button
                onClick={() => setActiveTab('admins')}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center space-x-1.5 whitespace-nowrap ${
                  activeTab === 'admins'
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                    : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Sub-Admin RBAC Roles</span>
              </button>
            )}
          </div>

          {/* TAB 1: CABINET & MINISTERS */}
          {activeTab === 'ministers' && hasPermission('ministers') && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-5 glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-neon-saffron" />
                  <span>Add Cabinet Minister / Leader</span>
                </h3>

                <form onSubmit={handleCreateMinister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                      Minister Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Sharma"
                      value={ministerName}
                      onChange={(e) => setMinisterName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                        Portfolio / Title
                      </label>
                      <select
                        value={ministerPortfolio}
                        onChange={(e) => setMinisterPortfolio(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                      >
                        <option value="President">President</option>
                        <option value="Vice President">Vice President</option>
                        <option value="General Secretary">General Secretary</option>
                        <option value="Sports Minister">Sports Minister</option>
                        <option value="Cultural Minister">Cultural Minister</option>
                        <option value="Academic Secretary">Academic Secretary</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                        Photo (Supabase Storage)
                      </label>
                      <label className="px-3 py-2.5 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-bold text-primary dark:text-white cursor-pointer hover:opacity-90 flex items-center space-x-1.5">
                        <Upload className="w-3.5 h-3.5" />
                        <span className="truncate">{uploading ? 'Uploading...' : 'Upload'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], setMinisterPhoto)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                      Tagline Agenda
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 24x7 Library & Campus Digital Transparency"
                      value={ministerTagline}
                      onChange={(e) => setMinisterTagline(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                      Description / Bio
                    </label>
                    <textarea
                      rows={3}
                      value={ministerDesc}
                      onChange={(e) => setMinisterDesc(e.target.value)}
                      placeholder="Brief overview of portfolio responsibilities..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm"
                  >
                    Save Minister to Supabase DB
                  </button>
                </form>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white">
                  Active Ministers & Executive Council ({ministers.length})
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ministers.map((m) => (
                    <div
                      key={m.id}
                      className="glass-card p-5 rounded-2xl border border-surface-container-high dark:border-white/10 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center space-x-3">
                        <img src={m.photo_url || m.photoUrl} alt={m.name} className="w-14 h-14 rounded-xl object-cover ring-2 ring-neon-saffron" />
                        <div>
                          <h4 className="font-bold text-sm text-primary dark:text-white">{m.name}</h4>
                          <p className="text-xs text-secondary dark:text-neon-saffron font-semibold">{m.portfolio}</p>
                          <p className="text-[11px] text-outline dark:text-gray-400 line-clamp-1">{m.tagline}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteMinister(m.id)}
                        className="p-2 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: POLLS & VOTER TRACKING */}
          {activeTab === 'polls' && hasPermission('polls') && (
            <div className="space-y-8">
              
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4 max-w-3xl">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-neon-saffron" />
                  <span>Create Live Poll & Candidate Options</span>
                </h3>

                <form onSubmit={handleCreatePoll} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                      Poll Title / Question
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Student Union Executive Elections 2026 - President"
                      value={pollTitle}
                      onChange={(e) => setPollTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-outline dark:text-gray-300">
                        Candidate 1 Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rohan Verma"
                        value={cand1Name}
                        onChange={(e) => setCand1Name(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                      />
                      <label className="px-3 py-2 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-semibold cursor-pointer flex items-center space-x-1.5">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{cand1Photo ? 'Photo Uploaded ✓' : 'Upload Candidate 1 Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], setCand1Photo)}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-outline dark:text-gray-300">
                        Candidate 2 Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ananya Patel"
                        value={cand2Name}
                        onChange={(e) => setCand2Name(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white"
                      />
                      <label className="px-3 py-2 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-semibold cursor-pointer flex items-center space-x-1.5">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{cand2Photo ? 'Photo Uploaded ✓' : 'Upload Candidate 2 Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], setCand2Photo)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm"
                  >
                    Launch Live Poll in Supabase
                  </button>
                </form>
              </div>

              {/* Active Polls & Audit Reports */}
              <div className="space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white">
                  Active Polls & Voter Tracking ({polls.length})
                </h3>

                <div className="space-y-4">
                  {polls.map((p) => (
                    <div
                      key={p.id}
                      className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-headline font-bold text-lg text-primary dark:text-white">{p.question}</h4>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleFetchVoters(p.id)}
                            className="px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20 flex items-center space-x-1"
                          >
                            <FileSpreadsheet className="w-3.5 h-3.5" />
                            <span>Voter Audit Report</span>
                          </button>
                          <button onClick={() => deletePoll(p.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {p.options?.map((opt, idx) => (
                          <div key={idx} className="p-3.5 rounded-2xl bg-surface-container dark:bg-white/5 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {opt.photoUrl && <img src={opt.photoUrl} alt={opt.text} className="w-10 h-10 rounded-full object-cover" />}
                              <span className="text-sm font-semibold text-primary dark:text-white">{opt.text}</span>
                            </div>
                            <span className="font-headline text-lg font-bold text-neon-saffron">{opt.votes} Votes</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: NOTICES BOARD */}
          {activeTab === 'notices' && hasPermission('notices') && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-5 glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white">Publish Notice</h3>

                <form onSubmit={handleCreateNotice} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Title</label>
                    <input type="text" required value={noticeTitle} onChange={(e) => setNoticeTitle(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Image Attachment</label>
                    <label className="px-4 py-2.5 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-bold text-primary dark:text-white cursor-pointer hover:opacity-90 flex items-center space-x-1.5">
                      <Upload className="w-4 h-4" />
                      <span>{noticeImage ? 'Image Uploaded ✓' : 'Upload Image'}</span>
                      <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], setNoticeImage)} className="hidden" />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Content</label>
                    <textarea rows={4} required value={noticeContent} onChange={(e) => setNoticeContent(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>

                  <label className="flex items-center space-x-2 text-xs font-semibold cursor-pointer">
                    <input type="checkbox" checked={noticeIsImportant} onChange={(e) => setNoticeIsImportant(e.target.checked)} className="rounded text-neon-saffron" />
                    <span className="text-on-surface dark:text-gray-200">Mark as Urgent / Important</span>
                  </label>

                  <button type="submit" className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm">Publish Notice to Supabase</button>
                </form>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white">Active Notices ({notices.length})</h3>
                {notices.map((n) => (
                  <div key={n.id} className="glass-card p-4 rounded-2xl border border-surface-container-high dark:border-white/10 flex items-center justify-between gap-4">
                    <div>
                      {n.pinned && <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 text-[10px] font-bold">URGENT</span>}
                      <h4 className="font-bold text-sm text-primary dark:text-white mt-1">{n.title}</h4>
                    </div>
                    <button onClick={() => deleteNotice(n.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: SUPABASE SITE SETTINGS */}
          {activeTab === 'settings' && hasPermission('settings') && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6 max-w-3xl">
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
                <Settings className="w-5 h-5 text-neon-saffron" />
                <span>Supabase site_settings Configuration</span>
              </h3>

              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Logo Icon Emoji</label>
                    <input type="text" value={settingsForm.logoText} onChange={(e) => setSettingsForm({ ...settingsForm, logoText: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Upload Site Logo Image</label>
                    <label className="px-4 py-2.5 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-bold text-primary dark:text-white cursor-pointer flex items-center space-x-1.5">
                      <Upload className="w-4 h-4" />
                      <span>{settingsForm.logoUrl ? 'Logo Uploaded ✓' : 'Upload Logo'}</span>
                      <input type="file" accept="image/*" onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], (url) => setSettingsForm({ ...settingsForm, logoUrl: url }))} className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">WhatsApp Group Link</label>
                    <input type="text" value={settingsForm.whatsappGcLink} onChange={(e) => setSettingsForm({ ...settingsForm, whatsappGcLink: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Telegram Channel Link</label>
                    <input type="text" value={settingsForm.telegramLink} onChange={(e) => setSettingsForm({ ...settingsForm, telegramLink: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Contact Email</label>
                    <input type="email" value={settingsForm.contactEmail} onChange={(e) => setSettingsForm({ ...settingsForm, contactEmail: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Contact Phone</label>
                    <input type="text" value={settingsForm.contactPhone} onChange={(e) => setSettingsForm({ ...settingsForm, contactPhone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                </div>

                <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                  Save Supabase Settings
                </button>
              </form>
            </div>
          )}

          {/* TAB 5: SUB-ADMIN RBAC MANAGEMENT */}
          {activeTab === 'admins' && currentAdmin.role === 'MASTER_ADMIN' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white flex items-center space-x-2">
                  <UserPlus className="w-5 h-5 text-neon-saffron" />
                  <span>Create Sub-Admin Role</span>
                </h3>

                <form onSubmit={handleCreateSubAdmin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Full Name</label>
                    <input type="text" required value={subName} onChange={(e) => setSubName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Email / Username</label>
                    <input type="text" required value={subEmail} onChange={(e) => setSubEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Password</label>
                    <input type="text" required value={subPassword} onChange={(e) => setSubPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-surface-container dark:border-white/5">
                    <label className="block text-xs font-bold text-outline dark:text-gray-300 uppercase">Permissions JSONB:</label>
                    {Object.keys(subPerms).map((k) => (
                      <label key={k} className="flex items-center space-x-2 text-xs text-on-surface dark:text-gray-200 cursor-pointer">
                        <input type="checkbox" checked={subPerms[k]} onChange={(e) => setSubPerms({ ...subPerms, [k]: e.target.checked })} className="rounded text-neon-saffron" />
                        <span>{k}</span>
                      </label>
                    ))}
                  </div>

                  <button type="submit" className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm">Create Sub-Admin in Supabase</button>
                </form>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white">Active Admin Roles ({adminsList.length})</h3>
                {adminsList.map((adm) => (
                  <div key={adm.id} className="glass-card p-4 rounded-2xl border border-surface-container-high dark:border-white/10 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-primary dark:text-white">{adm.name} ({adm.email})</h4>
                      <p className="text-xs text-neon-saffron font-mono">{adm.role} • Permissions: {JSON.stringify(adm.permissions)}</p>
                    </div>
                    {adm.role !== 'master' && (
                      <button onClick={() => deleteSubAdmin(adm.id)} className="p-2 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </>
      )}

      {/* VOTER AUDIT MODAL */}
      {auditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
          <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-2xl rounded-3xl p-6 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container dark:border-white/10">
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-neon-saffron" />
                <span>Supabase voter_records Audit List ({auditVoters.length})</span>
              </h3>
              <button onClick={() => setAuditModalOpen(false)} className="px-3 py-1 bg-surface-container dark:bg-white/10 text-xs font-bold rounded-lg">Close</button>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-2">
              {auditVoters.length === 0 ? (
                <p className="text-xs text-center text-outline dark:text-gray-400 py-6">No voter records logged for this poll yet.</p>
              ) : (
                auditVoters.map((rec) => (
                  <div key={rec.id} className="p-3 rounded-xl bg-surface-container dark:bg-white/5 text-xs flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary dark:text-white">{rec.voter_name}</p>
                      <p className="text-[10px] text-outline dark:text-gray-400">Insta: @{rec.insta_username || 'N/A'} • Snap: @{rec.snap_username || 'N/A'}</p>
                    </div>
                    <span className="font-bold text-neon-saffron">{rec.poll_candidates?.name || 'Voted'}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
