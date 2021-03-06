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
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var equals = Kotlin.equals;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
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
  function LoggerManager() {
    LoggerManager_instance = this;
    this.loggers = LinkedHashMap_init();
    this.defaultLevel = null;
    this.defaultOutput = ConsoleLoggerOutput_getInstance();
  }
  LoggerManager.prototype.getLogger_61zpoe$ = function (name) {
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
  LoggerManager.prototype.setLevel_jtzlgl$ = function (name, level) {
    var $receiver = this.getLogger_61zpoe$(name);
    $receiver.level = level;
    return $receiver;
  };
  LoggerManager.prototype.setOutput_6yxycs$ = function (name, output) {
    var $receiver = this.getLogger_61zpoe$(name);
    $receiver.output = output;
    return $receiver;
  };
  LoggerManager.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoggerManager',
    interfaces: []
  };
  var LoggerManager_instance = null;
  function LoggerManager_getInstance() {
    if (LoggerManager_instance === null) {
      new LoggerManager();
    }
    return LoggerManager_instance;
  }
  function ConsoleLoggerOutput() {
    ConsoleLoggerOutput_instance = this;
  }
  ConsoleLoggerOutput.prototype.output_k2sdp4$ = function (logger, level, msg) {
    var line = '[' + logger.name + ']: ' + msg;
    if (equals(level, LogLevel$ERROR_getInstance()))
      KloggerConsole_getInstance().error_s8jyv4$(line);
    else
      KloggerConsole_getInstance().log_s8jyv4$(line);
  };
  ConsoleLoggerOutput.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConsoleLoggerOutput',
    interfaces: [LoggerOutput]
  };
  var ConsoleLoggerOutput_instance = null;
  function ConsoleLoggerOutput_getInstance() {
    if (ConsoleLoggerOutput_instance === null) {
      new ConsoleLoggerOutput();
    }
    return ConsoleLoggerOutput_instance;
  }
  function LoggerOutput() {
  }
  LoggerOutput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggerOutput',
    interfaces: []
  };
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
  function Logger(name, dummy) {
    Logger$Companion_getInstance();
    this.name = name;
    this.dummy = dummy;
    var $receiver = LoggerManager_getInstance().loggers;
    var key = this.name;
    $receiver.put_xwzc9p$(key, this);
    this.level = null;
    this.output = null;
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
  }
  Logger$Companion.prototype.invoke_61zpoe$ = function (name) {
    return LoggerManager_getInstance().getLogger_61zpoe$(name);
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
  Object.defineProperty(Logger.prototype, 'processedLevel', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.level) != null ? tmp$ : LoggerManager_getInstance().defaultLevel) != null ? tmp$_0 : LogLevel$WARN_getInstance();
    }
  });
  Object.defineProperty(Logger.prototype, 'processedOutput', {
    get: function () {
      var tmp$;
      return (tmp$ = this.output) != null ? tmp$ : LoggerManager_getInstance().defaultOutput;
    }
  });
  Logger.prototype.actualLog_t189ph$ = function (level, msg) {
    this.processedOutput.output_k2sdp4$(this, level, msg);
  };
  Logger.prototype.log_a87g3n$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.log_a87g3n$', function (level, msg) {
    if (level.index <= this.processedLevel.index) {
      this.actualLog_t189ph$(level, msg());
    }
  });
  Logger.prototype.fatal_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.fatal_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.FATAL;
      if (level.index <= this.processedLevel.index) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.error_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.error_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.ERROR;
      if (level.index <= this.processedLevel.index) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.warn_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.warn_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.WARN;
      if (level.index <= this.processedLevel.index) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.info_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.info_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.INFO;
      if (level.index <= this.processedLevel.index) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.debug_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.debug_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.DEBUG;
      if (level.index <= this.processedLevel.index) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.trace_h4ejuu$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.trace_h4ejuu$', wrapFunction(function () {
    var LogLevel = _.com.soywiz.klogger.LogLevel;
    return function (msg) {
      var level = LogLevel.TRACE;
      if (level.index <= this.processedLevel.index) {
        this.actualLog_t189ph$(level, msg());
      }
    };
  }));
  Logger.prototype.fatal_61zpoe$ = function (msg) {
    var level = LogLevel.FATAL;
    if (level.index <= this.processedLevel.index) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.error_61zpoe$ = function (msg) {
    var level = LogLevel.ERROR;
    if (level.index <= this.processedLevel.index) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.warn_61zpoe$ = function (msg) {
    var level = LogLevel.WARN;
    if (level.index <= this.processedLevel.index) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.info_61zpoe$ = function (msg) {
    var level = LogLevel.INFO;
    if (level.index <= this.processedLevel.index) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.debug_61zpoe$ = function (msg) {
    var level = LogLevel.DEBUG;
    if (level.index <= this.processedLevel.index) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.trace_61zpoe$ = function (msg) {
    var level = LogLevel.TRACE;
    if (level.index <= this.processedLevel.index) {
      this.actualLog_t189ph$.call(this, level, msg);
    }
  };
  Logger.prototype.isEnabled_ci8eq1$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.isEnabled_ci8eq1$', function (level) {
    return level.index <= this.processedLevel.index;
  });
  Object.defineProperty(Logger.prototype, 'isFatalEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isFatalEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return LogLevel.FATAL.index <= this.processedLevel.index;
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isErrorEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isErrorEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return LogLevel.ERROR.index <= this.processedLevel.index;
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isWarnEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isWarnEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return LogLevel.WARN.index <= this.processedLevel.index;
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isInfoEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isInfoEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return LogLevel.INFO.index <= this.processedLevel.index;
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isDebugEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isDebugEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return LogLevel.DEBUG.index <= this.processedLevel.index;
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isTraceEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isTraceEnabled', wrapFunction(function () {
      var LogLevel = _.com.soywiz.klogger.LogLevel;
      return function () {
        return LogLevel.TRACE.index <= this.processedLevel.index;
      };
    }))
  });
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
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
  Object.defineProperty(package$klogger, 'KLOGGER_VERSION', {
    get: function () {
      return KLOGGER_VERSION;
    }
  });
  Object.defineProperty(package$klogger, 'LoggerManager', {
    get: LoggerManager_getInstance
  });
  Object.defineProperty(package$klogger, 'ConsoleLoggerOutput', {
    get: ConsoleLoggerOutput_getInstance
  });
  package$klogger.LoggerOutput = LoggerOutput;
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
  Object.defineProperty(Logger, 'Companion', {
    get: Logger$Companion_getInstance
  });
  $$importsForInline$$['klogger-js'] = _;
  package$klogger.Logger = Logger;
  Object.defineProperty(package$klogger, 'KloggerConsole', {
    get: KloggerConsole_getInstance
  });
  KLOGGER_VERSION = '0.2.1';
  Kotlin.defineModule('klogger-js', _);
  return _;
}));

//# sourceMappingURL=klogger-js.js.map
