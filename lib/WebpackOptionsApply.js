const SingleEntryPlugin = require('./SingleEntryPlugin');

class WebpackOptionsApply {

  process(options, compiler) {
    // 注册入口插件
    new SingleEntryPlugin().apply(compiler);
    compiler.hooks.entryOption.call(options.context, options.entry);
  }

}

module.exports = WebpackOptionsApply;
