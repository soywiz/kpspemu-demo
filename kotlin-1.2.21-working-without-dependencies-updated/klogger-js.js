(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'klogger-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'klogger-js'.");
    }
    root['klogger-js'] = factory(typeof this['klogger-js'] === 'undefined' ? {} : this['klogger-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  LogLevel.prototype = Object.create(Enum.prototype);
  LogLevel.prototype.constructor = LogLevel;
  function Klogger() {
    Klogger_instance = this;
    this.VERSION = KLOGGER_VERSION;
  }
  Klogger.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Klogger',
    interfaces: []
  };
  var Klogger_instance = null;
  function Klogger_getInstance() {
    if (Klogger_instance === null) {
      new Klogger();
    }
    return Klogger_instance;
  }
  var KLOGGER_VERSION;
  function LogLevel(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LogLevel_initFields() {
    LogLevel_initFields = function () {
    };
    LogLevel$NONE_instance = new LogLevel('NONE', 0, 0);
    LogLevel$FATAL_instance = new LogLevel('FATAL', 1, 1);
    LogLevel$ERROR_instance = new LogLevel('ERROR', 2, 2);
    LogLevel$WARN_instance = new LogLevel('WARN', 3, 3);
    LogLevel$INFO_instance = new LogLevel('INFO', 4, 4);
    LogLevel$DEBUG_instance = new LogLevel('DEBUG', 5, 5);
    LogLevel$TRACE_instance = new LogLevel('TRACE', 6, 6);
  }
  var LogLevel$NONE_instance;
  function LogLevel$NONE_getInstance() {
    LogLevel_initFields();
    return LogLevel$NONE_instance;
  }
  var LogLevel$FATAL_instance;
  function LogLevel$FATAL_getInstance() {
    LogLevel_initFields();
    return LogLevel$FATAL_instance;
  }
  var LogLevel$ERROR_instance;
  function LogLevel$ERROR_getInstance() {
    LogLevel_initFields();
    return LogLevel$ERROR_instance;
  }
  var LogLevel$WARN_instance;
  function LogLevel$WARN_getInstance() {
    LogLevel_initFields();
    return LogLevel$WARN_instance;
  }
  var LogLevel$INFO_instance;
  function LogLevel$INFO_getInstance() {
    LogLevel_initFields();
    return LogLevel$INFO_instance;
  }
  var LogLevel$DEBUG_instance;
  function LogLevel$DEBUG_getInstance() {
    LogLevel_initFields();
    return LogLevel$DEBUG_instance;
  }
  var LogLevel$TRACE_instance;
  function LogLevel$TRACE_getInstance() {
    LogLevel_initFields();
    return LogLevel$TRACE_instance;
  }
  LogLevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogLevel',
    interfaces: [Enum]
  };
  function LogLevel$values() {
    return [LogLevel$NONE_getInstance(), LogLevel$FATAL_getInstance(), LogLevel$ERROR_getInstance(), LogLevel$WARN_getInstance(), LogLevel$INFO_getInstance(), LogLevel$DEBUG_getInstance(), LogLevel$TRACE_getInstance()];
  }
  LogLevel.values = LogLevel$values;
  function LogLevel$valueOf(name) {
    switch (name) {
      case 'NONE':
        return LogLevel$NONE_getInstance();
      case 'FATAL':
        return LogLevel$FATAL_getInstance();
      case 'ERROR':
        return LogLevel$ERROR_getInstance();
      case 'WARN':
        return LogLevel$WARN_getInstance();
      case 'INFO':
        return LogLevel$INFO_getInstance();
      case 'DEBUG':
        return LogLevel$DEBUG_getInstance();
      case 'TRACE':
        return LogLevel$TRACE_getInstance();
      default:throwISE('No enum constant com.soywiz.klogger.LogLevel.' + name);
    }
  }
  LogLevel.valueOf_61zpoe$ = LogLevel$valueOf;
  function LogOutput() {
  }
  LogOutput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LogOutput',
    interfaces: []
  };
  function ConsoleLogOutput() {
    ConsoleLogOutput_instance = this;
  }
  ConsoleLogOutput.prototype.output_k2sdp4$ = function (logger, level, msg) {
    var line = '[' + logger.name + ']: ' + msg;
    if (equals(level, LogLevel$ERROR_getInstance()))
      KloggerConsole_getInstance().error_s8jyv4$(line);
    else
      KloggerConsole_getInstance().log_s8jyv4$(line);
  };
  ConsoleLogOutput.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConsoleLogOutput',
    interfaces: [LogOutput]
  };
  var ConsoleLogOutput_instance = null;
  function ConsoleLogOutput_getInstance() {
    if (ConsoleLogOutput_instance === null) {
      new ConsoleLogOutput();
    }
    return ConsoleLogOutput_instance;
  }
  function Logger(name, dummy) {
    Logger$Companion_getInstance();
    this.name = name;
    this.dummy = dummy;
    var $receiver = Loggers_getInstance().loggers;
    var key = this.name;
    $receiver.put_xwzc9p$(key, this);
    this.level = null;
    this.output = null;
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
  }
  Logger$Companion.prototype.invoke_61zpoe$ = function (name) {
    return Loggers_getInstance().getLogger_61zpoe$(name);
  };
  Logger$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  Object.defineProperty(Logger.prototype, 'processedLevel_0', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.level) != null ? tmp$ : Loggers_getInstance().defaultLevel) != null ? tmp$_0 : LogLevel$WARN_getInstance();
    }
  });
  Object.defineProperty(Logger.prototype, 'processedOutput_0', {
    get: function () {
      var tmp$;
      return (tmp$ = this.output) != null ? tmp$ : Loggers_getInstance().defaultOutput;
    }
  });
  Logger.prototype.actualLog_t189ph$ = function (level, msg) {
    this.processedOutput_0.output_k2sdp4$(this, level, msg);
  };
  Logger.prototype.log_a87g3n$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.log_a87g3n$', function (level, msg) {
    if (this.isEnabled_ci8eq1$(level)) {
      this.actualLog_t189ph$(level, msg());
    }
  });
  Logger.prototype.fatal_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.fatal_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.FATAL;
      if (this.isEnabled_ci8eq1$(level)) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.error_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.error_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.ERROR;
      if (this.isEnabled_ci8eq1$(level)) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.warn_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.warn_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.WARN;
      if (this.isEnabled_ci8eq1$(level)) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.info_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.info_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.INFO;
      if (this.isEnabled_ci8eq1$(level)) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.debug_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.debug_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.DEBUG;
      if (this.isEnabled_ci8eq1$(level)) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.trace_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.trace_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.TRACE;
      if (this.isEnabled_ci8eq1$(level)) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.fatal_61zpoe$ = function (msg) {
    var level = LogLevel.FATAL;
    if (this.isEnabled_ci8eq1$(level)) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.error_61zpoe$ = function (msg) {
    var level = LogLevel.ERROR;
    if (this.isEnabled_ci8eq1$(level)) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.warn_61zpoe$ = function (msg) {
    var level = LogLevel.WARN;
    if (this.isEnabled_ci8eq1$(level)) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.info_61zpoe$ = function (msg) {
    var level = LogLevel.INFO;
    if (this.isEnabled_ci8eq1$(level)) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.debug_61zpoe$ = function (msg) {
    var level = LogLevel.DEBUG;
    if (this.isEnabled_ci8eq1$(level)) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.trace_61zpoe$ = function (msg) {
    var level = LogLevel.TRACE;
    if (this.isEnabled_ci8eq1$(level)) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.isEnabled_ci8eq1$ = function (level) {
    return level.index <= this.processedLevel_0.index;
  };
  Object.defineProperty(Logger.prototype, 'isFatalEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isFatalEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return this.isEnabled_ci8eq1$(LogLevel.FATAL);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isErrorEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isErrorEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return this.isEnabled_ci8eq1$(LogLevel.ERROR);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isWarnEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isWarnEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return this.isEnabled_ci8eq1$(LogLevel.WARN);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isInfoEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isInfoEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return this.isEnabled_ci8eq1$(LogLevel.INFO);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isDebugEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isDebugEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return this.isEnabled_ci8eq1$(LogLevel.DEBUG);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isTraceEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isTraceEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return this.isEnabled_ci8eq1$(LogLevel.TRACE);
      };
    }))
  });
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
  function Loggers() {
    Loggers_instance = this;
    this.loggers = LinkedHashMap_init();
    this.defaultLevel = null;
    this.defaultOutput = ConsoleLogOutput_getInstance();
  }
  Loggers.prototype.getLogger_61zpoe$ = function (name) {
    var $receiver = this.loggers;
    var tmp$;
    var value = $receiver.get_11rb$(name);
    if (value == null) {
      var answer = new Logger(name, true);
      $receiver.put_xwzc9p$(name, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  Loggers.prototype.setLevel_jtzlgl$ = function (name, level) {
    var $receiver = this.getLogger_61zpoe$(name);
    $receiver.level = level;
    return $receiver;
  };
  Loggers.prototype.setOutput_q49jnu$ = function (name, output) {
    var $receiver = this.getLogger_61zpoe$(name);
    $receiver.output = output;
    return $receiver;
  };
  Loggers.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Loggers',
    interfaces: []
  };
  var Loggers_instance = null;
  function Loggers_getInstance() {
    if (Loggers_instance === null) {
      new Loggers();
    }
    return Loggers_instance;
  }
  function KloggerConsole() {
    KloggerConsole_instance = this;
  }
  KloggerConsole.prototype.error_s8jyv4$ = function (msg) {
    console.error(msg);
  };
  KloggerConsole.prototype.log_s8jyv4$ = function (msg) {
    console.log(msg);
  };
  KloggerConsole.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KloggerConsole',
    interfaces: []
  };
  var KloggerConsole_instance = null;
  function KloggerConsole_getInstance() {
    if (KloggerConsole_instance === null) {
      new KloggerConsole();
    }
    return KloggerConsole_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$klogger = package$soywiz.klogger || (package$soywiz.klogger = {});
  Object.defineProperty(package$klogger, 'Klogger', {
    get: Klogger_getInstance
  });
  Object.defineProperty(package$klogger, 'KLOGGER_VERSION_8be2vx$', {
    get: function () {
      return KLOGGER_VERSION;
    }
  });
  Object.defineProperty(LogLevel, 'NONE', {
    get: LogLevel$NONE_getInstance
  });
  Object.defineProperty(LogLevel, 'FATAL', {
    get: LogLevel$FATAL_getInstance
  });
  Object.defineProperty(LogLevel, 'ERROR', {
    get: LogLevel$ERROR_getInstance
  });
  Object.defineProperty(LogLevel, 'WARN', {
    get: LogLevel$WARN_getInstance
  });
  Object.defineProperty(LogLevel, 'INFO', {
    get: LogLevel$INFO_getInstance
  });
  Object.defineProperty(LogLevel, 'DEBUG', {
    get: LogLevel$DEBUG_getInstance
  });
  Object.defineProperty(LogLevel, 'TRACE', {
    get: LogLevel$TRACE_getInstance
  });
  package$klogger.LogLevel = LogLevel;
  package$klogger.LogOutput = LogOutput;
  Object.defineProperty(package$klogger, 'ConsoleLogOutput', {
    get: ConsoleLogOutput_getInstance
  });
  Object.defineProperty(Logger, 'Companion', {
    get: Logger$Companion_getInstance
  });
  $$importsForInline$$['klogger-js'] = _;
  package$klogger.Logger = Logger;
  Object.defineProperty(package$klogger, 'Loggers', {
    get: Loggers_getInstance
  });
  Object.defineProperty(package$klogger, 'KloggerConsole', {
    get: KloggerConsole_getInstance
  });
  KLOGGER_VERSION = '0.4.0';
  Kotlin.defineModule('klogger-js', _);
  return _;
}));

//# sourceMappingURL=klogger-js.js.map
