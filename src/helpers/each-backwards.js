export default function eachBackwards(context, options) {
  var ret = "";

  for(var i=context.length - 1, j=0; i>=j; i--) {
    ret = ret + options.fn(context[i]);
  }

  return ret;
}
