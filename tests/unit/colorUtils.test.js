import { describe, expect, it } from 'vitest';

import { extendPaletteWithChannels, hexToRgbChannel, withAlpha } from '@/utils/colorUtils';

describe('colorUtils', () => {
  it('converts hex colors to rgb channel strings', () => {
    expect(hexToRgbChannel('#C8FAD6')).toBe('200 250 214');
    expect(hexToRgbChannel('#FFF')).toBe('255 255 255');
    expect(hexToRgbChannel('#0000')).toBe('0 0 0');
  });

  it('throws on invalid hex colors', () => {
    expect(() => hexToRgbChannel('#12')).toThrow('Invalid hex color');
  });

  it('adds channel entries for palette values', () => {
    const palette = {
      primary: { main: '#112233' },
      secondary: '#AABBCC',
      text: { primary: '#000000', secondary: 'rgba(0,0,0,0.6)' }
    };

    const result = extendPaletteWithChannels(palette);

    expect(result.secondaryChannel).toBe('170 187 204');
    expect(result.primary.main).toBe('#112233');
    expect(result.primary.mainChannel).toBe('17 34 51');
    expect(result.text.primaryChannel).toBe('0 0 0');
    expect(result.text.secondary).toBe('rgba(0,0,0,0.6)');
  });

  it('builds alpha colors and supports CSS vars', () => {
    expect(withAlpha('#000000', 0.5)).toMatch(/rgba\(0,\s*0,\s*0,\s*0\.5\)/);
    expect(withAlpha('var(--mui-palette-primary-main)', 0.3)).toBe('rgba(var(--mui-palette-primary-mainChannel) / 0.3)');
  });
});
