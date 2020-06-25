import { debounce } from "./debounce";
jest.useFakeTimers();
describe("debounce", () => {
  test("debounce will run after ~5s and print `hello` only once", () => {
    const mockfn = jest.fn();
    // const debounceFunction = debounce(fn, 1000);
    let debouncedFn = debounce(mockfn, 5000);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    expect(mockfn).toHaveBeenCalledTimes(1);
  });
});
