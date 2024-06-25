export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["albus.jpeg","bg-1.jpg","bg-2.jpg","bg-3.jpg","dragon.jpeg","favicon.png","fonts/PlayfairDisplay-Italic.ttf","fonts/Quicksand.ttf","gryffindor_logo.jpg","hagrid.gif","hufflepuff_logo.jpg","maze.jpg","ravenclaw_logo.png","slytherin_logo.png","snape.gif","vold.jpg"]),
	mimeTypes: {".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png",".ttf":"font/ttf",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.C1N28NRw.js","app":"_app/immutable/entry/app.DnzSCAO6.js","imports":["_app/immutable/entry/start.C1N28NRw.js","_app/immutable/chunks/entry.CAwAGBav.js","_app/immutable/chunks/scheduler.C9xG8wYf.js","_app/immutable/chunks/index.U-Bm33l8.js","_app/immutable/entry/app.DnzSCAO6.js","_app/immutable/chunks/scheduler.C9xG8wYf.js","_app/immutable/chunks/index.D8nc73ia.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/houses",
				pattern: /^\/houses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/quiz",
				pattern: /^\/quiz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
