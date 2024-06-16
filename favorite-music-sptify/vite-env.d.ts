/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_CLIENT_ID: string
  readonly VITE_SPOTIFY_CLIENT_SECRET: string
  readonly VITE_ONE_HOUR_TOKEN: string
  readonly VITE_PLAYLIST: string

  // その他の環境変数...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}