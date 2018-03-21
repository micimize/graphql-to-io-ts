const path = require('path')
const { SafeString } = require('handlebars')
const structure = {
  "root": "./",
  "type": "./types",
  "input-type": "./types",
  "interface": "./types",
}
module.exports = function relativeImport ({ name, type, file }, { hash }) {
  let relativePath = path.relative(hash.path,
    structure[name] ||
    structure[type] ||
    structure[file] ||
    structure.root
  ) || '.'
  return new SafeString(`import { ${name} } from '${ relativePath }/${ file }'`)
}