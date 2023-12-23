import { expect } from 'vitest';
import { test } from 'vitest';
import {narcissisticCheck} from './narcissitic';

test('narcissisticCheck', () => {
    expect(narcissisticCheck(153)).toBe(true);
    expect(narcissisticCheck(1634)).toBe(true);
    expect(narcissisticCheck(1635)).toBe(false);
    expect(narcissisticCheck(54748)).toBe(true);
    expect(narcissisticCheck(49)).toBe(false);
});