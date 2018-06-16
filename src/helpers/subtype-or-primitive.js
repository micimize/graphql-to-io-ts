const primitives = {
  "String": "string",
  "Float": "number",
  "Boolean": "boolean",
  "Int": "number",
  "ID": "string"
}

export default function subtypeOrPrimitive (type, { hash: { subtype = '' } = {} } = {}) {
  return (
    primitives[type] ||
    type && `${type}${subtype}` ||
    '')
}
