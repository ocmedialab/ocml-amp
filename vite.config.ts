import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
    dts({
      include: ['src'],
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
      rollupTypes: true,
    }),
    ...(mode === 'analyze'
      ? [
          visualizer({
            filename: 'dist/bundle-stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'OcmlAmp',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled', /^@emotion\/.*/],
      output: {
        exports: 'named',
        format: 'es',
        // preserveModules: true,
        // preserveModulesRoot: 'src',
        // entryFileNames: '[name].js',
        // chunkFileNames: '[name].js',
        // assetFileNames: '[name][extname]',
      },
    },
    sourcemap: true,
    minify: true,
    target: 'esnext',
  },
}));

// css: {
//     modules: {
//       localsConvention: 'camelCase',
//       generateScopedName: '[name]__[local]___[hash:base64:5]',
//     },
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/styles/variables.scss";`,
//       },
//     },
//   },
