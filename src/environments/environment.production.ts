import { BuildConfig } from '../config/build-config.interface';

export const environment: Partial<BuildConfig> = {
  production: true,

  // Angular Universal settings
  universal: {
    preboot: true,
    async: true,
    time: false,
  },

  //@ts-ignore
  apiUrl: 'http://172.16.24.33:8080',
  communityEndpoint: '/communities/23ea3a15-eb4d-4f8f-a6e6-284e9532dae1',
};
