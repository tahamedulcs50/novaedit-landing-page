export default function DemoRequest() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          See NovaEdit in Action
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Schedule a live demo with our team and discover how NovaEdit can
          transform your writing workflow.
        </p>
        <Link
          href="/demo"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition"
        >
          Request Demo
        </Link>
      </div>
    </section>
  );
}