import Link from 'next/link';
import { Home } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h1 className="font-headline font-bold text-6xl text-primary dark:text-white">404</h1>
      <h2 className="font-headline font-bold text-2xl text-on-surface dark:text-gray-200">
        Page Not Found
      </h2>
      <p className="text-xs sm:text-sm text-outline dark:text-gray-400 max-w-md">
        The requested student union route does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-primary dark:bg-neon-saffron text-white dark:text-obsidian font-bold text-xs inline-flex items-center space-x-2 shadow-md"
      >
        <Home className="w-4 h-4" />
        <span>Return to Home & Notice Board</span>
      </Link>
    </div>
  );
}
