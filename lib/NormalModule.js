class NormalModule {

  /**
   * 利用loaders将模块编译
   */
  build() {
    this.doBuild(() => {

    });
  }

  doBuild(callback) {
    return callback();
  }

}

module.exports = NormalModule;
