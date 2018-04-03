let static = T => `${T}, ${T}.O`

module.exports = function wrapRecursive (options) {
  let args = (this.fields.filter(f => f.type === this.name).length) ? 'self' : '()'
  return `t.recursion<${static(this.name)}>('${this.name}', ${args} => ${options.fn(this)})`
}

