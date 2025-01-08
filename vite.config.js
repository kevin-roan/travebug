// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://techasainfotech.com/travel_bug/web_api",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });
//
//
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: "https://iamanas.in/travel_bug/web_api/",
          changeOrigin: true,
          secure: true, // Set to true if your target is an HTTPS server
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      cors: false, // Set this to true or false based on your needs
    },
    preview: {
      proxy: {
        "/api": {
          target: "https://iamanas.in/travel_bug/web_api/",
          changeOrigin: true,
          secure: true, // Set to true if your target is an HTTPS server
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      cors: true, // Set this to true or false based on your needs
    },
  };
});
