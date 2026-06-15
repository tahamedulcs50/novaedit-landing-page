import Link from "next/link";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import DemoRequest from "@/components/DemoRequest";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Write Better, Faster, Together
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              NovaEdit is a collaborative writing platform that helps teams create,
              review, and publish content seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
              >
                Request Demo
              </Link>
              <Link
                href="#waitlist"
                className="px-6 py-3 border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:border-gray-600 dark:hover:border-gray-400 dark:text-gray-300 dark:hover:text-white rounded-md transition"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <WaitlistSection />
        <DemoRequest />
      </main>
      <Footer />
    </>
  );
}