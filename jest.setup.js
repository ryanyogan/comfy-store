import "@testing-library/jest-dom";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src = "", alt = "" }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children = null }) => {
    return <>{children}</>;
  },
}));
