import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const greetingAppPlugin = createPlugin({
  id: 'greeting-app',
  routes: {
    root: rootRouteRef,
  },
});

export const GreetingAppPage = greetingAppPlugin.provide(
  createRoutableExtension({
    name: 'GreetingAppPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
