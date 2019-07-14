const { runLoaders } = require("loader-runner");
const fs = require("fs");

class NormalModule {

  constructor({ parser }) {
    this.parser = parser;
    this.userRequest = '';
    this.rawRequest = '';
    this._source = '';
    this.dependencies = [];
  }

  build() {
    // 1.利用loaders解析代码
    runLoaders(
      {
        resource: this.resource,
        loaders: this.loaders,
        context: loaderContext,
        readResource: fs.readFile.bind(fs)
      },
      (err, result) => {

      }
    );
    // 2.调用parse解析出依赖
    const result = this.parser.parse();

  }

  doBuild(callback) {

    return callback();
  }

}

module.exports = NormalModule;
