import { registerPlugin } from '@capacitor/core';

import type { HealthConnectPlugin } from './definitions';

const HealthConnectPlugin = registerPlugin<HealthConnectPlugin>(
  'HealthConnectPlugin',
  {
    web: () => import('./web').then(m => new m.HealthConnectPluginWeb()),
  },
);

export * from './definitions';
export { HealthConnectPlugin };
