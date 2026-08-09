'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { QRCodeSVG } from 'qrcode.react';
import {
  User,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Download,
  Sparkles,
  Edit,
  Save,
  Upload,
  Lock,
  Mail,
  Phone,
  BookOpen,
  UserPlus,
  QrCode
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function ProfilePage() {
  const { userProfile, createStudentProfile, setUserProfile, hasCreatedCard, uploadFile } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Form State for new registration or edit
  const [formData, setFormData] = useState({
    name: userProfile?.name || '',
    rollNo: userProfile?.rollNo || '',
    department: userProfile?.department || 'Computer Science & Engineering',
    year: userProfile?.year || '1st Year',
    email: userProfile?.email || '',
    phone: userProfile?.phone || '',
    avatar: userProfile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300'
  });

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      setFormData((prev) => ({ ...prev, avatar: url }));
    } catch (err) {
      alert('Avatar upload failed: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleCreatePass = (e) => {
    e.preventDefault();
    const createdPass = createStudentProfile(formData);
    alert(`Success! Your Official Digital Union Pass (${createdPass.membershipId}) has been generated and saved!`);
  };

  const handleUpdatePass = (e) => {
    e.preventDefault();
    setUserProfile(formData);
    setIsEditing(false);
    alert('Student Union Digital Pass updated!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* HEADER TITLE */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Verified Digital Membership</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary dark:text-white">
          {hasCreatedCard ? 'Student Digital Union Pass 2026' : 'Register Your Student ID Card'}
        </h1>
        <p className="text-xs sm:text-sm text-outline dark:text-gray-300">
          {hasCreatedCard
            ? 'Use your unique QR code for voting identity verification, library access, and union events entry.'
            : 'Create your official digital student union membership pass to cast votes in campus elections and access union benefits.'}
        </p>
      </div>

      {/* 1. SELF-REGISTRATION FORM IF NO CARD CREATED YET */}
      {!hasCreatedCard ? (
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6 max-w-2xl mx-auto shadow-2xl">
          <div className="text-center space-y-1 pb-4 border-b border-surface-container dark:border-white/10">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-secondary-container to-neon-saffron text-white flex items-center justify-center font-bold shadow-glow-saffron">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white pt-2">
              Create Student Union Digital Pass
            </h3>
            <p className="text-xs text-outline dark:text-gray-400">Fill in your college details to issue your verified digital pass.</p>
          </div>

          <form onSubmit={handleCreatePass} className="space-y-4">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/5">
              <img src={formData.avatar} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover ring-2 ring-neon-saffron" />
              <div>
                <label className="px-4 py-2 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-bold text-primary dark:text-white cursor-pointer hover:opacity-90 flex items-center space-x-1.5">
                  <Upload className="w-4 h-4" />
                  <span>{uploading ? 'Uploading...' : 'Upload Student Photo'}</span>
                  <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                </label>
                <p className="text-[11px] text-outline dark:text-gray-400 mt-1">Uploads to Supabase Storage bucket 'photos'</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Full Student Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Roll Number / Enrollment ID *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2024-CS-108"
                  value={formData.rollNo}
                  onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Branch / Department *</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                >
                  <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electrical & Electronics">Electrical & Electronics</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Year / Batch *</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                >
                  <option value="1st Year (Batch 2025-29)">1st Year (Batch 2025-29)</option>
                  <option value="2nd Year (Batch 2024-28)">2nd Year (Batch 2024-28)</option>
                  <option value="3rd Year (Batch 2023-27)">3rd Year (Batch 2023-27)</option>
                  <option value="4th Year (Batch 2022-26)">4th Year (Batch 2022-26)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">College Email</label>
                <input
                  type="email"
                  placeholder="student@iitrungta.ac.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron hover:opacity-95 flex items-center justify-center space-x-2"
            >
              <QrCode className="w-5 h-5" />
              <span>Generate & Issue Digital Union Pass</span>
            </button>
          </form>
        </div>
      ) : (
        /* 2. VERIFIED DIGITAL PASS SHOWCASE & EDITING */
        <div className="space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 rounded-xl bg-surface-container dark:bg-white/10 text-on-surface dark:text-white font-bold text-xs border border-surface-container-high dark:border-white/10 flex items-center space-x-1.5 hover:border-neon-saffron"
            >
              <Edit className="w-4 h-4 text-neon-saffron" />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Student Pass Details'}</span>
            </button>
          </div>

          {isEditing ? (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
                <User className="w-5 h-5 text-neon-saffron" />
                <span>Update Student Profile & Photo</span>
              </h3>

              <form onSubmit={handleUpdatePass} className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/5">
                  <img src={formData.avatar} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover ring-2 ring-neon-saffron" />
                  <div>
                    <label className="px-4 py-2 rounded-xl bg-surface-container-high dark:bg-white/10 text-xs font-bold text-primary dark:text-white cursor-pointer hover:opacity-90 flex items-center space-x-1.5">
                      <Upload className="w-4 h-4" />
                      <span>{uploading ? 'Uploading...' : 'Upload New Photo'}</span>
                      <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Full Student Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Roll Number</label>
                    <input type="text" required value={formData.rollNo} onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                  </div>
                </div>

                <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                  Save Changes
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-md mx-auto glass-card rounded-3xl border border-surface-container-high dark:border-white/15 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-saffron/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-primary text-white font-black flex items-center justify-center text-sm shadow-glow-primary">
                    🏛️
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-sm text-primary dark:text-white">IIT RUNGTA UNION</h3>
                    <p className="text-[10px] text-outline dark:text-gray-400">Digital Identity 2026</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>

              <div className="flex items-center space-x-4 bg-surface-container/60 dark:bg-white/5 p-4 rounded-2xl border border-surface-container-high dark:border-white/5">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-neon-saffron shadow-md"
                />
                <div>
                  <h2 className="font-headline font-bold text-lg text-primary dark:text-white">
                    {userProfile.name}
                  </h2>
                  <p className="text-xs text-outline dark:text-gray-300 font-mono">{userProfile.rollNo}</p>
                  <p className="text-xs text-secondary dark:text-neon-saffron font-medium mt-0.5">
                    {userProfile.department}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-surface-container/60 dark:bg-white/5">
                  <p className="text-[10px] text-outline dark:text-gray-400">Membership ID</p>
                  <p className="font-mono font-bold text-primary dark:text-white mt-0.5">{userProfile.membershipId}</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-container/60 dark:bg-white/5">
                  <p className="text-[10px] text-outline dark:text-gray-400">Batch Year</p>
                  <p className="font-bold text-primary dark:text-white mt-0.5">{userProfile.year}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white text-center space-y-2 shadow-inner">
                <QRCodeSVG
                  value={`https://iitrungta.fun/verify?id=${userProfile.membershipId}&roll=${userProfile.rollNo}`}
                  size={140}
                  className="mx-auto"
                />
                <p className="text-[10px] font-mono font-bold text-gray-700">
                  SCAN TO VERIFY VOTER PASS
                </p>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
