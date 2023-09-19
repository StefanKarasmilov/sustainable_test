import { average, sum } from "./stats";
import { describe, expect, it, test } from "./testLib";
import * as asyncStats from "./statsAsync";

describe('Stats should', () => {
  it('calculates the sum of all elements of the array', () => {
    const expected = 6;

    const result = sum([ 1, 2, 3 ]);

    expect(expected).toBe(result);
  })

  it('calculates the average of all elements of the array', () => {
    const expected = 2;

    const result = average([ 1, 2, 3 ]);

    expect(expected).toBe(result);
  })
})

describe('Stats Async should', () => {
  test('calculates the sum of all elements of the array (async)', async () => {
    const expected = 6;

    const result = await asyncStats.sum([ 1, 2, 3 ]);

    expect(expected).toBe(result);
  })

  test('calculates the average of all elements of the array (async)', async () => {
    const expected = 2;

    const result = await asyncStats.average([ 1, 2, 3 ]);

    expect(expected).toBe(result);
  })
})
