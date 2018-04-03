const primitives = {
  "String": "string",
  "Float": "number",
  "Boolean": "boolean",
  "Int": "number",
  "ID": "string"
}

module.exports = function subtypeOrPrimitive (type, { hash: { subtype = '' } = {} } = {}) {
  return (
    primitives[type] ||
    type && `${type}${subtype}` ||
    '')
}
