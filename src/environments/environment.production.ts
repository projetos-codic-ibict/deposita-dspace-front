import { BuildConfig } from '../config/build-config.interface';

export const environment: Partial<BuildConfig> = {
  production: true,

  // Angular Universal settings
  universal: {
    preboot: true,
    async: true,
    time: false
  },

  apiUrl: 'http://172.16.24.33:9080',
  communityEndpoint: '/communities/e6468bf0-8b08-46ef-8d88-0f2f79dea03b'
};
