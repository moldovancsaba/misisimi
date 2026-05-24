'use client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import { MantineProvider, DirectionProvider, Box } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { misisimiTheme } from '@/lib/ui/misisimiTheme';

export interface MisisimiProvidersProps {
  children: React.ReactNode;
  locale?: string;
}

/**
 * Root provider stack: Mantine + GDS (@gds/theme via misisimiTheme).
 */
export function MisisimiProviders({ children, locale = 'en' }: MisisimiProvidersProps) {
  const isRtl = ['ar', 'he'].includes(locale);
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <DirectionProvider initialDirection={dir}>
      <MantineProvider
        theme={misisimiTheme}
        withCssVariables
        withGlobalClasses
        defaultColorScheme="light"
      >
        <ModalsProvider>
          <Notifications position="top-right" />
          <Box dir={dir} h="100%">
            {children}
          </Box>
        </ModalsProvider>
      </MantineProvider>
    </DirectionProvider>
  );
}
