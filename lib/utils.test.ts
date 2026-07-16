import { describe, expect, it } from 'vitest';

import { cn } from './utils';

describe('cn', () => {
  it('merges conflicting Tailwind classes while preserving non-conflicting classes', () => {
    // Given: classes with one Tailwind conflict and one independent class
    const classes = ['px-2', 'px-4', 'font-medium'] as const;

    // When: composing the classes
    const result = cn(...classes);

    // Then: the final Tailwind class wins and the independent class remains
    expect(result).toBe('px-4 font-medium');
  });
});
