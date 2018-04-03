let static = T =>
`${T}, ${T}._O, ${T}._I`

module.exports = function wrapRecursive (options) {
  // because of mutually recursive types we basically always have to do this
  // if (this.fields.filter(f => f.type === this.name).length){
    return `t.recursion<${static(this.name)}>('${this.name}', ${this.name} => ${options.fn(this)})`
  //}
  //return options.fn(this)
}
