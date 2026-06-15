export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        <span className="text-gray-500 dark:text-gray-400 mb-4">
          © {new Date().getFullYear()} NovaEdit. All rights reserved.
        </span>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:hover:text-white">
            Terms
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}