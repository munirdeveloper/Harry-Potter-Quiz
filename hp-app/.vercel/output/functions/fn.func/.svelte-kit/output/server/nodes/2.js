

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Zc8C3AQo.js","_app/immutable/chunks/scheduler.C9xG8wYf.js","_app/immutable/chunks/index.D8nc73ia.js"];
export const stylesheets = ["_app/immutable/assets/2.DicMaMlL.css"];
export const fonts = [];
