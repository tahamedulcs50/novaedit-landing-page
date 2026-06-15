import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            NovaEdit
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
          <Link href="#features" className="mx-4 text-gray-600 hover:text-gray-900 dark:hover:text-white">
            Features
          </Link>
          <Link href="#waitlist" className="mx-4 text-gray-600 hover:text-gray-900 dark:hover:text-white">
            Waitlist
          </Link>
          <Link href="/demo" className="ml-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white transition">
            Request Demo
          </Link>
        </div>
        <div className="md:hidden">
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:hover:text-white">
            Mode
          </button>
        </div>
      </div>
    </nav>
  );
}