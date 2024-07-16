import { greetingAppPlugin } from './plugin';

describe('greeting-app', () => {
  it('should export plugin', () => {
    expect(greetingAppPlugin).toBeDefined();
  });
});
