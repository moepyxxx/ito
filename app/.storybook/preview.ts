import { Preview } from "@storybook/react";
import "../app/globals.css";
import { BaseDecorator } from "./decorators";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [BaseDecorator],
};

export default preview;
