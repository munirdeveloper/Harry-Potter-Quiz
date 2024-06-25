

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/quiz/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.B-F4Z43t.js","_app/immutable/chunks/scheduler.C9xG8wYf.js","_app/immutable/chunks/index.D8nc73ia.js"];
export const stylesheets = ["_app/immutable/assets/4.9sXNO5i8.css"];
export const fonts = [];
