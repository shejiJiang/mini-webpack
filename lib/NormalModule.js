class NormalModule {

  build() {
    this.doBuild(() => {

    });
  }

  doBuild(callback) {
    return callback();
  }

}

module.exports = NormalModule;
