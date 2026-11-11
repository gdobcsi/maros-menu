import "@testing-library/jest-dom";

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }

    observe() {}
    unobserve() {}
    disconnect() {}
  };
});
