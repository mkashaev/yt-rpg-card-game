/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  devOptions: {
    port: 8000,
    open: 'none',
  },
  buildOptions: {
    out: '_build',
  },
  optimize: {
    bundle: true,
    minify: true,
    sourcemap: false,
  },
  alias: {
    scenes: './src/scenes',
    prefabs: './src/prefabs',
  },
  plugins: [
    /* ... */
  ],
};
