const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/accounts", {
      target: "https://osamhack2022-web-shareddiary-nuri-g67v9pv5qvvcpg4q-3000.githubpreview.dev",
      changeOrigin: true,
    }),
  );
};