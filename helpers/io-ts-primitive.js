const primitives = {
  "String": "t.string",
  "Float": "t.number",
  "Boolean": "t.boolean",
  "Int": "t.Integer",
  "ID": "t.string"
}
module.exports = function iotsPrimitive (type, { hash: { subtype = '' } = {} } = {}) {
  return (
    primitives[type] ||
    type && `${type}${subtype}` ||
    '')
}

// unneeded because everything basically has to be recursive anyways
//(name && type && (name === type)) ?
//'self' :
