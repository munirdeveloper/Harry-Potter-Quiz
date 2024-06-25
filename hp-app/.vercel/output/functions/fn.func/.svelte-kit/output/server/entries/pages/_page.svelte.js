import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "#content-wrapper.svelte-w4bsgi{all:revert;background-image:url('bg-3.jpg');background-size:cover;background-position:center}#content-wrapper.svelte-w4bsgi{display:flex;justify-content:center;align-items:center;height:100vh}.h2.svelte-w4bsgi{color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="content-wrapper" class="svelte-w4bsgi" data-svelte-h="svelte-1fcahkv"><div class="container mx-auto flex justify-center items-center mt-40 md:mt-20"><div class="space-y-10 text-center flex flex-col items-center"><div class="card p-3"><h2 class="h2 svelte-w4bsgi">The Sorting Hat awaits you!</h2></div> <div class="card p-4">Welcome to the Sorting Hat Quiz! <br>Have you ever watched Harry Potter? If yes, have you
				ever <br> wondered which house the sorting hat would place you in? <br> Let&#39;s find out
				with the quiz I have created to sort your house! <br> Click the button below to get started!</div> <a class="block card card-hover p-4" href="/quiz">Start the Quiz</a> </div></div></div> `;
});
export {
  Page as default
};
