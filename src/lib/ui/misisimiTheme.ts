import { createTheme } from '@mantine/core';
import { gdsTheme } from '@gds/theme';

/**
 * Misisimi theme extends @gds/theme (General Design System — external dependency).
 * Product-specific overrides only.
 */
export const misisimiTheme = createTheme({
  ...gdsTheme,
  other: {
    ...(gdsTheme.other || {}),
    appName: 'MISISIMI',
  },
});
