import webpack from "webpack";
import ExternalRemotesPlugin from "external-remotes-plugin"
import RemoteWebpackPlugin from "./RemoteWebpackPlugin";

const { ModuleFederationPlugin } = webpack.container

export default function WebpackPlugin() {
  return {
    name: "webpack-plugin",
    configureWebpack(config) {
      return {
        entry: ["./src/app.js"],
        plugins: [
          new ExternalRemotesPlugin(),
          new ModuleFederationPlugin({
            name: 'doc',
            filename: 'remote.js',
            exposes: {},
            shared: {
              'react': {
                singleton: true,
                requiredVersion: '18.2.0',
                strictVersion: true,
                eager: false
              },
              'react-dom': {
                singleton: true,
                requiredVersion: '18.2.0',
                strictVersion: true,
                eager: false
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
