import React from 'react';
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({ href, children, passHref, prefetch, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

vi.mock('next/image', () => ({
  default: (props) => <img {...props} />
}));
