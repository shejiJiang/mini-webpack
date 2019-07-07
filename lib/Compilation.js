const Tapable = require('Tapable');
const NormalModule = require('./NormalModule');

class Compilation extends Tapable {
  addEntry() {
    this._addModuleChain();
  }

  buildModule(module) {
    module.build();
  }

  _addModuleChain() {
    let module = new NormalModule();
    this.buildModule(module);
  }

}

module.exports = Compilation;
