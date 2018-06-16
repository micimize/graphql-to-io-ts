import { EInputType, GeneratorConfig } from 'graphql-codegen-core';

import * as templates from './templates'
import * as customHelpers from './helpers'

export const config: GeneratorConfig = {
  inputType: EInputType.SINGLE_FILE,
  customHelpers,
  templates,
  flattenTypes: true,
  primitives: {
    // Declare your primitives map (GraphQL built-in types to your language types)
    String: 'string',
    Int: 'Integer',
    Float: 'number',
    Boolean: 'boolean',
    ID: 'string',
  },
  outFile: 'io-types.ts' // default output file name
};
