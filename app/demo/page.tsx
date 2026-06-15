import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Request a Demo
        </h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-xl text-center">
          Fill out the form below and a member of our team will reach out to
          schedule a personalized demo of NovaEdit.
        </p>
        <form className="w-full max-w-xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Work Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Company / Organization
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              How many team members?
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select size</option>
              <option value="1-5">1–5</option>
              <option value="6-20">6–20</option>
              <option value="21-100">21–100</option>
              <option value="100+">100+</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
          >
            Send Request
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          We respect your privacy. Your information will only be used to contact
          you regarding the demo.
        </p>
        <Link href="/" className="mt-8 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200">
          ← Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}