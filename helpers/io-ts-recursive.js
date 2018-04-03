module.exports = function wrapRecursive (options) {
  if (this.fields.filter(f => f.type === this.name).length){
    return `t.recursion<${this.name}>('${this.name}', self => ${options.fn(this)})`
  }
  return options.fn(this)
}