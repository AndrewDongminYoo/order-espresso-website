import { createElement } from 'react';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
});

vi.mock('next/image', () => ({
  default: (props: { alt: string; sizes?: string; src: string }) =>
    createElement('img', props),
}));
