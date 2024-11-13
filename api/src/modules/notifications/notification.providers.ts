import { NotificationEntity } from '@entities';

export const notificationProviders = [
  {
    provide: 'NOTIFICATION_REPOSITORY',
    useValue: NotificationEntity,
  },
];
