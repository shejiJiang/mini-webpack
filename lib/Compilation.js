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
    module.build();
  }

  _addModuleChain() {
    let module = new NormalModule();
    // 编译当前依赖
    this.buildModule(module);
    // 编译其它依赖
    this.addModuleDependencies(module);

  }

  addModuleDependencies(module) {
    module.dependencies.forEach(m => {
      this.buildModule(m);
      this.addModuleDependencies(m);
    });
  }

  // processModuleDependencies 把这个方法去了
}

module.exports = Compilation;
