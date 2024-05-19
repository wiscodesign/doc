import webpack from "webpack";
import RemoteWebpackPlugin from "./RemoteWebpackPlugin";

const { ModuleFederationPlugin } = webpack.container

export default function WebpackPlugin() {
  return {
    name: "webpack-plugin",
    configureWebpack(config, isServer) {
      return {
        entry: isServer ? config.entry : ["./src/app.js"],
        plugins: [
          new ModuleFederationPlugin({
            name: 'doc',
            filename: 'remote.js',
            exposes: {},
            shared: isServer ? {} : {
              'react': {
                singleton: true,
                requiredVersion: '18.2.0',
                strictVersion: true,
                eager: true
              },
              'react-dom': {
                singleton: true,
                requiredVersion: '18.2.0',
                strictVersion: true,
                eager: true
              },
            },
          }),
          new RemoteWebpackPlugin({
            filename: "remote.js",
          }),
        ],
      };
    },
  };
}
