'use client';

import { Card } from '@components/Card';

import { SectionTitle } from '@components/SectionTitle';
import { Toggle } from '@components/Toggle';
import { apiFetch } from '@helpers/clients';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function SettingsPage() {
  const { data: session } = useSession();
  const { data, error } = useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      return apiFetch(`/user-settings/${session?.user?.id}`);
    },
  });
  const [allowAppNotifications, setAllowAppNotifications] = useState(
    data?.allowAppNotifications
  );
  const [allowEmailNotifications, setAllowEmailNotifications] = useState(
    data?.allowAppNotifications
  );
  const [use2FA, setUse2FA] = useState(data?.use2FA);

  const updateUserSettings = async (input: {
    allowAppNotifications?: boolean;
    allowEmailNotifications?: boolean;
    use2FA?: boolean;
  }) => {
    const response = await apiFetch(`/user-settings/${session?.user?.id}`, {
      method: 'PATCH',
      data: input,
    });
    console.log({ response });
    Object.keys(input).forEach((key) => {
      if (key === 'allowAppNotifications') {
        setAllowAppNotifications(input[key]);
      }
      if (key === 'allowEmailNotifications') {
        setAllowEmailNotifications(input[key]);
      }
      if (key === 'use2FA') {
        setUse2FA(input[key]);
      }
    });
  };
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl gap-2">
      <SectionTitle>Settings</SectionTitle>
      <Card>
        <div className="flex gap-2 items-center">
          <h4 className="">App Notifications:</h4>{' '}
          <Toggle
            checked={allowAppNotifications}
            onChange={(e, checked) =>
              updateUserSettings({ allowAppNotifications: checked })
            }
          />
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="">Email Notifications:</h4>{' '}
          <Toggle
            checked={allowEmailNotifications}
            onChange={(e, checked) =>
              updateUserSettings({ allowEmailNotifications: checked })
            }
          />
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="">2FA:</h4>{' '}
          <Toggle
            checked={use2FA}
            onChange={(e, checked) => updateUserSettings({ use2FA: checked })}
          />
        </div>
      </Card>
    </div>
  );
}
