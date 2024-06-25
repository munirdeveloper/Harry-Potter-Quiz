

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/houses/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ThhAjQlZ.js","_app/immutable/chunks/scheduler.C9xG8wYf.js","_app/immutable/chunks/index.D8nc73ia.js"];
export const stylesheets = [];
export const fonts = [];
