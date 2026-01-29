import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import LogoSection from '@/components/logo';

function renderWithTheme(ui) {
  return render(<ThemeProvider theme={createTheme()}>{ui}</ThemeProvider>);
}

describe('LogoSection', () => {
  it('links to base path when no explicit href is provided', () => {
    process.env.NEXT_PUBLIC_BASE_NAME = '/base';
    renderWithTheme(<LogoSection />);

    const logoButton = screen.getByLabelText('logo');
    const link = logoButton.closest('a');

    expect(link).toHaveAttribute('href', '/base');
  });

  it('renders logo image by default', () => {
    renderWithTheme(<LogoSection />);
    expect(screen.getAllByAltText('logo').length).toBeGreaterThan(0);
  });
});
