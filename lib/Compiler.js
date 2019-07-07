const { Tapable, AsyncParallelHook } = require('tapable');

class Compiler extends Tapable {

  constructor() {
    super();
    this.hooks = {
      make: new AsyncParallelHook(["compilation"])
    };
  }

  run() {

  }

}

module.exports = Compiler;
