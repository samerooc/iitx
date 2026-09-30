'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function QuestionIndexPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/question/math');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-obsidian text-on-surface dark:text-white">
      <div className="text-center space-y-3">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-sm font-semibold">Redirecting to Mathematics Question Bank &amp; Practice...</p>
      </div>
    </div>
  );
}
