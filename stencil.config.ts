import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'dist-hydrate-script-sourcemap-warn',
  outputTargets: [
    {
      type: 'dist-hydrate-script',
      dir: 'my-dist'
    },
    {
      type: 'dist-custom-elements'
    }
  ],
};
