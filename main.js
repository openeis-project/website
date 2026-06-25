/** Build a typed greeting string. */
export function buildGreeting(e){return`Hello, ${e.who}${e.punctuation}`}
/** Identity helper (generic — the type param is erased on transpile). */
export function identity(e){return e}
// Default export-free side effect: log a welcome message to the console.
const t=buildGreeting({who:`AnyCMS`,punctuation:`!`});console.log(t);