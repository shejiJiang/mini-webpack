const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { transformFromAst } = require('@babel/core');

const webpack = (options) => {

  buildModule(options.entry);

  const content = bundle();

  output(options.output, content);

}

let queue = [];
let ID = 0;

const buildModule = (filename) => {

  // 编译模块，创建module对象
  console.log('buildModule filename------->', filename);
  let code = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(code, {
    sourceType: 'module',
  });
  code = transformFromAst(ast, null, {
    presets: ['@babel/env'],
  }).code;
  const module = {
    id : ID++,
    filename: filename,
    code,
    mapping: {}
  };
  queue.push(module);

  // 找到模块的依赖，并循环处理
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration: ({node}) => {
      dependencies.push(node.source.value);
    },
  });
  const dirname = path.dirname(filename);
  dependencies.forEach(dep => {
    const filename = path.join(dirname, dep);
    const child = buildModule(filename, module);
    module.mapping[dep] = child.id;
  })

  return module;
}

const bundle = () => {
  let modules = '';

  queue.forEach(mod => {
    modules += `${mod.id}: [
      function (require, module, exports) {
        ${mod.code}
      },
      ${JSON.stringify(mod.mapping)},
    ],`;
  });

  const result = `
    (function(modules) {
      function require(id) {
        const [fn, mapping] = modules[id];

        function localRequire(name) {
          return require(mapping[name]);
        }

        const module = { exports : {} };

        fn(localRequire, module, module.exports);

        return module.exports;
      }

      require(0);
    })({${modules}})
  `;

  return result;
}

const output = (params, content) => {
  fs.writeFileSync(path.resolve(params.path, params.filename), content);
}

module.exports = webpack;
