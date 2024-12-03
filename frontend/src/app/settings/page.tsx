'use client';

import { Divider } from '@components/Dividers/Divider';
import { SectionTitle } from '@components/SectionTitle';
import { apiFetch } from '@helpers/clients';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export default function SettingsPage() {
  const { data: session } = useSession();
  const { data, error } = useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      return apiFetch(`/user-settings/${session?.user?.id}`);
    },
  });
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl">
      <SectionTitle>Settings</SectionTitle>
      {JSON.stringify(data)}
    </div>
  );
}
