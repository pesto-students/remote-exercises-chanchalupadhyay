import { freqSort } from "./freqSort";

describe("frequenct sort ", () => {
  test("return the sorted array based on frequency ", () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([
      "z",
      "b",
      "a",
    ]);
    expect(
      freqSort(["b", "z", "z", "z", "b", "b", "z", "c", "h", "h"])
    ).toEqual(["z", "b", "h", "c"]);
  });

  test("should provide correct argument", () => {
    expect(() => freqSort({ b: "ch" })).toThrowError(
      "argument should be array"
    );
  });
});
