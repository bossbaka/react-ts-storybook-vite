import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const MY_VIEWPORTS = {
  LaptopsWithLow: {
    name: "Laptops with low - 1280",
    styles: {
      width: "1280px",
      height: "670px",
    },
  },
  LaptopsWithMedium: {
    name: "Laptops with medium - 1366",
    styles: {
      width: "1366px",
      height: "638px",
    },
  },
  LaptopsWithHigh: {
    name: "Laptops with high - 1440",
    styles: {
      width: "1440px",
      height: "770px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS, ...MY_VIEWPORTS },
  },
};
