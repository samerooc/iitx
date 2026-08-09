'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [settings, setSettings] = useState({
    siteTitle: 'IIT RUNGTA',
    subTitle: 'Student Union Portal',
    logoText: '🏛️',
    logoUrl: '',
    faviconUrl: '',
    heroTitle: 'Voice of Democracy, Strength of Unity.',
    heroSubtext: 'IIT Rungta Union 2026 - Padhai se lekar pyar tak, sab ke saath hogi IIT Rungta ki team!',
    tickerAlert: 'Student Union Executive Elections 2026 Schedule Active',
    contactPhone: '+91 98765 43210',
    contactEmail: 'union@iitrungta.fun',
    campusAddress: 'IIT Rungta Campus, Bhilai, Chhattisgarh, India 490024',
    whatsappGcLink: 'https://chat.whatsapp.com/',
    telegramLink: 'https://t.me/',
    instagramLink: 'https://instagram.com/',
    discordLink: 'https://discord.gg/',
    maintenanceMode: false,
    maintenanceMessage: 'The IIT Rungta Union Portal is currently undergoing scheduled database maintenance. We will be back online shortly!',
    disclaimerText: '⚠️ DISCLAIMER: This is an educational mock website built strictly for skill demonstration and portfolio purposes. It has no real affiliation with any educational institution.',
    helpFaqs: [
      { q: 'How do I issue my Digital Union Pass?', a: 'Click "Create Student Pass" in the top bar or visit /profile to register your details & photo.' },
      { q: 'Is voting anonymous and secure?', a: 'Yes! Every vote is cryptographically hashed and logged with voter verification.' },
      { q: 'How do I raise a grievance with the Union?', a: 'Visit the Support & Grievance Desk at /support to send a direct message to the Secretariat.' }
    ]
  });

  const [ministers, setMinisters] = useState([]);
  const [banners, setBanners] = useState([]);
  const [notices, setNotices] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [polls, setPolls] = useState([]);
  const [events, setEvents] = useState([]);
  const [resources, setResources] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [adminsList, setAdminsList] = useState([]);
  const [registeredStudents, setRegisteredStudents] = useState([]);

  // Auth States
  const [currentAdmin, setCurrentAdmin] = useState(null);
  
  // Student Profile State
  const [userProfile, setUserProfile] = useState(null);
  const [disclaimerDismissed, setDisclaimerDismissed] = useState(false);

  // Voting State
  const [userVoteState, setUserVoteState] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [voteReceipt, setVoteReceipt] = useState(null);

  // Optimized parallel data fetch with fallback & caching
  const refreshAllData = useCallback(async () => {
    if (typeof window === 'undefined') return;
    try {
      const [resSet, resMin, resBan, resNot, resCand, resPoll, resEv, resRes, resTick, resStud] = await Promise.all([
        fetch('/api/settings').then((r) => r.json()).catch(() => null),
        fetch('/api/ministers').then((r) => r.json()).catch(() => []),
        fetch('/api/banners').then((r) => r.json()).catch(() => []),
        fetch('/api/notices').then((r) => r.json()).catch(() => []),
        fetch('/api/candidates').then((r) => r.json()).catch(() => []),
        fetch('/api/polls').then((r) => r.json()).catch(() => []),
        fetch('/api/events').then((r) => r.json()).catch(() => []),
        fetch('/api/resources').then((r) => r.json()).catch(() => []),
        fetch('/api/tickets').then((r) => r.json()).catch(() => []),
        fetch('/api/students').then((r) => r.json()).catch(() => [])
      ]);

      if (resSet && !resSet.error) setSettings((prev) => ({ ...prev, ...resSet }));
      if (Array.isArray(resMin) && resMin.length > 0) setMinisters(resMin);
      if (Array.isArray(resBan) && resBan.length > 0) setBanners(resBan);
      if (Array.isArray(resNot) && resNot.length > 0) setNotices(resNot);
      if (Array.isArray(resCand) && resCand.length > 0) setCandidates(resCand);
      if (Array.isArray(resPoll) && resPoll.length > 0) setPolls(resPoll);
      if (Array.isArray(resEv) && resEv.length > 0) setEvents(resEv);
      if (Array.isArray(resRes) && resRes.length > 0) setResources(resRes);
      if (Array.isArray(resTick) && resTick.length > 0) setTickets(resTick);
      if (Array.isArray(resStud) && resStud.length > 0) setRegisteredStudents(resStud);
    } catch (e) {
      console.error('Error fetching Supabase data:', e);
    }
  }, []);

  const fetchAdmins = useCallback(async () => {
    if (typeof window === 'undefined') return;
    try {
      const res = await fetch('/api/admins').then((r) => r.json()).catch(() => []);
      if (Array.isArray(res)) setAdminsList(res);
    } catch (e) {
      console.error('Error fetching admins:', e);
    }
  }, []);

  // Restore Admin & Student sessions from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Theme restore
    const savedTheme = localStorage.getItem('iitr_theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Restore Admin Session
    const savedAdmin = localStorage.getItem('iitr_admin_session');
    if (savedAdmin) {
      try {
        setCurrentAdmin(JSON.parse(savedAdmin));
      } catch (e) {}
    }

    // Restore Student Profile Session
    const savedProfile = localStorage.getItem('iitr_user_session');
    if (savedProfile) {
      try {
        setUserProfile(JSON.parse(savedProfile));
      } catch (e) {}
    }

    // Initial Data Fetch
    refreshAllData();
  }, [refreshAllData]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('iitr_theme', newTheme);
    }
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Student Self-Registration & ID Card Generation with Instagram & Snapchat
  const createStudentProfile = (formData) => {
    const membershipId = `IITR-SU-${Math.floor(10000 + Math.random() * 90000)}`;
    const newPass = {
      name: formData.name,
      rollNo: formData.rollNo || '2024-CS-001',
      department: formData.department || 'Computer Science & Engineering',
      year: formData.year || '1st Year',
      email: formData.email || '',
      phone: formData.phone || '',
      instaUsername: formData.instaUsername || '',
      snapUsername: formData.snapUsername || '',
      avatar: formData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
      membershipId,
      status: 'Verified Member',
      createdAt: new Date().toISOString().split('T')[0]
    };

    setUserProfile(newPass);
    if (typeof window !== 'undefined') {
      localStorage.setItem('iitr_user_session', JSON.stringify(newPass));
    }
    return newPass;
  };

  const updateStudentProfile = (newProfileData) => {
    const updated = { ...userProfile, ...newProfileData };
    setUserProfile(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('iitr_user_session', JSON.stringify(updated));
    }
  };

  // Admin Auth Operations
  const loginAdmin = async (username, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.success && data.admin) {
      setCurrentAdmin(data.admin);
      if (typeof window !== 'undefined') {
        localStorage.setItem('iitr_admin_session', JSON.stringify(data.admin));
      }
      return { success: true };
    }
    return { success: false, error: data.error || 'Invalid credentials' };
  };

  const logoutAdmin = () => {
    setCurrentAdmin(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('iitr_admin_session');
    }
  };

  const hasPermission = (perm) => {
    if (!currentAdmin) return false;
    if (currentAdmin.role === 'MASTER_ADMIN' || currentAdmin.permissions?.includes('all')) return true;
    return currentAdmin.permissions?.includes(perm);
  };

  // File Upload
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (data.success) {
      return data.url;
    }
    throw new Error(data.error || 'Upload failed');
  };

  // Settings API
  const updateSettings = async (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSettings)
    });
    const data = await res.json();
    if (data.success) {
      setSettings(data.settings);
    }
  };

  // Ministers API
  const addMinister = async (dataObj) => {
    const tempId = 'm-' + Date.now();
    const tempMin = { id: tempId, ...dataObj };
    setMinisters((prev) => [...prev, tempMin]);

    const res = await fetch('/api/ministers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataObj)
    });
    const data = await res.json();
    if (data.success && data.minister) {
      setMinisters((prev) => prev.map((m) => (m.id === tempId ? data.minister : m)));
    }
  };

  const updateMinister = async (id, dataObj) => {
    setMinisters((prev) => prev.map((m) => (m.id === id ? { ...m, ...dataObj } : m)));
    await fetch(`/api/ministers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataObj)
    });
  };

  const deleteMinister = async (id) => {
    setMinisters((prev) => prev.filter((m) => m.id !== id));
    await fetch(`/api/ministers/${id}`, { method: 'DELETE' });
  };

  // Banners API
  const addBanner = async (dataObj) => {
    const tempId = 'b-' + Date.now();
    const tempB = { id: tempId, ...dataObj };
    setBanners((prev) => [...prev, tempB]);

    const res = await fetch('/api/banners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataObj)
    });
    const data = await res.json();
    if (data.success && data.banner) {
      setBanners((prev) => prev.map((b) => (b.id === tempId ? data.banner : b)));
    }
  };

  const deleteBanner = async (id) => {
    setBanners((prev) => prev.filter((b) => b.id !== id));
    await fetch(`/api/banners/${id}`, { method: 'DELETE' });
  };

  // Sub Admin API
  const addSubAdmin = async (adminData) => {
    const res = await fetch('/api/admins', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adminData)
    });
    const data = await res.json();
    if (data.success) fetchAdmins();
    return data;
  };

  const deleteSubAdmin = async (id) => {
    setAdminsList((prev) => prev.filter((a) => a.id !== id));
    await fetch(`/api/admins?id=${id}`, { method: 'DELETE' });
  };

  // Notice API
  const addNotice = async (noticeData) => {
    const tempId = 'n-' + Date.now();
    const tempN = {
      id: tempId,
      ...noticeData,
      date: new Date().toISOString().split('T')[0]
    };
    setNotices((prev) => [tempN, ...prev]);

    const res = await fetch('/api/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noticeData)
    });
    const data = await res.json();
    if (data.success && data.notice) {
      setNotices((prev) => prev.map((n) => (n.id === tempId ? data.notice : n)));
    }
  };

  const deleteNotice = async (id) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
    await fetch(`/api/notices/${id}`, { method: 'DELETE' });
  };

  // Candidate API
  const addCandidate = async (candidateData) => {
    const res = await fetch('/api/candidates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(candidateData)
    });
    const data = await res.json();
    if (data.success && data.candidate) {
      setCandidates((prev) => [...prev, data.candidate]);
    }
  };

  const deleteCandidate = async (id) => {
    setCandidates((prev) => prev.filter((c) => c.id !== id));
    await fetch(`/api/candidates/${id}`, { method: 'DELETE' });
  };

  // Election Ballot API
  const castElectionVote = (position, candidateId) => {
    setUserVoteState((prev) => ({ ...prev, [position]: candidateId }));
  };

  const submitFinalBallot = async () => {
    const voterId = userProfile?.membershipId || 'IITR-SU-ANON';
    const res = await fetch('/api/elections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selections: userVoteState, voterId })
    });
    const data = await res.json();
    if (data.success) {
      setHasVoted(true);
      setVoteReceipt(data.receipt);
      fetch('/api/candidates').then((r) => r.json()).then((c) => setCandidates(c)).catch(() => {});
      return data.receipt;
    }
    throw new Error(data.error || 'Failed to submit ballot');
  };

  // Polls API
  const addPoll = async (question, optionsArray) => {
    const res = await fetch('/api/polls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, options: optionsArray })
    });
    const data = await res.json();
    if (data.success && data.poll) {
      setPolls((prev) => [data.poll, ...prev]);
    }
  };

  const castPollVote = async (pollId, candidateId, voterName, instaUsername, snapUsername) => {
    setPolls((prev) =>
      prev.map((p) => {
        if (p.id === pollId) {
          return {
            ...p,
            totalVotes: (p.totalVotes || 0) + 1,
            options: p.options?.map((opt) => {
              if (opt.id === candidateId || opt.text === candidateId) {
                return { ...opt, votes: (opt.votes || 0) + 1 };
              }
              return opt;
            })
          };
        }
        return p;
      })
    );

    await fetch(`/api/polls/${pollId}/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ candidateId, voterName, instaUsername, snapUsername })
    });

    // Refresh registered students log
    fetch('/api/students').then((r) => r.json()).then((s) => setRegisteredStudents(s)).catch(() => {});
  };

  const deletePoll = async (id) => {
    setPolls((prev) => prev.filter((p) => p.id !== id));
    await fetch(`/api/polls/${id}`, { method: 'DELETE' });
  };

  // Events API
  const addEvent = async (eventData) => {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    const data = await res.json();
    if (data.success && data.event) {
      setEvents((prev) => [data.event, ...prev]);
    }
  };

  const updateEvent = async (id, eventData) => {
    setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, ...eventData } : e)));
    await fetch(`/api/events/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
  };

  const deleteEvent = async (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
    await fetch(`/api/events/${id}`, { method: 'DELETE' });
  };

  const toggleRSVP = (eventId) => {
    setEvents((prev) =>
      prev.map((e) => {
        if (e.id === eventId) {
          return { ...e, rsvped: !e.rsvped, attendees: e.rsvped ? e.attendees - 1 : e.attendees + 1 };
        }
        return e;
      })
    );
  };

  // Resources API
  const addResource = async (resourceData) => {
    const res = await fetch('/api/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resourceData)
    });
    const data = await res.json();
    if (data.success && data.resource) {
      setResources((prev) => [data.resource, ...prev]);
    }
  };

  const updateResource = async (id, resourceData) => {
    setResources((prev) => prev.map((r) => (r.id === id ? { ...r, ...resourceData } : r)));
    await fetch(`/api/resources/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resourceData)
    });
  };

  const deleteResource = async (id) => {
    setResources((prev) => prev.filter((r) => r.id !== id));
    await fetch(`/api/resources/${id}`, { method: 'DELETE' });
  };

  // Tickets API
  const addTicket = async (ticketData) => {
    const res = await fetch('/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticketData)
    });
    const data = await res.json();
    if (data.success && data.ticket) {
      setTickets((prev) => [data.ticket, ...prev]);
    }
  };

  const updateTicketStatus = async (id, status) => {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status, isRead: true } : t)));
    await fetch(`/api/tickets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, isRead: true })
    });
  };

  const deleteTicket = async (id) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
    await fetch(`/api/tickets/${id}`, { method: 'DELETE' });
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        settings,
        updateSettings,
        ministers,
        addMinister,
        updateMinister,
        deleteMinister,
        banners,
        addBanner,
        deleteBanner,
        currentAdmin,
        loginAdmin,
        logoutAdmin,
        hasPermission,
        adminsList,
        fetchAdmins,
        addSubAdmin,
        deleteSubAdmin,
        uploadFile,
        notices,
        addNotice,
        deleteNotice,
        candidates,
        addCandidate,
        deleteCandidate,
        polls,
        addPoll,
        castPollVote,
        deletePoll,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        toggleRSVP,
        resources,
        addResource,
        updateResource,
        deleteResource,
        tickets,
        addTicket,
        updateTicketStatus,
        deleteTicket,
        registeredStudents,
        userProfile,
        createStudentProfile,
        setUserProfile: updateStudentProfile,
        hasCreatedCard: Boolean(userProfile),
        disclaimerDismissed,
        setDisclaimerDismissed,
        userVoteState,
        castElectionVote,
        hasVoted,
        submitFinalBallot,
        voteReceipt,
        refreshAllData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
