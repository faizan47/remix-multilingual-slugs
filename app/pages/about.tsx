// routes/about/main.tsx
import { LoaderFunction, MetaFunction } from '@remix-run/node';
import { Link, useParams } from '@remix-run/react';
import translations from '~/translations';
import { Language } from '~/types';

export const loader: LoaderFunction = async ({ params }) => {
  const { lang } = params;
  return { lang };
};

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: translations[params.lang as Language].about.title },
    {
      name: 'description',
      content: translations[params.lang as Language].about.description
    }
  ];
};

export default function AboutPage() {
  const { lang } = useParams();

  // Get the content for the current language, fallback to English if not found
  const pageContent =
    translations[lang as Language]?.about || translations.en.about;

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-blue-800">
        {pageContent.title}
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        {pageContent.description}
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <p className="text-md text-gray-800">{pageContent.introText}</p>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:-translate-y-1"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
