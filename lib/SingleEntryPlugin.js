class SingleEntryPlugin {

  constructor(context, entry, name) {
    this.context = context;
    this.entry = entry;
    this.name = name;
  }

  apply(compiler) {
    // 入口插件绑定至make周期
    compiler.hooks.make.tapAsync(
      "SingleEntryPlugin",
      (compilation, callback) => {
        const { entry, name, context } = this;
        // const dep = SingleEntryPlugin.createDependency(entry, name);
        // 入口插件调用compilation.addEntry进行编译
        compilation.addEntry(context, name, callback);
      }
    );
  }

}

module.exports = SingleEntryPlugin;
