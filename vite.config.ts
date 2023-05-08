import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {TDesignResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader(),
        AutoImport({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })],
        }),
        Components({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'), // 设置 `@` 指向 `src` 目录
        }
    },
})
