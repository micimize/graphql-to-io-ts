DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
gql-gen --config $DIR/gql-gen.json --project $DIR/src/templates/ $@
