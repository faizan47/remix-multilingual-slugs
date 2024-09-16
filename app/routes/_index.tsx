import { Link } from '@remix-run/react';
import { generateRoute } from '~/types';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-10 text-center">
        Welcome to the Multilingual Site
      </h1>
      <p className="text-lg mb-6 text-center">
        Choose a language and page to view:
      </p>

      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
        <Link
          to={generateRoute('en', 'about')}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
        >
          About (EN)
        </Link>

        <Link
          to={generateRoute('fr', 'about')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
        >
          À Propos (FR)
        </Link>

        <Link
          to={generateRoute('nl', 'about')}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
        >
          Over Ons (NL)
        </Link>
      </div>

      <div className="mt-8 text-gray-600 text-center">
        <p>All routes are rendered using the same file</p>
        <p className="italic">
          <pre>app/pages/about.tsx</pre>
        </p>
      </div>
    </div>
  );
}
