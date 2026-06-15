export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Join the Waitlist
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Be the first to get access to NovaEdit. We'll notify you when we launch.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}