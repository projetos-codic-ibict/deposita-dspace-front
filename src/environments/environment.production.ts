import { BuildConfig } from '../config/build-config.interface';

export const environment: Partial<BuildConfig> = {
  production: true,

  // Angular Universal settings
  universal: {
    preboot: true,
    async: true,
    time: false,
  },

  communityEndpoint: '/communities/23ea3a15-eb4d-4f8f-a6e6-284e9532dae1',
};
