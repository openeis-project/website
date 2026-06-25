// TypeScript entry point (M5).
//
// Demonstrates type-stripping + minify: this file is transpiled to
// `public/main.js` on `anycms build`. Types are erased, exports are retained
// (Safe-mode minify keeps them so browser/CDN imports resolve).

interface Greeting {
  who: string;
  punctuation: string;
}

/** Build a typed greeting string. */
export function buildGreeting(g: Greeting): string {
  return `Hello, ${g.who}${g.punctuation}`;
}

/** Identity helper (generic — the type param is erased on transpile). */
export function identity<T>(value: T): T {
  return value;
}

// Default export-free side effect: log a welcome message to the console.
const welcome = buildGreeting({ who: "AnyCMS", punctuation: "!" });
console.log(welcome);
