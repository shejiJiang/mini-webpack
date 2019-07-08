const acorn = require("acorn");
const { Tapable, SyncBailHook, HookMap } = require("tapable");

class Parser extends Tapable {

  parse(source, initialState) {
    this.hooks = {
      call: new HookMap(() => new SyncBailHook(["expression"]))
    }
  }

}

module.exports = Parser;
