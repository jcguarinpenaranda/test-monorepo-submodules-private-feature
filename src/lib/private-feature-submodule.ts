import { core } from '@juan/core';

export function privateFeatureSubmodule(): string {
  return 'private-feature-submodule';
}

export function testCore() {
  return core();
}
