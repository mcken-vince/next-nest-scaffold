'use client';

import { Card } from '@components/Card';

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
    <div className="flex flex-col mx-auto max-w-screen-xl gap-2">
      <SectionTitle>Settings</SectionTitle>
      <Card>
        <div className="flex gap-2">
          <h4 className="">App Notifications:</h4>{' '}
          {data?.allowAppNotifications ? 'On' : 'Off'}
        </div>
        <div className="flex gap-2">
          <h4 className="">Email Notifications:</h4>{' '}
          {data?.allowEmailNotifications ? 'On' : 'Off'}
        </div>
        <div className="flex gap-2">
          <h4 className="">Two Factor Authentication:</h4>{' '}
          {data?.use2FA ? 'On' : 'Off'}
        </div>
      </Card>
    </div>
  );
}
