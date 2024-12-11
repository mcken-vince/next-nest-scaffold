'use client';

import { UserSettings } from '@components/Pages/UserSettings';
import { apiFetch } from '@helpers/clients';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export default function SettingsPage() {
  const { data: session } = useSession();
  const { data, error, isLoading } = useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      return apiFetch(`/user-settings/${session?.user?.id}`);
    },
  });

  if (error) return <div className="bg-color-red">Error loading settings</div>;
  if (isLoading) return <div>Loading...</div>;
  return <UserSettings settings={data} />;
}
