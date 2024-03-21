import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import flowbite from 'flowbite/plugin';

export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FFF5F2',
                    100: '#FFF1EE',
                    200: '#FFE4DE',
                    300: '#FFD5CC',
                    400: '#FFBCAD',
                    500: '#FE795D',
                    600: '#EF562F',
                    700: '#EB4F27',
                    800: '#CC4522',
                    900: '#A5371B'
                }
            }
        }
    },
    plugins: [
        forms,
        typography,
        skeleton({
            themes: {
                preset: ["skeleton", "modern", "crimson", "vintage", "gold-nouveau", "hamlindigo", "sahara", "wintry", "rocket", "seafoam"]
            },
        }),
        require('stwui/plugin'), // Add this line to include the stwui plugin
        flowbite(),
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
} as Config;
