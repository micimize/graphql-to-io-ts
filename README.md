# graphql-to-io-ts
Thin wrapper around [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) that utilizes [custom templates](https://github.com/dotansimha/graphql-code-generator/blob/master/packages/graphql-codegen-generators/CUSTOM_TEMPLATES.md) to generate both native typescript and [io-ts](https://github.com/gcanti/io-ts) types with the included templates.

## usage
Put something like the following in your `package.json`, then run `yarn generate-types`:
```json
{
  "scripts": {
    "generate-types": "graphql-to-io-ts --file schema.json --out ./src/io-types/generated/ './src/**/*.gql'"
  }
}
```
the `bin` file just prefixes [the regular cli arguments to `gql-gen`](https://github.com/dotansimha/graphql-code-generator#usage-examples) so that it'll use the configuration, helpers, and templates included here.

## Custom Scalars
All custom scalar types should be defined with `io-ts` and exported from a file above the `--out` target called `CustomScalars.ts`:
```typescript
import * as t from 'io-ts'
import moment from 'moment'

// represents a Date from an ISO string
export const Datetime = new t.Type<moment.Moment, string>(
  'Datetime',
  (mixed): mixed is moment.Moment => moment.isMoment(mixed),
  (mixed, context) =>
    t.string.validate(mixed, context).chain(str => {
      const instance = moment(str)
      return instance.isValid() ? t.success(instance) : t.failure(str, context)
    }),
  instance => instance.toISOString()
)

export type Datetime = moment.Moment
```

This is why I think `./src/io-types/generated/` makes a good target - it also gives you space to organize your generated types, like defining a universal decoder:
```typescript
import * as t from 'io-ts'
import { Mutation } from './generated/types/mutation.type'
import { Query } from './generated/types/query.type'

const Operation = t.union([
  Mutation,
  Query
])

type Op = { operationName: keyof Mutation | keyof Query }

export function decoder<O extends Op>(operation: O) {
  return ({ data, ...response }) => ({
      ...response,
      data: Operation
        .decode({ [operation.operationName]: data })
        .getOrElseL(errors => {
          let failures = failure(errors).join('\n');
          console.error(failures);
          throw new Error(failures)
        })
    })
}
```


Note that in typescript you can't `import` from outside the project directory.
