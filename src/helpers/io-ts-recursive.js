let generics = T => `${T}, ${T}.O`

export default function iotsRecursive (options) {
  let args = (this.fields.filter(f => f.type === this.name).length) ? 'self' : '()'
  return `t.recursion<${generics(this.name)}>('${this.name}', ${args} => ${options.fn(this)})`
}

