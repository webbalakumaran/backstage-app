import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { greetingAppPlugin, GreetingAppPage } from '../src/plugin';

createDevApp()
  .registerPlugin(greetingAppPlugin)
  .addPage({
    element: <GreetingAppPage />,
    title: 'Root Page',
    path: '/greeting-app',
  })
  .render();
