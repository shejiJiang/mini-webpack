const Tapable = require('Tapable');
const NormalModule = require('./NormalModule');

class Compilation extends Tapable {

  addEntry() {
    this._addModuleChain();
  }

  /**
   * 编译模块
   */
  buildModule(module) {
    // 最终通过调用module.build进行编译
    module.build();
  }

  _addModuleChain() {
    let module = new NormalModule();
    // 编译当前依赖
    this.buildModule(module);
    // 编译其它依赖
    this.processModuleDependencies(module);

  }

  processModuleDependencies(module) {
    const sortedDependencies = [];
    this.addModuleDependencies(module, sortedDependencies);
  }

  addModuleDependencies(module, dependencies) {
    // !dependencies.forEach buildModule
    // TODO
    dependencies.forEach(m => {
      this.buildModule(m);
      this.processModuleDependencies(m);
    });
  }
}

module.exports = Compilation;
