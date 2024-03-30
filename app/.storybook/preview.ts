import { Preview } from "@storybook/react";
import "../app/globals.css";
import Image from "next/image";
import { initialize, mswLoader } from "msw-storybook-addon";
import { ApolloProviderDecorator, AuthProviderDecorator } from "./decorators";

initialize({
  onUnhandledRequest: ({ method, url }) => {
    if (url.pathname.startsWith("/graphql")) {
      console.error(`Unhandled ${method} request to ${url}.
      This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.
      If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
    `);
    }
  },
});

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
  decorators: [ApolloProviderDecorator, AuthProviderDecorator],
  loaders: [mswLoader],
};

// see: https://qiita.com/RYA234/items/0b040132532ea71580f4#2-storybookpreviewjs-%E3%81%AB%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%A6jpg%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%A7%E3%82%82%E8%AA%AD%E3%81%BF%E5%8F%96%E3%82%8C%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B
Image.propTypes = {
  unoptimized: undefined,
};
Image.defaultProps = {
  unoptimized: true,
};

export default preview;
