const acorn = require("acorn");
const { Tapable, SyncBailHook, HookMap } = require("tapable");

class Parser extends Tapable {

  constructor() {
    super();
    this.hooks = {
      call: new HookMap(() => new SyncBailHook(["expression"]))
    }
  }

  parse(source, initialState) {
    let ast = acorn.parse(source);
    //
    // this.walkStatements(ast.body);
  }

  // Walking iterates the statements and expressions and processes them
  // walkStatements(statements) {
  //   for (let index = 0, len = statements.length; index < len; index++) {
  //     const statement = statements[index];
  //     this.walkStatement(statement);
  //   }
  // }
  //
  //   walkStatement(statement) {
  //   switch (statement.type) {
  //     // ...
  //     case "VariableDeclaration":
  //       this.walkVariableDeclaration(statement);
  //       break;
  //     // ...
  //   }
  // }
  //
  // walkVariableDeclaration(statement) {
  //   for (const declarator of statement.declarations) {
  //     // 这个switch源码中就只有一个case
  //     switch (declarator.type) {
  //       case "VariableDeclarator": {
  //         //
  //         this.walkPattern(declarator.id);
  //         if (declarator.init) this.walkExpression(declarator.init);
  //         break;
  //       }
  //     }
  //   }
  // }
  //
  // walkPattern(pattern) {}
  //
  // walkExpression(expression) {
  //   switch (expression.type) {
  //     // ...
  //     case "CallExpression":
  //       this.walkCallExpression(expression);
  //       break;
  //     // ...
  //   }
  // }
  //
  // walkCallExpression(expression) {
  //   // TODO
  //   this.hooks.call.call(expression);
  // }
}

module.exports = Parser;
