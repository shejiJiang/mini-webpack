const SingleEntryPlugin = require('./SingleEntryPlugin');

class WebpackOptionsApply {

  process(options, compiler) {
    new SingleEntryPlugin().apply(compiler);
    compiler.hooks.entryOption.call(options.context, options.entry);
  }

}

module.exports = WebpackOptionsApply;
