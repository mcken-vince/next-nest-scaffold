import { Card } from '@components/Card';
import { SectionTitle } from '@components/SectionTitle';
import { Toggle } from '@components/Toggle';
import { apiFetch } from '@helpers/clients';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export const UserSettings = ({
  settings,
}: {
  settings?: {
    allowAppNotifications: boolean;
    allowEmailNotifications: boolean;
    use2FA: boolean;
  };
}) => {
  const { data: session } = useSession();
  const { mutate: updateUserSettings } = useMutation({
    mutationKey: ['settings'],
    onSuccess: () => console.log('Settings updated!'),
    onError: (error) => console.log('Error updating settings:', error),
    mutationFn: async (input: {
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
    },
  });
  const [allowAppNotifications, setAllowAppNotifications] = useState(
    settings?.allowAppNotifications
  );
  const [allowEmailNotifications, setAllowEmailNotifications] = useState(
    settings?.allowAppNotifications
  );
  const [use2FA, setUse2FA] = useState(settings?.use2FA);

  if (!settings) return null;
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl gap-2">
      <SectionTitle>Settings</SectionTitle>
      <Card>
        <div className="flex gap-2 items-center">
          <h4 className="">App Notifications:</h4>{' '}
          <Toggle
            checked={!!allowAppNotifications}
            onChange={(e, checked) =>
              updateUserSettings({ allowAppNotifications: checked })
            }
          />
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="">Email Notifications:</h4>{' '}
          <Toggle
            checked={!!allowEmailNotifications}
            onChange={(e, checked) =>
              updateUserSettings({ allowEmailNotifications: checked })
            }
          />
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="">2FA:</h4>{' '}
          <Toggle
            checked={!!use2FA}
            onChange={(e, checked) => updateUserSettings({ use2FA: checked })}
          />
        </div>
      </Card>
    </div>
  );
};
