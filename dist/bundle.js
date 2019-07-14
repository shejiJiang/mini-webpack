(function (modules) {
  function require(id) {
    const [fn, mapping] = modules[id];

    function localRequire(name) {
      return require(mapping[name]);
    }

    const module = {exports: {}};

    fn(localRequire, module, module.exports);

    return module.exports;
  }

  require(0);
})({
  0: [
    function (require, module, exports) {
      "use strict";

      var _Classroom = _interopRequireDefault(require("./Classroom.js"));

      var _Student = _interopRequireDefault(require("./Student.js"));

      var _Teacher = _interopRequireDefault(require("./Teacher.js"));

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {"default": obj};
      }

      function test() {
        new _Classroom["default"]().test();
        new _Student["default"]().test();
        new _Teacher["default"]().test();
      }

      test();
    },
    {"./Classroom.js": 1, "./Student.js": 2, "./Teacher.js": 3},
  ], 1: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var Classroom =
        /*#__PURE__*/
        function () {
          function Classroom() {
            _classCallCheck(this, Classroom);
          }

          _createClass(Classroom, [{
            key: "test",
            value: function test() {
              var root = document.getElementById('root');
              var node = document.createElement("div");
              node.innerText = 'Classroom';
              root.appendChild(node);
            }
          }]);

          return Classroom;
        }();

      exports["default"] = Classroom;
    },
    {},
  ], 2: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var Student =
        /*#__PURE__*/
        function () {
          function Student() {
            _classCallCheck(this, Student);
          }

          _createClass(Student, [{
            key: "test",
            value: function test() {
              var root = document.getElementById('root');
              var node = document.createElement("div");
              node.innerText = 'Student';
              root.appendChild(node);
            }
          }]);

          return Student;
        }();

      exports["default"] = Student;
    },
    {},
  ], 3: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var Teacher =
        /*#__PURE__*/
        function () {
          function Teacher() {
            _classCallCheck(this, Teacher);
          }

          _createClass(Teacher, [{
            key: "test",
            value: function test() {
              var root = document.getElementById('root');
              var node = document.createElement("div");
              node.innerText = 'Teacher';
              root.appendChild(node);
            }
          }]);

          return Teacher;
        }();

      exports["default"] = Teacher;
    },
    {},
  ],
})
