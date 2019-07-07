const Compiler = require('./Compiler');
const WebpackOptionsApply = require("./WebpackOptionsApply");

const webpack = (options) => {

  // 1.验证config(利用json-scheme来验证传入的config)
  let webpackOptionsSchema = {};
  const webpackOptionsValidationErrors = validateSchema(
    webpackOptionsSchema,
    options
  );
  if (webpackOptionsValidationErrors.length) {
    throw new Error("config参数不正确");
  }

  let compiler = new Compiler();
  compiler.options = options;

  // 2.注册插件
  if (options.plugins && Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      if (typeof plugin === "function") {
        plugin.call(compiler, compiler);
      } else {
        plugin.apply(compiler);
      }
    }
  }
  compiler.options = new WebpackOptionsApply().process(options, compiler);

  return compiler;
}

const validateSchema = (schema, options) => {
  // TODO 先不实现验证方法
 return [];
};

module.exports = webpack;
