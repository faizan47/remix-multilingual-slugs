# Multilingual Content with Dynamic Slugs in Remix Run

This repository demonstrates how to handle **multilingual content** in [Remix Run](https://remix.run/), where the final URL changes based on the language (e.g., `/en/about`, `/fr/a-propos`, `/nl/over-ons`), while reusing the same component for each page across all languages. This is one of the most simple method for building a multilingual Remix Run website.

## Why Use This Approach?

- **No External Libraries**:  
  No need for third-party libraries like `react-i18next` for managing translations, keeping your project lightweight and free of extra dependencies.

- **Multilingual Slugs**:  
  URLs are translated along with the content, making them intuitive and SEO-friendly for each language.

- **Simple File Structure**:  
  A centralized logic handles all translations, reducing code duplication and making it easier to maintain as you scale.

- **Type Safety**:  
  Strict type checking for both languages and slugs ensures you only use valid combinations, preventing errors at compile-time.

## Key Benefits:

- **SEO-Friendly**:  
  Translated URLs (e.g., `/fr/a-propos` instead of `/about`) enhance both user experience and search engine visibility.

- **Maintainability**:  
  Centralized components make it easy to add new languages or modify content without duplicating logic across multiple files.

- **Efficient Performance**:  
  Avoids the overhead of additional translation libraries, leading to a more efficient, performant app.

## Main Configuration

The main configuration for handling multilingual slugs is set up in the `vite.config.ts` file. This is where the route definitions for each language and slug are defined, ensuring that each language has its own URL structure while pointing to the same page component.

```ts
// Example of vite.config.ts
import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';
import { Slugs } from './src/types';

export default defineConfig({
  plugins: [
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/:lang/a-propos', 'routes/about.tsx');
          route('/:lang/over-ons', 'routes/about.tsx');
          route('/:lang/about', 'routes/about.tsx');
        });
      }
    })
  ]
});
```

This configuration dynamically links the correct language slug to the respective route, ensuring that URLs are SEO-friendly and language-specific without duplicating components.

## Demo

Check out the [live demo](https://remix-multilingual-slugs.vercel.app/).
