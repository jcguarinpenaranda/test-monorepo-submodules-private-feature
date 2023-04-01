import { privateFeatureSubmodule } from './private-feature-submodule';

describe('privateFeatureSubmodule', () => {
  it('should work', () => {
    expect(privateFeatureSubmodule()).toEqual('private-feature-submodule');
  });
});
