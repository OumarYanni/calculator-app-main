const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const portfinder = require("portfinder");
const config = require("./webpack.config.js");

portfinder
  .getPortPromise({
    port: 4000,
    stopPort: 5000,
  })
  .then((port) => {
    config.devServer.port = port;
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, config.devServer);

    server.listen(port, "localhost", () => {
      console.log(`Dev server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Could not find a free port:", err);
  });
