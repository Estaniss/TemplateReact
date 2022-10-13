import path from "path";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
    minify: "esbuild",
    target: "esnext",
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "luxon",
            "yup",
            "lodash",
            "react",
            "react-dom",
            "react-lottie",
          ],
        },
      },
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "~/": path.resolve(__dirname, "src/"),
      "~/api": path.resolve(__dirname, "src/api"),
      "~/assets/animations": path.resolve(__dirname, "src/assets/animations"),
      "~/assets/images": path.resolve(__dirname, "src/assets/images"),
      "~/assets/svg": path.resolve(__dirname, "src/assets/svg"),
      "~/components": path.resolve(__dirname, "src/components"),
      "~/routes": path.resolve(__dirname, "src/routes"),
      "~/scenes": path.resolve(__dirname, "src/scenes"),
      "~/services": path.resolve(__dirname, "src/services"),
      "~/stores": path.resolve(__dirname, "src/stores"),
      "~/theme": path.resolve(__dirname, "src/theme"),
      "~/modules": path.resolve(__dirname, "src/modules"),
      "~/utils/types": path.resolve(__dirname, "src/utils/types"),
      "~/utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
