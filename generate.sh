DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../graphql-to-io-ts"
gql-gen --config $DIR/config.ts $@
