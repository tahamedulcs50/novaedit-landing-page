export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Powerful Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Real‑time Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Work together with teammates simultaneously, see changes instantly,
              and leave comments without leaving the editor.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Version History
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Every edit is saved automatically. Roll back to any previous version
              with a single click.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Advanced Formatting
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rich text, markdown, LaTeX, and code blocks — all supported out of
              the box.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Seamless Export
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Export to PDF, DOCX, HTML, or EPUB with perfect formatting.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Role‑Based Permissions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Control who can view, comment, or edit each document.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Analytics & Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track word count, reading time, and collaboration metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}