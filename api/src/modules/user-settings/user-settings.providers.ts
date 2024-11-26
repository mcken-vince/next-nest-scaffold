import { UserSettingsEntity } from '@entities';

export const userSettingsProviders = [
  {
    provide: 'USER_SETTINGS_REPOSITORY',
    useValue: UserSettingsEntity,
  },
];
