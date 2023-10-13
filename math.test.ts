import { expect, test, describe, mock, spyOn } from "bun:test";
import exp from "constants";

const random = mock(() => Math.random());

const ringo = {
  name: "ringo",
  sayHi() {
    console.log(`Hello I'm ${this.name}`);
  },
};

const spy = spyOn(ringo, "sayHi");

describe("arithmetic", () => {
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  });

  test("2 * 2", () => {
    expect(2 * 2).toBe(4);
  });

  test("2 * 2 async", async () => {
    const result = await Promise.resolve(2 * 2);
    expect(result).toBe(4);
  });

  test("2 * 2 callback", (done) => {
    Promise.resolve(2 * 2).then((result) => {
      expect(result).toEqual(4);
      done();
    });
  });

  test.skip("wat skip", () => {
    expect(1 + 1).toEqual(2);
  });

  test("random", () => {
    const val = random();
    expect(val).toBeGreaterThan(0);
    expect(random).toHaveBeenCalled();
    expect(random).toHaveBeenCalledTimes(1);
  });

  test("spyon", () => {
    expect(spy).toHaveBeenCalledTimes(0);
    ringo.sayHi();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
