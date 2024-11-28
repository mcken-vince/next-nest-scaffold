'use client';

import { ReactNode } from 'react';
import AuthContext from './AuthContext';
import { PopupProvider } from './PopupProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@helpers/clients';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <PopupProvider>{children}</PopupProvider>
      </QueryClientProvider>
    </AuthContext>
  );
}
