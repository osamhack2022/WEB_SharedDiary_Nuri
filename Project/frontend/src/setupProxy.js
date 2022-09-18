const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/accounts", {
      target: "http://127.0.0.1:8000",
      changeOrigin: true,
    }),
  );
};