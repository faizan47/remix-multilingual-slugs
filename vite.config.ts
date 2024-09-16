import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { Slugs } from './app/types';

declare module '@remix-run/server-runtime' {
  interface Future {
    unstable_singleFetch: true;
  }
}
export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        unstable_singleFetch: true
      },
      routes(defineRoutes) {
        const about = 'pages/about.tsx';
        return defineRoutes(route => {
          route(`/:lang/${Slugs.fr.about}`, about, { id: Slugs.fr.about });
          route(`/:lang/${Slugs.nl.about}`, about, { id: Slugs.nl.about });
          route(`/:lang/${Slugs.en.about}`, about, { id: Slugs.en.about });
        });
      }
    }),
    tsconfigPaths()
  ]
});
