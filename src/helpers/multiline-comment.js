const linewrap = require('linewrap')
const { SafeString } = require('handlebars')
const wrap = linewrap(80, { wrapLineIndent: 2 })
export default function multilineComment (comment = '') {
  if(comment.length < 80){
    return new SafeString(`/* ${comment} */`)
  }
  return new SafeString(`/*
  ${wrap(comment)}
*/`)
}
