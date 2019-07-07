class SingleEntryPlugin {

  constructor(context, entry, name) {
    this.context = context;
    this.entry = entry;
    this.name = name;
  }

  apply(compiler) {
    compiler.hooks.make.tapAsync(
      "SingleEntryPlugin",
      (compilation, callback) => {
        const { entry, name, context } = this;

        const dep = SingleEntryPlugin.createDependency(entry, name);
        compilation.addEntry(context, dep, name, callback);
      }
    );
  }

}

module.exports = SingleEntryPlugin;
