class AMDRequireDependenciesBlockParserPlugin {

  apply(parser) {
    parser.hooks.call
      .for("require")
      .tap(
        "AMDRequireDependenciesBlockParserPlugin",
        this.processCallRequire.bind(this, parser)
      );
  }

  processCallRequire(parser, expr) {

  }

}

module.exports = AMDRequireDependenciesBlockParserPlugin;
