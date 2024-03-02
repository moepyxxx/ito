import { StorybookConfig } from "@storybook/nextjs";
import path, { dirname, join } from "path";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../features/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  core: {},
  docs: {
    autodocs: "tag",
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ["../public", "./public"],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../"),
        "@ito/common": path.resolve(__dirname, "../../common"),
        fs: false,
        net: false,
        tls: false,
        // see: https://www.npmjs.com/package/next-router-mock
        "next/navigation": "next-router-mock",
      };
    }
    return config;
  },
  typescript: {
    // strictなチェックになることによりCI上だけエラーが出てしまう…
    // see: https://github.com/moepyxxx/ito/actions/runs/7770828224/job/21191455346
    // check: true,
    skipCompiler: false,
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
