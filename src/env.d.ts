interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string;
  readonly VITE_BASE_PATH: string;
  readonly VITE_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
