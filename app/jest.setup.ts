import "@testing-library/jest-dom";

// see: https://github.com/kasir-barati/my-nextjs-journey
global.console = {
  ...console,
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
} as unknown as Console;
