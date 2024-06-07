import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 7001,
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      output: {
        publicPath: "auto",
      },
      plugins: [
        new ModuleFederationPlugin({
          name: "hmr_crash_example",
          filename: "remoteEntry.js",
          exposes: {
            "./RemoteModule": "./src/Exposed",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        }),
      ],
    },
  },
});
