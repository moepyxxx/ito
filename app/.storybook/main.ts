import { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../features/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
    name: "@storybook/nextjs",
    options: {},
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
