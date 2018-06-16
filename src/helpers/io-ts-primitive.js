const primitives = {
  "String": "t.string",
  "Float": "t.number",
  "Boolean": "t.boolean",
  "Int": "t.Integer",
  "ID": "t.string"
}
export default function iotsPrimitive (type, name) {
  return (name && type && (name === type)) ?
    'self' : 
    (primitives[type] || type || '')
}

