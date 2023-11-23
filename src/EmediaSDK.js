(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmediaSDK"] = factory();
	else
		root["EmediaSDK"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7185);

/***/ }),

/***/ 4422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3285);

/***/ }),

/***/ 3029:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4779);

/***/ }),

/***/ 4720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2742);

/***/ }),

/***/ 6406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(6981);

/***/ }),

/***/ 200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5627);

/***/ }),

/***/ 8548:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3391);

/***/ }),

/***/ 4100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(381);

/***/ }),

/***/ 3929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8613);

/***/ }),

/***/ 4255:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(433);

/***/ }),

/***/ 9204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1955);

/***/ }),

/***/ 4504:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7794);

/***/ }),

/***/ 5682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(112);

/***/ }),

/***/ 3497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8318);

/***/ }),

/***/ 7219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(25);

/***/ }),

/***/ 7544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2392);

/***/ }),

/***/ 490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5666);


/***/ }),

/***/ 6754:
/***/ (() => {

// 由于ES Module和CommonJS对于引入文件的执行顺序不一致，此处先隔离出一个初始化文件，通过import引入执行
var emedia = {};
window.emedia = emedia;

/***/ }),

/***/ 7185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(1867);
__webpack_require__(2586);
module.exports = __webpack_require__(4579).Array.from;


/***/ }),

/***/ 3285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8691);
module.exports = __webpack_require__(4579).Array.isArray;


/***/ }),

/***/ 4779:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(961);
module.exports = __webpack_require__(4579).Date.now;


/***/ }),

/***/ 2742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(4579);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 6981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(2699);
module.exports = __webpack_require__(4579).Object.assign;


/***/ }),

/***/ 5627:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6760);
var $Object = __webpack_require__(4579).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ 3391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(1477);
var $Object = __webpack_require__(4579).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 381:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(7220);
module.exports = __webpack_require__(4579).Object.getPrototypeOf;


/***/ }),

/***/ 8613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6203);
module.exports = __webpack_require__(4579).Object.keys;


/***/ }),

/***/ 433:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(9349);
module.exports = __webpack_require__(4579).Object.setPrototypeOf;


/***/ }),

/***/ 1955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(3136);
module.exports = __webpack_require__(4579).parseFloat;


/***/ }),

/***/ 7794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(7609);
module.exports = __webpack_require__(4579).parseInt;


/***/ }),

/***/ 112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(4058);
__webpack_require__(1867);
__webpack_require__(3871);
__webpack_require__(2878);
__webpack_require__(5971);
__webpack_require__(2526);
module.exports = __webpack_require__(4579).Promise;


/***/ }),

/***/ 8318:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(9650);
module.exports = __webpack_require__(4579).Reflect.construct;


/***/ }),

/***/ 25:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6840);
__webpack_require__(4058);
__webpack_require__(8174);
__webpack_require__(6461);
module.exports = __webpack_require__(4579).Symbol;


/***/ }),

/***/ 2392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(1867);
__webpack_require__(3871);
module.exports = __webpack_require__(5103).f('iterator');


/***/ }),

/***/ 5663:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 9142:
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ 2159:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(6727);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 7428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7932);
var toLength = __webpack_require__(8728);
var toAbsoluteIndex = __webpack_require__(6531);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 4094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(5663);
var isObject = __webpack_require__(6727);
var invoke = __webpack_require__(6778);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ 4677:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(2894);
var TAG = __webpack_require__(2939)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 2894:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 4579:
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 2445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(4743);
var createDesc = __webpack_require__(3101);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 9216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(5663);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 8333:
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 9666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7929)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 7467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(6727);
var document = __webpack_require__(3938).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 3338:
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(6162);
var gOPS = __webpack_require__(8195);
var pIE = __webpack_require__(6274);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 3856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3938);
var core = __webpack_require__(4579);
var ctx = __webpack_require__(9216);
var hide = __webpack_require__(1818);
var has = __webpack_require__(7069);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 7929:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 5576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(9216);
var call = __webpack_require__(5602);
var isArrayIter = __webpack_require__(5991);
var anObject = __webpack_require__(2159);
var toLength = __webpack_require__(8728);
var getIterFn = __webpack_require__(3728);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ 3938:
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 7069:
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 1818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(4743);
var createDesc = __webpack_require__(3101);
module.exports = __webpack_require__(9666) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 4881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = __webpack_require__(3938).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 3758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(9666) && !__webpack_require__(7929)(function () {
  return Object.defineProperty(__webpack_require__(7467)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 6778:
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(2894);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 5991:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(5449);
var ITERATOR = __webpack_require__(2939)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 1421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(2894);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 6727:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 5602:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2159);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 3945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(526);
var descriptor = __webpack_require__(3101);
var setToStringTag = __webpack_require__(5378);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(1818)(IteratorPrototype, __webpack_require__(2939)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 5700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(6227);
var $export = __webpack_require__(3856);
var redefine = __webpack_require__(7470);
var hide = __webpack_require__(1818);
var Iterators = __webpack_require__(5449);
var $iterCreate = __webpack_require__(3945);
var setToStringTag = __webpack_require__(5378);
var getPrototypeOf = __webpack_require__(5089);
var ITERATOR = __webpack_require__(2939)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 6630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(2939)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 5084:
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 5449:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 6227:
/***/ ((module) => {

module.exports = true;


/***/ }),

/***/ 7177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(5730)('meta');
var isObject = __webpack_require__(6727);
var has = __webpack_require__(7069);
var setDesc = __webpack_require__(4743).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7929)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 1601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3938);
var macrotask = __webpack_require__(2569).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(2894)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ 9304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(5663);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 8082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(9666);
var getKeys = __webpack_require__(6162);
var gOPS = __webpack_require__(8195);
var pIE = __webpack_require__(6274);
var toObject = __webpack_require__(6530);
var IObject = __webpack_require__(799);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(7929)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 526:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(2159);
var dPs = __webpack_require__(7856);
var enumBugKeys = __webpack_require__(3338);
var IE_PROTO = __webpack_require__(8989)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(7467)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(4881).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 4743:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(2159);
var IE8_DOM_DEFINE = __webpack_require__(3758);
var toPrimitive = __webpack_require__(3206);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9666) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(4743);
var anObject = __webpack_require__(2159);
var getKeys = __webpack_require__(6162);

module.exports = __webpack_require__(9666) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 6183:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(6274);
var createDesc = __webpack_require__(3101);
var toIObject = __webpack_require__(7932);
var toPrimitive = __webpack_require__(3206);
var has = __webpack_require__(7069);
var IE8_DOM_DEFINE = __webpack_require__(3758);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9666) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 4368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7932);
var gOPN = __webpack_require__(3230).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 3230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(2963);
var hiddenKeys = __webpack_require__(3338).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 8195:
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 5089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7069);
var toObject = __webpack_require__(6530);
var IE_PROTO = __webpack_require__(8989)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 2963:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(7069);
var toIObject = __webpack_require__(7932);
var arrayIndexOf = __webpack_require__(7428)(false);
var IE_PROTO = __webpack_require__(8989)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 6162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(2963);
var enumBugKeys = __webpack_require__(3338);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 6274:
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 2584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3856);
var core = __webpack_require__(4579);
var fails = __webpack_require__(7929);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 9592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = __webpack_require__(3938).parseFloat;
var $trim = __webpack_require__(2422).trim;

module.exports = 1 / $parseFloat(__webpack_require__(9617) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ 9115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = __webpack_require__(3938).parseInt;
var $trim = __webpack_require__(2422).trim;
var ws = __webpack_require__(9617);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ 931:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ 7790:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2159);
var isObject = __webpack_require__(6727);
var newPromiseCapability = __webpack_require__(9304);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 3101:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hide = __webpack_require__(1818);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ 7470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1818);


/***/ }),

/***/ 2906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(6727);
var anObject = __webpack_require__(2159);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(9216)(Function.call, __webpack_require__(6183).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 9967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(3938);
var core = __webpack_require__(4579);
var dP = __webpack_require__(4743);
var DESCRIPTORS = __webpack_require__(9666);
var SPECIES = __webpack_require__(2939)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ 5378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = __webpack_require__(4743).f;
var has = __webpack_require__(7069);
var TAG = __webpack_require__(2939)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 8989:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(250)('keys');
var uid = __webpack_require__(5730);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(4579);
var global = __webpack_require__(3938);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(6227) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 2707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(2159);
var aFunction = __webpack_require__(5663);
var SPECIES = __webpack_require__(2939)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ 510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1052);
var defined = __webpack_require__(8333);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 2422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(3856);
var defined = __webpack_require__(8333);
var fails = __webpack_require__(7929);
var spaces = __webpack_require__(9617);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ 9617:
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 2569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(9216);
var invoke = __webpack_require__(6778);
var html = __webpack_require__(4881);
var cel = __webpack_require__(7467);
var global = __webpack_require__(3938);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(2894)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ 6531:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1052);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 1052:
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 7932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(799);
var defined = __webpack_require__(8333);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 8728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(1052);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 6530:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8333);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 3206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6727);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5730:
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 6640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3938);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ 6347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3938);
var core = __webpack_require__(4579);
var LIBRARY = __webpack_require__(6227);
var wksExt = __webpack_require__(5103);
var defineProperty = __webpack_require__(4743).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 5103:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(2939);


/***/ }),

/***/ 2939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(250)('wks');
var uid = __webpack_require__(5730);
var Symbol = __webpack_require__(3938).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 3728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(4677);
var ITERATOR = __webpack_require__(2939)('iterator');
var Iterators = __webpack_require__(5449);
module.exports = __webpack_require__(4579).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 2586:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(9216);
var $export = __webpack_require__(3856);
var toObject = __webpack_require__(6530);
var call = __webpack_require__(5602);
var isArrayIter = __webpack_require__(5991);
var toLength = __webpack_require__(8728);
var createProperty = __webpack_require__(2445);
var getIterFn = __webpack_require__(3728);

$export($export.S + $export.F * !__webpack_require__(6630)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 8691:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(3856);

$export($export.S, 'Array', { isArray: __webpack_require__(1421) });


/***/ }),

/***/ 3882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(9003);
var step = __webpack_require__(5084);
var Iterators = __webpack_require__(5449);
var toIObject = __webpack_require__(7932);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(5700)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(3856);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ 2699:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3856);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(8082) });


/***/ }),

/***/ 6760:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(3856);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(526) });


/***/ }),

/***/ 1477:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(3856);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9666), 'Object', { defineProperty: __webpack_require__(4743).f });


/***/ }),

/***/ 7220:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(6530);
var $getPrototypeOf = __webpack_require__(5089);

__webpack_require__(2584)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 6203:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(6530);
var $keys = __webpack_require__(6162);

__webpack_require__(2584)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 9349:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3856);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(2906).set });


/***/ }),

/***/ 4058:
/***/ (() => {



/***/ }),

/***/ 3136:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(3856);
var $parseFloat = __webpack_require__(9592);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ 7609:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(3856);
var $parseInt = __webpack_require__(9115);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ 2878:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(6227);
var global = __webpack_require__(3938);
var ctx = __webpack_require__(9216);
var classof = __webpack_require__(4677);
var $export = __webpack_require__(3856);
var isObject = __webpack_require__(6727);
var aFunction = __webpack_require__(5663);
var anInstance = __webpack_require__(9142);
var forOf = __webpack_require__(5576);
var speciesConstructor = __webpack_require__(2707);
var task = __webpack_require__(2569).set;
var microtask = __webpack_require__(1601)();
var newPromiseCapabilityModule = __webpack_require__(9304);
var perform = __webpack_require__(931);
var userAgent = __webpack_require__(6640);
var promiseResolve = __webpack_require__(7790);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2939)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(8144)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(5378)($Promise, PROMISE);
__webpack_require__(9967)(PROMISE);
Wrapper = __webpack_require__(4579)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(6630)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ 9650:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(3856);
var create = __webpack_require__(526);
var aFunction = __webpack_require__(5663);
var anObject = __webpack_require__(2159);
var isObject = __webpack_require__(6727);
var fails = __webpack_require__(7929);
var bind = __webpack_require__(4094);
var rConstruct = (__webpack_require__(3938).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 1867:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(510)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(5700)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 6840:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3938);
var has = __webpack_require__(7069);
var DESCRIPTORS = __webpack_require__(9666);
var $export = __webpack_require__(3856);
var redefine = __webpack_require__(7470);
var META = __webpack_require__(7177).KEY;
var $fails = __webpack_require__(7929);
var shared = __webpack_require__(250);
var setToStringTag = __webpack_require__(5378);
var uid = __webpack_require__(5730);
var wks = __webpack_require__(2939);
var wksExt = __webpack_require__(5103);
var wksDefine = __webpack_require__(6347);
var enumKeys = __webpack_require__(337);
var isArray = __webpack_require__(1421);
var anObject = __webpack_require__(2159);
var isObject = __webpack_require__(6727);
var toObject = __webpack_require__(6530);
var toIObject = __webpack_require__(7932);
var toPrimitive = __webpack_require__(3206);
var createDesc = __webpack_require__(3101);
var _create = __webpack_require__(526);
var gOPNExt = __webpack_require__(4368);
var $GOPD = __webpack_require__(6183);
var $GOPS = __webpack_require__(8195);
var $DP = __webpack_require__(4743);
var $keys = __webpack_require__(6162);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(3230).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(6274).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(6227)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(1818)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 5971:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(3856);
var core = __webpack_require__(4579);
var global = __webpack_require__(3938);
var speciesConstructor = __webpack_require__(2707);
var promiseResolve = __webpack_require__(7790);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ 2526:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(3856);
var newPromiseCapability = __webpack_require__(9304);
var perform = __webpack_require__(931);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ 8174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6347)('asyncIterator');


/***/ }),

/***/ 6461:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6347)('observable');


/***/ }),

/***/ 3871:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(3882);
var global = __webpack_require__(3938);
var hide = __webpack_require__(1818);
var Iterators = __webpack_require__(5449);
var TO_STRING_TAG = __webpack_require__(2939)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 5666:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 7539:
/***/ ((module) => {

"use strict";
/* eslint-env node */


// SDP helpers.
const SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(line => line.trim());
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  const parts = blob.split('\nm=');
  return parts.map((part, index) => (index > 0 ?
    'm=' + part : part).trim() + '\r\n');
};

// Returns the session description.
SDPUtils.getDescription = function(blob) {
  const sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// Returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  const sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(line => line.indexOf(prefix) === 0);
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
// Input can be prefixed with a=.
SDPUtils.parseCandidate = function(line) {
  let parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  const candidate = {
    foundation: parts[0],
    component: {1: 'rtp', 2: 'rtcp'}[parts[1]] || parts[1],
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7],
  };

  for (let i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compatibility.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag. Don't overwrite.
        if (candidate[parts[i]] === undefined) {
          candidate[parts[i]] = parts[i + 1];
        }
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
// This does not include the a= prefix!
SDPUtils.writeCandidate = function(candidate) {
  const sdp = [];
  sdp.push(candidate.foundation);

  const component = candidate.component;
  if (component === 'rtp') {
    sdp.push(1);
  } else if (component === 'rtcp') {
    sdp.push(2);
  } else {
    sdp.push(component);
  }
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  const type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// Sample input:
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses a rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  let parts = line.substr(9).split(' ');
  const parsed = {
    payloadType: parseInt(parts.shift(), 10), // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generates a rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  let pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  const channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses a extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  const parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1],
  };
};

// Generates an extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
        ? '/' + headerExtension.direction
        : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses a fmtp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  const parsed = {};
  let kv;
  const parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (let j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates a fmtp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  let line = '';
  let pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    const params = [];
    Object.keys(codec.parameters).forEach(param => {
      if (codec.parameters[param] !== undefined) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses a rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  const parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' '),
  };
};

// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  let lines = '';
  let pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(fb => {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses a RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  const sp = line.indexOf(' ');
  const parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10),
  };
  const colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

// Parse a ssrc-group line (see RFC 5576). Sample input:
// a=ssrc-group:semantics 12 34
SDPUtils.parseSsrcGroup = function(line) {
  const parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(ssrc => parseInt(ssrc, 10)),
  };
};

// Extracts the MID (RFC 5888) from a media section.
// Returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  const mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

// Parses a fingerprint line for DTLS-SRTP.
SDPUtils.parseFingerprint = function(line) {
  const parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1].toUpperCase(), // the definition is upper-case in RFC 4572.
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  const lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint),
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  let sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(fp => {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};

// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
  const parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3),
  };
};

SDPUtils.writeCryptoLine = function(parameters) {
  return 'a=crypto:' + parameters.tag + ' ' +
    parameters.cryptoSuite + ' ' +
    (typeof parameters.keyParams === 'object'
      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
      : parameters.keyParams) +
    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
    '\r\n';
};

// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }
  const parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
  };
};

SDPUtils.writeCryptoKeyParams = function(keyParams) {
  return keyParams.keyMethod + ':'
    + keyParams.keySalt +
    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
    (keyParams.mkiValue && keyParams.mkiLength
      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
      : '');
};

// Extracts all SDES parameters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
  const lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
};

// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-ufrag:')[0];
  const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-pwd:')[0];
  if (!(ufrag && pwd)) {
    return null;
  }
  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10),
  };
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  let sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
  if (params.iceLite) {
    sdp += 'a=ice-lite\r\n';
  }
  return sdp;
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  const description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: [],
  };
  const lines = SDPUtils.splitLines(mediaSection);
  const mline = lines[0].split(' ');
  for (let i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    const pt = mline[i];
    const rtpmapline = SDPUtils.matchPrefix(
      mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      const codec = SDPUtils.parseRtpMap(rtpmapline);
      const fmtps = SDPUtils.matchPrefix(
        mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
        mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(line => {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  let sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(codec => {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(codec => {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  let maxptime = 0;
  caps.codecs.forEach(codec => {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(extension => {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  const encodingParameters = [];
  const description = SDPUtils.parseRtpParameters(mediaSection);
  const hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  const hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  const ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(line => SDPUtils.parseSsrcMedia(line))
    .filter(parts => parts.attribute === 'cname');
  const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  let secondarySsrc;

  const flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
    .map(line => {
      const parts = line.substr(17).split(' ');
      return parts.map(part => parseInt(part, 10));
    });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(codec => {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      let encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10),
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red',
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc,
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  let bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(params => {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  const rtcpParameters = {};

  // Gets the first SSRC. Note that with RTX there might be multiple
  // SSRCs.
  const remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(line => SDPUtils.parseSsrcMedia(line))
    .filter(obj => obj.attribute === 'cname')[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  const rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  const mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

SDPUtils.writeRtcpParameters = function(rtcpParameters) {
  let sdp = '';
  if (rtcpParameters.reducedSize) {
    sdp += 'a=rtcp-rsize\r\n';
  }
  if (rtcpParameters.mux) {
    sdp += 'a=rtcp-mux\r\n';
  }
  if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) {
    sdp += 'a=ssrc:' + rtcpParameters.ssrc +
      ' cname:' + rtcpParameters.cname + '\r\n';
  }
  return sdp;
};


// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  let parts;
  const spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  const planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(line => SDPUtils.parseSsrcMedia(line))
    .filter(msidParts => msidParts.attribute === 'msid');
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
  const mline = SDPUtils.parseMLine(mediaSection);
  const maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  let maxMessageSize;
  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }
  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }
  const sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize,
    };
  }
  const sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
  if (sctpMapLines.length > 0) {
    const parts = sctpMapLines[0]
      .substr(10)
      .split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize,
    };
  }
};

// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
  let output = [];
  if (media.protocol !== 'DTLS/SCTP') {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctp-port:' + sctp.port + '\r\n',
    ];
  } else {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n',
    ];
  }
  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }
  return output.join('');
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boiler plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  let sessionId;
  const version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  const user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  const lines = SDPUtils.splitLines(mediaSection);
  for (let i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  const lines = SDPUtils.splitLines(mediaSection);
  const mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  const lines = SDPUtils.splitLines(mediaSection);
  const parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' '),
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  const line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  const parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5],
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  const lines = SDPUtils.splitLines(blob);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry)
});

// NAMESPACE OBJECT: ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js
var chrome_shim_namespaceObject = {};
__webpack_require__.r(chrome_shim_namespaceObject);
__webpack_require__.d(chrome_shim_namespaceObject, {
  "fixNegotiationNeeded": () => (fixNegotiationNeeded),
  "shimAddTrackRemoveTrack": () => (shimAddTrackRemoveTrack),
  "shimAddTrackRemoveTrackWithNative": () => (shimAddTrackRemoveTrackWithNative),
  "shimGetDisplayMedia": () => (shimGetDisplayMedia),
  "shimGetSendersWithDtmf": () => (shimGetSendersWithDtmf),
  "shimGetStats": () => (shimGetStats),
  "shimGetUserMedia": () => (shimGetUserMedia),
  "shimMediaStream": () => (shimMediaStream),
  "shimOnTrack": () => (shimOnTrack),
  "shimPeerConnection": () => (shimPeerConnection),
  "shimSenderReceiverGetStats": () => (shimSenderReceiverGetStats)
});

// NAMESPACE OBJECT: ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js
var firefox_shim_namespaceObject = {};
__webpack_require__.r(firefox_shim_namespaceObject);
__webpack_require__.d(firefox_shim_namespaceObject, {
  "shimAddTransceiver": () => (shimAddTransceiver),
  "shimCreateAnswer": () => (shimCreateAnswer),
  "shimCreateOffer": () => (shimCreateOffer),
  "shimGetDisplayMedia": () => (getdisplaymedia_shimGetDisplayMedia),
  "shimGetParameters": () => (shimGetParameters),
  "shimGetUserMedia": () => (getusermedia_shimGetUserMedia),
  "shimOnTrack": () => (firefox_shim_shimOnTrack),
  "shimPeerConnection": () => (firefox_shim_shimPeerConnection),
  "shimRTCDataChannel": () => (shimRTCDataChannel),
  "shimReceiverGetStats": () => (shimReceiverGetStats),
  "shimRemoveStream": () => (shimRemoveStream),
  "shimSenderGetStats": () => (shimSenderGetStats)
});

// NAMESPACE OBJECT: ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js
var safari_shim_namespaceObject = {};
__webpack_require__.r(safari_shim_namespaceObject);
__webpack_require__.d(safari_shim_namespaceObject, {
  "shimAudioContext": () => (shimAudioContext),
  "shimCallbacksAPI": () => (shimCallbacksAPI),
  "shimConstraints": () => (shimConstraints),
  "shimCreateOfferLegacy": () => (shimCreateOfferLegacy),
  "shimGetUserMedia": () => (safari_shim_shimGetUserMedia),
  "shimLocalStreamsAPI": () => (shimLocalStreamsAPI),
  "shimRTCIceServerUrls": () => (shimRTCIceServerUrls),
  "shimRemoteStreamsAPI": () => (shimRemoteStreamsAPI),
  "shimTrackEventTransceiver": () => (shimTrackEventTransceiver)
});

// NAMESPACE OBJECT: ./node_modules/webrtc-adapter/src/js/common_shim.js
var common_shim_namespaceObject = {};
__webpack_require__.r(common_shim_namespaceObject);
__webpack_require__.d(common_shim_namespaceObject, {
  "removeExtmapAllowMixed": () => (removeExtmapAllowMixed),
  "shimAddIceCandidateNullOrEmpty": () => (shimAddIceCandidateNullOrEmpty),
  "shimConnectionState": () => (shimConnectionState),
  "shimMaxMessageSize": () => (shimMaxMessageSize),
  "shimParameterlessSetLocalDescription": () => (shimParameterlessSetLocalDescription),
  "shimRTCIceCandidate": () => (shimRTCIceCandidate),
  "shimSendThrowTypeError": () => (shimSendThrowTypeError)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__(8548);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__(6406);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);
;// CONCATENATED MODULE: ./emedia-sdk/src/config.js

// 存放默认配置项、公用常量等
var defaultConfig = {
  clientType: 'WEB',
  LOG_LEVEL: 0,
  version: '0.0.1',
  autoSub: true,
  onlyEnter: false,
  reconnect: 13,
  //重连次数
  reconnectDelay: 3000,
  //重连间隔 毫秒
  getCopyIntervalMillis: 30000,
  checkConnectIntervalMillis: 1000,
  iceRebuildCount: 3,
  iceRebuildIntervalMillis: 500,
  //iceWaitBuildMillis: 30000,
  enterTimeout: 20000,
  useRTCCfgIfServerReturn: false,
  forceUseRTCCfgIfServerReturnWhenP2P: true,
  allowRepeatAudioMixerPublish: false,
  logVolumeWhenInstantGE: 0.5,
  getMediaMeterIntervalMillis: 400,
  _useRequestAnimationFrame: false,
  meterWithTrackAudioLevel: false,
  judgeTalkingByInstantGE: 0.05,
  _printSoundData: false,
  trackBufferSize: 20,
  allowSendWhenLessThan: 4,
  disableTrack: false,
  ctrlCheckIntervalMillis: 10 * 1000,
  ctrlTimeoutMillis: 30 * 1000,
  _printDebugStats: false,
  statsSeconds: 10,
  remainLastStatsCount: 120,
  //wsorigin
  loglastConfrCount: 2,
  loglastStoreArray: true,
  // SDK true自个存储日志，false完全由集成者负责；默认是开启
  consoleLogger: true,
  printStatsWhenPCClose: true,
  rebuildPeerConnectionWhenNetworkChanaged: true,
  rtcStatsTypeMath: function rtcStatsTypeMath(_stat, name) {
    switch (_stat.type) {
      case 'remote-candidate':
      case 'local-candidate':
      case 'track':
      case 'stream':
      case 'inbound-rtp':
      case 'outbound-rtp':
      case 'transport':
        return true;
    }

    return false;
  },
  baseAcptOps: [102, 104, 105, 106, 107, 300, 302, 303, 304, 301, 204, 206, 400, 401, 1001, 100201, 100202, 100203],
  acptOps: [100230, //远程控制
  100205, //远程抓图
  1003, //透传消息
  1004 //P2P消息支持
  // 100201, //缩放
  // 100202, //聚焦
  // 100203, //曝光
  // 100204, //定格
  // 100205 //远程抓图
  ],
  globalConstraints: {} // forceUseVideoCodecs: [],
  // forceUseAudioCodecs: [],
  // forceVideoBitrate: ,
  // forceAudioBitrate: ,

}; // 合并传入配置和初始配置

function handleMergeConfig(newCfg) {
  var config = assign_default()({}, defaultConfig, newCfg);

  var mergedConfig = {};

  for (var key in config) {
    mergedConfig[key] = config[key];

    if (key === 'logLevel') {
      mergedConfig.LOG_LEVEL = config[key];
    }
  }

  var _logContext, _logContextIndex;

  if (config.loglastConfrCount) {
    _logContext = new Array(config.loglastConfrCount);
    _logContextIndex = -1; //代表没有日志
  }

  return {
    mergedConfig: mergedConfig,
    _logContext: _logContext,
    _logContextIndex: _logContextIndex
  };
}


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__(7219);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__(7544);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof symbol === "function" && typeof iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof symbol === "function" && obj.constructor === symbol && obj !== symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__(4504);
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__(9204);
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);
;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/utils.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


let logDisabled_ = true;
let deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    const wrappedCallback = (e) => {
      const modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  const nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get() {
      return this['_on' + eventNameToWrap];
    },
    set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return (bool) ? 'adapter.js logging disabled' :
      'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
      ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  // Returned result object.
  const result = {browser: null, version: null};

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  const {navigator} = window;

  if (navigator.mozGetUserMedia) { // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent,
        /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia ||
      (window.isSecureContext === false && window.webkitRTCPeerConnection &&
       !window.RTCIceGatherer)) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent,
        /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent,
        /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver &&
        'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else { // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */
function utils_isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (!utils_isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function(accumulator, key) {
    const isObj = utils_isObject(data[key]);
    const value = isObj ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObj && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, {[key]: value});
  }, {});
}

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(name => {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(id => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  const filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  const trackStats = [];
  result.forEach(value => {
    if (value.type === 'track' &&
        value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(trackStat => {
    result.forEach(stats => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}


;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


const logging = log;

function shimGetUserMedia(window, browserDetails) {
  const navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  const constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    const cc = {};
    Object.keys(c).forEach(key => {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      const r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      const oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        let oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(mix => {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  const shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      const remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      let face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      const getSupportedFacingModeLies = browserDetails.version < 66;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(devices => {
            devices = devices.filter(d => d.kind === 'videoinput');
            let dev = devices.find(d => matches.some(match =>
              d.label.toLowerCase().includes(match)));
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  const shimError_ = function(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  const getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, c => {
      navigator.webkitGetUserMedia(c, onSuccess, e => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  if (navigator.mediaDevices.getUserMedia) {
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(track => {
            track.stop();
          });
          throw new DOMException('', 'NotFoundError');
        }
        return stream;
      }, e => Promise.reject(shimError_(e))));
    };
  }
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' +
        'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    function getDisplayMedia(constraints) {
      return getSourceId(constraints)
        .then(sourceId => {
          const widthSpecified = constraints.video && constraints.video.width;
          const heightSpecified = constraints.video &&
            constraints.video.height;
          const frameRateSpecified = constraints.video &&
            constraints.video.frameRate;
          constraints.video = {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: sourceId,
              maxFrameRate: frameRateSpecified || 3
            }
          };
          if (widthSpecified) {
            constraints.video.mandatory.maxWidth = widthSpecified;
          }
          if (heightSpecified) {
            constraints.video.mandatory.maxHeight = heightSpecified;
          }
          return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */






function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
      window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get() {
        return this._ontrack;
      },
      set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription =
        window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        if (!this._ontrackpoly) {
          this._ontrackpoly = (e) => {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', te => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === te.track.id);
              } else {
                receiver = {track: te.track};
              }

              const event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(track => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === track.id);
              } else {
                receiver = {track};
              }
              const event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
          };
          this.addEventListener('addstream', this._ontrackpoly);
        }
        return origSetRemoteDescription.apply(this, arguments);
      };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    wrapPeerConnectionEvent(window, 'track', e => {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver',
          {value: {receiver: e.receiver}});
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection &&
      !('getSenders' in window.RTCPeerConnection.prototype) &&
      'createDTMFSender' in window.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function(pc, track) {
      return {
        track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack =
        function addTrack(track, stream) {
          let sender = origAddTrack.apply(this, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(this, track);
            this._senders.push(sender);
          }
          return sender;
        };

      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack =
        function removeTrack(sender) {
          origRemoveTrack.apply(this, arguments);
          const idx = this._senders.indexOf(sender);
          if (idx !== -1) {
            this._senders.splice(idx, 1);
          }
        };
    }
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };

    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        this._senders = this._senders || [];
        origRemoveStream.apply(this, [stream]);

        stream.getTracks().forEach(track => {
          const sender = this._senders.find(s => s.track === track);
          if (sender) { // remove sender
            this._senders.splice(this._senders.indexOf(sender), 1);
          }
        });
      };
  } else if (typeof window === 'object' && window.RTCPeerConnection &&
             'getSenders' in window.RTCPeerConnection.prototype &&
             'createDTMFSender' in window.RTCPeerConnection.prototype &&
             window.RTCRtpSender &&
             !('dtmf' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.
    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 ||
        typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    const fixChromeStats_ = function(response) {
      const standardReport = {};
      const reports = response.result();
      reports.forEach(report => {
        const standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(name => {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    const makeMapStats = function(stats) {
      return new Map(Object.keys(stats).map(key => [key, stats[key]]));
    };

    if (arguments.length >= 2) {
      const successCallbackWrapper_ = function(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_,
        selector]);
    }

    // promise-support
    return new Promise((resolve, reject) => {
      origGetStats.apply(this, [
        function(response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        }, reject]);
    }).then(onSucc, onErr);
  };
}

function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach(sender => sender._pc = this);
        return senders;
      };
    }

    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
      const sender = this;
      return this._pc.getStats().then(result =>
        /* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */
        filterStats(result, sender.track, true));
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers =
        function getReceivers() {
          const receivers = origGetReceivers.apply(this, []);
          receivers.forEach(receiver => receiver._pc = this);
          return receivers;
        };
    }
    wrapPeerConnectionEvent(window, 'track', e => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      const receiver = this;
      return this._pc.getStats().then(result =>
        filterStats(result, receiver.track, false));
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype &&
      'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 &&
        arguments[0] instanceof window.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach(s => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(r => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || (sender && receiver)) {
        return Promise.reject(new DOMException(
          'There are more than one sender or receiver for the track.',
          'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException(
        'There is no sender or receiver for the track.',
        'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams)
        .map(streamId => this._shimmedLocalStreams[streamId][0]);
    };

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      const sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders()
      .filter(newSender => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };

  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach(streamId => {
          const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx !== -1) {
            this._shimmedLocalStreams[streamId].splice(idx, 1);
          }
          if (this._shimmedLocalStreams[streamId].length === 1) {
            delete this._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
}

function shimAddTrackRemoveTrack(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack &&
      browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  const origGetLocalStreams = window.RTCPeerConnection.prototype
      .getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      const nativeStreams = origGetLocalStreams.apply(this);
      this._reverseStreams = this._reverseStreams || {};
      return nativeStreams.map(stream => this._reverseStreams[stream.id]);
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      const newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};

      origRemoveStream.apply(this, [(this._streams[stream.id] || stream)]);
      delete this._reverseStreams[(this._streams[stream.id] ?
          this._streams[stream.id].id : stream.id)];
      delete this._streams[stream.id];
    };

  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      const streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 ||
          !streams[0].getTracks().find(t => t === track)) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException(
          'The adapter.js addTrack polyfill only supports a single ' +
          ' stream which is associated with the specified track.',
          'NotSupportedError');
      }

      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }

      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      const oldStream = this._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(() => {
          this.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        const newStream = new window.MediaStream([track]);
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        this.addStream(newStream);
      }
      return this.getSenders().find(s => s.track === track);
    };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
          externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
          internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function(method) {
    const nativeMethod = window.RTCPeerConnection.prototype[method];
    const methodObj = {[method]() {
      const args = arguments;
      const isLegacyCall = arguments.length &&
          typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [
          (description) => {
            const desc = replaceInternalStreamId(this, description);
            args[0].apply(null, [desc]);
          },
          (err) => {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]
        ]);
      }
      return nativeMethod.apply(this, arguments)
      .then(description => replaceInternalStreamId(this, description));
    }};
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });

  const origSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription =
    function setLocalDescription() {
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(this, arguments);
      }
      arguments[0] = replaceExternalStreamId(this, arguments[0]);
      return origSetLocalDescription.apply(this, arguments);
    };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  const origLocalDescription = Object.getOwnPropertyDescriptor(
      window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype,
      'localDescription', {
        get() {
          const description = origLocalDescription.get.apply(this);
          if (description.type === '') {
            return description;
          }
          return replaceInternalStreamId(this, description);
        }
      });

  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      const isLocal = sender._pc === this;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
            'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      this._streams = this._streams || {};
      let stream;
      Object.keys(this._streams).forEach(streamid => {
        const hasTrack = this._streams[streamid].getTracks()
          .find(track => sender.track === track);
        if (hasTrack) {
          stream = this._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          this.removeStream(this._reverseStreams[stream.id]);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        this.dispatchEvent(new Event('negotiationneeded'));
      }
    };
}

function shimPeerConnection(window, browserDetails) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          const nativeMethod = window.RTCPeerConnection.prototype[method];
          const methodObj = {[method]() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          }};
          window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
  }
}

// Attempt to fix ONN in plan-b mode.
function fixNegotiationNeeded(window, browserDetails) {
  wrapPeerConnectionEvent(window, 'negotiationneeded', e => {
    const pc = e.target;
    if (browserDetails.version < 72 || (pc.getConfiguration &&
        pc.getConfiguration().sdpSemantics === 'plan-b')) {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }
    return e;
  });
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */




function getusermedia_shimGetUserMedia(window, browserDetails) {
  const navigator = window && window.navigator;
  const MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    deprecated('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    const remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints =
        MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


function getdisplaymedia_shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    function getDisplayMedia(constraints) {
      if (!(constraints && constraints.video)) {
        const err = new DOMException('getDisplayMedia without video ' +
            'constraints is undefined');
        err.name = 'NotFoundError';
        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = {mediaSource: preferredMediaSource};
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */






function firefox_shim_shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCTrackEvent &&
      ('receiver' in window.RTCTrackEvent.prototype) &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function firefox_shim_shimPeerConnection(window, browserDetails) {
  if (typeof window !== 'object' ||
      !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          const nativeMethod = window.RTCPeerConnection.prototype[method];
          const methodObj = {[method]() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          }};
          window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
  }

  const modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;
    return nativeGetStats.apply(this, [selector || null])
      .then(stats => {
        if (browserDetails.version < 53 && !onSucc) {
          // Shim only promise getStats with spec-hyphens in type names
          // Leave callback version alone; misc old uses of forEach before Map
          try {
            stats.forEach(stat => {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== 'TypeError') {
              throw e;
            }
            // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
            stats.forEach((stat, i) => {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      })
      .then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };
  }

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) :
        Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach(receiver => receiver._pc = this);
      return receivers;
    };
  }
  wrapPeerConnectionEvent(window, 'track', e => {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection ||
      'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      deprecated('removeStream', 'removeTrack');
      this.getSenders().forEach(sender => {
        if (sender.track && stream.getTracks().includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver =
      function addTransceiver() {
        this.setParametersPromises = [];
        const initParameters = arguments[1];
        const shouldPerformCheck = initParameters &&
                                  'sendEncodings' in initParameters;
        if (shouldPerformCheck) {
          // If sendEncodings params are provided, validate grammar
          initParameters.sendEncodings.forEach((encodingParam) => {
            if ('rid' in encodingParam) {
              const ridRegex = /^[a-z0-9]{0,16}$/i;
              if (!ridRegex.test(encodingParam.rid)) {
                throw new TypeError('Invalid RID value provided.');
              }
            }
            if ('scaleResolutionDownBy' in encodingParam) {
              if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
                throw new RangeError('scale_resolution_down_by must be >= 1.0');
              }
            }
            if ('maxFramerate' in encodingParam) {
              if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
                throw new RangeError('max_framerate must be >= 0.0');
              }
            }
          });
        }
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
          // Check if the init options were applied. If not we do this in an
          // asynchronous way and save the promise reference in a global object.
          // This is an ugly hack, but at the same time is way more robust than
          // checking the sender parameters before and after the createOffer
          // Also note that after the createoffer we are not 100% sure that
          // the params were asynchronously applied so we might miss the
          // opportunity to recreate offer.
          const {sender} = transceiver;
          const params = sender.getParameters();
          if (!('encodings' in params) ||
              // Avoid being fooled by patched getParameters() below.
              (params.encodings.length === 1 &&
               Object.keys(params.encodings[0]).length === 0)) {
            params.encodings = initParameters.sendEncodings;
            sender.sendEncodings = initParameters.sendEncodings;
            this.setParametersPromises.push(sender.setParameters(params)
              .then(() => {
                delete sender.sendEncodings;
              }).catch(() => {
                delete sender.sendEncodings;
              })
            );
          }
        }
        return transceiver;
      };
  }
}

function shimGetParameters(window) {
  if (!(typeof window === 'object' && window.RTCRtpSender)) {
    return;
  }
  const origGetParameters = window.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters =
      function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!('encodings' in params)) {
          params.encodings = [].concat(this.sendEncodings || [{}]);
        }
        return params;
      };
  }
}

function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises)
      .then(() => {
        return origCreateOffer.apply(this, arguments);
      })
      .finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises)
      .then(() => {
        return origCreateAnswer.apply(this, arguments);
      })
      .finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */



function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams =
      function getLocalStreams() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    const _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.
      stream.getAudioTracks().forEach(track => _addTrack.call(this, track,
        stream));
      stream.getVideoTracks().forEach(track => _addTrack.call(this, track,
        stream));
    };

    window.RTCPeerConnection.prototype.addTrack =
      function addTrack(track, ...streams) {
        if (streams) {
          streams.forEach((stream) => {
            if (!this._localStreams) {
              this._localStreams = [stream];
            } else if (!this._localStreams.includes(stream)) {
              this._localStreams.push(stream);
            }
          });
        }
        return _addTrack.apply(this, arguments);
      };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        const index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach(sender => {
          if (tracks.includes(sender.track)) {
            this.removeTrack(sender);
          }
        });
      };
  }
}

function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams =
      function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get() {
        return this._onaddstream;
      },
      set(f) {
        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = (e) => {
          e.streams.forEach(stream => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.includes(stream)) {
              return;
            }
            this._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }
    });
    const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        const pc = this;
        if (!this._onaddstreampoly) {
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            e.streams.forEach(stream => {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              const event = new Event('addstream');
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
  }
}

function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  const prototype = window.RTCPeerConnection.prototype;
  const origCreateOffer = prototype.createOffer;
  const origCreateAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer =
    function createOffer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  prototype.createAnswer =
    function createAnswer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  let withCallback = function(description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function(description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function(candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function safari_shim_shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    const mediaDevices = navigator.mediaDevices;
    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = (constraints) => {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints)
      .then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({},
      constraints,
      {video: compactObject(constraints.video)}
    );
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  const OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection =
    function RTCPeerConnection(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        const newIceServers = [];
        for (let i = 0; i < pcConfig.iceServers.length; i++) {
          let server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') &&
              server.hasOwnProperty('url')) {
            deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCTrackEvent &&
      'receiver' in window.RTCTrackEvent.prototype &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer =
    function createOffer(offerOptions) {
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveAudio =
            !!offerOptions.offerToReceiveAudio;
        }
        const audioTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'audio');
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === 'sendrecv') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('sendonly');
            } else {
              audioTransceiver.direction = 'sendonly';
            }
          } else if (audioTransceiver.direction === 'recvonly') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('inactive');
            } else {
              audioTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true &&
            !audioTransceiver) {
          this.addTransceiver('audio', {direction: 'recvonly'});
        }

        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveVideo =
            !!offerOptions.offerToReceiveVideo;
        }
        const videoTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'video');
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === 'sendrecv') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('sendonly');
            } else {
              videoTransceiver.direction = 'sendonly';
            }
          } else if (videoTransceiver.direction === 'recvonly') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('inactive');
            } else {
              videoTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveVideo === true &&
            !videoTransceiver) {
          this.addTransceiver('video', {direction: 'recvonly'});
        }
      }
      return origCreateOffer.apply(this, arguments);
    };
}

function shimAudioContext(window) {
  if (typeof window !== 'object' || window.AudioContext) {
    return;
  }
  window.AudioContext = window.webkitAudioContext;
}


// EXTERNAL MODULE: ./node_modules/sdp/sdp.js
var sdp = __webpack_require__(7539);
var sdp_default = /*#__PURE__*/__webpack_require__.n(sdp);
;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/common_shim.js
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
      window.RTCIceCandidate.prototype)) {
    return;
  }

  const NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate &&
        args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      const nativeCandidate = new NativeRTCIceCandidate(args);
      const parsedCandidate = sdp_default().parseCandidate(args.candidate);
      const augmentedCandidate = Object.assign(nativeCandidate,
          parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment,
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  wrapPeerConnectionEvent(window, 'icecandidate', e => {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  const sctpInDescription = function(description) {
    if (!description || !description.sdp) {
      return false;
    }
    const sections = sdp_default().splitSections(description.sdp);
    sections.shift();
    return sections.some(mediaSection => {
      const mLine = sdp_default().parseMLine(mediaSection);
      return mLine && mLine.kind === 'application'
          && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  const getRemoteFirefoxVersion = function(description) {
    // TODO: Is there a better solution for detecting Firefox?
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    const version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  const getCanSendMaxMessageSize = function(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    let canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize =
          browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  const getMaxMessageSize = function(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    let maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox'
         && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    const match = sdp_default().matchPrefix(description.sdp,
      'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' &&
                remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
    function setRemoteDescription() {
      this._sctp = null;
      // Chrome decided to not expose .sctp in plan-b mode.
      // As usual, adapter.js has to do an 'ugly worakaround'
      // to cover up the mess.
      if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
        const {sdpSemantics} = this.getConfiguration();
        if (sdpSemantics === 'plan-b') {
          Object.defineProperty(this, 'sctp', {
            get() {
              return typeof this._sctp === 'undefined' ? null : this._sctp;
            },
            enumerable: true,
            configurable: true,
          });
        }
      }

      if (sctpInDescription(arguments[0])) {
        // Check if the remote is FF.
        const isFirefox = getRemoteFirefoxVersion(arguments[0]);

        // Get the maximum message size the local peer is capable of sending
        const canSendMMS = getCanSendMaxMessageSize(isFirefox);

        // Get the maximum message size of the remote peer.
        const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

        // Determine final maximum message size
        let maxMessageSize;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }

        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
        // attribute.
        const sctp = {};
        Object.defineProperty(sctp, 'maxMessageSize', {
          get() {
            return maxMessageSize;
          }
        });
        this._sctp = sctp;
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection &&
      'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;
    dc.send = function send() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' &&
          pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' +
          pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  const origCreateDataChannel =
    window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel =
    function createDataChannel() {
      const dataChannel = origCreateDataChannel.apply(this, arguments);
      wrapDcSend(dataChannel, this);
      return dataChannel;
    };
  wrapPeerConnectionEvent(window, 'datachannel', e => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}


/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection ||
      'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange',
            this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange',
            this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach((method) => {
    const origMethod = proto[method];
    proto[method] = function() {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = e => {
          const pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange',
          this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeExtmapAllowMixed(window, browserDetails) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }
  const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
  function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      const sdp = desc.sdp.split('\n').filter((line) => {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
      // Safari enforces read-only-ness of RTCSessionDescription fields.
      if (window.RTCSessionDescription &&
          desc instanceof window.RTCSessionDescription) {
        arguments[0] = new window.RTCSessionDescription({
          type: desc.type,
          sdp,
        });
      } else {
        desc.sdp = sdp;
      }
    }
    return nativeSRD.apply(this, arguments);
  };
}

function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
  // Support for addIceCandidate(null or undefined)
  // as well as addIceCandidate({candidate: "", ...})
  // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
  // Note: must be called before other polyfills which change the signature.
  if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
    return;
  }
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
    return;
  }
  window.RTCPeerConnection.prototype.addIceCandidate =
    function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.
      // Native support for ignoring exists for Chrome M77+.
      // Safari ignores as well, exact version unknown but works in the same
      // version that also ignores addIceCandidate(null).
      if (((browserDetails.browser === 'chrome' && browserDetails.version < 78)
           || (browserDetails.browser === 'firefox'
               && browserDetails.version < 68)
           || (browserDetails.browser === 'safari'))
          && arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
}

// Note: Make sure to call this ahead of APIs that modify
// setLocalDescription.length
function shimParameterlessSetLocalDescription(window, browserDetails) {
  if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
    return;
  }
  const nativeSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  if (!nativeSetLocalDescription || nativeSetLocalDescription.length === 0) {
    return;
  }
  window.RTCPeerConnection.prototype.setLocalDescription =
    function setLocalDescription() {
      let desc = arguments[0] || {};
      if (typeof desc !== 'object' || (desc.type && desc.sdp)) {
        return nativeSetLocalDescription.apply(this, arguments);
      }
      // The remaining steps should technically happen when SLD comes off the
      // RTCPeerConnection's operations chain (not ahead of going on it), but
      // this is too difficult to shim. Instead, this shim only covers the
      // common case where the operations chain is empty. This is imperfect, but
      // should cover many cases. Rationale: Even if we can't reduce the glare
      // window to zero on imperfect implementations, there's value in tapping
      // into the perfect negotiation pattern that several browsers support.
      desc = {type: desc.type, sdp: desc.sdp};
      if (!desc.type) {
        switch (this.signalingState) {
          case 'stable':
          case 'have-local-offer':
          case 'have-remote-pranswer':
            desc.type = 'offer';
            break;
          default:
            desc.type = 'answer';
            break;
        }
      }
      if (desc.sdp || (desc.type !== 'offer' && desc.type !== 'answer')) {
        return nativeSetLocalDescription.apply(this, [desc]);
      }
      const func = desc.type === 'offer' ? this.createOffer : this.createAnswer;
      return func.apply(this)
        .then(d => nativeSetLocalDescription.apply(this, [d]));
    };
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/adapter_factory.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */


  // Browser shims.






// Shimming starts here.
function adapterFactory({window} = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimSafari: true,
}) {
  // Utils.
  const logging = log;
  const browserDetails = detectBrowser(window);

  const adapter = {
    browserDetails,
    commonShim: common_shim_namespaceObject,
    extractVersion: extractVersion,
    disableLog: disableLog,
    disableWarnings: disableWarnings,
    // Expose sdp as a convenience. For production apps include directly.
    sdp: sdp,
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chrome_shim_namespaceObject || !shimPeerConnection ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chrome_shim_namespaceObject;

      // Must be called before shimPeerConnection.
      shimAddIceCandidateNullOrEmpty(window, browserDetails);
      shimParameterlessSetLocalDescription(window, browserDetails);

      shimGetUserMedia(window, browserDetails);
      shimMediaStream(window, browserDetails);
      shimPeerConnection(window, browserDetails);
      shimOnTrack(window, browserDetails);
      shimAddTrackRemoveTrack(window, browserDetails);
      shimGetSendersWithDtmf(window, browserDetails);
      shimGetStats(window, browserDetails);
      shimSenderReceiverGetStats(window, browserDetails);
      fixNegotiationNeeded(window, browserDetails);

      shimRTCIceCandidate(window, browserDetails);
      shimConnectionState(window, browserDetails);
      shimMaxMessageSize(window, browserDetails);
      shimSendThrowTypeError(window, browserDetails);
      removeExtmapAllowMixed(window, browserDetails);
      break;
    case 'firefox':
      if (!firefox_shim_namespaceObject || !firefox_shim_shimPeerConnection ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefox_shim_namespaceObject;

      // Must be called before shimPeerConnection.
      shimAddIceCandidateNullOrEmpty(window, browserDetails);
      shimParameterlessSetLocalDescription(window, browserDetails);

      getusermedia_shimGetUserMedia(window, browserDetails);
      firefox_shim_shimPeerConnection(window, browserDetails);
      firefox_shim_shimOnTrack(window, browserDetails);
      shimRemoveStream(window, browserDetails);
      shimSenderGetStats(window, browserDetails);
      shimReceiverGetStats(window, browserDetails);
      shimRTCDataChannel(window, browserDetails);
      shimAddTransceiver(window, browserDetails);
      shimGetParameters(window, browserDetails);
      shimCreateOffer(window, browserDetails);
      shimCreateAnswer(window, browserDetails);

      shimRTCIceCandidate(window, browserDetails);
      shimConnectionState(window, browserDetails);
      shimMaxMessageSize(window, browserDetails);
      shimSendThrowTypeError(window, browserDetails);
      break;
    case 'safari':
      if (!safari_shim_namespaceObject || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safari_shim_namespaceObject;

      // Must be called before shimCallbackAPI.
      shimAddIceCandidateNullOrEmpty(window, browserDetails);
      shimParameterlessSetLocalDescription(window, browserDetails);

      shimRTCIceServerUrls(window, browserDetails);
      shimCreateOfferLegacy(window, browserDetails);
      shimCallbacksAPI(window, browserDetails);
      shimLocalStreamsAPI(window, browserDetails);
      shimRemoteStreamsAPI(window, browserDetails);
      shimTrackEventTransceiver(window, browserDetails);
      safari_shim_shimGetUserMedia(window, browserDetails);
      shimAudioContext(window, browserDetails);

      shimRTCIceCandidate(window, browserDetails);
      shimMaxMessageSize(window, browserDetails);
      shimSendThrowTypeError(window, browserDetails);
      removeExtmapAllowMixed(window, browserDetails);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

;// CONCATENATED MODULE: ./node_modules/webrtc-adapter/src/js/adapter_core.js
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





const adapter =
  adapterFactory({window: typeof window === 'undefined' ? undefined : window});
/* harmony default export */ const adapter_core = (adapter);

;// CONCATENATED MODULE: ./emedia-sdk/utils/browser.js



// 浏览器兼容性 & 浏览器API相关

var browser = adapter_core.browserDetails.browser; // firefox chrome safari

var browserVersion = adapter_core.browserDetails.version;

if ('Not a supported browser.' === browser) {
  console.error('Not a supported browser');
}

console.info('Current browser', browser, browserVersion);
var isFirefox = 'firefox' === browser;
var isChrome = 'chrome' === browser;
var isSafari = 'safari' === browser;
var isEdge = 'edge' === browser; // 是否符合Webrtc环境

var isWebRTC = window.RTCPeerConnection && /^https\:$/.test(window.location.protocol);
var AudioContext = window.AudioContext || window.webkitAudioContext;
function youInSomeBrowsers() {
  //return isSafari;
  //|| (isChrome && browserVersion >= 75);
  if (isSafari) {
    //safari 从13起，不在需要先打开摄像头获取权限，后再去订阅了
    var reg = new RegExp('(Version)/([0-9.]+)', 'i');
    var r = navigator.userAgent.match(reg);

    if (r != null) {
      var version = unescape(r[2]);
      version = parse_int_default()(version);
      return version < 13;
    }
  }

  return false;
}
function requireTrustBeforeJoin() {
  //return (/windows|win32/i.test(navigator.userAgent) && isChrome && browserVersion >= 75);
  return false;
}
/**
 * 判断是否支持pranswer
 */

var supportPRAnswer;

if (isChrome || isSafari) {
  supportPRAnswer = true;
}
/**
 * 2019.02.21
 * 发现chrome72版本 对pranswer支持有问题，https://webrtc.github.io/samples/src/content/peerconnection/pr-answer 事例也不能正显示视频
 * video.srcObject [remote media stream] active: false.
 *
 * 统一设置为不支持pranswer
 *
 */


supportPRAnswer = false;

function getDomPageRect(element) {
  var domRect = element.getBoundingClientRect();
  return {
    x: domRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft),
    y: domRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
    width: domRect.width || element.offsetWidth,
    height: domRect.height || element.offsetHeight
  };
}

function getEventElementXY(event, element, scale) {
  event = event || window.event;
  var touch = event.changedTouches ? event.changedTouches[0] : event.touches ? event.touches[0] : event;
  var pageX, pageY;

  if (touch.pageX != undefined && touch.pageY != undefined) {
    pageX = touch.pageX;
    pageY = touch.pageY;
  } else if (touch.clientX != undefined && touch.clientY != undefined) {
    pageX = touch.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    pageY = touch.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  var elementPageXY = getDomPageRect(element);
  var relativeX = pageX - elementPageXY.x;
  var relativeY = pageY - elementPageXY.y;
  (scale === 0 || scale == undefined) && (scale = 1);
  return {
    x: Math.round(Math.max(Math.min(relativeX, elementPageXY.width - 1), 0) / scale),
    y: Math.round(Math.max(Math.min(relativeY, elementPageXY.height - 1), 0) / scale),
    width: Math.round(elementPageXY.width / scale),
    height: Math.round(elementPageXY.height / scale),
    realX: relativeX,
    realY: relativeY
  };
}

function layoutEngine(params) {
  var engine = {
    presto: !!window.opera,
    trident: !!window.ActiveXObject && (window.XMLHttpRequest ? document.querySelectorAll ? 6 : 5 : 4),
    webkit: function () {
      try {
        return !navigator.taintEnabled && (i.Features.xpath ? i.Features.query ? 525 : 420 : 419);
      } catch (e) {
        return !1;
      }
    }(),
    gecko: !(!document.getBoxObjectFor && null == window.mozInnerScreenX) && (document.getElementsByClassName ? 19 : 18)
  };
  engine.webkit && (engine.webkit = function (e) {
    var n = (navigator.userAgent.match(/WebKit\/([0-9\.]*) /) || ['', e])[1];
    return _parseFloat(n, 10);
  }(engine));
  return engine;
}

var targetDOM = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object' ? function (obj) {
  return obj instanceof HTMLElement;
} : function (obj) {
  return obj && _typeof(obj) === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
};

function addEvent(element, name, func) {
  if (element.attachEvent) return element.attachEvent('on' + name, func);
  if (element.addEventListener) return element.addEventListener(name, func, false);
  throw 'Handler could not be attached';
}

function removeEvent(element, name, func) {
  if (element.detachEvent) return element.detachEvent('on' + name, func);
  if (element.removeEventListener) return element.removeEventListener(name, func, false);
  throw 'Handler could not be removed';
}

function stopEvent(event) {
  event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
}


// EXTERNAL MODULE: ./emedia-sdk/src/components/init.js
var init = __webpack_require__(6754);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__(4720);
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__(3133);
var from_default = /*#__PURE__*/__webpack_require__.n(from);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const _freeGlobal = (freeGlobal);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ const _root = (root);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ const _Symbol = (Symbol);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const _getRawTag = (getRawTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const _overArg = (overArg);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ const _getPrototype = (getPrototype);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const lodash_es_isObjectLike = (isObjectLike);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ const lodash_es_isPlainObject = (isPlainObject);

;// CONCATENATED MODULE: ./emedia-sdk/utils/log.js





// 日志逻辑



function _sdklog() {
  if (emedia._logContextIndex < 0) {
    return;
  }

  if (!emedia._logContext || !(emedia._logContext instanceof Array)) {
    return;
  }

  var contextIndex = emedia._logContextIndex % emedia._logContext.length;
  var logInfos = emedia._logContext[contextIndex];

  if (!logInfos || !(logInfos instanceof Array)) {
    logInfos = emedia._logContext[contextIndex] = [];
  }

  var info = [];
  info.push(emedia._logContextIndex);
  var now = new Date();

  if (typeof now.toLocaleString === 'function') {
    info.push(now.toLocaleString());
  } else if (now.toJSON) {
    info.push(now.toJSON());
  } else if (now.toISOString) {
    info.push(now.toISOString());
  } else {
    info.push(now + '');
  }

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];

    if (typeof arg === 'string') {
      info.push(arg);
      continue;
    }

    if (!arg) {
      info.push(arg);
      continue;
    }

    if (typeof arg.message === 'string') {
      info.push(arg.message);
      continue;
    }

    if (typeof arg.message === 'function') {
      info.push(arg.message());
      continue;
    }

    if (typeof arg.stack === 'string') {
      info.push(arg.stack);
      continue;
    }

    if (arg.event && typeof arg.event.toString === 'function') {
      info.push(arg.event.toString());
      continue;
    }

    if (arg.event && typeof arg.event.toString === 'function') {
      info.push(arg.event.toString());
      continue;
    }

    if (typeof arg.candidate === 'string') {
      info.push(arg.candidate);
      continue;
    }

    if (typeof arg.sdp === 'string') {
      info.push(arg.sdp);
      continue;
    }

    if (lodash_es_isPlainObject(arg)) {
      info.push(stringify_default()(arg));
    } else {
      info.push(String(arg));
    }
  }

  var infoString;

  if (defaultConfig.loglastStoreArray) {
    logInfos.push(infoString = info.join(' '));
  }

  if (typeof emedia.config.onSdkLog === 'function') {
    try {
      infoString || (infoString = info.join(' '));
      emedia.config.onSdkLog(infoString);
    } catch (e) {
      console.error(e);
    }
  }
}

function sdklog() {
  try {
    _sdklog.apply(null, arguments);
  } catch (e) {
    console.warn(e);
  }
}

function callLog(level, args, self) {
  try {
    if (emedia && emedia.LOG_LEVEL && level < emedia.LOG_LEVEL) {
      return;
    }

    var _args = [];

    _args.push(level);

    self.tag && _args.push(self.tag);

    from_default()(args).forEach(function (item, index) {
      _args.push(item && item._toString ? item._toString.call(item) : item);
    });

    self._log.apply(self, _args);
  } catch (e) {
    throw e;
  }
}

var New_Logger = /*#__PURE__*/function () {
  function New_Logger() {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'EMEDIA';

    _classCallCheck(this, New_Logger);

    _defineProperty(this, "LogLevel", {
      TRACE: 0,
      DEBUG: 1,
      INFO: 2,
      WARN: 3,
      ERROR: 4,
      FATAL: 5
    });

    _defineProperty(this, "LogLevelName", ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']);

    this.tag = tag;

    if (defaultConfig.loglastConfrCount) {
      this._logContext = new Array(defaultConfig.loglastConfrCount);
      this._logContextIndex = -1;
    }
  }

  _createClass(New_Logger, [{
    key: "_log",
    value: function _log() {
      var level = arguments[0];
      level = arguments[0] = this.LogLevelName[level];
      this._logContext && sdklog.apply(null, arguments);

      if (emedia.config.consoleLogger !== true) {
        return;
      }

      if (console && level) {
        ;
        (console[level.toLowerCase()] || console.warn).apply(console, arguments);
      }
    }
  }, {
    key: "log",
    value: function log() {
      callLog(this.LogLevel.INFO, arguments, this);
    }
  }, {
    key: "trace",
    value: function trace() {
      callLog(this.LogLevel.TRACE, arguments, this);
    }
  }, {
    key: "debug",
    value: function debug() {
      callLog(this.LogLevel.DEBUG, arguments, this);
    }
  }, {
    key: "info",
    value: function info() {
      callLog(this.LogLevel.INFO, arguments, this);
    }
  }, {
    key: "warn",
    value: function warn() {
      callLog(this.LogLevel.WARN, arguments, this);
    }
  }, {
    key: "error",
    value: function error() {
      callLog(this.LogLevel.ERROR, arguments, this);
    }
  }, {
    key: "fatal",
    value: function fatal() {
      callLog(this.LogLevel.FATAL, arguments, this);
    }
  }, {
    key: "count",
    value: function count() {
      if (emedia._logContext) {
        emedia._logContextIndex++;
        var contextIndex = emedia._logContextIndex % emedia._logContext.length;

        if (contextIndex === 0 && emedia._logContextIndex !== 0) {
          emedia._logContext.loadlogs = emedia._logContext[contextIndex];
        }

        emedia._logContext[contextIndex] = [];
      }
    }
  }]);

  return New_Logger;
}();

var logger = new New_Logger();

var tagLogger = function tagLogger(tag) {
  return new New_Logger(tag);
};

/* harmony default export */ const utils_log = (logger);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__(4422);
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);
;// CONCATENATED MODULE: ./emedia-sdk/utils/proto.js



/**
 * Util
 *
 * @constructor
 */

function Util() {}
/**
 * Function extend
 *
 * @returns {*|{}}
 */


Util.prototype.extend = function () {
  var self = this;
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target; // Skip the boolean and the target

    target = arguments[i] || {};
    i++;
  } // Handle case when target is a string or something (possible in deep
  // copy)


  if (_typeof(target) !== 'object' && !self.isFunction(target)) {
    target = {};
  } // Extend self itself if only one argument is passed


  if (i === length) {
    target = this;
    i--;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name]; // Prevent never-ending loop

        if (target === copy) {
          continue;
        } // Recurse if we're merging plain objects or arrays


        if (deep && copy && (lodash_es_isPlainObject(copy) || (copyIsArray = is_array_default()(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && is_array_default()(src) ? src : [];
          } else {
            clone = src && lodash_es_isPlainObject(src) ? src : {};
          } // Never move original objects, clone them


          target[name] = self.extend(deep, clone, copy); // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  } // Return the modified object


  return target;
};

Util.prototype.prototypeExtend = Util.prototype.classExtend = function () {
  var self = this;

  function _Obj__() {
    for (var i = 0; i < arguments.length; i++) {
      var cfg = arguments[i] || {};
      self.extend(true, this, cfg);
    }

    this.__init__ && this.__init__.apply(this, arguments);
  }

  for (var i = 0; i < arguments.length; i++) {
    var cfg = arguments[i] || {};

    if (typeof cfg === 'function') {
      cfg = cfg.prototype;
    }

    self.extend(true, _Obj__.prototype, cfg);
  }

  _Obj__.extend || (_Obj__.extend = function (_prototypeExtend) {
    return self.prototypeExtend(_Obj__, _prototypeExtend);
  });
  return _Obj__;
};

/* harmony default export */ const proto = (new Util());
;// CONCATENATED MODULE: ./emedia-sdk/utils/index.js



/*
 * ! Math.uuid.js (v1.4) http://www.broofa.com mailto:robert@broofa.com
 *
 * Copyright (c) 2010 Robert Kieffer Dual licensed under the MIT and GPL
 * licenses.
 */

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix) length - the desired number of characters
 * radix - the number of allowable values for each character.
 *
 * EXAMPLES: // No arguments - returns RFC4122, version 4 ID >>> Math.uuid()
 * "92329D39-6F5C-4520-ABFC-AAB64544E172" // One argument - returns ID of the
 * specified length >>> Math.uuid(15) // 15 character ID (default base=62)
 * "VcydxgltxrVZSTV" // Two arguments - returns ID of the specified length, and
 * radix. (Radix must be <= 62) >>> Math.uuid(8, 2) // 8 character ID (base=2)
 * "01001010" >>> Math.uuid(8, 10) // 8 character ID (base=10) "47473046" >>>
 * Math.uuid(8, 16) // 8 character ID (base=16) "098F4D35"
 */
// A more performant, but slightly bulkier, RFC4122v4 solution. We boost
// performance
// by minimizing calls to random()
function uuidFast() {
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var chars = CHARS,
      uuid = new Array(36),
      rnd = 0,
      r;

  for (var i = 0; i < 36; i++) {
    if (i == 8 || i == 13 || i == 18 || i == 23) {
      uuid[i] = '-';
    } else if (i == 14) {
      uuid[i] = '4';
    } else {
      if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
      r = rnd & 0xf;
      rnd = rnd >> 4;
      uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
    }
  }

  return uuid.join('');
}
/**
 * query parameter from url
 *
 * @name parseURL
 * @memberof C.Tools
 * @param {string}
 *
 * @return {string}
 * @type function
 * @public
 */


function parseURL(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    return unescape(r[2]);
  }

  return null;
}

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

function list() {
  var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
  return args;
}

function removeAttribute(elem, key) {
  if (elem === null || elem === undefined) {
    return;
  }

  var obj = elem[key]; // if(emedia.isSafari && obj && obj.__undefinedEQDelete){ // safari delete stream时，地址栏会有个小喇叭; 要延迟删除
  //     emedia._stream_garbages || (emedia._stream_garbages = [])
  //     emedia._stream_garbages.push(obj);
  // }

  delete elem[key];
  return obj;
}

function isEmptyObject(obj) {
  var name;

  for (name in obj) {
    return false;
  }

  return true;
}

function utilForEach(obj, func) {
  if (!obj) {
    return;
  }

  if (is_array_default()(obj) && obj.length === 0) {
    return;
  }

  if (obj.length !== undefined && obj.length === 0) {
    return;
  }

  if (obj.length) {
    for (var i = 0; i < obj.length; i++) {
      func(i, obj[i]);
    }

    return;
  }

  if (!obj || isEmptyObject(obj)) {
    return;
  }

  obj = obj || {};

  var copy = assign_default()({}, obj);

  for (var index in copy) {
    func(index, obj[index]);
  }
}


;// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ const _createBaseFor = (createBaseFor);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

/* harmony default export */ const _baseFor = (baseFor);

;// CONCATENATED MODULE: ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ const lodash_es_identity = (identity);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_castFunction.js


/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : lodash_es_identity;
}

/* harmony default export */ const _castFunction = (castFunction);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const _baseTimes = (baseTimes);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}

/* harmony default export */ const _baseIsArguments = (baseIsArguments);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const lodash_es_isArguments = (isArguments);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const lodash_es_isArray = (isArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/stubFalse.js
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const lodash_es_stubFalse = (stubFalse);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isBuffer.js



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || lodash_es_stubFalse;

/* harmony default export */ const lodash_es_isBuffer = (isBuffer);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const _isIndex = (isIndex);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var isLength_MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= isLength_MAX_SAFE_INTEGER;
}

/* harmony default export */ const lodash_es_isLength = (isLength);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    _baseIsTypedArray_objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[_baseIsTypedArray_objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) &&
    lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

/* harmony default export */ const _baseIsTypedArray = (baseIsTypedArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const _baseUnary = (baseUnary);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nodeUtil.js


/** Detect free variable `exports`. */
var _nodeUtil_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _nodeUtil_freeModule = _nodeUtil_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _nodeUtil_moduleExports = _nodeUtil_freeModule && _nodeUtil_freeModule.exports === _nodeUtil_freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = _nodeUtil_moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = _nodeUtil_freeModule && _nodeUtil_freeModule.require && _nodeUtil_freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const _nodeUtil = (nodeUtil);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ const lodash_es_isTypedArray = (isTypedArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && lodash_es_isBuffer(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _arrayLikeKeys = (arrayLikeKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject_isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const lodash_es_isObject = (isObject_isObject);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || _isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ const _isPrototype = (isPrototype);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _nativeKeysIn = (nativeKeysIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!lodash_es_isObject(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _baseKeysIn = (baseKeysIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    isFunction_funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == isFunction_funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const lodash_es_isFunction = (isFunction);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}

/* harmony default export */ const lodash_es_isArrayLike = (isArrayLike);

;// CONCATENATED MODULE: ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

/* harmony default export */ const lodash_es_keysIn = (keysIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/forIn.js




/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : _baseFor(object, _castFunction(iteratee), lodash_es_keysIn);
}

/* harmony default export */ const lodash_es_forIn = (forIn);

;// CONCATENATED MODULE: ./emedia-sdk/src/components/PCStats.js





var PCStats_logger = tagLogger('PCStats');
/**
 * outbound-rtp
 *  bytesSent
 *  packetsSent
 *  qpSum
 *  pliCount
 * inbound-rtp
 *  bytesReceived
 *  framesDecoded
 *  packetsLost
 *  packetsReceived
 *  pliCount
 * track
 *  framesDecoded
 *  framesReceived
 *  framesDropped
 * transport
 *  bytesReceived
 *  bytesSent
 * candidate-pair
 *  bytesReceived
 *  bytesSent
 *  totalRoundTripTime
 *  requestsReceived
 *  responsesSent
 *  requestsSent
 *  responsesReceived
 * local-candidate
 *  networkType
 *  protocol
 *  port
 * remote-candidate
 *  ip
 * codec
 *  clockRate
 *  mimeType
 *
 *
 */

var PCStats = proto.prototypeExtend({
  //_webrtc:
  //_stream:
  __init__: function __init__() {
    if (!this._webrtc) {
      this._stream && (this._webrtc = this._stream._webrtc);
    }

    this.samplesDatas = {};
    this.gatherResults = {};
    this._bysamples = {};

    if (this._inbound_ !== false) {
      this._bysamples['inbound-rtp'] = ['bytesRateReceived', 'packageLossRate', 'bytesReceived', 'packetsLost', 'packetsReceived', 'pliCount', 'framesDecoded']; //this._bysamples["inbound-rtp"] = ["bytesReceived", "packetsLost", "packetsReceived", "packageLossRate"];
    }

    if (this._outbound_ !== false) {
      this._bysamples['outbound-rtp'] = ['bytesRateSent', 'bytesSent', 'packetsSent', 'qpSum', 'pliCount']; //this._bysamples["outbound-rtp"] = ["bytesSent"];
    }
  },
  _onGatherResult: function _onGatherResult(trackId, type, subtype, data) {
    //logger.info(trackId, type, subtype, data);
    //logger.debug(trackId, type, subtype, data);
    var self = this;

    if (self._service && self._service.current && emedia.config.remainLastStatsCount) {
      var trackStats = self._service.current._trackStats;

      if (!trackStats) {
        trackStats = self._service.current._trackStats = {};
      }

      var typeStats = (trackStats[trackId] || (trackStats[trackId] = {}))[type];

      if (!typeStats) {
        typeStats = trackStats[trackId][type] = {};
      }

      var subTypeStats = typeStats[subtype];

      if (!subTypeStats) {
        subTypeStats = typeStats[subtype] = new Array(emedia.config.remainLastStatsCount);
      }

      subTypeStats.curIndex === undefined && (subTypeStats.curIndex = 0);
      subTypeStats[subTypeStats.curIndex] = {
        data: data,
        timestamp: new Date()
      };
      subTypeStats.curIndex = (subTypeStats.curIndex + 1) % emedia.config.remainLastStatsCount;
    }

    typeof this.onGatherResult === 'function' && this.onGatherResult(trackId, type, subtype, data);
  },
  stats: function stats(selector) {
    if (!this._webrtc || !this._webrtc._rtcPeerConnection) {
      PCStats_logger.warn('not found webrtc or peer connection');
      return;
    }

    return this._webrtc._rtcPeerConnection.getStats(selector);
  },
  statsOfTrack: function statsOfTrack(selector) {
    if (!selector instanceof window.MediaStreamTrack) {
      PCStats_logger.error('selector not a MediaStreamTrack');
      throw 'selector not a MediaStreamTrack';
    }

    return this.stats(selector);
  },
  audioTrack: function audioTrack(mediaStream) {
    var tracks = mediaStream && mediaStream.getAudioTracks();
    return tracks && tracks.length ? tracks[0] : undefined;
  },
  videoTrack: function videoTrack(mediaStream) {
    var tracks = mediaStream && mediaStream.getVideoTracks();
    return tracks && tracks.length ? tracks[0] : undefined;
  },
  gatherTrack: function gatherTrack(track, mediaType) {
    var self = this;
    mediaType = track.kind || mediaType;
    mediaType = mediaType && mediaType.toLowerCase();
    var trackId = track.id;
    this.statsOfTrack(track).then(function (_stats) {
      self.samplesDatas[trackId] || (self.samplesDatas[trackId] = {});
      var statsParms = self.samplesDatas[trackId];

      _stats.forEach(function (_stat, name) {
        var samplings = self._bysamples[_stat.type];
        var statMediaType = _stat.mediaType || name.indexOf('ideo') >= 0 && 'video' || name.indexOf('udio') >= 0 && 'audio' || undefined;

        if (samplings && samplings.length) {
          if (emedia.config._printDebugStats === true) {// logger.debug(name, _stat, track, statMediaType, mediaType)
          }

          if (!statMediaType || statMediaType === mediaType) {
            var tmp = statsParms[_stat.type] || (statsParms[_stat.type] = {});
            samplings.forEach(function (_param) {
              var items = tmp[_param] || (tmp[_param] = []);
              var item = {
                timestamp: _stat.timestamp,
                kind: _stat.mediaType || track.kind || mediaType
              };

              if ('packageLossRate' === _param) {
                item[_param] = {
                  packetsLost: _stat['packetsLost'],
                  packetsReceived: _stat['packetsReceived']
                };
              } else if ('bytesRateReceived' === _param) {
                item[_param] = _stat['bytesReceived'];
              } else if ('bytesRateSent' === _param) {
                item[_param] = _stat['bytesSent'];
              } else {
                item[_param] = _stat[_param];
              }

              items.push(item);
            });
          }
        }
      });
    });
  },
  gatherWebrtcMediaStream: function gatherWebrtcMediaStream(_mediaStream, type) {
    var self = this;

    if (!type) {
      _mediaStream.getTracks().forEach(function (track) {
        self.gatherTrack(track);
      });

      return;
    }

    if ('audio' === type.toLowerCase()) {
      _mediaStream.getAudioTracks().forEach(function (track) {
        self.gatherTrack(track, track.kind || type.toLowerCase());
      });

      return;
    }

    if ('video' === type.toLowerCase()) {
      _mediaStream.getVideoTracks().forEach(function (track) {
        self.gatherTrack(track, track.kind || type.toLowerCase());
      });

      return;
    }
  },
  gatherWebrtc: function gatherWebrtc() {
    this._webrtc._localStream && this.gatherWebrtcMediaStream(this._webrtc._localStream);
    this._webrtc._remoteStream && this.gatherWebrtcMediaStream(this._webrtc._remoteStream);
  },
  _gather_inbound_rtp_packageLossRate: function _gather_inbound_rtp_packageLossRate(dataArray) {
    if (!dataArray || dataArray.length === 0) {
      return 0;
    }

    var sum = 0;
    var count = 0;

    if (dataArray.length > 1) {
      for (var i = 1; i < dataArray.length; i++) {
        var data = dataArray[i];
        var predata = dataArray[i - 1];

        if (data.packageLossRate.packetsReceived == predata.packageLossRate.packetsReceived) {
          sum = 0;
          count = 0;
          continue;
        }

        sum = sum + (data.packageLossRate.packetsLost - predata.packageLossRate.packetsLost) / (data.packageLossRate.packetsReceived - predata.packageLossRate.packetsReceived);
        count++;
      }
    }

    if (dataArray.length >= emedia.config.statsSeconds) {
      dataArray.shift();
    }

    return count == 0 ? 0 : sum / count;
  },
  _gatherBytesRate: function _gatherBytesRate(type, subtype, dataArray) {
    if (!dataArray || dataArray.length === 0) {
      return 0;
    }

    var data = dataArray[dataArray.length - 1][subtype] - dataArray[0][subtype]; //byte 字节，不是位

    var time = dataArray[dataArray.length - 1].timestamp - dataArray[0].timestamp;

    if (dataArray.length >= emedia.config.statsSeconds) {
      dataArray.shift();
    }

    return time === 0 ? 0 : parse_float_default()(data * 1000 / time).toFixed(2);
  },
  _gather: function _gather(type, subtype, dataArray) {
    type = type.replace(/[^\w]/g, '_');
    subtype = subtype.replace(/[^\w]/g, '_');
    var func = list('_gather', type, subtype).join('_');

    if (typeof this[func] === 'function') {
      return this[func](dataArray);
    }

    if (subtype.startsWith('bytesRate')) {
      return this._gatherBytesRate(type, subtype, dataArray);
    }

    var data = dataArray.shift();
    return data && data[subtype] || 0;
  },
  _statsCount: function _statsCount() {
    var self = this;

    function gatherByTrack() {
      lodash_es_forIn(self.samplesDatas, function (_samples, trackId) {
        var trackGathers = self.gatherResults[trackId] = self.gatherResults[trackId] || {};
        gatherByType(trackId, trackGathers, _samples);
      });
    }

    function gatherByType(trackId, trackGathers, _trackSamples) {
      lodash_es_forIn(_trackSamples, function (_data, type) {
        var typeGathers = trackGathers[type] || (trackGathers[type] = {});
        gatherBySubtype(trackId, typeGathers, type, _data);
      });
    }

    function gatherBySubtype(trackId, typeGathers, type, _data) {
      lodash_es_forIn(_data, function (dataArray, subtype) {
        var result = typeGathers[subtype] = self._gather(type, subtype, dataArray);

        self._onGatherResult(trackId, type, subtype, result);
      });
    }

    gatherByTrack();
  },
  gather: function gather() {
    this.gatherWebrtc();

    this._statsCount();
  },
  intervalGather: function intervalGather(intervalMillis) {
    this._intervalId && clearInterval(this._intervalId);
    this._intervalId = setInterval(this.gather.bind(this), intervalMillis || 1000);
  },
  stopIntervalGather: function stopIntervalGather() {
    this._intervalId && clearInterval(this._intervalId);
  }
});
var statsMap = {};

var echo = PCStats.echo = function (hxStreams) {
  hxStreams.forEach(function (_stream, _k) {
    if (!statsMap[_stream.id] && _stream._webrtc && !_stream._webrtc.closed && _stream.getMediaStream()) {
      var pcstats;
      statsMap[_stream.id] = pcstats = new PCStats({
        _webrtc: _stream._webrtc
      });
      pcstats._mediaStream = _stream.getMediaStream();
    } else if (statsMap[_stream.id] && (!_stream._webrtc || _stream._webrtc.closed || !_stream.getMediaStream())) {
      removeAttribute(statsMap, _stream.id);
    }
  });
  var clearStats = [];
  lodash_es_forIn(function (stats, _sid) {
    if (!hxStreams || !hxStreams[_sid]) {
      clearStats.push(_sid);
    } else {
      stats.gatherWebrtcMediaStream(stats._mediaStream);

      stats._statsCount();
    }
  });
  clearStats.forEach(function (_sid, _index) {
    removeAttribute(statsMap, _sid);
  });
};

PCStats.intervalEcho = function (hxStreams, intervalMillis) {
  return setInterval(function () {
    return echo(hxStreams);
  }, intervalMillis);
};

['inbound', 'outbound'].forEach(function (gatherType, _typeIndex) {
  ;
  ['Audio', 'Video'].forEach(function (trackType, _trackTypeIndex) {
    ;

    (function gather(gatherType, trackType) {
      var _gatherTrack;

      PCStats[gatherType + trackType] = _gatherTrack = function gatherTrack(hxStream, onNotify, intervalMillis) {
        _gatherTrack.__intervalIds || (_gatherTrack.__intervalIds = {});
        var service;

        if (this instanceof emedia.Service) {
          service = this;
        } else {
          service = emedia.useCurrentXService;
        }

        var index = hxStream.id + '___' + service.namespace;
        var intervalId = _gatherTrack.__intervalIds && _gatherTrack.__intervalIds[index];
        intervalId && clearInterval(intervalId);
        intervalId = setInterval(function () {
          var pcstats = _gatherTrack[index];

          if (!pcstats && hxStream && hxStream._webrtc && !hxStream._webrtc.closed && hxStream.getMediaStream()) {
            _gatherTrack[index] = pcstats = new PCStats({
              _webrtc: hxStream._webrtc,
              _inbound_: gatherType === 'inbound',
              _outbound_: gatherType === 'outbound'
            });
            pcstats._service = service;
            onNotify && (pcstats.onGatherResult = onNotify);
            pcstats._mediaStream = hxStream.getMediaStream();
          } else if (pcstats && (!hxStream || !hxStream._webrtc || hxStream._webrtc.closed || hxStream._webrtc.__id !== pcstats._webrtc.__id || !hxStream.getMediaStream() || !pcstats._mediaStream || pcstats._mediaStream.id !== hxStream.getMediaStream().id)) {
            removeAttribute(_gatherTrack, index);
            pcstats = null;
          }

          if (!pcstats) {
            var cacheStream;

            if (hxStream && service && (cacheStream = service.getStreamById(hxStream.id))) {
              hxStream = cacheStream;
            } else {
              intervalId && clearInterval(intervalId);
            }

            return;
          }

          pcstats.gatherWebrtcMediaStream(pcstats._mediaStream, trackType);

          pcstats._statsCount();
        }, intervalMillis);
        _gatherTrack.__intervalIds[index] = intervalId;
        return intervalId;
      };
    })(gatherType, trackType);
  });
});
/* harmony default export */ const components_PCStats = (PCStats);
;// CONCATENATED MODULE: ./emedia-sdk/src/tracks.js



function stopAudioTracks(stream) {
  stream.getAudioTracks().forEach(function (track) {
    track.stop();
    utils_log.info('Media stream stop audio track. stream =', stream.id, 'track =', track.id, track.kind);
  });
}

function stopAndRemoveAudioTracks(stream) {
  stream.getAudioTracks().forEach(function (track) {
    track.stop();
    removeTrack(track);
    utils_log.info('Media stream stop and remove audio tracks. stream =', stream.id, 'track =', track.id, track.kind);
  });
}

function stopTracks(stream) {
  try {
    if (!stream || stream.active === false) {
      utils_log.debug('stream tracks had been stoped. it ', stream && stream.id);
      return;
    }

    stream.getTracks().forEach(function (track) {
      track.stop();
      utils_log.info('Media stream stop track. stream =', stream.id, ' track =', track.id, track.kind);
    });

    if (stream._bindAttendee) {
      //push stream时，由于异步，在未返回成功后，退出会议，摄像头不会被关闭问题
      removeAttribute(stream._bindAttendee._openedRtcMediaStreams, stream.id);
      stream._bindAttendee = null;
    }

    utils_log.info('stream tracks stoped. it ', stream.id);
  } catch (e) {
    utils_log.error(e);
  }
}

function enableVideoTracks(stream, enabled) {
  stream === null || stream === void 0 ? void 0 : stream.getVideoTracks().forEach(function (track) {
    if (typeof track.enable === 'function') {
      track.enable();
      utils_log.info('Media stream enable video track. stream =', stream.id, 'track =', track.kind, track.enabled, track.id);
      track.enabled === enabled || track.enable(enabled);
      return;
    }

    track.enabled === enabled || (track.enabled = enabled);
  });
}

function enableAudioTracks(stream, enabled) {
  stream === null || stream === void 0 ? void 0 : stream.getAudioTracks().forEach(function (track) {
    if (typeof track.enable === 'function') {
      track.enable();
      utils_log.info('Media stream enable audio track. stream =', stream.id, 'track =', track.kind, track.enabled, track.id);
      track.enabled === enabled || track.enable(enabled);
      return;
    }

    track.enabled === enabled || (track.enabled = enabled);
  });
}

function hasEnabledTracks(stream) {
  if (!stream || typeof stream.getAudioTracks !== 'function') {
    return false;
  }

  if (!stream.active) {
    return false;
  }

  var tracks = stream.getAudioTracks();

  if (tracks.length === 0) {
    return false;
  }

  for (var i in tracks) {
    if (typeof tracks[i].enable === 'function') {
      tracks[i].enable();
    }

    if (tracks[i].enabled) {
      return true;
    }
  }

  return false;
}


;// CONCATENATED MODULE: ./emedia-sdk/src/report.js
// 处理日志及其上报
function genReport() {
  if (!emedia._logContext) {
    return;
  }

  if (!(emedia._logContext instanceof Array)) {
    return;
  }

  if (typeof emedia._logContextIndex === 'undefined' || emedia._logContextIndex < 0) {
    return;
  }

  var start = 0;
  var end = emedia._logContextIndex;

  if (emedia._logContextIndex >= emedia._logContext.length) {
    start = emedia._logContextIndex - emedia._logContext.length + 1;
  }

  var report = '';

  for (var i = start; i <= end; i++) {
    var index = i % emedia._logContext.length;
    var oneConfrLogs = emedia._logContext[index];
    report += oneConfrLogs.join('\r\n') + '\r\n';
  }

  if (emedia._logContext.loadlogs && emedia._logContext.loadlogs instanceof Array) {
    report += '-------------------------------------------------------------\r\n';
    report += emedia._logContext.loadlogs.join('\r\n') + '\r\n';
  }

  return report;
}

function fileReport() {
  var fileContent = genReport();

  if (!fileContent) {
    return;
  }

  var content = encodeURIComponent(fileContent);
  var link = document.createElement('a');
  link.style.display = 'none';
  link.download = 'emedia-' + new Date().toJSON() + '.log';
  link.href = 'data:text/plain;charset=utf-8,' + content;
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
}


;// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["__core-js_shared__"];

/* harmony default export */ const _coreJsData = (coreJsData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const _isMasked = (isMasked);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var _toSource_funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var _toSource_funcToString = _toSource_funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return _toSource_funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const _toSource = (toSource);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ const _baseIsNative = (baseIsNative);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const _getValue = (getValue);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ const _getNative = (getNative);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js


var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const lodash_es_defineProperty = (defineProperty);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && lodash_es_defineProperty) {
    lodash_es_defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const _baseAssignValue = (baseAssignValue);

;// CONCATENATED MODULE: ./node_modules/lodash-es/eq.js
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const lodash_es_eq = (eq);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var _assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(_assignValue_hasOwnProperty.call(object, key) && lodash_es_eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ const _assignValue = (assignValue);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ const _copyObject = (copyObject);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const _apply = (apply);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ const _overRest = (overRest);

;// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const lodash_es_constant = (constant);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !lodash_es_defineProperty ? lodash_es_identity : function(func, string) {
  return lodash_es_defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ const _baseSetToString = (baseSetToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const _shortOut = (shortOut);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ const _setToString = (setToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ const _baseRest = (baseRest);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!lodash_es_isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (lodash_es_isArrayLike(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return lodash_es_eq(object[index], value);
  }
  return false;
}

/* harmony default export */ const _isIterateeCall = (isIterateeCall);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createAssigner.js



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ const _createAssigner = (createAssigner);

;// CONCATENATED MODULE: ./node_modules/lodash-es/assignIn.js




/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = _createAssigner(function(object, source) {
  _copyObject(source, lodash_es_keysIn(source), object);
});

/* harmony default export */ const lodash_es_assignIn = (assignIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const _listCacheClear = (listCacheClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const _assocIndexOf = (assocIndexOf);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const _listCacheDelete = (listCacheDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const _listCacheGet = (listCacheGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ const _listCacheHas = (listCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const _listCacheSet = (listCacheSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ const _ListCache = (ListCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

/* harmony default export */ const _stackClear = (stackClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const _stackDelete = (stackDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const _stackGet = (stackGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const _stackHas = (stackHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var _Map_Map = _getNative(_root, 'Map');

/* harmony default export */ const _Map = (_Map_Map);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

/* harmony default export */ const _nativeCreate = (nativeCreate);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ const _hashClear = (hashClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _hashDelete = (hashDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var _hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const _hashGet = (hashGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ const _hashHas = (hashHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const _hashSet = (hashSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ const _Hash = (Hash);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

/* harmony default export */ const _mapCacheClear = (mapCacheClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const _isKeyable = (isKeyable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const _getMapData = (getMapData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _mapCacheDelete = (mapCacheDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ const _mapCacheGet = (mapCacheGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ const _mapCacheHas = (mapCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const _mapCacheSet = (mapCacheSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ const _MapCache = (MapCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const _stackSet = (stackSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ const _Stack = (Stack);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var _setCacheAdd_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, _setCacheAdd_HASH_UNDEFINED);
  return this;
}

/* harmony default export */ const _setCacheAdd = (setCacheAdd);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ const _setCacheHas = (setCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_SetCache.js




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ const _SetCache = (SetCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ const _arraySome = (arraySome);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cacheHas.js
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ const _cacheHas = (cacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const _equalArrays = (equalArrays);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var _Uint8Array_Uint8Array = _root.Uint8Array;

/* harmony default export */ const _Uint8Array = (_Uint8Array_Uint8Array);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapToArray.js
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ const _mapToArray = (mapToArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setToArray.js
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ const _setToArray = (setToArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var _equalByTag_boolTag = '[object Boolean]',
    _equalByTag_dateTag = '[object Date]',
    _equalByTag_errorTag = '[object Error]',
    _equalByTag_mapTag = '[object Map]',
    _equalByTag_numberTag = '[object Number]',
    _equalByTag_regexpTag = '[object RegExp]',
    _equalByTag_setTag = '[object Set]',
    _equalByTag_stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var _equalByTag_arrayBufferTag = '[object ArrayBuffer]',
    _equalByTag_dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case _equalByTag_dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case _equalByTag_arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case _equalByTag_boolTag:
    case _equalByTag_dateTag:
    case _equalByTag_numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return lodash_es_eq(+object, +other);

    case _equalByTag_errorTag:
      return object.name == other.name && object.message == other.message;

    case _equalByTag_regexpTag:
    case _equalByTag_stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case _equalByTag_mapTag:
      var convert = _mapToArray;

    case _equalByTag_setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ const _equalByTag = (equalByTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ const _arrayPush = (arrayPush);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetAllKeys.js



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ const _baseGetAllKeys = (baseGetAllKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ const _arrayFilter = (arrayFilter);

;// CONCATENATED MODULE: ./node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const lodash_es_stubArray = (stubArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var _getSymbols_objectProto = Object.prototype;

/** Built-in value references. */
var _getSymbols_propertyIsEnumerable = _getSymbols_objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return _getSymbols_propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const _getSymbols = (getSymbols);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

/* harmony default export */ const _nativeKeys = (nativeKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _baseKeys = (baseKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

/* harmony default export */ const lodash_es_keys = (keys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}

/* harmony default export */ const _getAllKeys = (getAllKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const _equalObjects = (equalObjects);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

/* harmony default export */ const _DataView = (DataView);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var _Promise_Promise = _getNative(_root, 'Promise');

/* harmony default export */ const _Promise = (_Promise_Promise);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

/* harmony default export */ const _Set = (Set);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

/* harmony default export */ const _WeakMap = (WeakMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
    _getTag_objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    _getTag_weakMapTag = '[object WeakMap]';

var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag) ||
    (_Map && getTag(new _Map) != _getTag_mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != _getTag_setTag) ||
    (_WeakMap && getTag(new _WeakMap) != _getTag_weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == _getTag_objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return _getTag_dataViewTag;
        case mapCtorString: return _getTag_mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return _getTag_setTag;
        case weakMapCtorString: return _getTag_weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const _getTag = (getTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var _baseIsEqualDeep_argsTag = '[object Arguments]',
    _baseIsEqualDeep_arrayTag = '[object Array]',
    _baseIsEqualDeep_objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = lodash_es_isArray(object),
      othIsArr = lodash_es_isArray(other),
      objTag = objIsArr ? _baseIsEqualDeep_arrayTag : _getTag(object),
      othTag = othIsArr ? _baseIsEqualDeep_arrayTag : _getTag(other);

  objTag = objTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : othTag;

  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
      othIsObj = othTag == _baseIsEqualDeep_objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && lodash_es_isBuffer(object)) {
    if (!lodash_es_isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || lodash_es_isTypedArray(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ const _baseIsEqualDeep = (baseIsEqualDeep);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqual.js



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!lodash_es_isObjectLike(value) && !lodash_es_isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ const _baseIsEqual = (baseIsEqual);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isEqual.js


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

/* harmony default export */ const lodash_es_isEqual = (isEqual);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/date/now.js
var now = __webpack_require__(3029);
var now_default = /*#__PURE__*/__webpack_require__.n(now);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js
var construct = __webpack_require__(3497);
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__(200);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__(4255);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__(4100);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function _getPrototypeOf(o) {
  _getPrototypeOf = set_prototype_of ? get_prototype_of : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./emedia-sdk/src/components/event.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(construct_default())) return false; if ((construct_default()).sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var event_Error = /*#__PURE__*/function () {
  function Error(props) {
    _classCallCheck(this, Error);

    _defineProperty(this, "msg", '');

    this.day = new Date();
    this.registerProps(props);
  }

  _createClass(Error, [{
    key: "registerProps",
    value: function registerProps(props) {
      for (var key in props) {
        this[key] = props[key];
      }
    }
  }, {
    key: "execTime",
    value: function execTime() {
      var hour = this.day.getHours();

      if (hour < 10) {
        hour = '0' + hour;
      }

      var minute = this.day.getMinutes();

      if (minute < 10) {
        minute = '0' + minute;
      }

      var second = this.day.getSeconds();

      if (second < 10) {
        second = '0' + second;
      }

      return hour + ':' + minute + ':' + second;
    }
  }]);

  return Error;
}();

var __ICEEvent = /*#__PURE__*/function (_Error) {
  _inherits(__ICEEvent, _Error);

  var _super = _createSuper(__ICEEvent);

  function __ICEEvent() {
    _classCallCheck(this, __ICEEvent);

    return _super.apply(this, arguments);
  }

  _createClass(__ICEEvent, [{
    key: "_webrtcDesc",
    value: function _webrtcDesc() {
      var webrtc = this.webrtc;
      var message = this.webrtc.getRtcId();
      return message;
    }
  }]);

  return __ICEEvent;
}(event_Error);

var NetworkChanaged = /*#__PURE__*/function (_Error2) {
  _inherits(NetworkChanaged, _Error2);

  var _super2 = _createSuper(NetworkChanaged);

  function NetworkChanaged() {
    _classCallCheck(this, NetworkChanaged);

    return _super2.apply(this, arguments);
  }

  _createClass(NetworkChanaged, [{
    key: "message",
    value: function message() {
      var message = this.execTime() + ' : Network chanage (' + this.preIp + ' -> ' + this.nowIp + ').';
      return message;
    }
  }]);

  return NetworkChanaged;
}(event_Error);
/**
 * {retry: retry, online: self.online, event: evt, cause: e, session: self}
 */


var WSClose = /*#__PURE__*/function (_Error3) {
  _inherits(WSClose, _Error3);

  var _super3 = _createSuper(WSClose);

  function WSClose() {
    _classCallCheck(this, WSClose);

    return _super3.apply(this, arguments);
  }

  _createClass(WSClose, [{
    key: "message",
    value: function message() {
      var message = this.execTime() + ' WSClose: Websocket close (' + (this.retry || 0) + ').';
      this.online || (message += ' offline.');
      this.event && (message += ' wscode: ' + this.event.code);
      this.cause && (message += ' cause: ' + this.cause.message);
      this.url && (message += ' url: ' + this.url);
      message += ' retry: ' + (this.retry || 0);
      this.session && this.session.getSessionId() && (message = message + ', sess = ' + this.session.getSessionId());
      return message;
    }
  }]);

  return WSClose;
}(event_Error);
/**
 * {event: evt, online: self.online, session: self}
 */


var WSError = /*#__PURE__*/function (_Error4) {
  _inherits(WSError, _Error4);

  var _super4 = _createSuper(WSError);

  function WSError() {
    _classCallCheck(this, WSError);

    return _super4.apply(this, arguments);
  }

  _createClass(WSError, [{
    key: "message",
    value: function message() {
      var message = this.execTime() + ' WSError: Websocket error. ready state:' + (this.event.srcElement && this.event.srcElement.readyState || this.event.currentTarget.readyState) + '. online = ' + this.online;
      this.session && this.session.getSessionId() && (message = message + ', sess = ' + this.session.getSessionId());
      this.url && (message += ' url: ' + this.url);
      return message;
    }
  }]);

  return WSError;
}(event_Error);
/**
 * {event: evt, session: self}
 */


var WSConnected = /*#__PURE__*/function (_Error5) {
  _inherits(WSConnected, _Error5);

  var _super5 = _createSuper(WSConnected);

  function WSConnected() {
    _classCallCheck(this, WSConnected);

    return _super5.apply(this, arguments);
  }

  _createClass(WSConnected, [{
    key: "message",
    value: function message() {
      var message = this.execTime() + ' WSConnected: Websocket success. ready state:' + (this.event.srcElement && this.event.srcElement.readyState || this.event.currentTarget.readyState);
      this.session && this.session.getSessionId() && (message = message + ', sess = ' + this.session.getSessionId());
      return message;
    }
  }]);

  return WSConnected;
}(event_Error);
/**
 * {webrtc: webrtc, event: webrtcEvent, state: webrtcEvent.target.iceConnectionState}
 */


var ICEChanage = /*#__PURE__*/function (_ICEEvent) {
  _inherits(ICEChanage, _ICEEvent);

  var _super6 = _createSuper(ICEChanage);

  function ICEChanage() {
    _classCallCheck(this, ICEChanage);

    return _super6.apply(this, arguments);
  }

  _createClass(ICEChanage, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' ICEChanage: ' + this._webrtcDesc() + ' state: ' + this.state;
    }
  }]);

  return ICEChanage;
}(__ICEEvent);
/**
 * {webrtc: webrtc, event: err}
 */


var AddIceCandError = /*#__PURE__*/function (_ICEEvent2) {
  _inherits(AddIceCandError, _ICEEvent2);

  var _super7 = _createSuper(AddIceCandError);

  function AddIceCandError() {
    _classCallCheck(this, AddIceCandError);

    return _super7.apply(this, arguments);
  }

  _createClass(AddIceCandError, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' AddIceCandError: ' + this._webrtcDesc() + ', add cand error';
    }
  }]);

  return AddIceCandError;
}(__ICEEvent);
/**
 * {webrtc: webrtc, event: event}
 */


var ICEConnectFail = /*#__PURE__*/function (_ICEEvent3) {
  _inherits(ICEConnectFail, _ICEEvent3);

  var _super8 = _createSuper(ICEConnectFail);

  function ICEConnectFail() {
    _classCallCheck(this, ICEConnectFail);

    return _super8.apply(this, arguments);
  }

  _createClass(ICEConnectFail, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' ICEConnectFail: ' + this._webrtcDesc() + ' failed';
    }
  }]);

  return ICEConnectFail;
}(__ICEEvent);
/**
 * {webrtc: webrtc, event: event}
 */


var ICEConnected = /*#__PURE__*/function (_ICEEvent4) {
  _inherits(ICEConnected, _ICEEvent4);

  var _super9 = _createSuper(ICEConnected);

  function ICEConnected() {
    _classCallCheck(this, ICEConnected);

    return _super9.apply(this, arguments);
  }

  _createClass(ICEConnected, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' ICEConnected: ' + this._webrtcDesc() + ' connected';
    }
  }]);

  return ICEConnected;
}(__ICEEvent);
/**
 * {webrtc: webrtc, event: event}
 */


var ICEDisconnected = /*#__PURE__*/function (_ICEEvent5) {
  _inherits(ICEDisconnected, _ICEEvent5);

  var _super10 = _createSuper(ICEDisconnected);

  function ICEDisconnected() {
    _classCallCheck(this, ICEDisconnected);

    return _super10.apply(this, arguments);
  }

  _createClass(ICEDisconnected, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' ICEDisconnected: ' + this._webrtcDesc() + ' disconnected';
    }
  }]);

  return ICEDisconnected;
}(__ICEEvent);
/**
 * {webrtc: webrtc}
 */


var ICEClosed = /*#__PURE__*/function (_ICEEvent6) {
  _inherits(ICEClosed, _ICEEvent6);

  var _super11 = _createSuper(ICEClosed);

  function ICEClosed() {
    _classCallCheck(this, ICEClosed);

    return _super11.apply(this, arguments);
  }

  _createClass(ICEClosed, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' ICEClosed: ' + this._webrtcDesc() + ' closed';
    }
  }]);

  return ICEClosed;
}(__ICEEvent);
/**
 * {webrtc: webrtc}
 */


var ICERemoteMediaStream = /*#__PURE__*/function (_ICEEvent7) {
  _inherits(ICERemoteMediaStream, _ICEEvent7);

  var _super12 = _createSuper(ICERemoteMediaStream);

  function ICERemoteMediaStream() {
    _classCallCheck(this, ICERemoteMediaStream);

    return _super12.apply(this, arguments);
  }

  _createClass(ICERemoteMediaStream, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' ICERemoteMediaStream: ' + this._webrtcDesc() + ' got remote stream';
    }
  }]);

  return ICERemoteMediaStream;
}(__ICEEvent);
/**
 * {stream: stream, state:, msg: }
 */


var StreamState = /*#__PURE__*/function (_Error6) {
  _inherits(StreamState, _Error6);

  var _super13 = _createSuper(StreamState);

  function StreamState() {
    _classCallCheck(this, StreamState);

    return _super13.apply(this, arguments);
  }

  _createClass(StreamState, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' StreamState: ' + ' stream ' + this.stream.id + ' state: ' + this.state + ' ' + this.msg;
    }
  }, {
    key: "iceFail",
    value: function iceFail() {
      this.state = 1;
      this.msg = 'network anomaly. media lost';
    }
  }]);

  return StreamState;
}(event_Error);
/**
 * {member: self.current, event: e}
 */


var OpenMediaError = /*#__PURE__*/function (_Error7) {
  _inherits(OpenMediaError, _Error7);

  var _super14 = _createSuper(OpenMediaError);

  function OpenMediaError() {
    _classCallCheck(this, OpenMediaError);

    return _super14.apply(this, arguments);
  }

  _createClass(OpenMediaError, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' OpenMediaError: ' + ' open media error. caused by ' + (this.event.name ? this.event.name : this.event.message ? this.event.message : this.event.toString());
    }
  }]);

  return OpenMediaError;
}(event_Error);
/**
 * {reason: reason, parnter: {id: self._memberId}}
 */


var Hangup = /*#__PURE__*/function (_Error8) {
  _inherits(Hangup, _Error8);

  var _super15 = _createSuper(Hangup);

  function Hangup() {
    _classCallCheck(this, Hangup);

    return _super15.apply(this, arguments);
  }

  _createClass(Hangup, [{
    key: "message",
    value: function message() {
      if (this.self) {
        return 'hangup id = ' + (this.self.id || '--') + ' reason：' + (this.reason || 0);
      } else {
        return this.execTime() + ' Hangup: ' + (this.parnter && (this.parnter.name || this.parnter.id || ' ') || '') + ' hangup, reason：' + (this.reason || 0);
      }
    }
  }]);

  return Hangup;
}(event_Error);
/**
 * {failed: rsp.result, msg: rsp.msg}
 */


var ServerRefuseEnter = /*#__PURE__*/function (_Error9) {
  _inherits(ServerRefuseEnter, _Error9);

  var _super16 = _createSuper(ServerRefuseEnter);

  function ServerRefuseEnter() {
    _classCallCheck(this, ServerRefuseEnter);

    return _super16.apply(this, arguments);
  }

  _createClass(ServerRefuseEnter, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' ServerRefuseEnter: ' + 'server refuse, cause：' + this.failed + ', msg:' + (this.msg || '');
    }
  }]);

  return ServerRefuseEnter;
}(event_Error);
/**
 * {request: req, response: rsp}
 */


var RspFail = /*#__PURE__*/function (_Error10) {
  _inherits(RspFail, _Error10);

  var _super17 = _createSuper(RspFail);

  function RspFail(props) {
    var _this;

    _classCallCheck(this, RspFail);

    _this = _super17.call(this, props);
    _this.day = new Date();
    _this.failed = _this.response.result;
    _this.msg = _this.response.msg || _this.response.message || '--';
    return _this;
  }

  _createClass(RspFail, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' RspFail: ' + this.request.tsxId + ', ' + (this.response.sessId || '--') + ' op: ' + this.request.op + ', cause: ' + this.failed + ' ' + this.msg;
    }
  }]);

  return RspFail;
}(event_Error);

var RecvResponse = /*#__PURE__*/function (_Error11) {
  _inherits(RecvResponse, _Error11);

  var _super18 = _createSuper(RecvResponse);

  function RecvResponse(props) {
    var _this2;

    _classCallCheck(this, RecvResponse);

    _this2 = _super18.call(this, props);
    _this2.day = new Date();
    _this2.failed = _this2.response.result;
    _this2.msg = _this2.response.msg; //this.request = this.response.result;
    //this.response = this.response.msg;

    return _this2;
  }

  _createClass(RecvResponse, [{
    key: "message",
    value: function message() {
      if (this.request) {
        return this.execTime() + ' RecvResponse: ' + (this.request && this.request.tsxId) + ', ' + (this.response.sessId || '--') + ' op: ' + (this.request && this.request.op) + ', cause: ' + this.failed + ' ' + this.msg;
      } else {
        return this.execTime() + ' RecvMessage: ' + (this.response && this.response.tsxId) + ', ' + (this.response.sessId || '--') + ' op: ' + (this.response && this.response.op) + ' ' + this.msg;
      }
    }
  }]);

  return RecvResponse;
}(event_Error);
/**
 * {me: me, cause: _event_}
 */


var EnterFail = /*#__PURE__*/function (_Error12) {
  _inherits(EnterFail, _Error12);

  var _super19 = _createSuper(EnterFail);

  function EnterFail() {
    _classCallCheck(this, EnterFail);

    return _super19.apply(this, arguments);
  }

  _createClass(EnterFail, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' EnterFail: ' + 'enter fail：' + (this.cause ? this.cause.message() : 'unkown');
    }
  }]);

  return EnterFail;
}(event_Error);

var EnterSuccess = /*#__PURE__*/function (_Error13) {
  _inherits(EnterSuccess, _Error13);

  var _super20 = _createSuper(EnterSuccess);

  function EnterSuccess() {
    _classCallCheck(this, EnterSuccess);

    return _super20.apply(this, arguments);
  }

  _createClass(EnterSuccess, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' EnterSuccess: ' + 'enter success ' + (this.ip ? ', ip = ' + this.ip : ''); // + (", wifi: " + emedia.isWifi());
    }
  }]);

  return EnterSuccess;
}(event_Error);
/**
 * {streamId: rsp.streamId}
 */


var PushSuccess = /*#__PURE__*/function (_Error14) {
  _inherits(PushSuccess, _Error14);

  var _super21 = _createSuper(PushSuccess);

  function PushSuccess() {
    _classCallCheck(this, PushSuccess);

    return _super21.apply(this, arguments);
  }

  _createClass(PushSuccess, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' PushSuccess: ' + 'push success, streamId = ' + this.stream.id + ', ' + this.stream.optimalVideoCodecs + ', webrtc = ' + this.stream.rtcId;
    }
  }]);

  return PushSuccess;
}(event_Error);
/**
 * {webrtc: webrtc, pubS: pubS, me: me, cause: _event_}
 */


var PushFail = /*#__PURE__*/function (_Error15) {
  _inherits(PushFail, _Error15);

  var _super22 = _createSuper(PushFail);

  function PushFail() {
    _classCallCheck(this, PushFail);

    return _super22.apply(this, arguments);
  }

  _createClass(PushFail, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' PushFail: ' + 'push fail, streamId = ' + this.stream.id + ', ' + this.stream.optimalVideoCodecs + ', webrtc = ' + this.stream.rtcId + ' cause：' + (this.cause ? this.cause.message ? this.cause.message() : this.cause : 'unkown');
    }
  }]);

  return PushFail;
}(event_Error);
/**
 * {stream: stream, failed: failed, me: me, cause: cause}
 */


var RemoteControlFail = /*#__PURE__*/function (_Error16) {
  _inherits(RemoteControlFail, _Error16);

  var _super23 = _createSuper(RemoteControlFail);

  function RemoteControlFail() {
    _classCallCheck(this, RemoteControlFail);

    return _super23.apply(this, arguments);
  }

  _createClass(RemoteControlFail, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' RemoteControlFail: ' + (this.type || 'remote control') + ' fail, ' + (this.stream ? this.stream.id : '') + ' failed = ' + this.failed + ' cause：' + (this.cause ? this.cause.message ? this.cause.message() : this.cause : 'unkown');
    }
  }]);

  return RemoteControlFail;
}(event_Error);
/**
 * {stream: stream, cause: }
 */


var SubSuccess = /*#__PURE__*/function (_Error17) {
  _inherits(SubSuccess, _Error17);

  var _super24 = _createSuper(SubSuccess);

  function SubSuccess() {
    _classCallCheck(this, SubSuccess);

    return _super24.apply(this, arguments);
  }

  _createClass(SubSuccess, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' SubSuccess: ' + 'sub success, streamId = ' + this.stream.id + ', ' + this.stream.vcodes + ', webrtc = ' + this.stream.rtcId;
    }
  }]);

  return SubSuccess;
}(event_Error);
/**
 * {stream: stream, cause: }
 */


var SubFail = /*#__PURE__*/function (_Error18) {
  _inherits(SubFail, _Error18);

  var _super25 = _createSuper(SubFail);

  function SubFail() {
    _classCallCheck(this, SubFail);

    return _super25.apply(this, arguments);
  }

  _createClass(SubFail, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' SubFail: ' + 'sub fail, streamId = ' + this.stream.id + ', ' + this.stream.vcodes + ', webrtc = ' + this.stream.rtcId + ' cause：' + (this.cause ? this.cause.message ? this.cause.message() : this.cause : 'unkown');
    }
  }]);

  return SubFail;
}(event_Error);
/**
 * {stream: stream, cause: }
 */


var SubFailNotSupportVCodes = /*#__PURE__*/function (_Error19) {
  _inherits(SubFailNotSupportVCodes, _Error19);

  var _super26 = _createSuper(SubFailNotSupportVCodes);

  function SubFailNotSupportVCodes() {
    _classCallCheck(this, SubFailNotSupportVCodes);

    return _super26.apply(this, arguments);
  }

  _createClass(SubFailNotSupportVCodes, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' SubFailNotSupportVCodes: ' + 'sub fail, streamId = ' + this.stream.id + ' cause：' + (this.cause ? this.cause.message ? this.cause.message() : this.cause : 'unkown');
    }
  }]);

  return SubFailNotSupportVCodes;
}(event_Error);
/**
 * {stream: stream, cause: }
 */


var SubFailSafariNotAllowSubBeforePub = /*#__PURE__*/function (_Error20) {
  _inherits(SubFailSafariNotAllowSubBeforePub, _Error20);

  var _super27 = _createSuper(SubFailSafariNotAllowSubBeforePub);

  function SubFailSafariNotAllowSubBeforePub() {
    _classCallCheck(this, SubFailSafariNotAllowSubBeforePub);

    return _super27.apply(this, arguments);
  }

  _createClass(SubFailSafariNotAllowSubBeforePub, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' SubFailSafariNotAllowSubBeforePub: ' + 'sub fail, streamId = ' + this.stream.id + ' cause：Safari without access to capture devices, ' + 'WebKit only exposes Server Reflexive and TURN ICE candidates, ' + 'which expose IPs that could already be gathered by websites.';
    }
  }]);

  return SubFailSafariNotAllowSubBeforePub;
}(event_Error);
/**
 * {stream: stream, useVCodes: []}
 */


var SwitchVCodes = /*#__PURE__*/function (_Error21) {
  _inherits(SwitchVCodes, _Error21);

  var _super28 = _createSuper(SwitchVCodes);

  function SwitchVCodes() {
    _classCallCheck(this, SwitchVCodes);

    return _super28.apply(this, arguments);
  }

  _createClass(SwitchVCodes, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' SwitchVCodes: ' + 'pub streamId = ' + this.stream.id;
    }
  }]);

  return SwitchVCodes;
}(event_Error);

var CurrentCalling = /*#__PURE__*/function (_Error22) {
  _inherits(CurrentCalling, _Error22);

  var _super29 = _createSuper(CurrentCalling);

  function CurrentCalling() {
    _classCallCheck(this, CurrentCalling);

    return _super29.apply(this, arguments);
  }

  _createClass(CurrentCalling, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' CurrentCalling: ' + 'warn! current calling...';
    }
  }]);

  return CurrentCalling;
}(event_Error);
/**
 * {desktopStreamId: m.streamId}
 */


var OpenDesktopMedia = /*#__PURE__*/function (_Error23) {
  _inherits(OpenDesktopMedia, _Error23);

  var _super30 = _createSuper(OpenDesktopMedia);

  function OpenDesktopMedia() {
    _classCallCheck(this, OpenDesktopMedia);

    return _super30.apply(this, arguments);
  }

  _createClass(OpenDesktopMedia, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' OpenDesktopMedia: ' + 'shared desktop, desktopStreamId = ' + desktopStreamId;
    }
  }]);

  return OpenDesktopMedia;
}(event_Error);

var OpenDesktopMediaAccessDenied = /*#__PURE__*/function (_Error24) {
  _inherits(OpenDesktopMediaAccessDenied, _Error24);

  var _super31 = _createSuper(OpenDesktopMediaAccessDenied);

  function OpenDesktopMediaAccessDenied() {
    _classCallCheck(this, OpenDesktopMediaAccessDenied);

    return _super31.apply(this, arguments);
  }

  _createClass(OpenDesktopMediaAccessDenied, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' OpenDesktopMediaAccessDenied: ' + 'shared desktop not allow';
    }
  }]);

  return OpenDesktopMediaAccessDenied;
}(event_Error);

var OtherDeviceAnswer = /*#__PURE__*/function (_Error25) {
  _inherits(OtherDeviceAnswer, _Error25);

  var _super32 = _createSuper(OtherDeviceAnswer);

  function OtherDeviceAnswer() {
    _classCallCheck(this, OtherDeviceAnswer);

    return _super32.apply(this, arguments);
  }

  _createClass(OtherDeviceAnswer, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' other device answer, webrtc = ' + this.rtcId;
    }
  }]);

  return OtherDeviceAnswer;
}(event_Error);

var AudioMixerStreamNotAllowSub = /*#__PURE__*/function (_Error26) {
  _inherits(AudioMixerStreamNotAllowSub, _Error26);

  var _super33 = _createSuper(AudioMixerStreamNotAllowSub);

  function AudioMixerStreamNotAllowSub() {
    _classCallCheck(this, AudioMixerStreamNotAllowSub);

    return _super33.apply(this, arguments);
  }

  _createClass(AudioMixerStreamNotAllowSub, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' audio mixer stream not allow sub, webrtc = ' + this.rtcId + ', streamId = ' + this.stream.id;
    }
  }]);

  return AudioMixerStreamNotAllowSub;
}(event_Error);

var AudioMixerStreamNotAllowOnlySubVideo = /*#__PURE__*/function (_Error27) {
  _inherits(AudioMixerStreamNotAllowOnlySubVideo, _Error27);

  var _super34 = _createSuper(AudioMixerStreamNotAllowOnlySubVideo);

  function AudioMixerStreamNotAllowOnlySubVideo() {
    _classCallCheck(this, AudioMixerStreamNotAllowOnlySubVideo);

    return _super34.apply(this, arguments);
  }

  _createClass(AudioMixerStreamNotAllowOnlySubVideo, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' audio mixer stream not allow only sub video, webrtc = ' + this.rtcId + ', streamId = ' + this.stream.id;
    }
  }]);

  return AudioMixerStreamNotAllowOnlySubVideo;
}(event_Error);

var AudioMixerStreamRepeatPublish = /*#__PURE__*/function (_Error28) {
  _inherits(AudioMixerStreamRepeatPublish, _Error28);

  var _super35 = _createSuper(AudioMixerStreamRepeatPublish);

  function AudioMixerStreamRepeatPublish() {
    _classCallCheck(this, AudioMixerStreamRepeatPublish);

    return _super35.apply(this, arguments);
  }

  _createClass(AudioMixerStreamRepeatPublish, [{
    key: "message",
    value: function message() {
      return this.execTime() + ' audio mixer stream repeat publish';
    }
  }]);

  return AudioMixerStreamRepeatPublish;
}(event_Error);

var _event = {
  __ICEEvent: __ICEEvent,
  NetworkChanaged: NetworkChanaged,
  WSClose: WSClose,
  WSError: WSError,
  WSConnected: WSConnected,
  ICEChanage: ICEChanage,
  AddIceCandError: AddIceCandError,
  ICEConnectFail: ICEConnectFail,
  ICEConnected: ICEConnected,
  ICEDisconnected: ICEDisconnected,
  ICEClosed: ICEClosed,
  ICERemoteMediaStream: ICERemoteMediaStream,
  StreamState: StreamState,
  OpenMediaError: OpenMediaError,
  Hangup: Hangup,
  ServerRefuseEnter: ServerRefuseEnter,
  RspFail: RspFail,
  RecvResponse: RecvResponse,
  EnterFail: EnterFail,
  EnterSuccess: EnterSuccess,
  PushSuccess: PushSuccess,
  PushFail: PushFail,
  RemoteControlFail: RemoteControlFail,
  SubSuccess: SubSuccess,
  SubFail: SubFail,
  SubFailNotSupportVCodes: SubFailNotSupportVCodes,
  SubFailSafariNotAllowSubBeforePub: SubFailSafariNotAllowSubBeforePub,
  SwitchVCodes: SwitchVCodes,
  CurrentCalling: CurrentCalling,
  OpenDesktopMedia: OpenDesktopMedia,
  OpenDesktopMediaAccessDenied: OpenDesktopMediaAccessDenied,
  OtherDeviceAnswer: OtherDeviceAnswer,
  AudioMixerStreamNotAllowSub: AudioMixerStreamNotAllowSub,
  AudioMixerStreamNotAllowOnlySubVideo: AudioMixerStreamNotAllowOnlySubVideo,
  AudioMixerStreamRepeatPublish: AudioMixerStreamRepeatPublish
};
/* harmony default export */ const components_event = (_event);
;// CONCATENATED MODULE: ./emedia-sdk/src/components/Session.js












var Session_logger = tagLogger('Session');
var __url_seqno = 0;

var Message = /*#__PURE__*/function () {
  function Message() {
    _classCallCheck(this, Message);
  }

  _createClass(Message, [{
    key: "setSessId",
    value: function setSessId(sessId) {
      sessId && (this.sessId = sessId);
      return this;
    }
  }, {
    key: "setOp",
    value: function setOp(op) {
      op && (this.op = op);

      if (op === 200) {
        this.res = {
          type: emedia.config.clientType,
          ver: window._emediaVersion || emedia.config.version,
          agent: navigator.userAgent,
          ops: emedia.config.acptOps
        }; //this.res = JSON.stringify(this.res);
      }

      return this;
    }
  }, {
    key: "setTsxId",
    value: function setTsxId(tsxId) {
      tsxId && (this.tsxId = tsxId);
      return this;
    }
  }, {
    key: "setTicket",
    value: function setTicket(tkt) {
      tkt && (this.tkt = tkt);
      return this;
    }
  }, {
    key: "setSdp",
    value: function setSdp(sdp) {
      sdp && (this.sdp = sdp);
      return this;
    }
  }, {
    key: "setCands",
    value: function setCands(cands) {
      cands && (this.cands = cands);
      return this;
    }
  }, {
    key: "setSubSId",
    value: function setSubSId(subSId) {
      subSId && (this.subSId = subSId);
      return this;
    }
  }, {
    key: "setMemId",
    value: function setMemId(memId) {
      memId && (this.memId = memId);
      return this;
    }
  }, {
    key: "setPubS",
    value: function setPubS(pubS) {
      pubS && (this.pubS = assign_default()({}, pubS));
      var thisPubS = this.pubS;

      if (thisPubS.ext && lodash_es_isPlainObject(thisPubS.ext)) {
        thisPubS.ext = stringify_default()(thisPubS.ext);
      }

      thisPubS && utilForEach(thisPubS, function (key, value) {
        if (lodash_es_isPlainObject(value) || typeof value === 'function') {
          removeAttribute(thisPubS, key);
        }
      });
      thisPubS && removeAttribute(thisPubS, 'localStream');
      thisPubS && removeAttribute(thisPubS, '_localMediaStream');
      thisPubS && removeAttribute(thisPubS, '_webrtc');
      return this;
    }
  }, {
    key: "setRtcId",
    value: function setRtcId(rtcId) {
      rtcId && (this.rtcId = rtcId);
      return this;
    }
  }, {
    key: "setCver",
    value: function setCver(cver) {
      cver && (this.cver = cver);
      return this;
    }
  }, {
    key: "setEndReason",
    value: function setEndReason(endReason) {
      endReason && (this.endReason = endReason);
      return this;
    }
  }, {
    key: "setNickName",
    value: function setNickName(nickName) {
      nickName && (this.nickName = nickName);
      return this;
    }
  }, {
    key: "setResource",
    value: function setResource(resource) {
      resource && (this.resource = resource);
      return this;
    }
  }, {
    key: "setReason",
    value: function setReason(reason) {
      reason && (this.reason = reason);
      return this;
    }
  }, {
    key: "setConfrId",
    value: function setConfrId(confrId) {
      confrId && (this.confrId = confrId);
      return this;
    }
  }, {
    key: "setVoff",
    value: function setVoff(voff) {
      typeof voff === 'undefined' || (this.voff = voff ? 1 : 0);
      return this;
    }
  }, {
    key: "setAoff",
    value: function setAoff(aoff) {
      typeof aoff === 'undefined' || (this.aoff = aoff ? 1 : 0);
      return this;
    }
  }, {
    key: "setFlag",
    value: function setFlag(flag) {
      flag === 0 && (this.flag = 0);
      flag === 1 && (this.flag = 1);
      return this;
    }
  }, {
    key: "setExt",
    value: function setExt(ext) {
      if (ext && lodash_es_isPlainObject(ext)) {
        ext = stringify_default()(ext);
      }

      ext && (this.ext = ext);
      return this;
    }
  }]);

  return Message;
}();
/**
 * {
 *   websocket:
 *   onMessage:
 *   _postMessage(Message):
 *   onError:
 * }
 *
 * reconnectCount > 0 时不上报错误（调用onWebsocketEvent）。
 * 不存在或==0 调用调用onWebsocketEvent
 * 调用onWebsocketEvent WSClose时 将会关闭
 *
 * @returns {*}
 *
 */


function _connect(onConnected, onConnectFail, retry) {
  var self = this;

  function connectFail(cause, _evt) {
    try {
      self.onWebsocketEvent(new components_event.WSClose({
        url: self.thisWsUri,
        retry: retry,
        online: self.online,
        cause: cause,
        event: _evt,
        session: self
      }));
    } finally {
      onConnectFail && onConnectFail(new components_event.WSClose({
        url: self.thisWsUri,
        retry: retry,
        online: self.online,
        cause: cause,
        event: _evt,
        session: self
      }));
    }
  }

  function post(message) {
    if (!self.connected(self.thisWsUri)) {
      Session_logger.debug('current dont connect. the message = ', message);
      return;
    }

    if (lodash_es_isPlainObject(message) && !(message instanceof Message)) {
      Session_logger.error('message not a Messages');
      throw 'message not a Messages';
    }

    if (self.sessId && message.sessId != self.sessId) {
      Session_logger.warn('self.sessId && message.sessId != self.sessId', message);
      return;
    }

    var wsMsg = stringify_default()(message);

    self.thisWsUri === self._websocket.url && self._websocket.send(wsMsg);
    self.thisWsUri === self._websocket.url && Session_logger.debug('Done send req:', wsMsg, self._websocket.url);
    self.thisWsUri === self._websocket.url || Session_logger.debug('Donot send(url not equal): req:', wsMsg, self._websocket.url);
  }

  function notifyNewMessage() {
    if (self.connected(self.thisWsUri)) {
      if (self._bufferedMessages.length === 0) {
        return;
      }

      var __array = [];
      var bufferedMessage;

      while (bufferedMessage = self._bufferedMessages.shift()) {
        if (!bufferedMessage.sessId && !self.sessId && bufferedMessage.op != 200) {
          //等待Enter
          __array.push(bufferedMessage);

          Session_logger.warn('tmp store message, util enter success!', bufferedMessage);
          continue;
        }

        if (bufferedMessage.op === 200) {
          //200单独发送，有可能会修改session值
          post(bufferedMessage);
          break;
        }

        if (self.sessId && !bufferedMessage.sessId) {
          bufferedMessage.sessId = self.sessId;
        }

        var _bufferedMessage = post(bufferedMessage);

        _bufferedMessage && __array.push(_bufferedMessage);
      }

      if (__array.length > 0) {
        Array.prototype.push.apply(self._bufferedMessages, __array);
      } //} else if(!retry || !self.online){

    } else if (retry === 0 || !self.online) {
      var _messageMap = assign_default()({}, self._callbacks);

      var tmp = [];

      for (var tsxId in _messageMap) {
        var msg = _messageMap[tsxId]; //if(retry > 0 && !self.online && (msg.op === 107 || msg.op === 201 || msg.op === 204 || msg.op === 206 || msg.op === 400 || msg.op === 500)) {

        if (retry > 0 && !self.online) {
          //缓存所有消息
          tmp.push(msg);
          continue;
        }

        self.onMessage({
          op: 1001,
          tsxId: tsxId,
          result: -9527,
          msg: 'sdk rsp fail. retry fail or online = ' + self.online
        });
      }

      self._bufferedMessages = self._bufferedMessages || [];
      tmp.length > 0 && Array.prototype.push.apply(self._bufferedMessages, tmp);
    } else if (!self.connected()) {// var _messageMap = Object.assign({}, self._callbacks)
      //
      // for(var tsxId in _messageMap){
      //     var msg = _messageMap[tsxId];
      //     if(msg.op !== 102 && msg.op !== 105 && msg.op !== 1000) {
      //         continue;
      //     }
      //     self.onMessage({op: 1001, tsxId: tsxId, result: -9527, msg: "websocket disconnect", retrying: true});
      // }
    }
  }

  if (self.connected(self.thisWsUri)) {
    onConnected && onConnected(self);
    Session_logger.info('Session connected. dont continue connect');
    self.notifyNewMessage && self.notifyNewMessage();
    return;
  }

  if (!self.online) {
    connectFail();
    return;
  }

  self.notifyNewMessage = notifyNewMessage;
  Session_logger.info('Session begin connect.');
  var _websocket = self._websocket;

  if (_websocket) {
    Session_logger.warn('will close. websocket state', _websocket.readyState, _websocket.url, self.thisWsUri);

    _websocket.close(1000);
  }

  try {
    Session_logger.info('Connecting', self.thisWsUri, retry);
    _websocket = self._websocket = new WebSocket(self.thisWsUri);
  } catch (e) {
    Session_logger.warn(e);
    connectFail(e);
    return;
  }

  _websocket.onopen = function (evt) {
    var _url = this.url;

    if (_url !== self.thisWsUri) {
      Session_logger.warn('ignore the onopen. caused by websocket url not ', self.thisWsUri, _url);
      return;
    }

    try {
      Session_logger.info('websocket connected:', _url);
      onConnectFail && (onConnectFail = null);
      onConnected && onConnected(self);
      self.onWebsocketEvent(new components_event.WSConnected({
        event: evt,
        session: self
      }));
    } finally {//self.notifyNewMessage();
    }
  };

  _websocket.onmessage = function (evt) {
    var _url = this.url;

    if (_url !== self.thisWsUri) {
      Session_logger.warn('ignore recv data. caused by websocket url not ', self.thisWsUri, _url, evt.data);
      return;
    }

    Session_logger.debug('recv data', evt.data);
    var data = JSON.parse(evt.data);
    data && data.op == 1001 && Session_logger.debug('recv message: rsp:', data);
    data && data.op != 1001 && Session_logger.debug('recv message: evt:', data);
    self.onMessage(data);
  };

  _websocket.onclose = function (evt) {
    var _url = this.url;
    Session_logger.info('Disconnected:', _url, self.thisWsUri, evt);

    if (_url !== self.thisWsUri) {
      Session_logger.warn('ignore onclose. caused by websocket url not ', self.thisWsUri, _url);
      return;
    }

    self.notifyNewMessage();

    if (evt.code !== 1000) {
      //手动断开
      connectFail(undefined, evt);
    }
  };

  _websocket.onerror = function (evt) {
    Session_logger.info('On error:', evt);
    self.onWebsocketEvent(new components_event.WSError({
      event: evt,
      online: self.online,
      session: self,
      url: this.url
    }));
  };
}
/**
 * {
 *   ticket:
 *   reconnectCount:
 *   onError:
 *
 *   onEnter:
 *   onExit:
 *   onPub:
 *   onUnpub:
 *   onMems:
 *   onClose:
 *
 *   onInitC:
 *   onTcklC:
 *
 *
 *   newMessage:
 *   postMessage:
 * }
 *
 *
 * @private
 */


var Session = /*#__PURE__*/function () {
  function Session(props) {
    _classCallCheck(this, Session);

    _defineProperty(this, "_events", {
      0: 'onReqP2P',
      1: 'onNewCfr',
      2: 'onDelCfr',
      3: 'onReqTkt',
      100: 'onPing',
      101: 'onPong',
      102: 'onInitC',
      103: 'onReqC',
      104: 'onAcptC',
      105: 'onTcklC',
      106: 'onAnsC',
      107: 'onTermC',
      300: 'onEnter',
      301: 'onExit',
      302: 'onPub',
      303: 'onUnpub',
      304: 'onMems',
      204: 'onClose',
      400: 'onStreamControl',
      401: 'onJoin',
      412: 'onRoleUpdate',
      1002: 'onRemoteControl',
      1003: 'onRecvRemoteMessage' //'onServerError': 'onServerError'

    });

    var self = this; //self.owner = null;

    self._bufferedMessages = [];
    self._callbacks = {};

    function nowline() {
      if (navigator.onLine) {
        self.online = true;
      } else {
        self.online = false;
      }
    }

    nowline(); // window.__hx_checkLineIntervalId_ && clearInterval(window.__hx_checkLineIntervalId_);
    // window.__hx_checkLineIntervalId_ = setInterval(function () {
    //     var lastOnline = self.online;
    //     nowline();
    //     if(!lastOnline && self.online){
    //         online();
    //     }
    //     if(lastOnline && !self.online){
    //         offline();
    //     }
    // }, 500);

    function online(e) {
      self.online = true;
      Session_logger.warn('online online online');

      if (!self.closed) {
        self._reconnect(emedia.config.reconnect);
      }
    }

    function offline(e) {
      self.online = false;
      Session_logger.warn('offline offline offline');
      self.__checkConnectIntervalId && clearTimeout(self.__checkConnectIntervalId);
      self.__retryConnectIntervalId && clearTimeout(self.__retryConnectIntervalId);
      self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;
      self._websocket && self._websocket.close(1000);
    }

    window.addEventListener('online', online, true);
    window.addEventListener('offline', offline, true);
    Session_logger.info('online status = ', self.online);
    this.registerProps(props);
  }

  _createClass(Session, [{
    key: "registerProps",
    value: function registerProps(props) {
      for (var key in props) {
        this[key] = props[key];
      }
    }
  }, {
    key: "_nextWsUri",
    value: function _nextWsUri() {
      var self = this;
      var url = self.ticket.url; // var hostname = window.location.hostname;
      // if(hostname.endsWith("paic.com.cn")){ //pingan.com.cn -> paic.com.cn
      //     url = url.replace("pingan.com.cn", "paic.com.cn");
      // }else if(hostname.endsWith("pingan.com.cn")){ // paic.com.cn -> pingan.com.cn
      //     url = url.replace("paic.com.cn", "pingan.com.cn");
      // }
      // logger.warn("ticket url modifiy. ", hostname, url);

      var replaceFunc = emedia.config && emedia.config.convertWebsocketURLOfTicket || emedia.convertWebsocketURLOfTicket;

      if (typeof replaceFunc === 'function') {
        var oldUrl = url;
        url = replaceFunc(url);
        Session_logger.warn(oldUrl, '-->', url);
      }

      if (url.startsWith('/')) {
        //通过地址栏 补齐url
        if (emedia.config.wsorigin) {
          url = emedia.config.wsorigin + url;
        } else {
          var href = window.location.href;
          var proto = href.startsWith('https') ? 'wss://' : 'ws://';
          var startIndex = href.indexOf('://') + 3;
          var endIndex = href.indexOf('/', startIndex);
          var wsorigin = href.substring(startIndex, endIndex);
          url = proto + wsorigin + url;
        }

        Session_logger.warn('websocket url. update. {} -> {}', self.ticket.url, url);
      } else if (emedia.config.wsorigin) {
        Session_logger.warn('emedia.config.wsorigin invalidate. causeby server url {}', url);
      }

      if (url.indexOf('?') >= 0) {
        url += '&' + __url_seqno++;
      } else {
        url += '?' + __url_seqno++;
      } // if(self.ticket.confrId){
      //     url += "&" + encodeURIComponent(self.ticket.confrId);
      // }


      return url;
    }
  }, {
    key: "_reconnect",
    value: function _reconnect(retry) {
      var self = this;

      function connected() {
        Session_logger.warn('Reconnected. at ', retry, self._websocket.url);
        self.__retryConnectIntervalId && clearTimeout(self.__retryConnectIntervalId);
        self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;
        var enter = self.newMessage().setOp(200).setSessId(self._sessionId).setTicket(self.ticket).setNickName(self.nickName || self.ticket.memName).setResource(self.resource).setExt(self.owner.ext);
        self.postMessage(enter, function (rsp) {
          if (rsp.result != 0) {
            try {
              self.onEvent(new components_event.EnterFail({
                me: self.owner,
                cause: new components_event.RspFail({
                  request: enter,
                  response: rsp
                })
              }));
            } finally {
              if (rsp.result !== -9527) {
                //-9527 客户端 自己返回，网络未通， 其他值服务端返回
                self.onEvent(new components_event.ServerRefuseEnter({
                  failed: rsp.result,
                  msg: rsp.msg
                }));
              }
            }

            return;
          }

          self.onEvent(new components_event.EnterSuccess({
            ip: self.owner.ip
          }));
          self.owner.onMembers(rsp.cver, rsp.mems);
          self.owner.onStreams(rsp.cver, rsp.streams);
          self.notifyNewMessage();
        });
      }

      function failed(evt) {
        if (retry <= 0) {
          Session_logger.warn('Reconnect end. but fail.', evt.url, retry);
          self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;
          return;
        }

        retry && (self.__retryConnectIntervalId = setTimeout(function () {
          self.connect(connected, failed, --retry);
        }, emedia.config.reconnectDelay));
      }

      self.connect(connected, failed, --retry);
    }
  }, {
    key: "__checkConnect",
    value: function __checkConnect() {
      var self = this;
      self.__checkConnectIntervalId && clearTimeout(self.__checkConnectIntervalId);
      emedia.config.checkConnectIntervalMillis && (self.__checkConnectIntervalId = setTimeout(function () {
        //logger.trace("Check connect..");
        try {
          if (self.online && !self.connected()) {
            self.__retryConnectIntervalId && Session_logger.debug('online, reconnecting...');
            self.__retryConnectIntervalId || Session_logger.debug('online, but disconnect. will reconnect');
            self.__retryConnectIntervalId || self._reconnect(emedia.config.reconnect);
          } else {//self.notifyNewMessage && self.notifyNewMessage();
          }
        } finally {
          self.__checkConnect();
        }
      }, emedia.config.checkConnectIntervalMillis));
    }
  }, {
    key: "connect",
    value: function connect(onConnected, onConnectFail, retry) {
      var self = this;

      var nextUrl = self.thisWsUri = self._nextWsUri();

      typeof retry !== 'undefined' && Session_logger.warn('begin connect... at retry = ', retry, nextUrl);

      function connected() {
        try {
          onConnected.apply(self, arguments);
        } finally {
          self.__checkConnect();
        }
      }

      function failed(evt) {
        try {
          onConnectFail.apply(self, arguments);
        } finally {
          retry || evt.url !== nextUrl || self.onEvent(new components_event.ServerRefuseEnter({
            failed: -95270,
            msg: 'sdk reconnect fail. ' + nextUrl + '|' + evt.url
          }));
        }
      }

      _connect.call(self, connected, failed, retry);
    }
  }, {
    key: "connected",
    value: function connected(wsUri) {
      var self = this;
      var result = self.online && self._websocket && (!wsUri || wsUri === self._websocket.url) && self._websocket.readyState == WebSocket.OPEN; //logger.trace("Connected?", result, self.online, wsUri, self._websocket && self._websocket.url, self._websocket && self._websocket.readyState);

      return result;
    }
  }, {
    key: "onWebsocketEvent",
    value: function onWebsocketEvent(evt) {
      var self = this;
      self.onEvent(evt);
    }
  }, {
    key: "register",
    value: function register(listeners) {
      if (_typeof(listeners) === 'object') {
        for (var event in listeners) {
          this.bind(event, listeners[event]);
        }
      }
    }
  }, {
    key: "bind",
    value: function bind(event, func) {
      var self = this;
      var onFunc;

      if (onFunc = self._events[event]) {
        self[onFunc] = func;
      } else {
        Session_logger.error('Not supported event = ', event);
        throw 'Not supported event = ' + event;
      }
    }
  }, {
    key: "getSessionId",
    value: function getSessionId() {
      return this._sessionId;
    }
  }, {
    key: "newMessage",
    value: function newMessage(cfg) {
      return new Message(cfg);
    }
  }, {
    key: "__modifyMessage",
    value: function __modifyMessage(message) {
      if (message && message.sdp) {
        if (typeof message.sdp === 'string') {
          message.sdp = JSON.parse(message.sdp);
        }

        message.sdp.type && (message.sdp.type = message.sdp.type.toLowerCase());
        message.cctx && (message.sdp.cctx = message.cctx);
      }

      if (message && message.cands) {
        if (typeof message.cands === 'string') {
          message.cands = JSON.parse(message.cands);
        }

        for (var i = 0; i < message.cands.length; i++) {
          typeof message.cands[i] === 'string' && (message.cands[i] = JSON.parse(message.cands[i]));
          message.cands[i].sdpMLineIndex = message.cands[i].mlineindex;
          message.cands[i].sdpMid = message.cands[i].mid;
          delete message.cands[i].mlineindex;
          delete message.cands[i].mid;
          message.cctx && (message.cands[i].cctx = message.cctx);
        }
      }

      if (message && message.mems) {
        if (!is_array_default()(message.mems)) {
          return;
        }

        var _mems = message.mems;
        message.mems = {};
        utilForEach(_mems, function (index, _mem) {
          _mem.name && (_mem.memName = _mem.name);
          message.mems[_mem.id] = _mem;
          var acptOps = _mem.acptOps = {};
          utilForEach(emedia.config.baseAcptOps, function (_index, _oper) {
            acptOps[_oper] = true;
          });

          if (_mem.res) {
            utilForEach(_mem.res.ops, function (_index, _oper) {
              acptOps[_oper] = true;
            });
          }

          if (_mem && _mem.ext) {
            try {
              message.mems[_mem.id].ext = JSON.parse(_mem.ext);
            } catch (e) {
              Session_logger.debug(e);
            }
          }
        });
      }

      if (message && message.mem) {
        message.mem.name && (message.mem.memName = message.mem.name);
        var acptOps = message.mem.acptOps = {};
        utilForEach(emedia.config.baseAcptOps, function (_index, _oper) {
          acptOps[_oper] = true;
        });

        if (message.mem.res) {
          utilForEach(message.mem.res.ops, function (_index, _oper) {
            acptOps[_oper] = true;
          });
        }

        if (message.mem && message.mem.ext) {
          try {
            message.mem.ext = JSON.parse(message.mem.ext);
          } catch (e) {
            Session_logger.debug(e);
          }
        }
      }

      if (message && message.streams) {
        if (!is_array_default()(message.streams)) {
          return;
        }

        var _streams = message.streams;
        message.streams = {};
        utilForEach(_streams, function (index, _stream) {
          message.streams[_stream.id] = _stream;

          if (_stream && _stream.ext) {
            try {
              message.streams[_stream.id].ext = JSON.parse(_stream.ext);
            } catch (e) {
              Session_logger.debug(e);
            }
          }
        });
      }

      if (message && message.pubS) {
        if (message.pubS && message.pubS.ext) {
          try {
            message.pubS.ext = JSON.parse(message.pubS.ext);
          } catch (e) {
            Session_logger.debug(e);
          }
        }
      }

      if (message && message.ext) {
        try {
          message.ext = JSON.parse(message.ext);
        } catch (e) {
          Session_logger.debug(e);
        }
      }

      return message;
    }
  }, {
    key: "onMessage",
    value: function onMessage(servMessage) {
      var self = this;

      function onFunc(servMessage) {
        var onFunc;
        var event = servMessage.op;

        if ((onFunc = self._events[event]) && (onFunc = self[onFunc])) {
          onFunc.call(self, servMessage);
        } else {
          //throw "Not supported event = " + servMessage;
          Session_logger.warn('Not supported event = ', servMessage);
          return;
        }
      }

      if (servMessage.op != 1001 && !servMessage.sessId) {
        Session_logger.error('message sessId error. server evt data error');
        throw 'message sessId error. server evt data error';
      }

      if (servMessage.op != 1001 && self._sessionId && self._sessionId != servMessage.sessId) {
        Session_logger.error('message sessId error. server and local not equal');
        throw 'message sessId error. server and local not equal';
      }

      if (servMessage.op === 1004) {
        onFunc(servMessage);
        return;
      }

      servMessage = self.__modifyMessage(servMessage);
      var preIp;
      var reqMessage = removeAttribute(self._callbacks, servMessage.tsxId);

      if (reqMessage && reqMessage.op === 200) {
        self._sessionId = servMessage.sessId;
        var nowIp = typeof servMessage.yourIp === 'string' ? servMessage.yourIp : undefined;

        if (typeof self._session_ip === 'string' && nowIp != self._session_ip) {
          preIp = self._session_ip;
        }

        Session_logger.info(self._sessionId, 'ip is', nowIp, preIp);
        self._session_ip = nowIp;
        self.owner.ip = nowIp;

        if (servMessage.result === 0) {
          //enter 成功
          for (var index in self._bufferedMessages) {
            var message = self._bufferedMessages[index];

            if (!message.sessId && message.op !== 200) {
              message.sessId = servMessage.sessId;
            }
          }

          setTimeout(function () {
            self.notifyNewMessage();
          }, 100);
        } else {
          var bufferedMessage;

          while (bufferedMessage = self._bufferedMessages.shift()) {
            if (bufferedMessage.op === 200) {
              continue;
            }

            self.onMessage({
              op: 1001,
              tsxId: bufferedMessage.tsxId,
              result: -9527,
              msg: 'sdk enter fail. sdk callback. enter result = ' + servMessage.result
            });
          }
        }
      }

      if (self.owner && self.owner.closed) {
        Session_logger.warn('self closed. me is ' + self.owner.getMemberId() + ', session_id = ' + self.getSessionId() + '. drop message', servMessage);
        return;
      }

      self.onEvent(new components_event.RecvResponse({
        request: reqMessage,
        response: servMessage
      }));

      if (reqMessage && reqMessage.__callback__ && servMessage.op !== 1004) {
        reqMessage.__callback__(servMessage);

        preIp && self.onWebsocketEvent(new components_event.NetworkChanaged({
          preIp: preIp,
          nowIp: self._session_ip
        }));
        return;
      }

      if (!servMessage.op || servMessage.op == 1001) {
        Session_logger.debug('Igron message. caused by op not found.', servMessage);
        return;
      }

      onFunc(servMessage);
      preIp && self.onWebsocketEvent(new components_event.NetworkChanaged({
        preIp: preIp,
        nowIp: self._session_ip
      }));
    }
  }, {
    key: "__modifyMessageForPost",
    value: function __modifyMessageForPost(message) {
      if (message.cands) {
        var _cands = [];
        var cands = message.cands;

        for (var i = 0; i < cands.length; i++) {
          var _cand;

          if (i == 0) {
            cands[i].cctx && (message.cctx = cands[i].cctx);
          }

          if (typeof cands[i] === 'string') {
            _cand = {
              type: 'candidate',
              candidate: cands[i],
              mlineindex: 0,
              mid: 'audio' // seq: i

            };
          } else {
            // if (cands[i].type && cands[i].type == "candidate") {
            //     _cands.push(cands[i]);
            //     continue;
            // }
            _cand = {
              type: 'candidate',
              candidate: cands[i].candidate,
              mlineindex: cands[i].sdpMLineIndex,
              mid: cands[i].sdpMid // seq: i

            };
          }

          _cands.push(stringify_default()(_cand));
        }

        message.cands = _cands;
      }

      if (message.sdp && typeof message.sdp !== 'string') {
        var _sdp = {
          type: message.sdp.type,
          sdp: message.sdp.sdp
        };
        message.sdp.cctx && (message.cctx = message.sdp.cctx);
        message.sdp = _sdp;
        message.sdp.type = message.sdp.type.toUpperCase();
        message.sdp = stringify_default()(message.sdp);
      } // if(message.ext && isPlainObject(message.ext)){
      //     message.ext = JSON.stringify(message.ext);
      // }


      message.pubS && removeAttribute(message.pubS, '_located');
      message.pubS && removeAttribute(message.pubS, 'mutedMuted');
      message.pubS && removeAttribute(message.pubS, 'mediaStream');
      message.pubS && removeAttribute(message.pubS, 'isRepublished');
      message.pubS && removeAttribute(message.pubS, 'optimalVideoCodecs');
      typeof message.post === 'function' && removeAttribute(message, 'post');
      return message;
    }
  }, {
    key: "postMessage",
    value: function postMessage(message, callback, timeoutMillis) {
      var self = this;

      var __session_globalCount = emedia.__session_globalCount = 0;

      if (!message.tsxId) {
        message.tsxId = 'MSG' + now_default()() + '-' + __session_globalCount++;
      }

      if (message.memId) {
        var _mem = self.owner._cacheMembers[message.memId];

        if (!_mem) {
          Session_logger.warn('Member not found at local. memberId = ' + message.memId, message);
          callback && callback({
            op: 1001,
            tsxId: message.tsxId,
            result: -507,
            msg: ' member not found at local. memberId = ' + message.memId
          });
          return;
        }

        var reqOps = message._reqOps;

        if (!reqOps) {
          reqOps = [];
          reqOps.push(message.op);
        }

        for (var index in reqOps) {
          var _reqOp = reqOps[index];

          if (!_mem.acptOps[_reqOp]) {
            Session_logger.warn('Member not accept op ' + _reqOp + ', ' + message.memId, message);
            callback && callback({
              op: 1001,
              tsxId: message.tsxId,
              result: -507,
              msg: ' member not accept op ' + _reqOp + ', ' + message.memId
            });
            return;
          }
        }
      }

      removeAttribute(message, '_reqOps');

      if (self._sessionId && self._sessionId != message.sessId) {
        Session_logger.warn('sessionId not excepted. self._sessionId = ' + self._sessionId, message);
        callback && callback({
          op: 1001,
          tsxId: message.tsxId,
          result: -9527,
          msg: 'sessionId not excepted.'
        });
        return;
      }

      if (self.closed) {
        Session_logger.warn('session closed.', message);
        callback && callback({
          op: 1001,
          tsxId: message.tsxId,
          result: -9527,
          msg: 'session closed'
        });
        return;
      }

      var oldMessage = assign_default()({}, message);

      message = self.__modifyMessageForPost(message);

      if (!message) {
        Session_logger.warn('Message drop. callback success.', message);
        callback && callback({
          op: 1001,
          tsxId: oldMessage.tsxId,
          result: 0,
          msg: 'Message drop. callback success.'
        });
        return;
      }

      if (message.op === 200) {
        // enter 放在首位
        self._bufferedMessages.unshift(message);

        if (callback) {
          setTimeout(function () {
            if (!self._callbacks[message.tsxId]) {
              return;
            }

            Session_logger.error('Enter timeout. fail.');
            self.onMessage({
              op: 1001,
              tsxId: message.tsxId,
              result: -9527,
              msg: 'enter timeout. millis = ' + emedia.config.enterTimeout
            });
          }, emedia.config.enterTimeout);
        }
      } else {
        self._bufferedMessages.push(message);
      }

      callback && (self._callbacks[message.tsxId] = assign_default()(message, {
        __callback__: callback.bind(self.owner)
      }));
      self.notifyNewMessage && self.notifyNewMessage();

      if (timeoutMillis && callback) {
        setTimeout(function () {
          var message = self._callbacks[message.tsxId];

          if (message && message.__callback__) {
            message.__callback__({
              op: 1001,
              tsxId: oldMessage.tsxId,
              result: -408,
              msg: 'Message request timeout.'
            });
          }

          removeAttribute(self._callbacks, message.tsxId);
        }, timeoutMillis);
      }
    }
  }, {
    key: "close",
    value: function close(reason) {
      Session_logger.warn('sessiong closing, reason = ', reason);
      var self = this;
      self.notifyNewMessage && self.notifyNewMessage();
      self.closed = true;
      self.seqno = 0;
      self._websocket && (reason == 0 || reason == 100 ? self._websocket.close(1000) : self._websocket.close());
      self.__retryConnectIntervalId && clearTimeout(self.__retryConnectIntervalId);
      self.__retryConnectIntervalId && delete self.__retryConnectIntervalId;
      self.__checkConnectIntervalId && clearTimeout(self.__checkConnectIntervalId);
      self.__checkConnectIntervalId && delete self.__checkConnectIntervalId;
      self.owner = null; //self._sessionId = null;

      self._bufferedMessages = [];
      self._callbacks = {};
      Session_logger.warn('session closed');
    }
  }]);

  return Session;
}();


;// CONCATENATED MODULE: ./emedia-sdk/src/_adapter/SoundMeter.js
/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 // Meter class that generates a number correlated to audio volume.
// The meter class itself displays nothing, but it makes the
// instantaneous and time-decaying volumes available for inspection.
// It also reports on the fraction of samples that were at or near
// the top of the measurement range.

function SoundMeter(context) {
  this.context = context;
  this.instant = 0.0;
  this.slow = 0.0;
  this.clip = 0.0;
  this.script = context.createScriptProcessor(2048, 1, 1);
  var that = this;

  this.script.onaudioprocess = function (event) {
    var input = event.inputBuffer.getChannelData(0);
    var i;
    var sum = 0.0;
    var clipcount = 0;

    for (i = 0; i < input.length; ++i) {
      sum += input[i] * input[i];

      if (Math.abs(input[i]) > 0.99) {
        clipcount += 1;
      }
    }

    that.instant = Math.sqrt(sum / input.length);
    that.slow = 0.95 * that.slow + 0.05 * that.instant;
    that.clip = clipcount / input.length;
  };
}

SoundMeter.prototype.connectToSource = function (stream, callback) {
  console.log('SoundMeter connecting');

  try {
    this.mic = this.context.createMediaStreamSource(stream);
    this.mic.connect(this.script); // necessary to make sample run, but should not be.

    this.script.connect(this.context.destination);

    if (typeof callback !== 'undefined') {
      callback(null);
    }
  } catch (e) {
    console.error(e);

    if (typeof callback !== 'undefined') {
      callback(e);
    }
  }
};

SoundMeter.prototype.stop = function () {
  this.mic.disconnect();
  this.script.disconnect();
};

/* harmony default export */ const _adapter_SoundMeter = (SoundMeter);
;// CONCATENATED MODULE: ./emedia-sdk/src/components/_Stream.js







/**
 * {
 *  _located:
 *  _webrtc:
 *
 *  id:
 *  memId:
 *  name:
 *  voff:
 *  aoff:
 *  type: 0 1
 *  ext:
 *  owner: {
 *    id:
 *    nickName:
 *    name:
 *    ext:
 *  }
 *
 *  _localMediaStream:
 * }
 *
 *
 *
 */

emedia.subscribed = function (stream) {
  if (stream._located) {
    return true;
  }

  if (stream.type === 2) {
    return !!(!stream._located && stream._webrtc);
  }

  return stream._webrtc !== undefined;
};

var MediaSoundMeter = /*#__PURE__*/function () {
  function MediaSoundMeter(props) {
    var _this = this;

    _classCallCheck(this, MediaSoundMeter);

    _defineProperty(this, "voff", 0);

    _defineProperty(this, "aoff", 0);

    var __audioContext = props.__audioContext,
        _mediaStream = props._mediaStream;
    this.__audioContext = __audioContext;
    this._mediaStream = _mediaStream;

    if (!this._mediaStream) {
      _logger.error('_mediaStream empty');

      throw '_mediaStream empty';
    }

    if (!this.hasEnabledTracks(this._mediaStream)) return;

    if (!this.__audioContext) {
      _logger.error('require audioContext');

      throw 'require audioContext';
    }

    this.__soundMeter = new _adapter_SoundMeter(this.__audioContext);

    this.__soundMeter.connectToSource(this._mediaStream, function (e) {
      if (e) {
        throw e;
      }

      _this.__worked = _this.__soundMeter.__worked = true;
    });
  }

  _createClass(MediaSoundMeter, [{
    key: "hasEnabledTracks",
    value: function hasEnabledTracks(mediaStream) {
      return emedia.hasEnabledTracks(mediaStream);
    }
  }, {
    key: "getSoundMeters",
    value: function getSoundMeters() {
      if (!this.__soundMeter || !this.__worked) {
        return;
      }

      if (!this._mediaStream.active) {
        this.__worked && this._finally();
        return;
      }

      if (!this.hasEnabledTracks(this._mediaStream)) {
        return;
      }

      return {
        instant: this.__soundMeter.instant,
        slow: this.__soundMeter.slow,
        clip: this.__soundMeter.clip
      };
    }
  }, {
    key: "_finally",
    value: function _finally() {
      if (this.__soundMeter) {
        this.__soundMeter.stop();

        this.__worked = this.__soundMeter.__worked = false;
      }
    }
  }]);

  return MediaSoundMeter;
}();

var _Stream = proto.prototypeExtend({
  //type 0 AVpub 1 Desktop 2 Sub
  __undefinedEQDelete: true,
  located: function located() {
    return this._located || false;
  },
  webrtc: function webrtc(_webrtc) {
    _webrtc && (this._webrtc = _webrtc);
    return this;
  },
  getMediaStream: function getMediaStream() {
    if (typeof this.mediaStream !== 'undefined') {
      return this.mediaStream;
    } // if(this.type === 2 && this._webrtc && this._webrtc.getRemoteStream()){
    //     return this._webrtc.getRemoteStream();
    // }


    if (this._located) {
      return this._localMediaStream;
    }

    return this._webrtc && (this._webrtc.getRemoteStream() || this._webrtc.getLocalStream());
  },
  requestFrame: function requestFrame() {
    this._localMediaStream && this._localMediaStream.getVideoTracks().forEach(function (track) {
      typeof track.requestFrame === 'function' && track.requestFrame();
    });
  },
  getLocalMediaStream: function getLocalMediaStream() {
    return this._localMediaStream;
  },
  getRemoteMediaStream: function getRemoteMediaStream() {
    if (this._webrtc && typeof this._webrtc.getRemoteStream() !== 'undefined') {
      return this._webrtc.getRemoteStream();
    }
  },
  mutedNeed: function mutedNeed() {
    return this.mutedMuted || false;
  },
  ifMediaStream: function ifMediaStream(update) {
    if (typeof this.mediaStream !== 'undefined') {
      update(this.mediaStream);
      return;
    } // if(this.type === 2 && this._webrtc && this._webrtc.getRemoteStream() !== "undefined"){
    //     update(this._webrtc.getRemoteStream());
    //     return;
    // }


    if (this._located && typeof this._localMediaStream !== 'undefined') {
      update(this._localMediaStream);
      return;
    }

    if (!this._located && this._webrtc && typeof this._webrtc.getRemoteStream() !== 'undefined') {
      update(this._webrtc.getRemoteStream());
      return;
    }
  },
  subscribed: function subscribed() {
    return emedia.subscribed(this);
  },
  updateAttributes: function updateAttributes() {
    var self = this;

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];

      if (lodash_es_isPlainObject(arg)) {
        for (var _key in arg) {
          var _value = arg[_key];
          self[_key] = _value;
        }
      }
    }
  },
  getHtmlDOMID: function getHtmlDOMID() {
    return '_m_' + this.owner.id + '_s_' + this.id;
  },
  MediaSoundMeter: MediaSoundMeter,
  StreamSoundMeter: proto.prototypeExtend({
    __init__: function __init__() {
      var self = this;

      if (!self._stream || typeof self._stream.getMediaStream !== 'function') {
        _logger.error('_stream empty or not found method getMediaStream');

        throw '_stream empty or not found method getMediaStream';
      }

      self._streamId = self._stream.id;
      self._streamCreateId = self._stream.__create_id;
      self._mediaStream = self._mediaStream;

      if (self._stream.type === 2 && !self._stream.located() && !self._webrtc) {
        _logger.error('require webrtc. when type = 2 and not located');

        throw 'require webrtc. when type = 2 and not located';
      }

      self.__mediaSoundMeter = self.__mediaSoundMeter || new MediaSoundMeter({
        __audioContext: self.__audioContext,
        _mediaStream: self._mediaStream
      });
      self.__mediaSoundMeter.useCount = (self.__mediaSoundMeter.useCount || 0) + 1;
    },
    onSoundMeters: function onSoundMeters(callback) {
      var self = this;
      var emptyResult = {
        instant: 0,
        slow: 0,
        clip: 0
      };

      if (self._stream.aoff) {
        self._finally();

        callback(emptyResult);
        return emptyResult;
      }

      if (self._stream.type !== 2 && self._stream.subArgs && self._stream.subArgs.subSAudio !== undefined && !self._stream.subArgs.subSAudio) {
        self._finally();

        callback(emptyResult);
        return emptyResult;
      }

      if (self._stream.id == 0 || self._stream.type === 2 && !self._stream.located() && (!self._stream.subArgs || !self._stream.subArgs.subSAudio)) {
        var receivers = self._webrtc.getReceiversOfPeerConnection();

        if (!receivers || receivers.length === 0) {
          callback(emptyResult);
          return emptyResult;
        }

        var audioReceiver;

        for (var i in receivers) {
          if (receivers[i].track.kind === 'audio') {
            audioReceiver = receivers[i];
          }
        }

        if (!audioReceiver) {
          callback(emptyResult);
          return emptyResult;
        }

        if (typeof audioReceiver.getContributingSources === 'function') {
          var rtpContributingSources = audioReceiver.getContributingSources();

          if (emedia.config._printSoundData) {
            utils_log.debug(self._stream.id, self._stream.csrc, 'rtpContributingSources ', rtpContributingSources);
          }

          if (!rtpContributingSources || rtpContributingSources.length === 0) {
            callback(emptyResult);
            return emptyResult;
          }

          var source;

          for (var i in rtpContributingSources) {
            if (rtpContributingSources[i].source == self._stream.csrc) {
              source = self._stream.csrc;
            }
          }

          if (emedia.config._printSoundData) {
            utils_log.debug(self._stream.id, self._stream.csrc, 'source ', source);
          }

          if (source === undefined) {
            callback(emptyResult);
            return emptyResult;
          }
        }
      }

      var _meter = self.__mediaSoundMeter.getSoundMeters() || emptyResult;

      var webrtc = self._stream.type === 2 ? self._webrtc : self._stream._webrtc;

      if ((emedia.meterWithTrackAudioLevel || _meter.instant === 0) && webrtc && !webrtc.closed && webrtc._rtcPeerConnection) {
        webrtc._rtcPeerConnection.getStats().then(function (stats) {
          if (stats.size > 0) {
            stats.forEach(function (res) {
              if (res.type === 'track' && (res.kind === 'audio' || res.trackIdentifier === 'audio')) {
                _meter.trackAudioLevel = res.audioLevel; //_meter.trackTotalAudioEnergy = 0;

                _meter.trackTotalAudioEnergy = res.totalAudioEnergy;
                callback(_meter);
              }
            });
          }
        });
      }

      callback(_meter);
    },
    _finally: function _finally() {
      var self = this;

      if (self._stream.type === 2 && self._stream.located() && self._remoteMediaSoundMeters) {
        self._remoteMediaSoundMeters._finally();
      }

      self.__mediaSoundMeter.useCount--;

      if (self.__mediaSoundMeter.useCount === 0) {
        self.__mediaSoundMeter._finally();
      }
    }
  })
});

var StreamUpdate = /*#__PURE__*/function () {
  function StreamUpdate(props) {
    _classCallCheck(this, StreamUpdate);

    var aoff = props.aoff,
        voff = props.voff,
        _stream = props._stream,
        mediaStream = props.mediaStream;
    this.aoff = aoff;
    this.voff = voff;
    this._stream = _stream;
    this.mediaStream = mediaStream;
  }

  _createClass(StreamUpdate, [{
    key: "ifAoff",
    value: function ifAoff(update) {
      this["if"]('aoff', update);
    }
  }, {
    key: "ifVoff",
    value: function ifVoff(update) {
      this["if"]('voff', update);
    }
  }, {
    key: "ifMediaStream",
    value: function ifMediaStream(update) {
      this["if"]('mediaStream', update);
    }
  }, {
    key: "if",
    value: function _if(key, update) {
      if (typeof this[key] === 'undefined') {
        return;
      }

      update(this[key]);
    }
  }]);

  return StreamUpdate;
}();
/* harmony default export */ const components_Stream = (_Stream);
;// CONCATENATED MODULE: ./emedia-sdk/src/components/EventHandler.js








var EventHandler_logger = tagLogger('Handler');


/**
 * Error({
 *   code:
 *   targetObj:
 *   evtObj:
 * })
 *
 *
 *
 *
 */

var EventHandler = /*#__PURE__*/function () {
  function EventHandler(context) {
    var _this = this;

    _classCallCheck(this, EventHandler);

    _defineProperty(this, "handleEvent", function (evt) {
      var self = _this;

      if (evt instanceof components_event.RecvResponse) {
        self._onRecvResponse(evt);
      } else if (evt instanceof components_event.ServerRefuseEnter) {
        EventHandler_logger.warn('Server refuse, ', evt.failed, evt.msg);
        self.onServerRefuseEnter(evt);
      } else if (evt instanceof components_event.NetworkChanaged) {
        EventHandler_logger.warn('Network chanaged, ', evt.preIp, evt.nowIp);
        self.onNetworkChanaged(evt);
      } else if (evt instanceof components_event.EnterFail) {
        EventHandler_logger.warn('Enter fail, result = ', evt.failed);
        self.onEnterFail();
      } else if (evt instanceof components_event.WSClose) {
        //logger.warn("Websocket closed");
        self.onWSClose();
      } else if (evt instanceof components_event.WSConnected) {
        EventHandler_logger.warn('Websocket connected');
      } else if (evt instanceof components_event.ICEConnected) {
        var webrtc = evt.webrtc;
        self.onICEConnected(webrtc);
      } else if (evt instanceof components_event.ICEConnectFail) {
        var webrtc = evt.webrtc;
        self.onICEConnectFail(webrtc);
      } else if (evt instanceof components_event.ICEDisconnected) {
        //只要ICE断开
        var webrtc = evt.webrtc;
        self.onICEDisconnected(webrtc);
      } else if (evt instanceof components_event.ICEClosed) {
        //只要ICE断开
        var webrtc = evt.webrtc;
        self.onICEClosed(webrtc);
      } else if (evt instanceof components_event.ICERemoteMediaStream) {
        self.onICERemoteMediaStream(evt.webrtc);
      } else if (evt instanceof components_event.PushSuccess) {
        self.context._cacheStreams[evt.stream.id] = self.context._linkedStreams[evt.stream.id] = evt.stream;

        var _stream = self.context.newStream(evt.stream);

        if (evt.hidden && !self.context._maybeNotExistStreams[evt.stream.id] && !_stream.isRepublished) {
          self.context._onAddStream(_stream);

          return;
        }

        emedia._yetGetUserMedia = true;

        try {
          //_stream && (_stream.mediaStream = _stream.getMediaStream());
          var updateObj = new StreamUpdate({
            voff: _stream.voff,
            aoff: _stream.aoff,
            mediaStream: _stream.getMediaStream()
          });
          evt.hidden !== true && _stream && self.context.onUpdateStream(_stream, updateObj); // utilForEach(self.context._cacheStreams, function (_pubSId, _stream) {
          //     if(_stream.type === 2){
          //         self.context.onStreamControl(undefined, _pubSId, _stream.voff, _stream._1_aoff);
          //     }
          // });
        } finally {
          if (isSafari) {
            utilForEach(self.context._cacheStreams, function (_sid, _stream) {
              if (_stream._autoSubWhenPushStream === true) {
                removeAttribute(_stream, '_autoSubWhenPushStream');
                self.context.createWebrtcAndSubscribeStream(_stream.id);
              }
            });
          }
        }
      } else if (evt instanceof components_event.SubSuccess) {
        self.context._linkedStreams[evt.stream.id] = evt.stream;
        evt.stream.updateAttributes({
          _zoom: 1
        });
      } else if (evt instanceof components_event.PushFail) {
        if (evt.hidden !== true) {
          var _removeStream = removeAttribute(self.context._linkedStreams, evt.stream.id);

          EventHandler_logger.warn('PushFail remove from _linkedStreams', evt.stream.id, _removeStream);

          if (_removeStream) {
            var _stream = self.context.newStream(evt.stream);

            self.context.onRemoveStream(_stream);
          }
        }
      } else if (evt instanceof components_event.SubFail) {
        if (evt.hidden !== true) {
          //delete self.context._linkedStreams[evt.stream.id];
          removeAttribute(self.context._linkedStreams, evt.stream.id);
          EventHandler_logger.warn('SubFail remove from _linkedStreams', evt.stream.id);

          var _stream = self.context.newStream(evt.stream);

          _stream.updateAttributes({
            rtcId: undefined,
            _webrtc: undefined,
            mediaStream: undefined
          });

          self.context.onUpdateStream(_stream, new StreamUpdate(_stream));
        }
      } else if (evt instanceof components_event.SubFailNotSupportVCodes) {
        // Server发现 此订阅时 不支持视频视频编码。或者 推送流 打开视频时，并不是所有的订阅端 都支持此视频编码
        // Server保持这个channel，客户端自行处理
        var stream = evt.stream;
        EventHandler_logger.warn('Rtc donot support pub VCodes. close. sub fail.', stream.rtcId, ' -> ', stream.id);

        try {
          self.onNotSupportPublishVideoCodecs && self.onNotSupportPublishVideoCodecs(stream);
        } catch (e) {
          EventHandler_logger.warn(e);
        } // var streamId = stream.id;
        //
        // var webrtc = self.context._getWebrtc(streamId);
        // if(webrtc && webrtc.isConnected()){
        //     self.context.subscribeStream(webrtc._rtcId, streamId, undefined, {subSVideo: false, subSAudio: true});
        //     return;
        // }

      } else if (evt instanceof components_event.EnterSuccess) {
        self.onEnterSuccess();
      } else if (evt instanceof components_event.SwitchVCodes) {
        var stream = evt.stream;
        var useVCodes = evt.useVCodes;
        var webrtc = stream._webrtc;
        EventHandler_logger.warn('Rtc switch VCodes. ', stream.id, useVCodes);

        if (!useVCodes || useVCodes.length == 0) {
          EventHandler_logger.warn('Rtc switch VCodes. error! useVCodes is empty ', stream.id, useVCodes);
        }

        var forceUseVideoCodecs;

        if (emedia.config && emedia.config.forceUseVideoCodecs && emedia.config.forceUseVideoCodecs.length > 0) {
          forceUseVideoCodecs = emedia.config.forceUseVideoCodecs;

          if (!is_array_default()(forceUseVideoCodecs)) {
            forceUseVideoCodecs = [];
            forceUseVideoCodecs.push(emedia.config.forceUseVideoCodecs);
          }
        } // if(forceUseVideoCodecs){
        //     //与 useVCodes 取 交集
        //     var newVCodes = [];
        //     for(var index in useVCodes){
        //         var vcode = useVCodes[index];
        //
        //         for(var ii in forceUseVideoCodecs){
        //             if(forceUseVideoCodecs[ii] === vcode){
        //                 newVCodes.push(vcode);
        //             }
        //         }
        //     }
        //     useVCodes = evt.useVCodes = newVCodes;
        //     logger.warn("Rtc switch VCodes. subset! config forceUseVideoCodecs. new useVCodes", stream.id, useVCodes);
        // }
        // if (!useVCodes || useVCodes.length == 0) {
        //     logger.warn("Rtc switch VCodes. error! useVCodes is empty ", stream.id, useVCodes);
        // }


        if (forceUseVideoCodecs) {
          if (typeof forceUseVideoCodecs === 'string' && forceUseVideoCodecs !== useVCodes[0]) {
            EventHandler_logger.warn('Rtc switch VCodes. igrone . useVCodes !== forceUseVideoCodecs ', stream.id, webrtc._rtcId, useVCodes, forceUseVideoCodecs);
            return;
          }

          if (is_array_default()(forceUseVideoCodecs) && forceUseVideoCodecs[0] !== useVCodes[0]) {
            EventHandler_logger.warn('Rtc switch VCodes. igrone ddd . useVCodes == forceUseVideoCodecs ', stream.id, webrtc._rtcId, useVCodes, forceUseVideoCodecs);
            return;
          }
        }

        if (webrtc && webrtc.optimalVideoCodecs) {
          if (typeof webrtc.optimalVideoCodecs === 'string' && webrtc.optimalVideoCodecs == useVCodes[0]) {
            EventHandler_logger.warn('Rtc switch VCodes. igrone . useVCodes == optimalVideoCodecs ', stream.id, webrtc._rtcId, useVCodes);
            return;
          }

          if (is_array_default()(webrtc.optimalVideoCodecs) && webrtc.optimalVideoCodecs.length > 0 && webrtc.optimalVideoCodecs[0] == useVCodes[0]) {
            EventHandler_logger.warn('Rtc switch VCodes. igrone ddd . useVCodes == optimalVideoCodecs ', stream.id, webrtc._rtcId, useVCodes);
            return;
          }
        }

        stream.updateAttributes({
          optimalVideoCodecs: useVCodes
        });
        webrtc && self.context.closeWebrtc(webrtc.getRtcId(), true);
        setTimeout(function () {
          stream.updateAttributes({
            iceRebuildCount: 1
          });
          self.iceRebuild(stream);
          EventHandler_logger.warn('Rtc switch VCodes. iceRebuild end.', stream.id, useVCodes);
        }, 300);
      }
    });

    this.onEvent = this.onEvent.bind(this); // TODO: 将上下文传进来，暂时先能运行，后续要提取到相应逻辑位置！

    this.context = context;
  }

  _createClass(EventHandler, [{
    key: "onEvent",
    value: function onEvent(evt) {
      var self = this;
      evt && EventHandler_logger.info('[EVT]', evt.message(), evt.hidden || '');

      if (evt instanceof components_event.ServerRefuseEnter) {
        evt.failed && evt.failed === -95270 && (evt.failed = -9527);
      }

      function afterNotify() {
        try {
          self.handleEvent(evt);
        } catch (e) {
          EventHandler_logger.warn(e);
        }
      }

      if (evt instanceof emedia.event.StreamState && evt.stream && evt.stream.located()) {
        afterNotify();
        return;
      }

      try {
        evt.hidden || self.onNotifyEvent && self.onNotifyEvent(evt);
      } finally {
        afterNotify();
      }
    }
  }, {
    key: "_onRecvResponse",
    value: function _onRecvResponse(evt) {
      var self = this;
      var request = evt.request;
      var response = evt.response;

      if (request && response && request.op !== 200 && request.op !== 1002 && response.result !== 0) {
        EventHandler_logger.warn('Server refuse. when request = ', request);
        var failed = evt.failed;

        switch (failed) {
          case -9527:
          case -95270:
            //self.context.close(4, -9527);
            break;

          case -500:
          case -502:
          case -504:
          case -508:
          case -510:
            self.context.close(4, failed);
            break;

          case -506:
            self.context.close(11, failed);
            break;

          case -501:
            self.context.close(11, failed);

          default: // -501 异常引起 忽略

        }
      }
    }
  }, {
    key: "onServerRefuseEnter",
    value: function onServerRefuseEnter(evt) {
      var self = this;
      var failed = evt.failed;

      switch (failed) {
        case -9527:
        case -95270:
          self.context.close(4, -9527);
          break;

        case -500:
        case -502:
        case -504:
        case -508:
        case -510:
          self.context.close(4, failed);
          break;

        case -506:
          self.context.close(11, failed);
          break;

        default:
          self.context.close(2);
      }
    }
  }, {
    key: "onEnterFail",
    value: function onEnterFail() {
      var self = this;

      if (self.__getCopyInterval) {
        clearInterval(self.__getCopyInterval);
      }
    } //会在enter success后回调

  }, {
    key: "onNetworkChanaged",
    value: function onNetworkChanaged(evt) {
      var self = this; //var preIp = evt.preIp;

      var nowIp = evt.nowIp;

      if (emedia.config.rebuildPeerConnectionWhenNetworkChanaged) {
        setTimeout(function () {
          //ip地址改变，需要将 useIp == preIp 和 useIp == undefined webrtc，rebuild
          var tmp = {};
          utilForEach(self.context._cacheStreams, function (_sid, stream) {
            if (!self.context._maybeNotExistStreams[_sid]) {
              //_maybeNotExistStreams 中的stream 将在 Enter success后，重建，所以在_maybeNotExistStreams中，不需要rebuild
              if (stream._webrtc) {
                var _webrtc = stream._webrtc;

                if (tmp[stream.rtcId]) {} else {
                  if (!_webrtc.closed && typeof _webrtc.useIp === 'string' && _webrtc.useIp !== nowIp) {
                    EventHandler_logger.warn('network chanage. webrtc will rebuild.', _webrtc._rtcId, _webrtc.__id);
                    self.onICEClosed(_webrtc);
                  }

                  tmp[stream.rtcId] = true;
                }
              }
            }
          }); // utilForEach(self.context._ices, function (_id, _webrtc){
          //     if(_id === _webrtc._rtcId && !_webrtc.closed && (typeof _webrtc.useIp === "string") && _webrtc.useIp !== nowIp){
          //         logger.warn("network chanage. webrtc will rebuild.", _webrtc._rtcId, _webrtc.__id);
          //         self.onICEClosed(_webrtc);
          //     }
          // });
        }, 100);
      }
    }
  }, {
    key: "onEnterSuccess",
    value: function onEnterSuccess() {
      var self = this;
      setTimeout(function () {
        self._failIcesRebuild();
      }, 50);

      if (self.context.getCopyIntervalMillis && self.context.getCopyIntervalMillis > 0) {
        EventHandler_logger.warn('Run interval get copy. interval = ', self.context.getCopyIntervalMillis);

        if (self.__getCopyInterval) {
          clearInterval(self.__getCopyInterval);
        }

        self.__getCopyInterval = setInterval(function () {
          if (self.context._session.connected()) {
            self._sysCopy.apply(self);
          } else {
            EventHandler_logger.warn('Warn! cannot get copy. cause offline.');
            self.__getCopyInterval && clearInterval(self.__getCopyInterval);
          }
        }, self.context.getCopyIntervalMillis);
      }

      if (self.context.getMediaMeterIntervalMillis && self.context.getMediaMeterIntervalMillis > 0) {
        self._intervalGetMediaMeters();
      }
    }
  }, {
    key: "_intervalGetMediaMeters",
    value: function _intervalGetMediaMeters() {
      var self = this;

      function _start() {
        self.__getMediaMetersIntervalFlag && emedia.cancelAnimationFrame(self.__getMediaMetersIntervalFlag);

        if (!self.context.getMediaMeterIntervalMillis) {
          EventHandler_logger.warn('Ontalking closed. please use getMediaMeterIntervalMillis');
          return;
        }

        self.__getMediaMetersIntervalFlag = emedia.requestAnimationFrame(function (time) {
          if (typeof AudioContext === 'function') {
            self._flushMediaMetersByAudioContext.apply(self);
          }

          !(self.context.closed !== false) && _start();
        }, self.context.getMediaMeterIntervalMillis);
      }

      _start();
    }
  }, {
    key: "_flushMediaMetersByAudioContext",
    value: function _flushMediaMetersByAudioContext() {
      var self = this;
      utilForEach(self.context._cacheStreams, function (_sid, _stream) {
        if (!self.context._monitSoundChanagedStreams || self.context._monitSoundChanagedStreams[_sid]) {
          _stream.id != '0' && self._updateMetersOrNewOne.call(self, _sid, _stream);
        }
      });
      var delStreamSoundMeters = [];
      utilForEach(self.context._mediaMeters, function (_sid, streamSoundMeter) {
        var _stream = self.context._cacheStreams[_sid];
        _stream && self._updateMetersOrNewOne.call(self, _sid, _stream);
        _stream || delStreamSoundMeters.push(_sid);
      });
      utilForEach(delStreamSoundMeters, function (index, _sid) {
        removeAttribute(self.context._mediaMeters, _sid);
      });
    }
  }, {
    key: "_updateMetersOrNewOne",
    value: function _updateMetersOrNewOne(_sid, _stream) {
      var self = this;
      var metersData;
      var streamSoundMeter = self.context._mediaMeters[_sid];

      if (_stream.type === 2 && !_stream.located() && (!_stream.subArgs || !_stream.subArgs.subSAudio)) {
        var pubAudioMixersStream = self._oneAudioMixers();

        if (!pubAudioMixersStream || streamSoundMeter && streamSoundMeter._webrtc && pubAudioMixersStream._webrtc.__id != streamSoundMeter._webrtc.__id) {
          streamSoundMeter && streamSoundMeter._finally();
          removeAttribute(self.context._mediaMeters, _sid);

          self.context._onSoundChanage(_stream.owner, _stream);

          return;
        }
      }

      if (streamSoundMeter && streamSoundMeter._streamCreateId === _stream.__create_id && streamSoundMeter.__mediaSoundMeter.__worked) {
        streamSoundMeter.onSoundMeters(function (metersData) {
          self.context._onSoundChanage(_stream.owner, _stream, metersData);
        });
        return streamSoundMeter;
      }

      if (streamSoundMeter && (streamSoundMeter._streamCreateId !== _stream.__create_id || streamSoundMeter.__mediaSoundMeter.__worked)) {
        streamSoundMeter && streamSoundMeter._finally();
        removeAttribute(self.context._mediaMeters, _sid);

        self.context._onSoundChanage(_stream.owner, _stream);
      }

      if (_stream.aoff) {
        return;
      }

      streamSoundMeter = self._newMediaMeters(_stream);

      if (streamSoundMeter) {
        self.context._mediaMeters[_sid] && self.context._mediaMeters[_sid]._finally();
        self.context._mediaMeters[_sid] = streamSoundMeter;
      }

      return streamSoundMeter;
    }
  }, {
    key: "_newAudioContext",
    value: function _newAudioContext() {
      var self = this;

      if (!emedia.__usingWebAudio) {
        return;
      }

      return emedia.__audioContext;
    }
  }, {
    key: "_newMediaMeters",
    value: function _newMediaMeters(_stream) {
      var self = this;
      var mediaStream;

      if (_stream.type === 2 && _stream.subArgs && _stream.subArgs.subSAudio && _stream._webrtc && _stream._webrtc.getRemoteStream()) {
        var soundMeter = new _stream.StreamSoundMeter({
          _stream: _stream,
          _mediaStream: _stream._webrtc.getRemoteStream(),
          _webrtc: _stream._webrtc,
          __audioContext: self._newAudioContext()
        });
        return soundMeter;
      }

      if (_stream.type === 2 && _stream.located()) {
        var soundMeter = new _stream.StreamSoundMeter({
          _stream: _stream,
          _mediaStream: _stream._localMediaStream,
          __audioContext: self._newAudioContext()
        });
        return soundMeter;
      }

      if (_stream.type === 2 && !_stream.located()) {
        var pubAudioMixersStream = self._oneAudioMixers();

        if (!pubAudioMixersStream || !pubAudioMixersStream._webrtc || pubAudioMixersStream._webrtc.closed) {
          return;
        }

        if (pubAudioMixersStream && (pubAudioMixersStream._remoteMediaSoundMeters === undefined || !pubAudioMixersStream._remoteMediaSoundMeters.__worked) && pubAudioMixersStream._webrtc && pubAudioMixersStream._webrtc.getRemoteStream()) {
          pubAudioMixersStream._remoteMediaSoundMeters = new pubAudioMixersStream.MediaSoundMeter({
            _mediaStream: pubAudioMixersStream._webrtc.getRemoteStream(),
            __audioContext: self._newAudioContext()
          });
        }

        if (!pubAudioMixersStream._remoteMediaSoundMeters) {
          return;
        }

        var soundMeter = new _stream.StreamSoundMeter({
          _stream: _stream,
          _webrtc: pubAudioMixersStream._webrtc,
          __mediaSoundMeter: pubAudioMixersStream._remoteMediaSoundMeters
        });
        return soundMeter;
      }

      if (!_stream.aoff && (mediaStream = _stream.getMediaStream())) {
        var soundMeter = new _stream.StreamSoundMeter({
          _stream: _stream,
          _mediaStream: mediaStream,
          __audioContext: self._newAudioContext()
        });
        return soundMeter;
      }
    }
  }, {
    key: "_oneAudioMixers",
    value: function _oneAudioMixers() {
      var self = this;
      var zeroStream = self.context._cacheStreams['0'];

      if (zeroStream && zeroStream._webrtc && !zeroStream._webrtc.closed) {
        return zeroStream;
      }

      for (var sid in self.context.audioMixers) {
        var stream = self.context.audioMixers[sid];

        if (stream.located()) {
          return stream;
        }
      }
    }
  }, {
    key: "onWSClose",
    value: function onWSClose() {
      var self = this;

      if (self.__getCopyInterval) {
        clearInterval(self.__getCopyInterval);
      }

      EventHandler_logger.info('Websocket closed.');
    }
  }, {
    key: "onICEDisconnected",
    value: function onICEDisconnected(webrtc) {
      var self = this;
      self.__networkWeakInterval && clearTimeout(self.__networkWeakInterval);
      self.__networkWeakInterval = setTimeout(function () {
        self.onNetworkWeak && self.onNetworkWeak();
      }, 1000);
      utilForEach(self.context._linkedStreams, function (sid, stream) {
        if (stream.rtcId == webrtc.getRtcId()) {
          var problemStream;

          if (!(problemStream = self.context._maybeNotExistStreams[sid])) {
            problemStream = self.context._maybeNotExistStreams[sid] = assign_default()({}, stream);
            problemStream.updateAttributes({
              iceRebuildCount: 1
            });
          }

          EventHandler_logger.info('Stream maybe not exist. caused by disconnected', stream.id);
        }
      });
    }
  }, {
    key: "onICEConnectFail",
    value: function onICEConnectFail(webrtc) {
      var self = this;

      for (var sid in self.context._linkedStreams) {
        var stream = self.context._linkedStreams[sid];

        if (stream.rtcId == webrtc.getRtcId()) {
          if (stream._webrtc && stream._webrtc.__id !== webrtc.__id) {
            EventHandler_logger.warn('Stream use other webrtc rtcId = ', stream.rtcId, ', id: ', stream._webrtc.__id, webrtc.__id);
            continue;
          }

          var problemStream;

          if (!(problemStream = self.context._maybeNotExistStreams[sid])) {
            problemStream = self.context._maybeNotExistStreams[sid] = assign_default()({}, stream);
            problemStream.updateAttributes({
              iceRebuildCount: 1
            });
          }

          if (problemStream) {
            var _evt = new components_event.StreamState({
              stream: problemStream
            });

            _evt.iceFail();

            self.onEvent(_evt);
          }

          EventHandler_logger.info('ice fail. webrtc = ', webrtc.getRtcId(), ' problem stream is ', problemStream.iceRebuildCount, problemStream.id);

          if (problemStream.iceRebuildCount > emedia.config.iceRebuildCount) {
            EventHandler_logger.info('ice fail. webrtc = ', webrtc.getRtcId(), ' rebuild fail. problem stream is ', problemStream.id);

            if (problemStream.located()) {
              self.onEvent(new components_event.PushFail({
                stream: stream,
                cause: 'pub ice rebuild failed.'
              }));
            } else {
              self.onEvent(new components_event.SubFail({
                stream: stream,
                cause: 'sub ice rebuild failed.'
              }));
            }

            self.context.closeWebrtc(webrtc.getRtcId(), false);
          } else {
            var recording = self.context._records[problemStream.id];

            if (problemStream._localMediaStream) {
              EventHandler_logger.info('ice fail. webrtc = ', webrtc.getRtcId(), ' will rebuild. remain local stream. ', problemStream.id);
            } else {
              EventHandler_logger.info('ice fail. webrtc = ', webrtc.getRtcId(), ' will rebuild.', problemStream.id);
            }

            self.context.closeWebrtc(webrtc.getRtcId(), true);

            if (recording) {
              self.context._records[problemStream.id] = recording;
            }

            ;

            (function (problemStream) {
              setTimeout(function () {
                self.iceRebuild(problemStream);
              }, emedia.config.iceRebuildIntervalMillis);
            })(problemStream);

            EventHandler_logger.info('ice fail. webrtc = ', webrtc.getRtcId(), ' will rebuilding. problem stream is ', problemStream.id);
          }

          if (stream.type === 2) {
            removeAttribute(self.context.audioMixers, stream.id);
          }
        }
      }
    }
  }, {
    key: "onICEClosed",
    value: function onICEClosed(webrtc) {
      var self = this;

      if (webrtc.closed) {
        EventHandler_logger.warn('Webrtc will be removed. by __id = ', webrtc.__id, ', rtcId = ', webrtc.getRtcId());
        var removedWebrtc = removeAttribute(self.context._ices, webrtc.__id);

        if (removedWebrtc) {
          EventHandler_logger.warn('Webrtc removed. by id = ', removedWebrtc.__id, ', rtcId = ', removedWebrtc.getRtcId());
        } else {
          EventHandler_logger.warn('Webrtc removed. by id = ', webrtc.__id, ', rtcId = ', webrtc.getRtcId());
        }

        var webrtc22 = self.context._ices[webrtc.getRtcId()];

        if (webrtc22 && webrtc22.__id === removedWebrtc.__id) {
          removedWebrtc = removeAttribute(self.context._ices, webrtc.getRtcId());
          EventHandler_logger.warn('Webrtc removed. by rtcId = ', removedWebrtc.getRtcId(), ', __id = ', removedWebrtc.__id);
        }
      } else {
        EventHandler_logger.info('ICE self closed. not allow. will rebuild', webrtc.getRtcId());
        self.onICEConnectFail(webrtc);
      }
    }
  }, {
    key: "onICEConnected",
    value: function onICEConnected(webrtc) {
      var self = this;
      utilForEach(self.context._cacheStreams, function (sid, stream) {
        if (stream.rtcId == webrtc.getRtcId()) {
          stream.updateAttributes({
            finalVCodeChoices: webrtc.finalVCodeChoices
          });

          if (self.context._maybeNotExistStreams[sid]) {
            removeAttribute(self.context._maybeNotExistStreams, stream.id);
            self.context._linkedStreams[sid] = stream;
            EventHandler_logger.info('ice reconnected. webrtc = ', webrtc.getRtcId(), 'will update stream = ', stream.id); //stream.located() && self.context.onUpdateStream(self.context._linkedStreams[stream.id]);
            //self.context.onUpdateStream(self.context._linkedStreams[stream.id]);

            var _recordStream = self.context._records[stream.id];

            if (_recordStream && _recordStream.rtcId !== stream.rtcId) {
              //在重连后，恢复录制
              //self.stopRecord(_recordStream);
              self.context.startRecord(stream);
              EventHandler_logger.warn('Re record. for ', stream.id, ', after rebuild ice.', _recordStream.rtcId, '->', stream.rtcId);
            }
          } else {
            EventHandler_logger.info('ice connected. webrtc = ', webrtc.getRtcId(), stream.id);
            stream.located() && self.onEvent(new components_event.PushSuccess({
              stream: stream
            }));
            stream.located() || self.onEvent(new components_event.SubSuccess({
              stream: stream
            }));
          }

          if (stream.type === 2) {
            self.context.audioMixers[stream.id] = stream;
          }
        }
      });
    }
  }, {
    key: "onICERemoteMediaStream",
    value: function onICERemoteMediaStream(webrtc) {
      var self = this;
      var streams = [];
      utilForEach(self.context._cacheStreams, function (sid, _stream) {
        if (_stream.rtcId == webrtc.getRtcId() && (!_stream.located() || _stream.type === 2)) {
          var mediaStream = webrtc.getRemoteStream();

          self.context._updateRemoteStream(_stream, mediaStream);

          if (_stream.onGotRemoteMediaStream) {
            _stream.onGotRemoteMediaStream.call(_stream, mediaStream);
          } else {
            var _stream = self.context.newStream(_stream);

            _stream.updateAttributes({
              mediaStream: webrtc.getRemoteStream()
            });

            self.context.onUpdateStream(_stream, new StreamUpdate({
              mediaStream: _stream.mediaStream
            }));
          }
        }
      });
    }
  }, {
    key: "_failIcesRebuild",
    value: function _failIcesRebuild() {
      var self = this;
      var count = 1;
      utilForEach(self.context._maybeNotExistStreams, function (streamId, stream) {
        setTimeout(function () {
          self.iceRebuild(stream);
        }, count * 100);
      });
    }
  }, {
    key: "iceRebuild",
    value: function iceRebuild(stream) {
      var self = this;

      if (!self.context.connected()) {
        stream.updateAttributes({
          iceRebuildCount: 1
        });
        EventHandler_logger.warn('Websocket disconnect. waiting. rebuild count reset', stream.iceRebuildCount, stream.id);
        return;
      }

      if (!self.context._linkedStreams[stream.id] || !self.context._cacheStreams[stream.id]) {
        EventHandler_logger.info('ice rebuild fail. it yet closed. stream is ', stream.id, stream.rtcId);
        removeAttribute(self.context._maybeNotExistStreams, stream.id);
        removeAttribute(self.context._linkedStreams, stream.id);
        EventHandler_logger.warn('iceRebuild, remvoe from _linkedStreams', stream.id);
        return;
      }

      if (stream.iceRebuildCount > emedia.config.iceRebuildCount) {
        EventHandler_logger.info('ice rebuild fail. count too many. stream is ', stream.id);

        if (stream.located()) {
          self.onEvent(new components_event.PushFail({
            stream: stream,
            cause: 'pub ice rebuild failed.'
          }));
        } else {
          self.onEvent(new components_event.SubFail({
            stream: stream,
            cause: 'sub ice rebuild failed.'
          }));
        }
      } else if (self.context.connected()) {
        EventHandler_logger.info('ice try rebuild. count', stream.iceRebuildCount, '. stream is ', stream.id);
        self.rebuildIce(stream);
        stream.iceRebuildCount++;
      } else {
        EventHandler_logger.warn('ice rebuild. stop. cause by not websocket disconnect', stream.id);
      }
    }
  }, {
    key: "rebuildIce",
    value: function rebuildIce(stream) {
      var self = this;

      if (!self.context._cacheStreams[stream.id]) {
        EventHandler_logger.warn('Begin rebuild ice. not found stream at local', stream.iceRebuildCount, stream.id);
        return;
      }

      EventHandler_logger.warn('Begin rebuild ice ', stream.iceRebuildCount, stream.id);

      if (stream.located()) {
        stream.updateAttributes({
          isRepublished: true
        });
        self.context.push(stream, undefined, undefined, true);
      } else {
        self.context.createWebrtcAndSubscribeStream(stream.id);
      }

      EventHandler_logger.warn('Finish rebuild ice ', stream.iceRebuildCount, stream.id, self.context._cacheStreams[stream.id].rtcId);
    }
  }, {
    key: "_sysCopy",
    value: function _sysCopy() {
      var self = this;
      var copyMessage = self.context.newMessage().setOp(1000).setCver(self.context._cver || 0);
      self.context.postMessage(copyMessage, function (rsp) {
        if (rsp.result != 0) {
          EventHandler_logger.warn('Get copy fail. result = ', rsp.result);
          return;
        }

        if ((self.context._cver || 0) < rsp.cver) {
          self.context._cver = rsp.cver;
          self.context.onMembers(rsp.cver, rsp.mems || {});
          self.context.onStreams(rsp.cver, rsp.streams || {});
          EventHandler_logger.info('Got copy success.');
        }
      });
    }
  }]);

  return EventHandler;
}();

/* harmony default export */ const components_EventHandler = (EventHandler);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__(3929);
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);
;// CONCATENATED MODULE: ./emedia-sdk/src/components/SDPSection.js




var SDPSection_logger = tagLogger('SDPSection');
var _SDPSection = {
  headerSection: null,
  audioSection: null,
  videoSection: null,
  _parseHeaderSection: function _parseHeaderSection(sdp, audioIndex, videoIndex) {
    var index = audioIndex;

    if (videoIndex === -1) {//保持不变
    } else if (audioIndex === -1) {
      index = videoIndex;
    } else {
      index = Math.min(audioIndex, videoIndex);
    }

    if (index >= 0) {
      return sdp.slice(0, index);
    }

    return sdp;
  },
  _parseAudioSection: function _parseAudioSection(sdp, audioIndex, videoIndex) {
    var index = audioIndex;

    if (index >= 0) {
      return sdp.slice(index, videoIndex < index ? sdp.length : videoIndex);
    }
  },
  _parseVideoSection: function _parseVideoSection(sdp, audioIndex, videoIndex) {
    var index = videoIndex;

    if (index >= 0) {
      return sdp.slice(index, audioIndex < index ? sdp.length : audioIndex);
    }
  },
  spiltSection: function spiltSection(sdp) {
    this._preSDP = sdp;
    var audioIndex = this._preAudioIndex = sdp.indexOf('m=audio');
    var videoIndex = this._preVideoIndex = sdp.indexOf('m=video');
    this.headerSection = this._parseHeaderSection(sdp, audioIndex, videoIndex);
    this.audioSection = this._parseAudioSection(sdp, audioIndex, videoIndex);
    this.videoSection = this._parseVideoSection(sdp, audioIndex, videoIndex);
  },
  setVideoBitrate: function setVideoBitrate(vbitrate) {
    if (!vbitrate || !this.videoSection) {
      return;
    }

    this.videoSection = this.setBitrate(this.videoSection, vbitrate);
  },
  // setVideoMinBitrate (vminBitrate) {
  //     if(!vminBitrate || !this.videoSection){
  //         return;
  //     }
  //     //x-google-min-bitrate
  //     this.videoSection = this.videoSection.replace(/(a=fmtp\:\d+\sx-google-min-bitrate=)\d+/g, "$1" + vminBitrate);
  // },
  setVideoMinBitrate: function setVideoMinBitrate(minBitrate) {
    this.setAllFmtpBitrate({
      'x-google-min-bitrate': minBitrate
    }); // this.setAllFmtpBitrate({
    //     "x-google-min-bitrate": minBitrate,
    //     "x-google-start-bitrate": minBitrate + 100,
    //     "x-google-max-bitrate": minBitrate + 100000,
    // });
  },
  setVideoMaxBitrate: function setVideoMaxBitrate(maxBitrate) {
    this.setAllFmtpBitrate({
      'x-google-max-bitrate': maxBitrate
    });
  },
  setVideoStartBitrate: function setVideoStartBitrate(startBitrate) {
    this.setAllFmtpBitrate({
      'x-google-start-bitrate': startBitrate
    });
  },
  setAllFmtpBitrate: function setAllFmtpBitrate(map) {
    if (!this.videoSection) {
      return;
    } // var vp8H264H265=[];
    // this.videoSection.replace(/a=rtpmap\:(\d+)\s+(VP8|H264|H265)[^\r\n]+([\r\n]+)/g, function (all, code, name) {
    //     //console.log(code, name);
    //     vp8H264H265.push(code);
    // });


    var fields = {};

    keys_default()(map).forEach(function (fmtpName) {
      var bitrate = map[fmtpName];
      var field = fmtpName + '=' + bitrate;
      var regex = new RegExp('(a=fmtp\\:\\d+\\s\\S*;?)(' + fmtpName + '=\\d+)(;?\\S*)', 'g');
      fields[fmtpName] = {
        field: field,
        regex: regex
      };
    }); //(?:' + vp8H264H265.join('|') + '
    ///(a=fmtp\:\d+)[^\r\n]+)([\r\n]+)/g
    //new RegExp('(a=fmtp\\:(?:' + vp8H264H265.join('|') + ')[^\\r\\n]+)([\\r\\n]+)', 'g')


    this.videoSection = this.videoSection.replace(/(a=fmtp\:\d+[^\r\n]+)([\r\n]+)/g, function (all, fmtp, enter) {
      if (fmtp.indexOf('apt=') >= 0) {
        return all;
      }

      keys_default()(fields).forEach(function (fmtpName) {
        var fieldAndRegex = fields[fmtpName];
        var regex = fieldAndRegex.regex;
        var field = fieldAndRegex.field;
        var replacedFmtp = fmtp.replace(regex, function ($$, $1, $2, $3) {
          return $1 + field + $3;
        });

        if (replacedFmtp.indexOf(fmtpName) < 0) {
          //没有包含
          if (!replacedFmtp.endsWith(';')) {
            replacedFmtp += ';';
          }

          fmtp = replacedFmtp + field;
        } else {
          fmtp = replacedFmtp;
        }
      });

      return fmtp + enter;
    });
  },
  setFmtpBitrate: function setFmtpBitrate(fmtpName, bitrate) {
    if (!bitrate || !this.videoSection) {
      return;
    }

    var field = fmtpName + '=' + bitrate;
    var regex = new RegExp('(a=fmtp\\:\\d+\\s\\S*;?)(' + fmtpName + '=\\d+)(;?\\S*)', 'g');
    this.videoSection = this.videoSection.replace(/(a=fmtp\:\d+[^\r\n]+)([\r\n]+)/g, function (all, fmtp, enter) {
      var replacedFmtp = fmtp.replace(regex, function ($$, $1, $2, $3) {
        return $1 + field + $3;
      });

      if (replacedFmtp.indexOf(fmtpName) < 0) {
        //没有包含
        if (!replacedFmtp.endsWith(';')) {
          replacedFmtp += ';';
        }

        replacedFmtp = replacedFmtp + field;
      }

      return replacedFmtp + enter;
    });
  },
  setAudioBitrate: function setAudioBitrate(abitrate) {
    if (!abitrate || !this.audioSection) {
      return;
    }

    this.audioSection = this.setBitrate(this.audioSection, abitrate);
  },
  setBitrate0: function setBitrate0(section, bitrate) {
    section = section.replace(/(b=)(?:AS|TIAS)(\:)\d+/g, '$1AS$2' + bitrate);

    if (section.indexOf('b=AS') < 0) {
      section = section.replace(/(m=(?:audio|video)[^\r\n]+)([\r\n]+)/g, '$1$2b=AS:' + bitrate + '$2');
    }

    return section;
  },
  setBitrate: function setBitrate(section, bandwidth) {
    var modifier = 'AS';

    if (isFirefox) {
      bandwidth = (bandwidth >>> 0) * 1000;
      modifier = 'TIAS';
    }

    section = section.replace(/(b=)(?:AS|TIAS)(\:)\d+/g, '$1' + modifier + '$2' + bandwidth);

    if (section.indexOf('b=' + modifier + ':') < 0) {
      //没有b行
      if (section.indexOf('c=IN ') < 0) {
        // 没有C行
        section = section.replace(/(m=(?:audio|video)[^\r\n]+)([\r\n]+)/g, '$1$2b=' + modifier + ':' + bandwidth + '$2');
      } else {
        // insert b= after c= line.
        section = section.replace(/c=IN ([^\r\n]+)([\r\n]+)/, 'c=IN $1$2b=' + modifier + ':' + bandwidth + '$2');
      }
    }

    return section;
  },
  updateVideoSection: function updateVideoSection(regx, oper) {
    if (!this.videoSection) {
      return;
    }

    this.videoSection = this.videoSection.replace(regx, oper);
  },
  updateAudioSection: function updateAudioSection(regx, oper) {
    if (!this.audioSection) {
      return;
    }

    this.audioSection = this.audioSection.replace(regx, oper);
  },
  updateVideoSendonly: function updateVideoSendonly() {
    if (!this.videoSection) {
      return;
    }

    this.videoSection = this.videoSection.replace(/sendrecv/g, 'sendonly');
  },
  updateVideoRecvonly: function updateVideoRecvonly() {
    if (!this.videoSection) {
      return;
    }

    this.videoSection = this.videoSection.replace(/sendrecv/g, 'recvonly');
  },
  updateAudioSendonly: function updateAudioSendonly() {
    if (!this.audioSection) {
      return;
    }

    this.audioSection = this.audioSection.replace(/sendrecv/g, 'sendonly');
  },
  updateAudioRecvonly: function updateAudioRecvonly() {
    if (!this.audioSection) {
      return;
    }

    this.audioSection = this.audioSection.replace(/sendrecv/g, 'recvonly');
  },
  updateACodes: function updateACodes(acodes) {
    if (!acodes) {
      return;
    }

    if (!this.audioSection) {
      return;
    }

    if (typeof acodes === 'string') {
      var arr = [];
      arr.push(acodes);
      acodes = arr;
    }

    var vcodeMap = {};
    var regexp = /a=rtpmap:(\d+) ([A-Za-z0-9]+)\/.*/gi;

    var arr = this._parseLine(this.audioSection, regexp);

    for (var i = 0; i < arr.length; i++) {
      var codeNum = arr[++i];
      var code = arr[++i];
      vcodeMap[code] = codeNum;
    }

    var numCodes = [];

    for (var i = 0; i < acodes.length; i++) {
      var supportVCode = vcodeMap[acodes[i]];
      supportVCode && numCodes.push(supportVCode);
    }

    if (numCodes.length == 0) {
      if (this._webrtc) {
        SDPSection_logger.warn('Not found acodes map', acodes, this._webrtc._rtcId, this._webrtc.__id);
      } else {
        SDPSection_logger.warn('Not found acodes map', acodes);
      }
    }

    var codeLineLastIndex = this.audioSection.indexOf('\r');
    var codeLine = this.audioSection.substring(0, codeLineLastIndex);
    var fields = codeLine.split(' ');
    Array.prototype.push.apply(numCodes, fields.slice(3));
    var newNumCodes = [];
    var _map = {};
    numCodes.forEach(function (ele) {
      if (newNumCodes.length == 0) {
        newNumCodes.push(ele);
        _map[ele] = true;
      } else {
        if (!_map[ele]) {
          newNumCodes.push(ele);
          _map[ele] = true;
        }
      }
    }); //alert(numCodes.join(' '));
    //fields.splice(3, 0, numCodes);

    fields.splice(3, fields.length - 3, newNumCodes.join(' '));
    codeLine = fields.join(' '); //logger.info(codeLine);

    if (this._webrtc) {
      SDPSection_logger.warn(codeLine, this._webrtc._rtcId, this._webrtc.__id);
    }

    this.audioSection = codeLine + this.audioSection.substring(codeLineLastIndex);
  },
  updateVCodes: function updateVCodes(vcodes) {
    if (!vcodes) {
      return;
    }

    if (!this.videoSection) {
      return;
    }

    if (typeof vcodes === 'string') {
      var arr = [];
      arr.push(vcodes);
      vcodes = arr;
    }

    var vcodeMap = {};
    var regexp = /a=rtpmap:(\d+) ([A-Za-z0-9]+)\/.*/gi;

    var arr = this._parseLine(this.videoSection, regexp);

    for (var i = 0; i < arr.length; i++) {
      var codeNum = arr[++i];
      var code = arr[++i];
      vcodeMap[code] = codeNum;
    } //H264
    //if(/Firefox/.test(navigator.userAgent) || /Chrome/.test(navigator.userAgent)){ //a=fmtp:126 profile-level-id=42e01f;level-asymmetry-allowed=1;packetization-mode=1


    var h264_regexp = /a=fmtp:(\d+) .*profile-level-id=42e01f;?.*/gi;

    var h264_arr = this._parseLine(this.videoSection, h264_regexp);

    if (h264_arr && h264_arr.length >= 2) {
      vcodeMap['H264'] = h264_arr[1];
    } //}


    var numCodes = [];

    for (var i = 0; i < vcodes.length; i++) {
      var supportVCode = vcodeMap[vcodes[i]];
      supportVCode && numCodes.push(supportVCode);
    }

    if (numCodes.length == 0) {
      if (this._webrtc) {
        SDPSection_logger.warn('Not found vcodes map', vcodes, this._webrtc._rtcId, this._webrtc.__id);
      } else {
        SDPSection_logger.warn('Not found vcodes map', vcodes);
      }
    }

    var codeLineLastIndex = this.videoSection.indexOf('\r');
    var codeLine = this.videoSection.substring(0, codeLineLastIndex);
    var fields = codeLine.split(' ');
    Array.prototype.push.apply(numCodes, fields.slice(3));
    var newNumCodes = [];
    var _map = {};
    numCodes.forEach(function (ele) {
      if (newNumCodes.length == 0) {
        newNumCodes.push(ele);
        _map[ele] = true;
      } else {
        if (!_map[ele]) {
          newNumCodes.push(ele);
          _map[ele] = true;
        }
      }
    }); //fields.splice(3, 0, numCodes);

    fields.splice(3, fields.length - 3, newNumCodes.join(' '));
    codeLine = fields.join(' '); //logger.info(codeLine);

    if (this._webrtc) {
      SDPSection_logger.warn(codeLine, this._webrtc._rtcId, this._webrtc.__id);
    }

    this.videoSection = codeLine + this.videoSection.substring(codeLineLastIndex);
  },
  removeSSRC: function removeSSRC(section) {
    var arr = [];

    var _arr = section.split(/a=ssrc:[^\n]+/g);

    for (var i = 0; i < _arr.length; i++) {
      _arr[i] != '\n' && arr.push(_arr[i]);
    } // arr.push('');


    return arr.join('\n');
  },
  removeField_msid: function removeField_msid(section) {
    var arr = [];

    var _arr = section.split(/a=msid:[^\n]+/g);

    for (var i = 0; i < _arr.length; i++) {
      _arr[i] != '\n' && arr.push(_arr[i]);
    } // arr.push('');


    section = arr.join('\n');
    arr = [];
    _arr = section.split(/[\n]+/g);

    for (var i = 0; i < _arr.length; i++) {
      _arr[i] != '\n' && arr.push(_arr[i]);
    }

    return arr.join('\n');
  },
  updateHeaderMsidSemantic: function updateHeaderMsidSemantic(wms) {
    var line = 'a=msid-semantic: WMS ' + wms;

    var _arr = this.headerSection.split(/a=msid\-semantic: WMS.*/g);

    var arr = [];

    switch (_arr.length) {
      case 1:
        arr.push(_arr[0]);
        break;

      case 2:
        arr.push(_arr[0]);
        arr.push(line);
        arr.push('\n');
        break;

      case 3:
        arr.push(_arr[0]);
        arr.push(line);
        arr.push('\n');
        arr.push(_arr[2]);
        arr.push('\n');
        break;
    }

    return this.headerSection = arr.join('');
  },
  updateAudioSSRCSection: function updateAudioSSRCSection(ssrc, cname, msid, label) {
    this.audioSection && (this.audioSection = this.removeSSRC(this.audioSection));
    this.audioSection && (this.audioSection = this.removeField_msid(this.audioSection));
    this.audioSection && (this.audioSection = this.audioSection + this.ssrcSection(ssrc, cname, msid, label));
  },
  updateVideoSSRCSection: function updateVideoSSRCSection(ssrc, cname, msid, label) {
    this.videoSection && (this.videoSection = this.removeSSRC(this.videoSection));
    this.videoSection && (this.videoSection = this.removeField_msid(this.videoSection));
    this.videoSection && (this.videoSection = this.videoSection + this.ssrcSection(ssrc, cname, msid, label));
  },
  getUpdatedSDP: function getUpdatedSDP(audioVideo) {
    // if(this._preAudioIndex < 0 || this._preVideoIndex < 0){
    //     return this._preSDP;
    // }
    //
    // audioVideo = (audioVideo === true || audioVideo === undefined);
    // var sdpAudioVideo = this._preAudioIndex < this._preVideoIndex;
    //
    // if(audioVideo == sdpAudioVideo){
    //     return this._preSDP;
    // }
    if (audioVideo === undefined || audioVideo == null) {
      audioVideo = this._preAudioIndex < this._preVideoIndex;
    }

    var videoMid;
    this.videoSection && this.videoSection.replace(/a=mid:([^\r\n]+)/, function (match, p1) {
      videoMid = p1;
      return match;
    });
    var audioMid;
    this.audioSection && this.audioSection.replace(/a=mid:([^\r\n]+)/, function (match, p1) {
      audioMid = p1;
      return match;
    });
    var sdp;

    if (audioVideo) {
      var bundleLine = ['a=group:BUNDLE'];
      this.audioSection && bundleLine.push(audioMid);
      this.videoSection && bundleLine.push(videoMid);
      sdp = this.headerSection.replace(/a=group:BUNDLE [^\r\n]+/, bundleLine.join(' '));
      this.audioSection && (sdp += this.audioSection);
      this.videoSection && (sdp += this.videoSection);
    } else {
      var bundleLine = ['a=group:BUNDLE'];
      this.videoSection && bundleLine.push(videoMid);
      this.audioSection && bundleLine.push(audioMid);
      sdp = this.headerSection.replace(/a=group:BUNDLE [^\r\n]+/, bundleLine.join(' '));
      this.videoSection && (sdp += this.videoSection);
      this.audioSection && (sdp += this.audioSection);
    }

    return sdp;
  },
  parseMsidSemantic: function parseMsidSemantic(header) {
    var regexp = /a=msid\-semantic:\s*WMS (\S+)/gi;

    var arr = this._parseLine(header, regexp);

    arr && arr.length == 2 && (this.msidSemantic = {
      line: arr[0],
      WMS: arr[1]
    });
    return this.msidSemantic;
  },
  ssrcSection: function ssrcSection(ssrc, cname, msid, label) {
    var lines = ['a=ssrc:' + ssrc + ' cname:' + cname, 'a=ssrc:' + ssrc + ' msid:' + msid + ' ' + label, 'a=ssrc:' + ssrc + ' mslabel:' + msid, 'a=ssrc:' + ssrc + ' label:' + label, ''];
    return lines.join('\n');
  },
  parseSSRC: function parseSSRC(section) {
    var regexp = new RegExp('a=(ssrc):(\\d+) (\\S+):(\\S+)', 'ig');

    var arr = this._parseLine(section, regexp);

    if (arr) {
      var ssrc = {
        lines: [],
        updateSSRCSection: this.ssrcSection
      };

      for (var i = 0; i < arr.length; i++) {
        var e = arr[i];

        if (e.indexOf('a=ssrc') >= 0) {
          ssrc.lines.push(e);
        } else {
          switch (e) {
            case 'ssrc':
            case 'cname':
            case 'msid':
            case 'mslabel':
            case 'label':
              ssrc[e] = arr[++i];
          }
        }
      }

      return ssrc;
    }
  },
  _parseLine: function _parseLine(str, regexp) {
    var arr = [];

    var _arr;

    while ((_arr = regexp.exec(str)) != null) {
      for (var i = 0; i < _arr.length; i++) {
        arr.push(_arr[i]);
      }
    }

    if (arr.length > 0) {
      return arr;
    }
  }
};

var SDPSection = function SDPSection(sdp, webrc) {
  assign_default()(this, _SDPSection);

  this._webrtc = webrc;
  this.spiltSection(sdp);
};

SDPSection.isAudioVideo = function (sdp) {
  var audioIndex = sdp.indexOf('m=audio');
  var videoIndex = sdp.indexOf('m=video');
  return audioIndex < videoIndex;
};

SDPSection.isVideoPreAudio = function (sdp) {
  var audioIndex = sdp.indexOf('m=audio');
  var videoIndex = sdp.indexOf('m=video');
  return audioIndex >= 0 && videoIndex >= 0 && videoIndex < audioIndex;
};

/* harmony default export */ const components_SDPSection = (SDPSection);
;// CONCATENATED MODULE: ./emedia-sdk/src/components/_Webrtc.js







/**
 * WebRTC
 *
 *                              A                   |                                       B
 *                                                  |
 *   1.createMedia:got streamA                      | 1.createMedia:got streamB
 *   2.new RTCPeerConnection: APeerConnection       | 2.new RTCPeerConnection: BPeerConnection
 *   3.APeerConnection.createOffer:got offerA       |
 *      APeerConnection.setLocalDescription(offerA) |
 *      send offerA ---> ---> ---> --->        ---> |
 *                                                  | ---> 3.got offerA | offerA = new RTCSessionDescription(offerA);
 *                                                  | BPeerConnection.setRemoteDescription(offerA)
 *                                                  |
 *                                                  |
 *                                                  | 4.BPeerConnection.createAnswer: got answerB
 *                                                  | BPeerConnection.setLocalDescription(answerB)
 *                                                  | <---- send answerB
 *                                                  | 5.got answerB <--- <--- <--- <---
 *                                                  | answerB = new RTCSessionDescription(answerB)
 *                                                  |
 * APeerConnection.setRemoteDescription(answerB)    |
 *                                                  |
 * 6.got candidateA ---> --->  ---> --->            | ---> got candidateA
 *                                                  | BPeerConnection.addIceCandidate(new RTCIceCandidate(candidateA))
 *                                                  |
 *                                                  |
 *                                                  | got candidateB <--- <--- <--- <---
 *                                                  | <--- 6.got candidateB APeerConnection.addIceCandidate(candidateB)
 *                                                  |
 *                                                  |
 *                                                  | 7. APeerConnection.addStream(streamA)
 *                                                  | 7. BPeerConnection.addStream(streamB)
 *                                                  |
 *                              streamA >>>>>>>>>>> |  <<<<< see A
 *                              seeB <<<<<<<<<<<    | <<<<< streamB
 *                                                  |
 *
 */





var _Webrtc_logger = tagLogger('Webrtc');

var parseRtpParameters = adapter_core.sdp.parseRtpParameters;

var __rtc_globalCount = emedia.__rtc_globalCount = 0;
/**
 * Abstract
 * {
 *   onIceStateChange:
 *   onIceCandidate:
 *   onGotRemoteStream:
 *
 *   createRtcPeerConnection:
 *   createOffer:
 *   createPRAnswer:
 *   createAnswer:
 *   addIceCandidate:
 *   close:
 *   iceState:
 *
 *   setLocalStream:
 *   getRtcId:
 * }
 *
 */

/**
 * ICE 通道失败：
 * 1.set sdp 失败
 * 2.set cands 失败
 * 但最终都是 ice fail
 *
 *
 * onSetSessionDescriptionError
 * onCreateSessionDescriptionError
 * onAddIceCandidateError
 *
 * onIceStateChange  ice fail
 *
 */


var _WebRTC = /*#__PURE__*/function () {
  /**
   * offerToReceiveAudio false sendonly, or sendrecv
   * offerToReceiveVideo false sendonly, or sendrecv
   *
   */
  function _WebRTC(props) {
    _classCallCheck(this, _WebRTC);

    _defineProperty(this, "closed", false);

    _defineProperty(this, "sdpConstraints", {
      mandatory: {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
      }
    });

    _defineProperty(this, "optimalVideoCodecs", null);

    _defineProperty(this, "optimalAudioCodecs", null);

    _defineProperty(this, "offerOptions", {
      offerToReceiveAudio: true,
      offerToReceiveVideo: true //voiceActivityDetection: false

    });

    var self = this;
    self._rtcId || (self._rtcId = 'RTC' + __rtc_globalCount++);
    self.__id = '_i_' + __rtc_globalCount++;
    self.__setRemoteSDP = false;
    self.__tmpRemoteCands = [];
    self.__tmpLocalCands = [];
    self._rtcPeerConnection = null;
    self.cctx = self.__id;
    emedia && emedia.config && emedia.config.forceUseVideoCodecs && emedia.config.forceUseVideoCodecs.length > 0 && (self.optimalVideoCodecs = emedia.config.forceUseVideoCodecs);
    emedia && emedia.config && emedia.config.forceUseAudioCodecs && emedia.config.forceUseAudioCodecs.length > 0 && (self.optimalAudioCodecs = emedia.config.forceUseAudioCodecs);
    emedia && emedia.config && typeof emedia.config.forceVideoBitrate === 'number' && (self.vbitrate = emedia.config.forceVideoBitrate);
    emedia && emedia.config && typeof emedia.config.forceMinVideoBitrate === 'number' && (self.vminBitrate = emedia.config.forceMinVideoBitrate);
    emedia && emedia.config && typeof emedia.config.forceAudioBitrate === 'number' && (self.abitrate = emedia.config.forceAudioBitrate);
    _Webrtc_logger.info('Webrtc created. optimal video codecs:', self.optimalVideoCodecs, 'audio codecs:', self.optimalAudioCodecs, 'vbitrate:', self.vbitrate, 'vminBitrate:', self.vminBitrate, 'abitrate:', self.abitrate, self._rtcId, self.__id);
    this.registerProps(props);
  }

  _createClass(_WebRTC, [{
    key: "registerProps",
    value: function registerProps(props) {
      for (var key in props) {
        this[key] = props[key];
      }
    }
  }, {
    key: "getRtcId",
    value: function getRtcId() {
      return this._rtcId;
    }
  }, {
    key: "iceState",
    value: function iceState() {
      var self = this;
      return self._rtcPeerConnection.iceConnectionState;
    }
  }, {
    key: "setSubArgs",
    value: function setSubArgs(subArgs) {
      var self = this;
      self.subArgs = subArgs;
    }
  }, {
    key: "getReceiversOfPeerConnection",
    value: function getReceiversOfPeerConnection() {
      var self = this;

      if (!self._rtcPeerConnection) {
        return;
      }

      if (self._rtcPeerConnection.iceConnectionState == 'closed') {
        return;
      }

      return self._rtcPeerConnection.getReceivers();
    }
  }, {
    key: "updateRemoteBySubArgs",
    value: function updateRemoteBySubArgs() {
      var self = this;

      if (!self.subArgs) {
        return;
      }

      if (!self._remoteStream) {
        return;
      }

      emedia.enableVideoTracks(self._remoteStream, !(self.subArgs && self.subArgs.subSVideo === false));
      emedia.enableAudioTracks(self._remoteStream, !(self.subArgs && self.subArgs.subSAudio === false));
      _Webrtc_logger.info('enable tracks remote stream', self._remoteStream, self.subArgs, self._rtcId, self.__id, self.closed);
    }
  }, {
    key: "createRtcPeerConnection",
    value: function createRtcPeerConnection(iceServerConfig) {
      var self = this;
      _Webrtc_logger.debug('begin create peer connection ......', self._rtcId, self.__id, self.closed);
      iceServerConfig || (iceServerConfig = self.iceServerConfig);

      if (iceServerConfig || isEdge) {
        //reduce icecandidate number:add default value
        iceServerConfig || (iceServerConfig = {});
        !iceServerConfig.iceServers && (iceServerConfig.iceServers = []);
        iceServerConfig.rtcpMuxPolicy = 'require';
        iceServerConfig.bundlePolicy = 'max-bundle'; //iceServerConfig.iceTransportPolicy = 'relay';

        if (iceServerConfig.relayOnly) {
          iceServerConfig.iceTransportPolicy = 'relay';
        }
      } else {
        iceServerConfig = null;
      } // iceServerConfig = {
      //     capAudio: true,
      //     capVideo: true,
      //     iceServers:[{
      //         credential: "+F34cGoWeMmwa+XtvibM7dr4Ccc=",
      //         url: "turn:101.200.76.93:3478",
      //         username: "hx-demo#chatdemoui_yss000@hx.com/webim_device_uuid%179310420104847360:1506431735"
      //     }],
      //     recvAudio: true,
      //     recvVideo: true,
      //     relayOnly: false,
      // };


      if (emedia && emedia.config && typeof emedia.config.reconfigRTCConfiguration === 'function') {
        iceServerConfig = emedia.config.reconfigRTCConfiguration(iceServerConfig);
      }

      _Webrtc_logger.info('create pc, set config:', iceServerConfig, self._rtcId, self.__id, self.closed);
      var rtcPeerConnection = self._rtcPeerConnection = new RTCPeerConnection(iceServerConfig);
      rtcPeerConnection.__peerId = self._rtcId;
      _Webrtc_logger.debug('created local peer connection object', rtcPeerConnection, self._rtcId);

      rtcPeerConnection.onicecandidate = function (event) {
        var candidate = event.candidate; //reduce icecandidate number: don't deal with tcp, udp only

        if (event.type == 'icecandidate' && (!candidate || typeof candidate.protocol === 'string' && candidate.protocol.toLowerCase() === 'tcp' || / TCP /.test(candidate.candidate))) {
          _Webrtc_logger.debug('On ICE candidate: drop', candidate, self._rtcId, self.__id, self.closed);
          return;
        }

        if (!candidate.candidate) {
          _Webrtc_logger.error('Not found candidate. candidate is error');
          throw 'Not found candidate. candidate is error,';
        }

        candidate.cctx = self.cctx;

        if (!self.__setRemoteSDP) {
          ;
          (self.__tmpLocalCands || (self.__tmpLocalCands = {})).push(candidate);
          _Webrtc_logger.debug('On ICE candidate ok: but tmp buffer caused by not set remote sdp: ', candidate, self._rtcId, self.__id, self.closed);
          return;
        } else {
          _Webrtc_logger.debug('On ICE candidate ok: ', candidate, self._rtcId, self.__id, self.closed);
        }

        self._onIceCandidate(candidate);
      };

      self.lastIceConnectionState = '';

      function stateChange(event) {
        _Webrtc_logger.info('states: connectionState', rtcPeerConnection.connectionState, ', iceConnectionState', rtcPeerConnection.iceConnectionState, '@', self._rtcId, self.__id, self.closed);

        try {
          //var theState = rtcPeerConnection.connectionState || rtcPeerConnection.iceConnectionState;
          var theState = rtcPeerConnection.iceConnectionState || rtcPeerConnection.connectionState;

          if ('failed' == rtcPeerConnection.connectionState || 'failed' == rtcPeerConnection.iceConnectionState) {
            theState = 'failed';
          }

          if (self.lastIceConnectionState !== theState) {
            self.lastIceConnectionState = theState;
            self.onIceStateChange(theState);
          }
        } finally {}
      }

      rtcPeerConnection.onconnectionstatechange = stateChange.bind(self);
      rtcPeerConnection.onicestatechange = stateChange.bind(self);
      rtcPeerConnection.oniceconnectionstatechange = stateChange.bind(self);

      rtcPeerConnection.onsignalingstatechange = function (event) {
        _Webrtc_logger.info('states: signaling', rtcPeerConnection.signalingState, '@', self._rtcId, self.__id, self.closed);
      };

      if (rtcPeerConnection.ontrack === null) {
        self._onTrack && (rtcPeerConnection.ontrack = function (event) {
          self._onTrack(event);
        });
      }

      rtcPeerConnection.onaddstream = function (event) {
        self._onGotRemoteStream(event);
      };
    }
  }, {
    key: "addTrack",
    value: function addTrack(tracks, stream) {
      var self = this;
      tracks.forEach(function (track) {
        self._rtcPeerConnection.addTrack(track, stream);

        _Webrtc_logger.debug('Added track(', track.id, track.kind, track.label, ') of stream(', stream.id, ') to RtcPeerConnection', self._rtcId, self.__id, self.closed);
      });
    }
  }, {
    key: "setLocalStream",
    value: function setLocalStream(localStream) {
      var self = this;
      self._localStream = localStream;

      if (self._rtcPeerConnection.addTrack) {
        localStream.getTracks().forEach(function (track) {
          self._rtcPeerConnection.addTrack(track, localStream);

          _Webrtc_logger.debug('Added track(', track.enabled, track.id, track.kind, track.label, ') of localStream(', localStream.id, ') to RtcPeerConnection', self._rtcId, self.__id, self.closed);
        });
      } else {
        self._rtcPeerConnection.addStream(localStream);

        var videoTracks = localStream.getVideoTracks();
        var audioTracks = localStream.getAudioTracks();

        if (videoTracks && videoTracks.length > 0) {
          _Webrtc_logger.debug('RtcPeerConnection video: ', videoTracks[0].enabled, videoTracks[0].id, videoTracks[0].kind, videoTracks[0].label, self._rtcId, self.__id, self.closed);
        }

        if (audioTracks && audioTracks.length > 0) {
          _Webrtc_logger.debug('RtcPeerConnection audio: ', audioTracks[0].enabled, audioTracks[0].id, audioTracks[0].kind, audioTracks[0].label, self._rtcId, self.__id, self.closed);
        }
      }

      _Webrtc_logger.debug('Added local stream to RtcPeerConnection', localStream.id, localStream.active, self._rtcId, self.__id, this.closed);
    }
  }, {
    key: "removeStream",
    value: function removeStream(mediaStream) {
      this._rtcPeerConnection.removeStream(mediaStream);

      _Webrtc_logger.debug('Remove stream from RtcPeerConnection', mediaStream, self._rtcId, self.__id, this.closed);
    }
  }, {
    key: "getLocalStream",
    value: function getLocalStream() {
      return this._localStream;
    }
  }, {
    key: "getRemoteStream",
    value: function getRemoteStream() {
      return this._remoteStream;
    }
  }, {
    key: "createOffer",
    value: function createOffer(onCreateOfferSuccess, onCreateOfferError) {
      var self = this;
      _Webrtc_logger.debug('createOffer start...', self.offerOptions, self._rtcId, self.__id);

      var offerOptions = assign_default()({}, self.offerOptions); //offerToReceiveAudio = false时，chrome没有video段；safari却这个块。需要将sendrecv改为sendonly
      //由于手机没有视频发布时，sdp中有video字段，而 web以offerToReceiveVideo = false去订阅时，导致订阅流中没有video块，会引发重协商。进而导致 始终无法看到对方视频
      //所以 订阅流时 无论offerToReceiveVideo = false，都生成offer sdp；其中都有video块。即 offerToReceiveVideo = true；但要将sdp修改为recvonly


      if (self.subArgs) {
        offerOptions = {
          offerToReceiveAudio: true,
          offerToReceiveVideo: true
        };
      }

      return self._rtcPeerConnection.createOffer(offerOptions).then(function (desc) {
        self.offerDescription = desc;

        if (isEdge) {
          desc.sdp = desc.sdp.replace(/profile-level-id=[^;]+/, 'profile-level-id=42e01f');
        }

        if (isFirefox) {
          //需要交换 cand answer
          self.fireFoxOfferVideoPreAudio = self.__offerVideoPreAudio = components_SDPSection.isVideoPreAudio(desc.sdp);
        } else {
          self.__offerVideoPreAudio = components_SDPSection.isVideoPreAudio(desc.sdp); // video在audio前时，xswitch的answer是 audio在前。set answer时需要 变换answer
        }

        desc.sdp = desc.sdp.replace(/m=video 0/g, 'm=video 9');
        _Webrtc_logger.warn("setLocalDescription. modify offer. if 'm=video 0' -> 'm=video 9'; if H264, 'profile-level-id=42e01f'", self._rtcId, self.__id);

        if (self.optimalVideoCodecs && self.optimalVideoCodecs.length > 0 || //数组或字符串
        self.optimalAudioCodecs && self.optimalAudioCodecs.length > 0 || //数组或字符串
        self.offerOptions && (self.offerOptions.offerToReceiveVideo === false || self.offerOptions.offerToReceiveAudio === false)) {
          var sdpSection = new components_SDPSection(desc.sdp, self);
          self.optimalVideoCodecs && sdpSection.updateVCodes(self.optimalVideoCodecs);
          self.optimalAudioCodecs && sdpSection.updateACodes(self.optimalAudioCodecs);
          self.offerOptions && self.offerOptions.offerToReceiveVideo === false && sdpSection.updateVideoSection(/a=sendrecv|a=recvonly/g, 'a=sendonly');
          self.offerOptions && self.offerOptions.offerToReceiveAudio === false && sdpSection.updateAudioSection(/a=sendrecv|a=recvonly/g, 'a=sendonly');
          desc.sdp = sdpSection.getUpdatedSDP(); //保持顺序
        }

        _Webrtc_logger.debug('setLocalDescription start', self._rtcId, self.__id, self.closed, self.optimalVideoCodecs, self.optimalAudioCodecs);

        self._rtcPeerConnection.setLocalDescription(desc).then(self._onSetLocalSessionDescriptionSuccess.bind(self), self._onSetSessionDescriptionError.bind(self, desc)).then(function () {
          desc.cctx = self.cctx;
          (onCreateOfferSuccess || self.onCreateOfferSuccess.bind(self))(desc);
        });
      }, onCreateOfferError || self._onCreateSessionDescriptionError.bind(self, offerOptions));
    }
  }, {
    key: "createPRAnswer",
    value: function createPRAnswer(onCreatePRAnswerSuccess, onCreatePRAnswerError) {
      var self = this;
      _Webrtc_logger.info(' createPRAnswer start', self.closed, self.sdpConstraints); // Since the 'remote' side has no media stream we need
      // to pass in the right constraints in order for it to
      // accept the incoming offer of audio and video.

      return self._rtcPeerConnection.createAnswer(self.sdpConstraints).then(function (desc) {
        _Webrtc_logger.debug('_____________PRAnswer ', desc.sdp, self._rtcId, self.__id, self.closed); //logger.debug('from :\n' + desc.sdp);

        desc.type = 'pranswer';
        desc.sdp = desc.sdp.replace(/a=recvonly/g, 'a=inactive');
        var sdpSection = new components_SDPSection(desc.sdp, self);
        self.optimalVideoCodecs && sdpSection.updateVCodes(self.optimalVideoCodecs);
        self.optimalAudioCodecs && sdpSection.updateACodes(self.optimalAudioCodecs);
        desc.sdp = sdpSection.getUpdatedSDP(); //保持顺序

        self.__prAnswerDescription = desc;
        _Webrtc_logger.debug('inactive PRAnswer ', desc.sdp, self._rtcId, self.__id, self.closed); //logger.debug('from :\n' + desc.sdp);

        _Webrtc_logger.debug('setLocalDescription start', desc, self._rtcId, self.__id, self.closed);

        self._rtcPeerConnection.setLocalDescription(desc).then(self._onSetLocalSessionDescriptionSuccess.bind(self), self._onSetSessionDescriptionError.bind(self, desc)).then(function () {
          sdpSection.updateHeaderMsidSemantic('MS_0000');
          sdpSection.updateAudioSSRCSection(1000, 'CHROME0000', 'MS_0000', 'LABEL_AUDIO_1000');
          sdpSection.updateVideoSSRCSection(2000, 'CHROME0000', 'MS_0000', 'LABEL_VIDEO_2000');
          desc.sdp = sdpSection.getUpdatedSDP();
          _Webrtc_logger.debug('Send PRAnswer ', desc.sdp, self._rtcId, self.__id, self.closed); //logger.debug('from :\n' + desc.sdp);

          self.cctx && (desc.cctx = self.cctx);
          (onCreatePRAnswerSuccess || self.onCreatePRAnswerSuccess.bind(self))(desc);
        });
      }, onCreatePRAnswerError || self._onCreateSessionDescriptionError.bind(self, self.sdpConstraints));
    }
  }, {
    key: "createAnswer",
    value: function createAnswer(onCreateAnswerSuccess, onCreateAnswerError) {
      var self = this;
      _Webrtc_logger.info('createAnswer start', self.closed, self.sdpConstraints); // Since the 'remote' side has no media stream we need
      // to pass in the right constraints in order for it to
      // accept the incoming offer of audio and video.

      return self._rtcPeerConnection.createAnswer(self.sdpConstraints).then(function (desc) {
        _Webrtc_logger.debug('_____________________Answer ', self._rtcId, self.__id, self.closed); //logger.debug('from :\n' + desc.sdp);

        desc.type = 'answer';

        function updateSDP(sdpSection) {
          var ms = sdpSection.parseMsidSemantic(sdpSection.headerSection);

          if (!ms) {
            return;
          }

          if (ms.WMS == '*') {
            sdpSection.updateHeaderMsidSemantic(ms.WMS = 'MS_0000');
          }

          var audioSSRC = sdpSection.parseSSRC(sdpSection.audioSection);
          var videoSSRC = sdpSection.parseSSRC(sdpSection.videoSection);
          audioSSRC && sdpSection.updateAudioSSRCSection(1000, 'CHROME0000', ms.WMS, audioSSRC.label || 'LABEL_AUDIO_1000');

          if (videoSSRC) {
            sdpSection.updateVideoSSRCSection(2000, 'CHROME0000', ms.WMS, videoSSRC.label || 'LABEL_VIDEO_2000');
          } // mslabel cname


          desc.sdp = sdpSection.getUpdatedSDP();
        }

        var sdpSection = new components_SDPSection(desc.sdp, self);
        self.optimalVideoCodecs && sdpSection.updateVCodes(self.optimalVideoCodecs);
        self.optimalAudioCodecs && sdpSection.updateACodes(self.optimalAudioCodecs);

        if (supportPRAnswer) {
          updateSDP(sdpSection);
        } else {
          desc.sdp = sdpSection.getUpdatedSDP(); //保持顺序
        }

        self.__answerDescription = desc;
        _Webrtc_logger.debug('Answer ', self._rtcId, self.__id, self.closed); //logger.debug('from :\n' + desc.sdp);

        _Webrtc_logger.debug('setLocalDescription start', desc, self._rtcId, self.__id, self.closed);

        self._rtcPeerConnection.setLocalDescription(desc).then(self._onSetLocalSessionDescriptionSuccess.bind(self), self._onSetSessionDescriptionError.bind(self, desc)).then(function () {
          if (supportPRAnswer) {
            sdpSection.updateHeaderMsidSemantic('MS_0000');
            sdpSection.updateAudioSSRCSection(1000, 'CHROME0000', 'MS_0000', 'LABEL_AUDIO_1000');
            sdpSection.updateVideoSSRCSection(2000, 'CHROME0000', 'MS_0000', 'LABEL_VIDEO_2000');
            desc.sdp = sdpSection.getUpdatedSDP();
          }

          _Webrtc_logger.debug('Send Answer ', self._rtcId, self.__id, self.closed); //logger.debug('from :\n' + desc.sdp);

          self.cctx && (desc.cctx = self.cctx);
          (onCreateAnswerSuccess || self.onCreateAnswerSuccess.bind(self))(desc);
        });
      }, onCreateAnswerError || self._onCreateSessionDescriptionError.bind(self, self.sdpConstraints));
    }
  }, {
    key: "_printStats",
    value: function _printStats(mediaStream) {
      var self = this;

      if (!self.confrAttendee || !emedia.config.remainLastStatsCount) {
        return;
      }

      mediaStream && mediaStream.getTracks().forEach(function (track) {
        self._printTrackStats(track);
      });
    }
  }, {
    key: "_printTrackStats",
    value: function _printTrackStats(track) {
      var self = this;

      if (!self.confrAttendee || !emedia.config.remainLastStatsCount) {
        return;
      }

      var trackStats = self.confrAttendee._trackStats && self.confrAttendee._trackStats[track.id];

      if (!trackStats) {
        return;
      }

      for (var type in trackStats) {
        var typeStats = trackStats[type];

        for (var subType in typeStats) {
          var stats = typeStats[subType];

          if (!stats) {
            continue;
          }

          var index = stats.curIndex;

          for (var i = 0; i < emedia.config.remainLastStatsCount; i++) {
            index = (index - 1) % emedia.config.remainLastStatsCount;
            var stat = stats[index];

            if (!stat || stat.data === undefined) {
              break;
            }

            _Webrtc_logger.info('[track]', self._rtcId, self.__id, track.kind, track.id, type, subType, stat.data, stat.timestamp.toLocaleString());
          }
        }
      }

      removeAttribute(self.confrAttendee._trackStats, track.id);
    }
  }, {
    key: "close",
    value: function close(remainLocalStream, onlyPeerConnectionClosed, retryBuild) {
      var self = this;
      _Webrtc_logger.warn('webrtc closing', self._rtcId, self.__id, self.closed);
      self.__iceWaitIntervalId && clearTimeout(self.__iceWaitIntervalId);

      if (self.closed) {
        return;
      }

      onlyPeerConnectionClosed = onlyPeerConnectionClosed === true;
      self.closed = true;

      try {
        var closePC = function closePC() {
          self._rtcPeerConnection && self._rtcPeerConnection.close();
          _Webrtc_logger.info('peer connection close. it is', self._rtcPeerConnection && self._rtcPeerConnection.__peerId);

          if (!retryBuild && isSafari) {
            //safari close peer connection, not notify state closed
            var theState = self._rtcPeerConnection.iceConnectionState || self._rtcPeerConnection.connectionState;
            setTimeout(function () {
              var nowState = self._rtcPeerConnection.iceConnectionState || self._rtcPeerConnection.connectionState; // if(nowState !== 'closed' && theState !== 'closed'){
              //     self.onIceStateChange && self.onIceStateChange('closed');
              // }

              self.onIceStateChange && self.onIceStateChange('closed');
            }, 200);
          }
        };

        //self._rtcPeerConnection && self._rtcPeerConnection.close();
        var localStream = self._localStream;
        var remoteStream = self._remoteStream;

        if (emedia.config.printStatsWhenPCClose) {
          self.getStats(function () {
            closePC();
            localStream && self._printStats(localStream);
            remoteStream && self._printStats(remoteStream);
          });
        } else {
          closePC();
        }
      } catch (e) {
        _Webrtc_logger.warn(e);
      } finally {
        if (self._localStream && remainLocalStream === false) {
          //localstream存在，不保留localstream
          emedia.stopTracks(self._localStream);
        }

        if (self._remoteStream) {
          emedia.stopTracks(self._remoteStream);
        }

        self._remoteStream = null;

        if (!onlyPeerConnectionClosed) {
          self.onClose && self.onClose();
        }

        if (retryBuild === true) {
          _Webrtc_logger.info('Webrtc close. but retry build. will onIceStateChange(failed). eg. emedia.config iceWaitBuildMillis', self._rtcId, self.__id);
          self.onIceStateChange && self.onIceStateChange('failed');
        }

        _Webrtc_logger.warn('webrtc closed. closed:', self._rtcId, self.__id, self.closed);
      }
    }
  }, {
    key: "addIceCandidate",
    value: function addIceCandidate(candidate) {
      var self = this;

      var _cands = is_array_default()(candidate) ? candidate : [candidate];

      if (emedia && emedia.config && typeof emedia.config.reChanageCandidate === 'function') {
        var candsChanaged = [];

        for (var i = 0; i < _cands.length; i++) {
          candidate = _cands[i];
          var newCandidates = emedia.config.reChanageCandidate(candidate);

          if (newCandidates) {
            _Webrtc_logger.info('Candidate rechanage. addons. it =', candidate, '->', newCandidates);

            if (is_array_default()(newCandidates)) {
              Array.prototype.push.apply(candsChanaged, newCandidates);
            } else {
              candsChanaged.push(newCandidates);
            }
          }
        }

        _cands = candsChanaged;
      }

      self._addIceCandidate(_cands);
    }
  }, {
    key: "_addIceCandidate",
    value: function _addIceCandidate(candidate) {
      var self = this;

      if (!self._rtcPeerConnection) {
        return;
      }

      _Webrtc_logger.debug('Add ICE candidate: ', candidate, self._rtcId, self.__id, self.closed);

      var _cands = is_array_default()(candidate) ? candidate : [candidate]; //!Array.isArray(candidate) && _cands.push(candidate);


      if (!self.__setRemoteSDP) {
        Array.prototype.push.apply(self.__tmpRemoteCands || (self.__tmpRemoteCands = {}), _cands);
        _Webrtc_logger.debug('Add ICE candidate but tmp buffer caused by not set remote sdp: ', candidate, self._rtcId, self.__id, self.closed);
        return;
      }

      for (var i = 0; i < _cands.length; i++) {
        candidate = _cands[i];

        if (candidate.cctx && candidate.cctx != self.cctx) {
          _Webrtc_logger.warn('addIceCandidate fail drop. cctx not equal. ', candidate, self._rtcId, self.__id, self.closed);
          continue;
        } //candidate.candidate = candidate.candidate.replace("172.17.2.130", "10.121.63.1");


        if (self.fireFoxOfferVideoPreAudio === true) {
          //candidate.sdpMid = "sdparta_0";
          var oldLineIndex = candidate.sdpMLineIndex;
          candidate.sdpMLineIndex = parse_int_default()(candidate.sdpMid.replace(/[^0-9]*/, ''));
          _Webrtc_logger.warn('Firefox sdp section video pre audio, sdp mline index update ', oldLineIndex, '->', candidate.sdpMLineIndex);
        }

        if (candidate.candidate && candidate.candidate !== '') {
          self._rtcPeerConnection.addIceCandidate(new RTCIceCandidate(candidate)).then(self.onAddIceCandidateSuccess.bind(self), self._onAddIceCandidateError.bind(self, candidate));
        } else {
          _Webrtc_logger.warn('Add ICE candidate fail. drop it ', candidate, self._rtcId, self.__id, self.closed);
        }
      }
    }
  }, {
    key: "setRemoteDescription",
    value: function setRemoteDescription(desc) {
      var self = this; //setTimeout(self._setRemoteDescription.bind(this, desc), 1000);

      return self._setRemoteDescription(desc);
    }
  }, {
    key: "_setRemoteDescription",
    value: function _setRemoteDescription(desc) {
      var self = this;

      if (self.__iceWaitIntervalId) {
        clearTimeout(self.__iceWaitIntervalId);
        self.__iceWaitIntervalId = null;
        _Webrtc_logger.info('emedia.config iceWaitBuildMillis, clear ice wait interval id', self._rtcId, self.__id);
      }

      _Webrtc_logger.debug('setRemoteDescription start. ', self._rtcId, self.__id, self.closed); // 生成offer的
      // 会议模式，也是设置的是 pranswer 和 answer 会有服务器传回。
      // p2p模式下的主叫。此时设置的是 pranswer 和 answer。这个应该有p2p模式下传回。因此，需要如果有的话，需要判断

      if (self.offerDescription) {
        if (desc.cctx && desc.cctx != self.cctx) {
          _Webrtc_logger.warn('setRemoteDescription fail drop. cctx not equal. ', desc, self._rtcId, self.__id, self.closed);
          return;
        }

        if (self.fireFoxOfferVideoPreAudio === true || self.__offerVideoPreAudio === true) {
          //logger.debug("Remote sdp.1", desc.sdp);
          var sdpSection = new components_SDPSection(desc.sdp, self);
          desc.sdp = sdpSection.getUpdatedSDP(false);
          _Webrtc_logger.info('Remote sdp.2. switch audio video', desc.sdp);
        }
      } else {
        //被叫 p2p模式，覆盖
        desc.cctx && (self.cctx = desc.cctx);
      }

      desc.sdp = desc.sdp.replace(/UDP\/TLS\/RTP\/SAVPF/g, 'RTP/SAVPF');
      _Webrtc_logger.warn('setRemoteDescription. UDP/TLS/RTP/SAVPF -> RTP/SAVPF; if firefox: switch audio video;', self._rtcId, self.__id); //logger.debug('setRemoteDescription.', desc, self._rtcId, self.__id);
      // https://webrtchacks.com/limit-webrtc-bandwidth-sdp/
      // bitrate

      if (self.vbitrate || self.abitrate || self.vminBitrate) {
        var sdpSection = new components_SDPSection(desc.sdp, self);
        self.vbitrate && sdpSection.setVideoBitrate(self.vbitrate);
        self.vminBitrate && sdpSection.setVideoMinBitrate(self.vminBitrate);
        self.abitrate && sdpSection.setAudioBitrate(self.abitrate);
        _Webrtc_logger.warn('vbitrate = ', self.vbitrate, 'vminBitrate = ', this.vminBitrate, ', abitrate = ', self.abitrate, self._rtcId, self.__id);
        desc.sdp = sdpSection.getUpdatedSDP(typeof self.__offerVideoPreAudio === 'undefined' || self.__offerVideoPreAudio === null ? undefined : !self.__offerVideoPreAudio);
      }

      _Webrtc_logger.debug('final remote sdp =', desc.sdp, self._rtcId, self.__id);
      desc = self.__remoteDescription = new RTCSessionDescription(desc);
      return self._rtcPeerConnection.setRemoteDescription(desc).then(function () {
        self.__setRemoteSDP = true;

        self._onSetRemoteSuccess.apply(self, arguments);

        if (self.__tmpLocalCands && self.__tmpLocalCands.length > 0) {
          _Webrtc_logger.debug('After setRemoteDescription. send cands', self._rtcId, self.__id, self.closed);

          self._onIceCandidate(self.__tmpLocalCands);

          self.__tmpLocalCands = [];
        }

        if (self.__tmpRemoteCands && self.__tmpRemoteCands.length > 0) {
          _Webrtc_logger.debug('After setRemoteDescription. add tmp cands', self._rtcId, self.__id, self.closed);

          self._addIceCandidate(self.__tmpRemoteCands);

          self.__tmpRemoteCands = [];
        }
      }, self._onSetSessionDescriptionError.bind(self, desc));
    }
  }, {
    key: "iceConnectionState",
    value: function iceConnectionState() {
      var self = this;
      return self._rtcPeerConnection.iceConnectionState;
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      var self = this;
      var state = self.lastIceConnectionState;
      return 'connected' === state || 'completed' === state;
    }
  }, {
    key: "_onGotRemoteStream",
    value: function _onGotRemoteStream(event) {
      var self = this;
      self._remoteStream = event.stream || event.streams[0];
      self._remoteStream._rtcId = self._rtcId;
      self._remoteStream.__rtc_c_id = self.__id;
      _Webrtc_logger.debug('On got remote stream', self._remoteStream ? self._remoteStream.id + '_' + self._remoteStream.active : 'null', self._rtcId, self.__id);
      self._remoteStream && self._remoteStream.getTracks().forEach(function (track) {
        // if(typeof track.getSettings === 'function'){
        //     logger.debug('remote stream', self._remoteStream.id,
        //         " track setting =", track.enabled, track.id, track.kind, track.label, track.getSettings(), self._rtcId, self.__id);
        // }else{
        _Webrtc_logger.debug('remote stream', self._remoteStream.id, ' track =', track.enabled, track.id, track.kind, track.label, self._rtcId, self.__id); // }
      });
      self.updateRemoteBySubArgs();
      this.onGotRemoteStream(this._remoteStream, event);
      _Webrtc_logger.debug('received remote stream, you will see the other.', self._rtcId, self.__id, this.closed);
    }
  }, {
    key: "_onSetRemoteSuccess",
    value: function _onSetRemoteSuccess() {
      _Webrtc_logger.info('onSetRemoteSuccess success', this._rtcId, this.__id);
      this.onSetRemoteSuccess.apply(this, arguments);

      if (this.offerDescription && this.__remoteDescription && this.__remoteDescription.sdp) {
        this._onAnswerCodes(this.__remoteDescription.sdp);
      }
    }
  }, {
    key: "_onAnswerCodes",
    value: function _onAnswerCodes(sdp) {
      var self = this;
      var section = new components_SDPSection(sdp, this);

      if (section.videoSection) {
        var rtpParams = parseRtpParameters(section.videoSection);

        if (!rtpParams.codecs || rtpParams.codecs.length === 0) {
          _Webrtc_logger.info('not found any video codes. @ ', self._rtcId, self.__id);
          return;
        }

        var vcodes = [];
        rtpParams.codecs.forEach(function (_param) {
          return vcodes.push(_param.name);
        });
        self.finalVCodeChoices = vcodes;
        self.onVCodeChoices && self.onVCodeChoices(vcodes);
      }
    }
  }, {
    key: "onSetRemoteSuccess",
    value: function onSetRemoteSuccess() {}
  }, {
    key: "onAddIceCandidateSuccess",
    value: function onAddIceCandidateSuccess() {
      _Webrtc_logger.debug('addIceCandidate success', this._rtcId, this.__id);
    }
  }, {
    key: "_onAddIceCandidateError",
    value: function _onAddIceCandidateError(candidate, error) {
      _Webrtc_logger.error('failed to add ICE Candidate: ' + error.toString(), ', error candidate:', candidate, this._rtcId, this.__id);
      this.onAddIceCandidateError(error);
    }
  }, {
    key: "onAddIceCandidateError",
    value: function onAddIceCandidateError(error) {}
  }, {
    key: "_onIceCandidate",
    value: function _onIceCandidate(candidate) {
      _Webrtc_logger.debug('onIceCandidate:', candidate, this._rtcId, this.__id);
      this.onIceCandidate(candidate);
    }
  }, {
    key: "onIceCandidate",
    value: function onIceCandidate(candidate) {}
  }, {
    key: "onIceStateChange",
    value: function onIceStateChange(state) {
      _Webrtc_logger.debug('onIceStateChange : ICE state ', state);
    }
  }, {
    key: "_onCreateSessionDescriptionError",
    value: function _onCreateSessionDescriptionError(offerOptionsOrSDPConstraints, error) {
      _Webrtc_logger.error('Failed to create session description: ' + error.toString(), ' offerOptionsOrSDPConstraints:', offerOptionsOrSDPConstraints, this._rtcId, this.__id);
      this.onCreateSessionDescriptionError(error);
    }
  }, {
    key: "onCreateSessionDescriptionError",
    value: function onCreateSessionDescriptionError(error) {}
  }, {
    key: "onCreateOfferSuccess",
    value: function onCreateOfferSuccess(desc) {
      _Webrtc_logger.debug('create offer success', this._rtcId, this.__id);
    }
  }, {
    key: "onCreatePRAnswerSuccess",
    value: function onCreatePRAnswerSuccess(desc) {
      _Webrtc_logger.debug('create answer success', this._rtcId, this.__id);
    }
  }, {
    key: "onCreateAnswerSuccess",
    value: function onCreateAnswerSuccess(desc) {
      _Webrtc_logger.debug('create answer success', this._rtcId, this.__id);
    }
  }, {
    key: "_onSetSessionDescriptionError",
    value: function _onSetSessionDescriptionError(sdp, error) {
      _Webrtc_logger.error('onSetSessionDescriptionError : Failed to set session description: ', error.toString(), this._rtcId, this.__id);
      sdp && sdp.type && sdp.sdp && _Webrtc_logger.error('error sdp: type=', sdp.type, 'sdp=', sdp.sdp, this._rtcId, this.__id);
      this.onSetSessionDescriptionError(error);
    }
  }, {
    key: "onSetSessionDescriptionError",
    value: function onSetSessionDescriptionError(error) {}
  }, {
    key: "_onSetLocalSessionDescriptionSuccess",
    value: function _onSetLocalSessionDescriptionSuccess() {
      var self = this;
      _Webrtc_logger.debug('onSetLocalSessionDescriptionSuccess : setLocalDescription complete', this._rtcId, this.__id);

      if (emedia.config.iceWaitBuildMillis) {
        this.__iceWaitIntervalId && clearTimeout(this.__iceWaitIntervalId);
        this.__iceWaitIntervalId = setTimeout(function () {
          _Webrtc_logger.info('emedia.config iceWaitBuildMillis, timeout, will close webrtc, will retry build by onIceStateChange(failed)', self._rtcId, self.__id); //self.close(true, true, true);

          self.onIceStateChange && self.onIceStateChange('failed');
        }, emedia.config.iceWaitBuildMillis);
        _Webrtc_logger.info('emedia.config iceWaitBuildMillis, start timeout', self._rtcId, self.__id);
      }

      this.onSetLocalSessionDescriptionSuccess();

      if (this.__answerDescription && this.__answerDescription.sdp) {
        this._onAnswerCodes(this.__answerDescription.sdp);
      }
    }
  }, {
    key: "onSetLocalSessionDescriptionSuccess",
    value: function onSetLocalSessionDescriptionSuccess() {}
  }, {
    key: "onGotRemoteStream",
    value: function onGotRemoteStream(remoteStream) {
      _Webrtc_logger.debug('Got remote stream. ', remoteStream, this._rtcId, this.__id);
    }
  }, {
    key: "getStats",
    value: function getStats(onCallback) {
      var self = this;

      if (!self._rtcPeerConnection) {
        _Webrtc_logger.warn('Get stats, but peer connection not exsits, ', this._rtcId, this.__id);
        onCallback && onCallback();
        return;
      }

      if (typeof emedia.config.rtcStatsTypeMath !== 'function') {
        _Webrtc_logger.warn('Get stats, but config rtcStatsTypeMather, ', this._rtcId, this.__id);
        onCallback && onCallback();
        return;
      }

      self._rtcPeerConnection.getStats(null).then(function (stats) {
        stats.forEach(function (_stat, name) {
          if (emedia.config.rtcStatsTypeMath(_stat, name)) {
            _Webrtc_logger.info('Rtc stats', _stat, self._rtcId, self.__id);
          }
        });
        onCallback && onCallback(stats);
      });
    }
  }]);

  return _WebRTC;
}();

/* harmony default export */ const _Webrtc = (_WebRTC);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayEach.js
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ const _arrayEach = (arrayEach);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssign.js



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, lodash_es_keys(source), object);
}

/* harmony default export */ const _baseAssign = (baseAssign);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignIn.js



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, lodash_es_keysIn(source), object);
}

/* harmony default export */ const _baseAssignIn = (baseAssignIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneBuffer.js


/** Detect free variable `exports`. */
var _cloneBuffer_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _cloneBuffer_freeModule = _cloneBuffer_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _cloneBuffer_moduleExports = _cloneBuffer_freeModule && _cloneBuffer_freeModule.exports === _cloneBuffer_freeExports;

/** Built-in value references. */
var _cloneBuffer_Buffer = _cloneBuffer_moduleExports ? _root.Buffer : undefined,
    allocUnsafe = _cloneBuffer_Buffer ? _cloneBuffer_Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ const _cloneBuffer = (cloneBuffer);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ const _copyArray = (copyArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_copySymbols.js



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

/* harmony default export */ const _copySymbols = (copySymbols);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var _getSymbolsIn_nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !_getSymbolsIn_nativeGetSymbols ? lodash_es_stubArray : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

/* harmony default export */ const _getSymbolsIn = (getSymbolsIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_copySymbolsIn.js



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

/* harmony default export */ const _copySymbolsIn = (copySymbolsIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, lodash_es_keysIn, _getSymbolsIn);
}

/* harmony default export */ const _getAllKeysIn = (getAllKeysIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneArray.js
/** Used for built-in method references. */
var _initCloneArray_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _initCloneArray_hasOwnProperty = _initCloneArray_objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && _initCloneArray_hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ const _initCloneArray = (initCloneArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

/* harmony default export */ const _cloneArrayBuffer = (cloneArrayBuffer);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneDataView.js


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ const _cloneDataView = (cloneDataView);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ const _cloneRegExp = (cloneRegExp);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneSymbol.js


/** Used to convert symbols to primitives and strings. */
var _cloneSymbol_symbolProto = _Symbol ? _Symbol.prototype : undefined,
    _cloneSymbol_symbolValueOf = _cloneSymbol_symbolProto ? _cloneSymbol_symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return _cloneSymbol_symbolValueOf ? Object(_cloneSymbol_symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ const _cloneSymbol = (cloneSymbol);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ const _cloneTypedArray = (cloneTypedArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneByTag.js






/** `Object#toString` result references. */
var _initCloneByTag_boolTag = '[object Boolean]',
    _initCloneByTag_dateTag = '[object Date]',
    _initCloneByTag_mapTag = '[object Map]',
    _initCloneByTag_numberTag = '[object Number]',
    _initCloneByTag_regexpTag = '[object RegExp]',
    _initCloneByTag_setTag = '[object Set]',
    _initCloneByTag_stringTag = '[object String]',
    _initCloneByTag_symbolTag = '[object Symbol]';

var _initCloneByTag_arrayBufferTag = '[object ArrayBuffer]',
    _initCloneByTag_dataViewTag = '[object DataView]',
    _initCloneByTag_float32Tag = '[object Float32Array]',
    _initCloneByTag_float64Tag = '[object Float64Array]',
    _initCloneByTag_int8Tag = '[object Int8Array]',
    _initCloneByTag_int16Tag = '[object Int16Array]',
    _initCloneByTag_int32Tag = '[object Int32Array]',
    _initCloneByTag_uint8Tag = '[object Uint8Array]',
    _initCloneByTag_uint8ClampedTag = '[object Uint8ClampedArray]',
    _initCloneByTag_uint16Tag = '[object Uint16Array]',
    _initCloneByTag_uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case _initCloneByTag_arrayBufferTag:
      return _cloneArrayBuffer(object);

    case _initCloneByTag_boolTag:
    case _initCloneByTag_dateTag:
      return new Ctor(+object);

    case _initCloneByTag_dataViewTag:
      return _cloneDataView(object, isDeep);

    case _initCloneByTag_float32Tag: case _initCloneByTag_float64Tag:
    case _initCloneByTag_int8Tag: case _initCloneByTag_int16Tag: case _initCloneByTag_int32Tag:
    case _initCloneByTag_uint8Tag: case _initCloneByTag_uint8ClampedTag: case _initCloneByTag_uint16Tag: case _initCloneByTag_uint32Tag:
      return _cloneTypedArray(object, isDeep);

    case _initCloneByTag_mapTag:
      return new Ctor;

    case _initCloneByTag_numberTag:
    case _initCloneByTag_stringTag:
      return new Ctor(object);

    case _initCloneByTag_regexpTag:
      return _cloneRegExp(object);

    case _initCloneByTag_setTag:
      return new Ctor;

    case _initCloneByTag_symbolTag:
      return _cloneSymbol(object);
  }
}

/* harmony default export */ const _initCloneByTag = (initCloneByTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!lodash_es_isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ const _baseCreate = (baseCreate);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

/* harmony default export */ const _initCloneObject = (initCloneObject);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsMap.js



/** `Object#toString` result references. */
var _baseIsMap_mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsMap_mapTag;
}

/* harmony default export */ const _baseIsMap = (baseIsMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isMap.js




/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

/* harmony default export */ const lodash_es_isMap = (isMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsSet.js



/** `Object#toString` result references. */
var _baseIsSet_setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return lodash_es_isObjectLike(value) && _getTag(value) == _baseIsSet_setTag;
}

/* harmony default export */ const _baseIsSet = (baseIsSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isSet.js




/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

/* harmony default export */ const lodash_es_isSet = (isSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseClone.js























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var _baseClone_argsTag = '[object Arguments]',
    _baseClone_arrayTag = '[object Array]',
    _baseClone_boolTag = '[object Boolean]',
    _baseClone_dateTag = '[object Date]',
    _baseClone_errorTag = '[object Error]',
    _baseClone_funcTag = '[object Function]',
    _baseClone_genTag = '[object GeneratorFunction]',
    _baseClone_mapTag = '[object Map]',
    _baseClone_numberTag = '[object Number]',
    _baseClone_objectTag = '[object Object]',
    _baseClone_regexpTag = '[object RegExp]',
    _baseClone_setTag = '[object Set]',
    _baseClone_stringTag = '[object String]',
    _baseClone_symbolTag = '[object Symbol]',
    _baseClone_weakMapTag = '[object WeakMap]';

var _baseClone_arrayBufferTag = '[object ArrayBuffer]',
    _baseClone_dataViewTag = '[object DataView]',
    _baseClone_float32Tag = '[object Float32Array]',
    _baseClone_float64Tag = '[object Float64Array]',
    _baseClone_int8Tag = '[object Int8Array]',
    _baseClone_int16Tag = '[object Int16Array]',
    _baseClone_int32Tag = '[object Int32Array]',
    _baseClone_uint8Tag = '[object Uint8Array]',
    _baseClone_uint8ClampedTag = '[object Uint8ClampedArray]',
    _baseClone_uint16Tag = '[object Uint16Array]',
    _baseClone_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[_baseClone_argsTag] = cloneableTags[_baseClone_arrayTag] =
cloneableTags[_baseClone_arrayBufferTag] = cloneableTags[_baseClone_dataViewTag] =
cloneableTags[_baseClone_boolTag] = cloneableTags[_baseClone_dateTag] =
cloneableTags[_baseClone_float32Tag] = cloneableTags[_baseClone_float64Tag] =
cloneableTags[_baseClone_int8Tag] = cloneableTags[_baseClone_int16Tag] =
cloneableTags[_baseClone_int32Tag] = cloneableTags[_baseClone_mapTag] =
cloneableTags[_baseClone_numberTag] = cloneableTags[_baseClone_objectTag] =
cloneableTags[_baseClone_regexpTag] = cloneableTags[_baseClone_setTag] =
cloneableTags[_baseClone_stringTag] = cloneableTags[_baseClone_symbolTag] =
cloneableTags[_baseClone_uint8Tag] = cloneableTags[_baseClone_uint8ClampedTag] =
cloneableTags[_baseClone_uint16Tag] = cloneableTags[_baseClone_uint32Tag] = true;
cloneableTags[_baseClone_errorTag] = cloneableTags[_baseClone_funcTag] =
cloneableTags[_baseClone_weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!lodash_es_isObject(value)) {
    return value;
  }
  var isArr = lodash_es_isArray(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == _baseClone_funcTag || tag == _baseClone_genTag;

    if (lodash_es_isBuffer(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == _baseClone_objectTag || tag == _baseClone_argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (lodash_es_isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (lodash_es_isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? lodash_es_keysIn : lodash_es_keys);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ const _baseClone = (baseClone);

;// CONCATENATED MODULE: ./node_modules/lodash-es/cloneDeep.js


/** Used to compose bitmasks for cloning. */
var cloneDeep_CLONE_DEEP_FLAG = 1,
    cloneDeep_CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, cloneDeep_CLONE_DEEP_FLAG | cloneDeep_CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ const lodash_es_cloneDeep = (cloneDeep);

;// CONCATENATED MODULE: ./emedia-sdk/src/components/_Member.js






var _Member_logger = tagLogger('Member');





/**
 * 未体现 Member 使用了 session。
 * 请 这样创建
 * Member({_session: sess, _memberId: memberId})
 * this._session
 *
 * {
 *  _memberId:
 *  _ices[Map]:
 * }
 *
 */

var Member = /*#__PURE__*/function () {
  function Member(props) {
    _classCallCheck(this, Member);

    _defineProperty(this, "closed", false);

    _defineProperty(this, "_ices", {});

    _defineProperty(this, "supportVCodes", {});

    _defineProperty(this, "audioMixers", {});

    // TODO:此处需将props中的变量和属性区分开
    for (var key in props) {
      this[key] = props[key];
    }

    this.evtHandler = new components_EventHandler(this);

    if (!this.sessionFactory) {
      _Member_logger.error('Require session');
      throw 'Require session';
    }

    this._session = this.sessionFactory(this);
  }

  _createClass(Member, [{
    key: "onEvent",
    value: function onEvent() {
      var _this$evtHandler;

      (_this$evtHandler = this.evtHandler).onEvent.apply(_this$evtHandler, arguments);
    }
  }, {
    key: "reflushSupportVCodes",
    value: function reflushSupportVCodes(vcodes) {
      var _this = this;

      this.supportVCodes = {};
      this._orderVCodes = vcodes;

      if (!vcodes || vcodes.length == 0) {
        _Member_logger.warn('Not config support vcodes');
        return;
      }

      vcodes.forEach(function (vcode) {
        return _this.supportVCodes[vcode] = 1;
      });
    }
  }, {
    key: "getOptimalVideoCodecs",
    value: function getOptimalVideoCodecs() {
      if (!this._orderVCodes || this._orderVCodes.length == 0) {
        return /Chrome/.test(navigator.userAgent) ? 'VP8' : /Safari/.test(navigator.userAgent) ? 'H264' : 'VP8';
      }

      var memberCount = this._cacheMembers.length;
      var maxSupportCount = 0;
      var optimalVCode;

      for (var i = 0; i < this._orderVCodes.length; i++) {
        var vcode = this._orderVCodes[i];

        if (maxSupportCount == 0) {
          maxSupportCount = this.supportVCodes[vcode];
        }

        if (this.supportVCodes[vcode] > memberCount) {
          return vcode;
        }

        if (this.supportVCodes[vcode] > maxSupportCount) {
          maxSupportCount = this.supportVCodes[vcode];
          optimalVCode = vcode;
        }
      }

      return optimalVCode;
    }
  }, {
    key: "setMemberId",
    value: function setMemberId(memberId) {
      this._memberId = memberId;
    }
  }, {
    key: "getMemberId",
    value: function getMemberId() {
      return this._memberId || this.id;
    }
    /**
     * createWebrtc({
     *  _rtcId:
     *  iceServerConfig:
     *  onGotMediaStream:
     * onEvent:
     * })
     *
     * @param iceServerConfig
     */

  }, {
    key: "createWebrtc",
    value: function createWebrtc() {
      var webrtcCfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var rebuildCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var self = this;
      webrtcCfg._rebuildCount = rebuildCount;

      if (this._service.useRTCCfg === true && this.__rtc_cfg) {
        //优先使用 __rtc_cfg
        webrtcCfg.iceServerConfig = lodash_es_cloneDeep(this.__rtc_cfg);
      } else if (lodash_es_isPlainObject(this._service.useRTCCfg)) {
        webrtcCfg.iceServerConfig = lodash_es_cloneDeep(this._service.useRTCCfg);
      } // TODO: 此处webrtc的第二个参数 webrtcCfg 配置，代码里面没利用？？？


      var webrtc = new _Webrtc({
        //iceServerConfig: iceServerConfig,
        confrAttendee: this,
        useIp: this.ip,
        onIceStateChange: function onIceStateChange(iceState) {
          var state = iceState;
          _Member_logger.debug('evt.target ice state', state);

          try {
            if (state == 'failed') {
              self.onEvent(new components_event.ICEConnectFail({
                webrtc: webrtc
              }));
              webrtc.onEvent && webrtc.onEvent(new components_event.ICEConnectFail({
                webrtc: webrtc
              }));
              return;
            }

            if (state == 'connected') {
              self.onEvent(new components_event.ICEConnected({
                webrtc: webrtc
              }));
              webrtc.onEvent = null;
              return;
            }

            if (state == 'closed') {
              self.onEvent(new components_event.ICEClosed({
                webrtc: webrtc
              }));
              webrtc.onEvent && webrtc.onEvent(new components_event.ICEClosed({
                webrtc: webrtc
              }));
              return;
            }

            if (state == 'disconnected') {
              self.onEvent(new components_event.ICEDisconnected({
                webrtc: webrtc
              }));
              webrtc.onEvent && webrtc.onEvent(new components_event.ICEDisconnected({
                webrtc: webrtc
              }));
              return;
            }
          } finally {
            self._onIceStateChange && self._onIceStateChange(webrtc, iceState);
          }
        },
        onIceCandidate: function onIceCandidate(candidate) {
          //event.candidate
          self._onIceCandidate && candidate && self._onIceCandidate(webrtc, candidate);
        },
        onGotRemoteStream: function onGotRemoteStream(remoteStream) {
          _Member_logger.info('got stream.', webrtc._rtcId, webrtc.__id, remoteStream);
          webrtc.onGotMediaStream && webrtc.onGotMediaStream(remoteStream);
          self.onEvent(new components_event.ICERemoteMediaStream({
            webrtc: webrtc
          }));
        },
        onAddIceCandidateError: function onAddIceCandidateError(err) {
          self.onEvent(new components_event.AddIceCandError({
            webrtc: webrtc,
            event: err
          }));
        },
        onSetSessionDescriptionError: function onSetSessionDescriptionError(error) {
          _Member_logger.warn('onSetSessionDescriptionError : Failed to set session description: ' + error.toString());
          self.onEvent && self.onEvent(new components_event.ICEConnectFail({
            webrtc: webrtc,
            event: error
          }));
        },
        onCreateSessionDescriptionError: function onCreateSessionDescriptionError(error) {
          _Member_logger.warn('Failed to create session description: ' + error.toString());
          self.onEvent && self.onEvent(new components_event.ICEConnectFail({
            webrtc: webrtc,
            event: error
          }));
        } // onSetLocalSessionDescriptionSuccess (error) {
        //     logger.debug('onSetLocalSessionDescriptionSuccess : setLocalDescription complete: ' + error.toString());
        //     self.onEvent && self.onEvent(new __event.ICEConnectFail({webrtc: webrtc, event: error}));
        // },

      }, webrtcCfg);
      this._ices || (this._ices = {});

      if (this._ices[webrtc.getRtcId()]) {
        this._howDoWebrtcWhenCrtExsitsWebrtc(webrtc);
      }

      this._ices[webrtc.getRtcId()] = webrtc;
      this._ices[webrtc.__id] = webrtc;

      this._iceCreateRtcPeerConnection(webrtc.getRtcId());

      _Member_logger.debug('create rtc ', webrtc);
      return webrtc;
    }
  }, {
    key: "_howDoWebrtcWhenCrtExsitsWebrtc",
    value: function _howDoWebrtcWhenCrtExsitsWebrtc(webrtc) {
      this.closeWebrtc(webrtc.getRtcId(), true, false);
    }
  }, {
    key: "connect",
    value: function connect(suceess, fail) {
      this._session.connect(suceess, fail);
    }
  }, {
    key: "connected",
    value: function connected() {
      return this._session.connected();
    }
  }, {
    key: "newMessage",
    value: function newMessage(cfg) {
      var self = this;

      var message = this._session.newMessage(cfg);

      message.post = function (callback, timeoutMillis) {
        self.postMessage(this, callback, timeoutMillis);
      };

      return message;
    }
  }, {
    key: "message",
    value: function message(cfg) {
      var self = this;

      var message = this._session.newMessage(cfg);

      message.post = function (callback, timeoutMillis) {
        self.postMessage(this, callback, timeoutMillis);
      };

      return message;
    }
  }, {
    key: "postMessage",
    value: function postMessage(message, callback, timeoutMillis) {
      try {
        message.sessId || (message.sessId = this._session._sessionId);

        this._session.postMessage(message, callback, timeoutMillis);
      } catch (e) {
        callback && callback({
          op: 1001,
          tsxId: message.tsxId,
          result: -9527,
          msg: 'post message. exception'
        });
        _Member_logger.warn(e);
      }
    }
  }, {
    key: "_onIceStateChange",
    value: function _onIceStateChange(webrtc, rtcState) {
      _Member_logger.info(webrtc.getRtcId(), rtcState);
      this.onEvent(new components_event.ICEChanage({
        webrtc: webrtc,
        state: rtcState
      }));
    }
  }, {
    key: "_onIceCandidate",
    value: function _onIceCandidate(webrtc, cand) {
      var _this2 = this;

      //event.candidate
      var cands;

      if (is_array_default()(cand)) {
        cands = cand;
      } else {
        cands = [];
        cands.push(cand);
      }

      var tcklC = this.newMessage().setOp(105).setRtcId(webrtc.getRtcId()).setCands(cands);
      this.postMessage(tcklC, function (rsp) {
        if (rsp.result != 0) {
          _this2.onEvent(new components_event.RspFail({
            request: tcklC,
            response: rsp
          }));
        }
      });
    }
  }, {
    key: "_initC",
    value: function _initC(webrtc, stream, sdp, subSId, rspFail, rspSuccess) {
      var _this3 = this;

      if (stream && stream.rtcId !== webrtc.getRtcId()) {
        _Member_logger.error('stream and webrtc rtcId not equal.');
        throw 'stream and webrtc rtcId not equal.';
      }

      var initC = this.newMessage().setOp(102).setRtcId(webrtc.getRtcId()).setSdp(sdp).setSubSId(subSId);
      webrtc.subArgs && assign_default()(initC, webrtc.subArgs);

      if (stream !== null && stream !== void 0 && stream.located()) {
        initC.setPubS(stream);
      }

      this.postMessage(initC, function (rsp) {
        if (rsp.result != 0) {
          _this3.onEvent(new components_event.RspFail({
            request: initC,
            response: rsp
          }));

          rspFail && rspFail(new components_event.RspFail({
            request: initC,
            response: rsp,
            hidden: rsp.retrying === true
          }));
          return;
        }

        if (stream && !stream.id && rsp.streamId) {
          stream.updateAttributes({
            id: rsp.streamId
          });
        }

        try {
          rspSuccess && rspSuccess();
        } catch (e) {
          _Member_logger.warn(e);
        }

        rsp.sdp && _this3.ansC(webrtc.getRtcId(), rsp.sdp, rsp.cands);
        rsp.mems && (_this3 === null || _this3 === void 0 ? void 0 : _this3.onMembers(rsp.cver, rsp.mems));
        rsp.streams && (_this3 === null || _this3 === void 0 ? void 0 : _this3.onStreams(rsp.cver, rsp.streams));
      });
    }
  }, {
    key: "_acptC",
    value: function _acptC(webrtc, sdp, rspFail) {
      var _this4 = this;

      var acptC = this.newMessage().setOp(104).setRtcId(webrtc.getRtcId()).setSdp(sdp);
      this.postMessage(acptC, function (rsp) {
        if (rsp.result != 0) {
          _this4.onEvent(new components_event.RspFail({
            request: acptC,
            response: rsp
          }));

          rspFail && rspFail(new components_event.RspFail({
            request: acptC,
            response: rsp
          }));
        }
      });
    }
  }, {
    key: "_ansCAndPubstream",
    value: function _ansCAndPubstream(webrtc, stream, sdp, rspFail, rspSuccess) {
      var _this5 = this;

      var ansC = this.newMessage().setOp(106).setRtcId(webrtc.getRtcId()).setSdp(sdp);
      webrtc.subArgs && assign_default()(ansC, webrtc.subArgs);

      if (stream !== null && stream !== void 0 && stream.located()) {
        removeAttribute(stream, 'mutedMuted');
        removeAttribute(stream, '_located');
        ansC.setPubS(stream);
      }

      this.postMessage(ansC, function (rsp) {
        if (rsp.result != 0) {
          _this5.onEvent(new components_event.RspFail({
            request: ansC,
            response: rsp
          }));

          rspFail && rspFail(new components_event.RspFail({
            request: ansC,
            response: rsp,
            hidden: rsp.retrying === true
          }));
          return;
        }

        if (stream && !stream.id && rsp.streamId) {
          stream.updateAttributes({
            id: rsp.streamId
          });
        }

        try {
          rspSuccess && rspSuccess();
        } catch (e) {
          _Member_logger.warn(e);
        }
      });
    }
  }, {
    key: "_ansC",
    value: function _ansC(webrtc, sdp, rspFail) {
      var _this6 = this;

      var ansC = this.newMessage().setOp(106).setRtcId(webrtc.getRtcId()).setSdp(sdp);
      this.postMessage(ansC, function (rsp) {
        if (rsp.result != 0) {
          _this6.onEvent(new components_event.RspFail({
            request: ansC,
            response: rsp
          }));

          rspFail && rspFail(new components_event.RspFail({
            request: ansC,
            response: rsp
          }));
          return;
        }
      });
    }
  }, {
    key: "_termC",
    value: function _termC(webrtc, endReason, rspFail) {
      var _this7 = this;

      var rtcId = typeof webrtc === 'string' ? webrtc : webrtc.getRtcId();
      var termC = this.newMessage().setOp(107).setRtcId(rtcId).setEndReason(endReason);
      this.postMessage(termC, function (rsp) {
        if (rsp.result != 0) {
          _this7.onEvent(new components_event.RspFail({
            request: termC,
            response: rsp
          }));

          rspFail && rspFail(new components_event.RspFail({
            request: termC,
            response: rsp
          }));
        }
      });
    }
  }, {
    key: "_iceCreateRtcPeerConnection",
    value: function _iceCreateRtcPeerConnection(rtcId) {
      this._ices[rtcId].createRtcPeerConnection();

      _Member_logger.debug('create rtc peer connection', rtcId);
    }
  }, {
    key: "doOffer",
    value: function doOffer(rtcId, onGotOffer) {
      var webrtc = this._ices[rtcId];
      webrtc.createOffer(function (sdp) {
        return onGotOffer(sdp);
      });
    }
  }, {
    key: "offerCall",
    value: function offerCall(rtcId, stream, subSId, rspFail, rspSuccess) {
      var _this8 = this;

      var webrtc = this._ices[rtcId];
      webrtc.createOffer(function (sdp) {
        return _this8._initC && _this8._initC(webrtc, stream, sdp, subSId, rspFail, rspSuccess);
      });
    }
  }, {
    key: "accept",
    value: function accept(rtcId, rspFail) {
      var _this9 = this;

      var webrtc = this._ices[rtcId];
      webrtc.createPRAnswer(function (sdp) {
        return _this9 === null || _this9 === void 0 ? void 0 : _this9._acptC(webrtc, sdp, rspFail);
      });
    }
  }, {
    key: "answerCall",
    value: function answerCall(rtcId, stream, rspFail, rspSuccess) {
      var _this10 = this;

      var webrtc = this._ices[rtcId];
      webrtc.createAnswer(function (sdp) {
        return _this10 === null || _this10 === void 0 ? void 0 : _this10._ansCAndPubstream(webrtc, stream, sdp, rspFail, rspSuccess);
      });
    }
  }, {
    key: "answer",
    value: function answer(rtcId, rspFail) {
      var _this11 = this;

      var webrtc = this._ices[rtcId];
      webrtc.createAnswer(function (sdp) {
        return _this11 === null || _this11 === void 0 ? void 0 : _this11._ansC(webrtc, sdp, rspFail);
      });
    }
  }, {
    key: "onTcklC",
    value: function onTcklC(rtcId, cands) {
      this._addIceCandidate(cands, rtcId);
    }
  }, {
    key: "onAcptC",
    value: function onAcptC(rtcId, sdp, cands) {
      this._iceSetRemoteSDP(sdp, rtcId);

      cands && this._addIceCandidate(cands, rtcId);
    }
  }, {
    key: "onAnsC",
    value: function onAnsC(rtcId, sdp, cands) {
      this._iceSetRemoteSDP(sdp, rtcId);

      cands && this._addIceCandidate(cands, rtcId);
    }
  }, {
    key: "_addIceCandidate",
    value: function _addIceCandidate(cands, rtcId) {
      if (!cands || cands.length == 0) {
        _Member_logger.warn('drop cands', cands);
        return;
      }

      var webrtc = this._ices[rtcId];
      webrtc && webrtc.addIceCandidate(cands);
    }
  }, {
    key: "closeWebrtc",
    value: function closeWebrtc(rtcId, remainLocalStream, serverClosed) {
      var _this12 = this;

      var self = this;
      var webrtc = this._ices[rtcId];
      utilForEach(this._cacheStreams, function (sid, _stream) {
        if (_stream.rtcId === rtcId && !_stream.located()) {
          try {
            var soundMeter = removeAttribute(_this12._mediaMeters, sid);
            soundMeter && soundMeter._finally();
          } catch (e) {
            _Member_logger.warn(e);
          }
        }

        if (_stream.rtcId === rtcId && _stream.type === 2) {
          removeAttribute(_this12.audioMixers, _stream.id);
        }
      });

      if (!webrtc || webrtc.closed) {
        _Member_logger.warn('Webrtc not exsits or closed', webrtc && webrtc.closed);

        if (serverClosed) {
          webrtc && utilForEach(this._cacheStreams, function (sid, _stream) {
            if (_stream.rtcId === rtcId) {
              //delete this._linkedStreams[sid];
              removeAttribute(_this12._linkedStreams, sid);
              _Member_logger.warn('Webrtc close, remvoe from _linkedStreams', sid);
            }
          });
        }

        serverClosed || this._termC(rtcId, 0);
        return;
      }

      if (this._records) {
        var _stopRecord = function _stopRecord(_stream) {
          try {
            this.stopRecord(_stream);
          } catch (e) {
            _Member_logger.warn(e);
          } finally {
            removeAttribute(this._records, _stream.id);
          }
        };

        utilForEach(this._records, function (sid, _stream) {
          _stream.rtcId === rtcId && _stopRecord(_stream);
        });
      }

      try {
        serverClosed || webrtc && this._termC(webrtc, remainLocalStream && webrtc._localStream ? -10 : 0);
      } finally {
        //webrtc && removeAttribute(this._ices, rtcId);
        webrtc && webrtc.close(remainLocalStream); //

        webrtc && this.onWebrtcTermC && this.onWebrtcTermC(webrtc);

        if (remainLocalStream) {} else {
          webrtc && utilForEach(this._cacheStreams, function (sid, _stream) {
            if (_stream.rtcId === rtcId) {
              if (_stream.located()) {
                emedia.stopTracks(_stream._localMediaStream);
                _stream && !_stream.closeReason && _stream.updateAttributes({
                  closeReason: 'WebrtcClose'
                });
                _this12._cacheStreams[sid] && _this12._linkedStreams[sid] && _this12.onRemoveStream(_stream);
                removeAttribute(_this12._cacheStreams, sid);
                _this12._streamAutomators && removeAttribute(_this12._streamAutomators, sid);
                _this12._monitSoundChanagedStreams && removeAttribute(_this12._monitSoundChanagedStreams, sid);
                _Member_logger.info('Webrtc close. Remove stream', sid, '. from cache');
              }

              if (serverClosed) {
                //delete this._linkedStreams[sid];
                removeAttribute(_this12._linkedStreams, sid);
                _Member_logger.info('Webrtc close. Remove stream', sid, '. from _linkedStreams');
              }
            }
          });
        }
      }

      return webrtc;
    }
  }, {
    key: "__close",
    value: function __close(reason) {
      _Member_logger.warn('closing, reason = ', reason);

      if (this.closed) {
        return;
      }

      this.closed = true;

      if (this.__getCopyInterval) {
        clearInterval(this.__getCopyInterval);
        _Member_logger.warn('Stop interval get copy');
      }

      if (this._ices) {
        for (var _rtcId in this._ices) {
          this.closeWebrtc(_rtcId, false);
        }
      }

      var exit = this.newMessage().setOp(201).setReason(reason || 0);
      this.postMessage(exit);
    }
  }, {
    key: "exit",
    value: function exit(closeMyConfrIfICrtConfr) {
      var _this13 = this;

      if (!closeMyConfrIfICrtConfr) {
        this.close(0); // 正常挂断

        return;
      }

      if (closeMyConfrIfICrtConfr) {
        this._closeMyConfr(11);
      }

      setTimeout(function () {
        return _this13.close(0);
      }, // 正常挂断
      100);
    }
  }, {
    key: "_closeMyConfr",
    value: function _closeMyConfr(reason) {
      var closeConfr = this.newMessage().setOp(204).setReason(reason || 0);
      this.postMessage(closeConfr, function (rsp) {
        return _Member_logger.warn('Close confr ', rsp.result, rsp.msg);
      });
    }
    /**
     * 1.服务端 踢掉
     * 2.手动点击 挂断
     * 3.enter失败！
     *
     * @param reason
     */

  }, {
    key: "close",
    value: function close(reason, failed) {
      var _this14 = this;

      if (this.closed) {
        return;
      }

      try {
        utilForEach(this._cacheStreams || {}, function (sid, _stream) {
          if (_stream.located() && _stream._localMediaStream) {
            emedia.stopTracks(_stream._localMediaStream);
          }
        });

        this.__close(reason);

        utilForEach(this._cacheStreams, function (sid, _stream) {
          _this14.onRemoveStream(_stream);
        });
        utilForEach(this._cacheMembers, function (_id, _member) {
          _this14.onRemoveMember(_member);
        });
      } finally {
        try {
          setTimeout(function () {
            return _this14 === null || _this14 === void 0 ? void 0 : _this14._session.close(reason);
          }, 500);
          this.onEvent(new components_event.Hangup({
            reason: reason,
            failed: failed,
            "this": {
              id: this._memberId
            }
          }));
          this === null || this === void 0 ? void 0 : this.onMeExit(reason, failed);
        } catch (e) {
          _Member_logger.error(e);
        } finally {
          this._onFinally && this._onFinally();
        }
      }
    }
  }, {
    key: "webrtcState",
    value: function webrtcState(rtcId) {
      var webrtc = this._ices[rtcId];
      return webrtc.iceConnectionState();
    }
  }, {
    key: "_iceSetRemoteSDP",
    value: function _iceSetRemoteSDP(sdp, rtcId) {
      var webrtc = this._ices[rtcId];
      webrtc.setRemoteDescription(sdp);
    }
  }, {
    key: "setLocalStream",
    value: function setLocalStream(stream, rtcId) {
      var webrtc = this._ices[rtcId];
      webrtc.setLocalStream(stream);
    }
  }, {
    key: "onWebrtcTermC",
    value: function onWebrtcTermC(_webrtc) {}
  }]);

  return Member;
}();

/* harmony default export */ const _Member = (Member);
;// CONCATENATED MODULE: ./emedia-sdk/src/components/Attendee.js









function Attendee_createSuper(Derived) { var hasNativeReflectConstruct = Attendee_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function Attendee_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !(construct_default())) return false; if ((construct_default()).sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct_default()(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var Attendee_logger = tagLogger('Me');






/**
 * 未体现 member 使用了 session。
 * 请 这样创建
 * Member({_session: sess})
 *
 *
 * close:
 * 1.服务端 踢掉
 * 2.手动点击 挂断
 * 3.enter失败！
 *
 * websocket 断开连接后，并不会 去close。因为发送消息可以实现重连，重新enter
 *
 *
 */

var Attendee = /*#__PURE__*/function (_Member) {
  _inherits(Attendee, _Member);

  var _super = Attendee_createSuper(Attendee);

  function Attendee(props) {
    var _this;

    _classCallCheck(this, Attendee);

    _this = _super.call(this, props);

    var self = _assertThisInitialized(_this);

    var listeners = props.listeners;
    self._session || self.sessionFactory && (self._session = self.sessionFactory());

    if (!self._session) {
      Attendee_logger.error('Require session');
      throw 'Require session';
    }

    self._cver = 0;
    self._cacheMembers = {};
    self._cacheStreams = {};
    self._streamAutomators = {};
    self._mediaMeters = {};
    self._openedRtcMediaStreams = {};
    self._linkedStreams = {};
    self._maybeNotExistStreams = {}; //与self._streams结构相同，用 存储 断网时，ice fail的stream对象。这个对象可能不存在了

    self._records = {};
    self._ices = {};
    self.audioMixers = {};
    self.closed = false;
    self._nextStreamSeqno = 0;
    self.getMediaMeterIntervalMillis = self.getMediaMeterIntervalMillis || emedia.config.getMediaMeterIntervalMillis;

    _this.registerListeners(listeners);

    return _this;
  }

  _createClass(Attendee, [{
    key: "registerListeners",
    value: function registerListeners(listeners) {
      for (var evt in listeners) {
        this[evt] = listeners[evt];
      }
    }
  }, {
    key: "getCurrentMembers",
    value: function getCurrentMembers() {
      var self = this;
      var members = [];
      utilForEach(self._cacheMembers, function (_memId, _cacheMember) {
        var member = lodash_es_cloneDeep(_cacheMember);
        members.push(member);
      });
      return members;
    }
  }, {
    key: "newStream",
    value: function newStream(cfg) {
      var attendee = this;
      return new components_Stream(cfg, {
        __init__: function __init__() {
          var self = this;
          self.rtcId || self._webrtc && (self.rtcId = self._webrtc.getRtcId());
          self._webrtc || self.rtcId && (self._webrtc = attendee._ices[self.rtcId]);
          self.__create_id = attendee._nextStreamSeqno++;

          if (self.memId && !self.owner) {
            self.owner = assign_default()({}, attendee._cacheMembers[self.memId]);

            if (!self.owner && !self.located()) {
              Attendee_logger.error('Remote stream, not owner. it = ', self.id);
              throw 'Remote stream, not owner. it = ' + self.id;
            }
          }
        }
      });
    }
  }, {
    key: "getConfrId",
    value: function getConfrId() {
      return this.ticket.confrId;
    }
  }, {
    key: "isCaller",
    value: function isCaller() {
      var self = this;
      return self.isP2P() && self.ticket.caller == self.ticket.memName;
    }
  }, {
    key: "isCallee",
    value: function isCallee() {
      var self = this;
      return self.isP2P() && self.ticket.callee == self.ticket.memName;
    }
  }, {
    key: "isP2P",
    value: function isP2P() {
      var self = this;
      return self.ticket && (self.ticket.type == 'P2P' || self.ticket.type == 'p2p');
    }
  }, {
    key: "isConfr",
    value: function isConfr() {
      var self = this;
      return self.ticket && (self.ticket.type == 'CONFR' || self.ticket.type == 'confr');
    }
  }, {
    key: "join",
    value: function join(joined, joinError) {
      var self = this;

      if (!requireTrustBeforeJoin()) {
        self._join(joined, joinError);

        return;
      }

      self.someBrowsersRequireGetUserMedia(function () {
        self._join(joined, joinError);
      }, joinError);
    }
  }, {
    key: "_join",
    value: function _join(joined, joinError) {
      Attendee_logger.debug('begin join ...');
      var self = this;
      var enter;

      if (self._memberId) {
        Attendee_logger.warn('Had joined. igrone it');
        joined && joined(self.memId);
        return;
      }

      function onJoinError(_event_) {
        try {
          if (_event_ instanceof components_event.WSClose && _event_.retry) {
            return;
          }

          if (!(_event_ instanceof components_event.EnterFail)) {
            _event_ = new components_event.EnterFail({
              //可能是 websocket 链接未成功
              attendee: self,
              cause: _event_
            });
          }

          self.onEvent(_event_);
          joinError && joinError(_event_);
        } finally {}
      }

      function enterRsp(rsp) {
        if (rsp.result != 0) {
          try {
            onJoinError(new components_event.RspFail({
              request: enter,
              response: rsp
            }));
          } finally {
            if (rsp.result !== -9527) {
              //-9527 客户端 自己返回，网络未通， 其他值服务端返回
              self.onEvent(new components_event.ServerRefuseEnter({
                failed: rsp.result,
                msg: rsp.msg
              }));
            }
          }

          return;
        }

        self.reflushSupportVCodes(rsp.vcodes);
        self.setMemberId(rsp.memId);
        self.role = rsp.role;
        self.onEvent(new components_event.EnterSuccess({
          ip: self.ip
        }));
        joined && joined(rsp.memId);

        try {
          self.__rtc_cfg = rsp.rtcCfg;

          if (typeof rsp.rtcCfg === 'string') {
            self.__rtc_cfg = JSON.parse(rsp.rtcCfg);
          }
        } finally {
          self.onMembers(rsp.cver, rsp.mems);
          self.onStreams(rsp.cver, rsp.streams);
        }
      }

      function onConnected() {
        enter = self.newMessage().setOp(200).setTicket(self.ticket).setNickName(self.nickName || self.ticket.memName).setResource(self.resource).setExt(self.ext);
        self.postMessage(enter, enterRsp);
      }

      self.connect(onConnected, onJoinError);
      Attendee_logger.debug('join', self.ticket.url);
    }
  }, {
    key: "withpublish",
    value: function withpublish(pubS) {
      var self = this;

      if (!pubS || !pubS.localStream) {
        Attendee_logger.error('pubS null or stream not open');
        throw 'pubS null or stream not open';
      }

      var enter;
      var openedStream = pubS && pubS.localStream;
      var webrtc;

      function then(joined, joinError) {
        if (arguments.length === 1) {
          joinError = joined;
          joined = undefined;
        }

        if (self._memberId) {
          Attendee_logger.warn('Had joined. igrone it');
          joined && joined(self.memId);
          return;
        }

        function onJoinError(_event_) {
          try {
            if (_event_ instanceof components_event.WSClose && _event_.retry) {
              return;
            }

            if (!(_event_ instanceof components_event.EnterFail)) {
              _event_ = new components_event.EnterFail({
                //可能是 websocket 链接未成功
                attendee: self,
                cause: _event_
              });
            }

            self.onEvent(_event_);
            joinError && joinError(_event_);
          } finally {
            emedia.stopTracks(openedStream);
            webrtc && self.closeWebrtc(webrtc.getRtcId());
          }
        }

        var optimalVideoCodecs = self.getOptimalVideoCodecs();

        function enterRsp(rsp) {
          if (rsp.result != 0) {
            try {
              onJoinError(new components_event.RspFail({
                request: enter,
                response: rsp
              }));
            } finally {
              if (rsp.result !== -9527) {
                //-9527 客户端 自己返回，网络未通， 其他值服务端返回
                self.onEvent(new components_event.ServerRefuseEnter({
                  failed: rsp.result,
                  msg: rsp.msg
                }));
              }
            }

            return;
          }

          self.reflushSupportVCodes(rsp.vcodes);
          self.setMemberId(rsp.memId);
          self.role = rsp.role;
          self.onEvent(new components_event.EnterSuccess({
            ip: self.ip
          }));
          var stream = self.newStream(pubS);
          stream.updateAttributes({
            _localMediaStream: pubS.localStream,
            rtcId: webrtc.getRtcId(),
            _webrtc: webrtc,
            id: rsp.streamId,
            csrc: rsp.csrc,
            owner: {
              id: rsp.memId,
              nickName: self.nickName,
              name: self.sysUserId,
              ext: self.extObj
            },
            optimalVideoCodecs: optimalVideoCodecs
          });
          joined && joined(rsp.memId, stream);
          webrtc.useIp = self.ip;
          self.onEvent(new components_event.PushSuccess({
            stream: stream,
            hidden: true
          })); //ice重连成功后 会 再次 onEvent PushSuccess

          rsp.sdp && self.ansC(webrtc.getRtcId(), rsp.sdp);
          rsp.cands && self.tcklC(webrtc.getRtcId(), rsp.cands);

          try {
            self.__rtc_cfg = rsp.rtcCfg;

            if (typeof rsp.rtcCfg === 'string') {
              self.__rtc_cfg = JSON.parse(rsp.rtcCfg);
            }

            if (self.__rtc_cfg && self.__rtc_cfg.iceServers && self.__rtc_cfg.iceServers.length > 0) {
              Attendee_logger.warn('Server rsp one rtc cfg. publish will republish');
              self._service && setTimeout(function () {
                self._service._republish(stream);
              }, 200);
            }
          } finally {
            self.onMembers(rsp.cver, rsp.mems);
            self.onStreams(rsp.cver, rsp.streams);
          }
        }

        function onConnected() {
          Attendee_logger.debug('enter and pubs');
          var stream = pubS.localStream;
          var offerOptions, subArgs;

          if (pubS.type === 2) {
            offerOptions = {
              offerToReceiveAudio: true,
              offerToReceiveVideo: false
            };
            subArgs = {
              subSVideo: false,
              subSAudio: true
            };
          }

          webrtc = self.createWebrtc({
            _rtcId: pubS.rtcId,
            optimalVideoCodecs: optimalVideoCodecs,
            offerOptions: offerOptions,
            subArgs: subArgs,
            vbitrate: pubS.vbitrate || pubS.constaints && pubS.constaints.video && pubS.constaints.video.bitrate,
            abitrate: pubS.abitrate || pubS.constaints && pubS.constaints.audio && pubS.constaints.audio.bitrate
          }, pubS.iceRebuildCount);
          self.setLocalStream(stream, webrtc.getRtcId());
          self.doOffer(webrtc.getRtcId(), function (sdp) {
            enter = self.newMessage().setOp(200).setTicket(self.ticket).setNickName(self.nickName || self.ticket.memName).setResource(self.resource).setSdp(sdp).setRtcId(webrtc.getRtcId()).setPubS(pubS).setExt(self.ext);
            self.postMessage(enter, enterRsp);
          });
        }

        self.connect(onConnected, onJoinError);
        Attendee_logger.debug('join', self.ticket.url);
      }

      return {
        join: then
      };
    }
  }, {
    key: "push",
    value: function push(pubS, pushed, onPushError, autoPush) {
      Attendee_logger.debug('begin push ...');
      var self = this;

      if (arguments.length === 2) {
        onPushError = pushed;
        pushed = undefined;
      }

      if (!pubS || !pubS.localStream) {
        Attendee_logger.error('pubS or stream open');
        throw 'pubS or stream open';
      }

      var initC;
      var openedStream = pubS.localStream;
      var webrtc;

      function _onPushError(_event_) {
        try {
          var stream = self.newStream(pubS);
          stream.updateAttributes({
            _localMediaStream: pubS.localStream,
            _webrtc: webrtc,
            rtcId: webrtc && webrtc.getRtcId(),
            owner: {
              id: self.getMemberId(),
              nickName: self.nickName,
              name: self.sysUserId,
              ext: self.extObj
            }
          });

          var _event_ = new components_event.PushFail({
            stream: stream,
            cause: _event_,
            hidden: autoPush && _event_.hidden === true
          });

          self.onEvent(_event_);
          _event_.hidden || onPushError && onPushError(_event_);
        } finally {
          if (openedStream && _event_.hidden !== true) {
            emedia.stopTracks(openedStream);
          }

          webrtc && self.closeWebrtc(webrtc.getRtcId(), _event_.hidden === true);
        }
      }

      if (!pubS.rtcId && pubS.type === 2 && !emedia.config.allowRepeatAudioMixerPublish && self._service.hasAudioMixers()) {
        _onPushError(new components_event.AudioMixerStreamRepeatPublish());

        return;
      }

      var optimalVideoCodecs = pubS.optimalVideoCodecs || self.getOptimalVideoCodecs();

      function pushRsp(webrtc, rsp) {
        if (rsp.result != 0) {
          _onPushError(new components_event.RspFail({
            request: initC,
            response: rsp,
            hidden: rsp.retrying === true
          }));

          return;
        }

        var stream = self.newStream(pubS);
        stream.updateAttributes({
          _localMediaStream: pubS.localStream,
          _webrtc: webrtc,
          rtcId: webrtc.getRtcId(),
          id: rsp.streamId,
          csrc: rsp.csrc,
          owner: {
            id: self.getMemberId(),
            nickName: self.nickName,
            name: self.sysUserId,
            ext: self.extObj
          },
          optimalVideoCodecs: optimalVideoCodecs
        });
        stream.id && stream.type === 2 && (self.audioMixers[stream.id] = stream);

        try {
          self.onEvent(new components_event.PushSuccess({
            stream: stream,
            hidden: true
          })); //ice重连成功后 会 再次 onEvent PushSuccess
        } finally {
          rsp.sdp && self.ansC(webrtc.getRtcId(), rsp.sdp);
          rsp.cands && self.tcklC(webrtc.getRtcId(), rsp.cands);
          pushed && pushed(stream);
        }
      }

      function pub(pubS) {
        Attendee_logger.debug('pubs');
        var stream = pubS.localStream;
        var offerOptions, subArgs;

        if (pubS.type === 2) {
          offerOptions = {
            offerToReceiveAudio: true,
            offerToReceiveVideo: false
          };
          subArgs = {
            subSVideo: false,
            subSAudio: true
          };
        }

        webrtc = self.createWebrtc({
          _rtcId: pubS.rtcId,
          optimalVideoCodecs: optimalVideoCodecs,
          offerOptions: offerOptions,
          subArgs: subArgs,
          vbitrate: pubS.vbitrate || pubS.constaints && pubS.constaints.video && pubS.constaints.video.bitrate,
          abitrate: pubS.abitrate || pubS.constaints && pubS.constaints.audio && pubS.constaints.audio.bitrate
        }, pubS.iceRebuildCount);
        self.setLocalStream(stream, webrtc.getRtcId());
        self.doOffer(webrtc.getRtcId(), function (sdp) {
          initC = self.newMessage().setOp(102).setRtcId(webrtc.getRtcId()).setSdp(sdp).setPubS(pubS);
          self.postMessage(initC, function (rsp) {
            pushRsp(webrtc, rsp);
          });
        });
      }

      pub(pubS);
      Attendee_logger.debug('push', self.ticket.url);
    } //有些机器必须得getUserMedia后才能够产生正常得cands
    //比如 safair不调用getUserMedia，将不产生cands；window chrome75，则产生得cands中没有ip 而且 uuid.local

  }, {
    key: "someBrowsersRequireGetUserMedia",
    value: function someBrowsersRequireGetUserMedia(successOpenMedia, failOpenMedia) {
      var self = this;

      if (youInSomeBrowsers() && !emedia._yetGetUserMedia) {
        if (self.__tryingOpenMedia === true) {
          self.__tryingOpenMediaWaitSuceess = self.__tryingOpenMediaWaitSuceess || [];
          self.__tryingOpenMediaWaitFail = self.__tryingOpenMediaWaitFail || [];

          if (typeof successOpenMedia === 'function') {
            self.__tryingOpenMediaWaitSuceess.push(successOpenMedia);
          }

          if (typeof failOpenMedia === 'function') {
            self.__tryingOpenMediaWaitFail.push(failOpenMedia);
          }
        } else {
          var success = function success(_user, mediaStream) {
            emedia._yetGetUserMedia = true; // setTimeout(function () {
            //     emedia.stopAudioTracks(mediaStream);
            // }, 700);

            emedia.stopTracks(mediaStream);
            setTimeout(function () {
              self.__tryingOpenMedia = false;
              successOpenMedia && successOpenMedia.apply(self);
              self.__tryingOpenMediaWaitSuceess && utilForEach(self.__tryingOpenMediaWaitSuceess, function (index, func) {
                func.apply(self);
              });
              self.__tryingOpenMediaWaitSuceess = [];
              self.__tryingOpenMediaWaitFail = [];
            }, 300);
          };

          var error = function error(event) {
            self.__tryingOpenMedia = false;
            Attendee_logger.error('Some browsers must getUserMedia, gather cands. now try get audio. fail. subfail');
            failOpenMedia && failOpenMedia.call(self, event);
            self.__tryingOpenMediaWaitFail && utilForEach(self.__tryingOpenMediaWaitFail, function (index, func) {
              func.call(self, event);
            });
            self.__tryingOpenMediaWaitSuceess = [];
            self.__tryingOpenMediaWaitFail = [];
          };

          self.__tryingOpenMedia = true;

          self._service.__getUserMedia({
            audio: true
          }, success, function (event) {
            self._service.__getUserMedia({
              video: true
            }, success, error);
          });
        }

        return true;
      }

      return false;
    }
  }, {
    key: "createWebrtcAndSubscribeStream",
    value: function createWebrtcAndSubscribeStream(streamId, callbacks, iceServerConfig, subArgs) {
      var self = this;
      callbacks || (callbacks = {});
      var subStream = self._cacheStreams[streamId];
      var subMember = self._cacheMembers[subStream.memId]; //var stream = self.newStream(subStream);

      var stream = subStream;
      subArgs = subArgs || stream.subArgs || {
        subSVideo: true,
        subSAudio: subStream.type !== 2
      }; //混音自动订阅不要订阅音频

      function _onSubFail(evt) {
        Attendee_logger.warn('sub stream error', streamId, evt);
        preSubArgs && stream._webrtc && stream._webrtc.setSubArgs(preSubArgs);
        preSubArgs && stream.updateAttributes({
          subArgs: preSubArgs
        });
        evt = new components_event.SubFail({
          stream: stream,
          hidden: evt.hidden === true,
          cause: evt
        });
        callbacks && callbacks.onEvent && callbacks.onEvent(evt);
        self.onEvent && self.onEvent(evt);
      }

      function _onSubSuccess() {
        stream.updateAttributes(stream.subArgs);
      }

      var pubStreamVCodes = subStream.vcodes || [];
      var pubMemberSupportVCodes = subMember && subMember.vcodes || [];
      var selfSupportVCodes = self.supportVCodes;

      var optimalVideoCodecs = self._getOptimalVideoCodecsSubset(pubStreamVCodes, pubMemberSupportVCodes, selfSupportVCodes); // if(!stream.voff && subArgs.subSVideo && optimalVideoCodecs.length == 0){ // 订阅视频 但是 没有相同的 视频编码格式。失败
      //     _onSubFail(Object.assign(new __event.SubFail(), new __event.SubFailNotSupportVCodes({
      //         stream: stream
      //     })));
      //     return;
      // }


      subArgs = subArgs || stream.subArgs;
      var preSubArgs = stream.subArgs;
      var withoutVideo = !(stream.vcodes && stream.vcodes.length > 0);
      isSafari && (withoutVideo = withoutVideo || !!stream.voff);
      var offerOptions = {
        offerToReceiveAudio: true,
        offerToReceiveVideo: subArgs.subSVideo && !withoutVideo
      };

      if (!offerOptions.offerToReceiveAudio && !offerOptions.offerToReceiveVideo) {
        Attendee_logger.warn('offerToReceiveAudio == false and offerToReceiveVideo == false');
      }

      function createWebrtcAndInit() {
        var webrtc = self.createWebrtc({
          iceServerConfig: iceServerConfig,
          optimalVideoCodecs: optimalVideoCodecs,
          offerOptions: offerOptions,
          onGotMediaStream: function onGotMediaStream(remoteMediaStream) {
            callbacks.onGotRemote && callbacks.onGotRemote(stream); // self.onEvent && self.onEvent(new __event.SubSuccess({
            //     stream: stream,
            //     hidden: true
            // }));
          }
        }, stream.iceRebuildCount);
        var rtcId = webrtc.getRtcId();
        Attendee_logger.warn(rtcId, ' sub stream ', streamId, optimalVideoCodecs);
        stream.updateAttributes({
          _webrtc: webrtc,
          rtcId: rtcId,
          owner: assign_default()({}, subMember)
        });
        subArgs && stream._webrtc && stream._webrtc.setSubArgs(subArgs);
        subArgs && stream.updateAttributes({
          subArgs: subArgs
        });
      }

      if (self.someBrowsersRequireGetUserMedia(function success() {
        createWebrtcAndInit();
        self.offerCall(stream.rtcId, null, streamId, _onSubFail, _onSubSuccess);
      }, function (event) {
        Attendee_logger.error('Some browsers must getUserMedia, gather cands. now try get audio. fail. subfail', streamId);

        _onSubFail(event);
      })) {// safari 如果没有getUserMedia时，是不会生成cands的
      } else {
        createWebrtcAndInit();
        self.offerCall(stream.rtcId, null, streamId, _onSubFail, _onSubSuccess);
      }
    }
  }, {
    key: "_getOptimalVideoCodecsSubset",
    value: function _getOptimalVideoCodecsSubset(pubStreamVCodes, pubMemberSupportVCodes, selfSupportVCodes) {
      var self = this;
      var optimalVideoCodecs = [];

      if (pubStreamVCodes && pubStreamVCodes.length > 0 && selfSupportVCodes[pubStreamVCodes[0]]) {
        optimalVideoCodecs.push(pubStreamVCodes[0]);
      }

      if (optimalVideoCodecs.length == 0) {
        for (var i = 0; i < self._orderVCodes.length; i++) {
          utilForEach(pubMemberSupportVCodes, function (index, sVCode) {
            if (sVCode == self._orderVCodes[i]) {
              optimalVideoCodecs.push(sVCode);
            }
          });
        }
      }

      return optimalVideoCodecs;
    }
  }, {
    key: "subscribeStream",
    value: function subscribeStream(rtcId, streamId, rspFail, subArgs, onSub) {
      var self = this;
      var webrtc = self._ices[rtcId];
      var subStream = self._cacheStreams[streamId];
      var subMember = self._cacheMembers[subStream.memId]; //var stream = self.newStream(subStream);

      var stream = subStream;
      stream.updateAttributes({
        _webrtc: webrtc,
        rtcId: rtcId,
        owner: assign_default()({}, subMember)
      });
      var preSubArgs = stream.subArgs;
      subArgs = subArgs || {
        subSVideo: true,
        subSAudio: true
      };
      stream.updateAttributes({
        subArgs: stream.subArgs || {
          subSVideo: true,
          subSAudio: true
        }
      });
      stream._webrtc && stream._webrtc.setSubArgs(stream._webrtc.subArgs || {
        subSVideo: true,
        subSAudio: true
      });

      if (!stream.subArgs.subSVideo && subArgs.subSVideo && !stream.voff) {
        var pubStreamVCodes = subStream.vcodes;
        var pubMemberSupportVCodes = subMember.vcodes;
        var selfSupportVCodes = self.supportVCodes;

        var optimalVideoCodecs = self._getOptimalVideoCodecsSubset(pubStreamVCodes, pubMemberSupportVCodes, selfSupportVCodes); // if(optimalVideoCodecs.length == 0){ // 订阅视频 但是 没有相同的 视频编码格式。失败
        //     preSubArgs && stream._webrtc && stream._webrtc.setSubArgs(preSubArgs);
        //     preSubArgs && (stream.subArgs = preSubArgs);
        //
        //     var evt = Object.assign(new __event.SubFail(), new __event.SubFailNotSupportVCodes({
        //         stream: stream
        //     }));
        //
        //     rspFail && rspFail(evt);
        //     self.onEvent(evt);
        //
        //     return;
        // }

      }

      subArgs && stream._webrtc && stream._webrtc.setSubArgs(subArgs);
      subArgs && stream.updateAttributes({
        subArgs: subArgs
      });
      var subMessage = self.newMessage().setOp(205).setRtcId(rtcId).setSubSId(streamId);
      subArgs && assign_default()(subMessage, subArgs);
      self.postMessage(subMessage, function (rsp) {
        if (rsp.result != 0) {
          preSubArgs && stream._webrtc && stream._webrtc.setSubArgs(preSubArgs);
          preSubArgs && stream.updateAttributes({
            subArgs: preSubArgs
          });
          var evt = new components_event.SubFail({
            stream: stream,
            cause: new components_event.RspFail({
              request: subMessage,
              response: rsp
            })
          });
          rspFail && rspFail(evt);
          self.onEvent(evt);
          return;
        }

        stream.updateAttributes(stream.subArgs);
        var evt = new components_event.SubSuccess({
          stream: stream,
          hidden: true
        });

        self._updateRemoteStream(stream, stream._webrtc.getRemoteStream());

        self.onEvent(evt);
        typeof onSub === 'function' && onSub();
      });
    }
  }, {
    key: "unsubscribeStream",
    value: function unsubscribeStream(streamId) {
      var self = this;
      var stream = self._cacheStreams[streamId];

      var rtcId = stream._webrtc && stream._webrtc.getRtcId();

      if (!rtcId) {
        return;
      }

      try {
        var unsubMessage = self.newMessage().setOp(206).setRtcId(rtcId).setSubSId(streamId);
        self.postMessage(unsubMessage);
      } finally {
        self.closeWebrtc(rtcId);
      }

      return rtcId;
    }
  }, {
    key: "onEnter",
    value: function onEnter(cver, mem) {
      var self = this;
      cver && (self._cver = cver);
      if (!mem) return;

      if (self._cacheMembers[mem.id]) {
        return;
      }

      self._cacheMembers[mem.id] = mem;
      var _tmpMap = {};

      if (mem.res && mem.res.vcodes && mem.res.vcodes.length > 0) {
        utilForEach(mem.res.vcodes, function (index, vcode) {
          if (_tmpMap[vcode]) {} else {
            _tmpMap[vcode] = true;
            self.supportVCodes[vcode] && self.supportVCodes[vcode]++;
          }
        });
      } // var hasOtherDevices;
      // utilForEach(self._cacheMembers, function (_memId, _member) {
      //     if(!hasOtherDevices && _memId != mem.id && mem.memName === _member.memName){
      //         hasOtherDevices = true;
      //     }
      // });
      //
      // if(hasOtherDevices){
      //     return;
      // }


      self.onAddMember(assign_default()({}, mem));
    }
  }, {
    key: "_onFinally",
    value: function _onFinally() {
      var self = this;
      self._cacheMembers = {}; // id, name, nickName, resource

      self._cacheStreams = {}; // id, memId, name, voff, aoff, type

      self._linkedStreams = {};
      self._ices = {};
      self._maybeNotExistStreams = {}; //self._session._sessionId = undefined;
      //self._session = undefined;
      //push stream时，由于异步，在未返回成功后，退出会议，摄像头不会被关闭问题

      var openedMediaStreams = [];
      utilForEach(self._openedRtcMediaStreams, function (streamId, mediaStream) {
        if (mediaStream.active !== false) {
          //还没有关闭的流
          openedMediaStreams.push(mediaStream);
        }
      });

      if (openedMediaStreams.length > 0) {
        for (var i = 0; i < openedMediaStreams.length; i++) {
          try {
            var _openStream = openedMediaStreams[i];
            Attendee_logger.info('exit, close stream = ', _openStream.id);
            emedia.stopTracks(_openStream);
          } catch (e) {
            Attendee_logger.error(e);
          }
        }
      }

      Attendee_logger.warn('finally. all clean.');
    }
  }, {
    key: "_onRoleUpdate",
    value: function _onRoleUpdate(role, roleToken) {
      var self = this;
      Attendee_logger.info('Role ', role, ' <-', self.role);
      Attendee_logger.info(roleToken);
      self.role = role;
      self.roleToken = roleToken;
      self.onRoleUpdate && self.onRoleUpdate(role, roleToken);
    } // 离开，退出

  }, {
    key: "onExit",
    value: function onExit(cver, memId, reason) {
      var self = this;
      cver && (self._cver = cver);

      if (memId == self.getMemberId()) {
        //被服务器 强制 exit
        Attendee_logger.warn('Me exit. ', reason, memId);

        try {
          self.closed || self.close(reason);
        } catch (e) {
          self.onEvent(new components_event.Hangup({
            reason: reason,
            self: {
              id: self._memberId
            }
          }));
          self.onMeExit && self.onMeExit(reason);
          Attendee_logger.warn(e);
        }

        return;
      }

      var rmMember = self._cacheMembers[memId];

      if (rmMember) {
        if (rmMember.res && rmMember.res.vcodes && rmMember.res.vcodes.length > 0) {
          utilForEach(rmMember.res.vcodes, function (index, vcode) {
            self.supportVCodes[vcode]--;
          });
        }

        self._onRemoveMember(rmMember, reason);

        self.onEvent(new components_event.Hangup({
          reason: reason,
          parnter: rmMember
        }));
      }
    }
  }, {
    key: "onPub",
    value: function onPub(cver, memId, pubS) {
      var self = this;

      if (!self._cacheMembers[memId]) {
        Attendee_logger.error('No found member. when pub');
        throw 'No found member. when pub';
      } // if(pubS.type === 2){ //强制 aoff = 1
      //     pubS._1_aoff = pubS.aoff;
      //     pubS.aoff = self._service.hasAudioMixers() ? 0 : 1;
      // }


      var newStream = self.newStream(pubS);
      var _stream = self._cacheStreams[pubS.id];
      cver && (self._cver = cver);

      if (_stream && newStream.sver !== _stream.sver) {
        Attendee_logger.info('Onpub. the steam ', _stream.id, ' republish. sver ', _stream.sver, newStream.sver);

        if (newStream && (newStream.aoff !== _stream.aoff || newStream.voff != _stream.voff)) {
          self.onStreamControl(undefined, pubS.id, newStream.voff, newStream.aoff);
        }

        assign_default()(_stream, newStream);

        self._onRepublishStream(_stream);

        return;
      }

      var stream = newStream;
      stream.updateAttributes({
        owner: self._cacheMembers[memId]
      });
      self._cacheStreams[pubS.id] = stream;

      self._onAddStream(self.newStream(stream));

      if (self.autoSub) {
        self.createWebrtcAndSubscribeStream(pubS.id, {
          onGotRemote: function onGotRemote(stream) {}
        }); //, undefined, subArgs
      }

      return stream;
    }
  }, {
    key: "onUnpub",
    value: function onUnpub(cver, memId, sId) {
      var self = this;
      var rmStream = self._cacheStreams[sId];

      self._onRemovePubstream(self._cacheMembers[memId], rmStream);

      cver && (self._cver = cver);
    }
  }, {
    key: "onClose",
    value: function onClose(cver, confrId, reason) {
      var self = this;

      try {
        self.close(reason || 0);
      } finally {
        self.onConfrClose && self.onConfrClose(confrId, reason);
      }
    }
  }, {
    key: "__getWebrtcFor",
    value: function __getWebrtcFor(pubStreamId) {
      var self = this;
      var webrtc = self._cacheStreams[pubStreamId] && self._cacheStreams[pubStreamId]._webrtc;
      return webrtc && webrtc.getRtcId();
    }
  }, {
    key: "_getWebrtc",
    value: function _getWebrtc(pubStreamId) {
      var self = this;
      var webrtc = self._cacheStreams[pubStreamId] && self._cacheStreams[pubStreamId]._webrtc;
      return webrtc;
    }
  }, {
    key: "_updateRemoteStream",
    value: function _updateRemoteStream(stream, remoteMediaStream) {
      if (stream.located() && stream.type === 2) {
        emedia.enableAudioTracks(remoteMediaStream, true);
      } else {
        emedia.enableAudioTracks(remoteMediaStream, !stream.aoff && !(stream.subArgs && stream.subArgs.subSAudio === false));
      }

      emedia.enableVideoTracks(remoteMediaStream, !stream.voff && !(stream.subArgs && stream.subArgs.subSVideo === false));
    }
  }, {
    key: "onStreamControl",
    value: function onStreamControl(cver, streamId, voff, aoff, sver) {
      var self = this;
      var stream = self._cacheStreams[streamId];
      stream.updateAttributes({
        voff: voff,
        aoff: aoff
      });
      var webrtc = stream._webrtc;
      webrtc && webrtc._remoteStream && self._updateRemoteStream(stream, webrtc._remoteStream);

      var _stream = self.newStream(stream);

      self.onUpdateStream && self.onUpdateStream(_stream, new StreamUpdate({
        voff: voff,
        aoff: aoff
      }));
      cver && (self._cver = cver);
      sver && stream.updateAttributes({
        sver: sver
      });
    }
  }, {
    key: "aoff",
    value: function aoff(pubS, _aoff, callback) {
      var self = this;

      var rtcId = self.__getWebrtcFor(pubS.id);

      if (!rtcId) {
        Attendee_logger.error('pubS not publish', pubS.id);
        throw 'pubS not publish' + pubS.id;
      }

      var linkedStream = self._linkedStreams[pubS.id];
      linkedStream.updateAttributes({
        aoff: _aoff
      });
      pubS.updateAttributes({
        aoff: _aoff
      });
      var streamControl = self.newMessage().setOp(400).setRtcId(rtcId).setVoff(pubS.voff).setAoff(_aoff);
      self.postMessage(streamControl, callback);
      self.onUpdateStream && self.onUpdateStream(pubS, new StreamUpdate({
        aoff: _aoff
      }));
    }
  }, {
    key: "voff",
    value: function voff(pubS, _voff, callback) {
      var self = this;

      var rtcId = self.__getWebrtcFor(pubS.id);

      if (!rtcId) {
        Attendee_logger.error('pubS not publish', pubS.id);
        throw 'pubS not publish' + pubS.id;
      }

      var linkedStream = self._linkedStreams[pubS.id];
      linkedStream.updateAttributes({
        voff: _voff
      });
      pubS.updateAttributes({
        voff: _voff
      });
      var streamControl = self.newMessage().setOp(400).setRtcId(rtcId).setVoff(_voff).setAoff(pubS.aoff);
      self.postMessage(streamControl, callback);
      self.onUpdateStream && self.onUpdateStream(pubS, new StreamUpdate({
        voff: _voff
      }));
    }
  }, {
    key: "startRecord",
    value: function startRecord(_stream, success) {
      var self = this;
      var rtcId = _stream.rtcId;
      var startRecord = self.newMessage().setOp(500).setRtcId(rtcId).setFlag(1);
      self.postMessage(startRecord, function (rsp) {
        Attendee_logger.warn('record ', rtcId, rsp.result, rsp.msg);
        success && success(rsp.result === 0);

        if (rsp.result === 0) {
          self._records[_stream.id] = assign_default()({}, _stream);
        }
      });
    }
  }, {
    key: "stopRecord",
    value: function stopRecord(_stream, success) {
      var self = this;
      var rtcId = _stream.rtcId;
      var stopRecord = self.newMessage().setOp(500).setRtcId(rtcId).setFlag(0);
      self.postMessage(stopRecord, function (rsp) {
        Attendee_logger.warn('stop record ', rtcId, rsp.result, rsp.msg);
        success && success(rsp.result === 0);
      });

      if (self._records[_stream.id]) {
        removeAttribute(self._records, _stream.id);
      }
    }
  }, {
    key: "onMembers",
    value: function onMembers(cver, members) {
      var self = this;
      var removedMembers = [];
      utilForEach(self._cacheMembers, function (_memberId, _member) {
        members[_memberId] || removedMembers.push(_member);
      });
      utilForEach(removedMembers, function (_index, _member) {
        self.onExit(undefined, _member.id);
      });
      var addMembers = [];
      utilForEach(members, function (_memberId, _member) {
        //if(_memberId != self.getMemberId()){
        if (_member.name && _member.name != self.memName || !_member.name && _memberId != self.getMemberId()) {
          self._cacheMembers[_memberId] || addMembers.push(_member);
          self._cacheMembers[_memberId] && assign_default()(self._cacheMembers[_memberId], _member);
        }
      });
      utilForEach(addMembers, function (_index, _member) {
        self.onEnter(undefined, _member);
      });
      cver && (self._cver = cver);
    }
  }, {
    key: "onStreams",
    value: function onStreams(cver, streams) {
      var self = this;
      var removedStreams = [];
      utilForEach(self._cacheStreams, function (_pubSId, _stream) {
        _stream.located() || streams[_pubSId] || removedStreams.push(_stream);
      });
      utilForEach(removedStreams, function (_index, _stream) {
        self.onUnpub(undefined, _stream.memId, _stream.id);
      });
      var addStreams = [];
      utilForEach(streams, function (_pubSId, stream) {
        // if(stream.type === 2){ //强制 aoff = 1
        //     stream._1_aoff = stream.aoff;
        //     stream.aoff = self._service.hasAudioMixers() ? 0 : 1;
        // }
        //if(stream.memId != self.getMemberId()){
        if (stream.memName && stream.memName != self.memName || !stream.memName && stream.memId != self.getMemberId()) {
          self._cacheStreams[_pubSId] || addStreams.push(stream);
          self._cacheStreams[_pubSId] && assign_default()(self._cacheStreams[_pubSId], stream);
        }
      });
      utilForEach(addStreams, function (_index, _stream) {
        self.onPub(undefined, _stream.memId, _stream);
      });
      utilForEach(self._cacheStreams, function (_pubSId, _stream) {
        var newStream;
        _stream.located() || (newStream = streams[_pubSId]);

        if (newStream && (newStream.aoff !== _stream.aoff || newStream.voff != _stream.voff)) {
          self.onStreamControl(undefined, _pubSId, newStream.voff, newStream.aoff);
        }

        if (newStream && newStream.sver !== _stream.sver) {
          assign_default()(_stream, newStream);

          self._onRepublishStream(_stream);
        }
      });
      cver && (self._cver = cver);
    }
  }, {
    key: "_onRemoveMember",
    value: function _onRemoveMember(member, reason) {
      var self = this;
      Attendee_logger.info('remove', member, reason);
      var unpubStreams = [];
      utilForEach(self._cacheStreams, function (_pubSId, _stream) {
        if ((_stream.memId || _stream.owner && _stream.owner.id) === member.id) {
          unpubStreams.push(_stream);
        }
      });
      utilForEach(unpubStreams, function (index, stream) {
        self._onRemovePubstream(stream.owner, stream, reason);
      });
      removeAttribute(self._cacheMembers, member.id); // var hasOtherDevices;
      // utilForEach(self._cacheMembers, function (_memId, _member) {
      //     if(!hasOtherDevices && _memId != member.id && member.memName === _member.memName){
      //         hasOtherDevices = true;
      //     }
      // });
      //
      // if(hasOtherDevices){
      //     return;
      // }

      self.onRemoveMember && self.onRemoveMember(member, reason);
    }
  }, {
    key: "_onAddStream",
    value: function _onAddStream(stream) {
      Attendee_logger.info('add stream ', stream.id);
      Attendee_logger.debug('add stream ', stream);
      var self = this;
      self.onAddStream(stream);
    }
  }, {
    key: "_onRemovePubstream",
    value: function _onRemovePubstream(member, stream, reason) {
      var self = this;

      if (!stream) {
        return;
      }

      if (stream.id == 0) {
        return;
      }

      function finallyDo(stream) {
        if (stream.type === 2) {
          removeAttribute(self.audioMixers, stream.id);

          if (stream.remotePlayAudioObject) {
            document.body.removeChild(stream.remotePlayAudioObject);
          }
        }

        if (!reason) {
          reason = 'Unpub';
        }

        stream && !stream.closeReason && stream.updateAttributes({
          closeReason: reason
        });

        var _rtcId = self.unsubscribeStream(stream.id);

        var rmStream = removeAttribute(self._cacheStreams, stream.id);
        self._streamAutomators && removeAttribute(self._streamAutomators, stream.id);
        self._monitSoundChanagedStreams && removeAttribute(self._monitSoundChanagedStreams, stream.id);

        if (self.onRemoveStream) {
          var stream = self.newStream(stream);
          self.onRemoveStream(stream);
        }
      }

      try {
        var soundMeter = removeAttribute(self._mediaMeters, stream.id);
        soundMeter && soundMeter._finally();
      } finally {
        finallyDo(stream);
      }
    }
  }, {
    key: "_onRepublishStream",
    value: function _onRepublishStream(_stream) {
      var self = this;

      if ((self._ices[_stream.rtcId] || emedia.subscribed(_stream)) && !self._maybeNotExistStreams[_stream.id]) {
        var _rtcId = self.unsubscribeStream(_stream.id);

        self.createWebrtcAndSubscribeStream(_stream.id, {
          onGotRemote: function onGotRemote(stream) {//self.onUpdateStream(_stream);
          }
        });
      } else {
        self.onUpdateStream(_stream);
      }
    }
  }, {
    key: "_onRecvRemoteMessage",
    value: function _onRecvRemoteMessage(fromMemId, args, evt) {
      var self = this;
      Attendee_logger.debug('Recv remote message', fromMemId, args);
      var fromMember = self._cacheMembers[fromMemId];
      var argsObject;

      try {
        argsObject = JSON.parse(args);
      } catch (e) {}

      self.onRecvRemoteMessage && self.onRecvRemoteMessage(fromMember || fromMemId, argsObject || args, evt);
    }
  }, {
    key: "_onSoundChanage",
    value: function _onSoundChanage(member, stream, meterData) {
      if (emedia.config._printSoundData) {
        Attendee_logger.info('Stream id ' + stream.id + ', meter ' + (meterData && meterData.instant.toFixed(2) + ' ' + meterData.slow.toFixed(2) + ' ' + meterData.clip.toFixed(2) + ' ' + (meterData.trackAudioLevel || '--') + ' ' + (meterData.trackTotalAudioEnergy || '--')));
      }

      meterData || (meterData = {
        instant: 0,
        slow: 0,
        clip: 0
      });

      if (emedia.config.logVolumeWhenInstantGE && emedia.config.logVolumeWhenInstantGE > 0 && meterData.instant >= emedia.config.logVolumeWhenInstantGE && meterData.instant < emedia.config.logVolumeWhenInstantGE * 3 //为了应对 混音时，移动端sdk audioLevel 问题。
      ) {
        Attendee_logger.info('Stream id ' + stream.id + ', webrtc = ' + (stream._webrtc ? stream._webrtc.getRtcId() : 'null') + ', media streamId = ' + (stream.getMediaStream() ? stream.getMediaStream().id : 'null') + ', instant >= ' + emedia.config.logVolumeWhenInstantGE + ', meter instant=' + meterData.instant + ', slow=' + meterData.slow + ', clip=' + meterData.clip);
      }

      var self = this;

      if (meterData.instant === 0) {
        meterData.instant = meterData.trackAudioLevel || meterData.trackTotalAudioEnergy || 0;
      }

      self.onSoundChanage(member, stream, meterData);

      if (self._service._judgeTalking(meterData)) {
        self.onTalking(member, stream, meterData);
      }
    }
  }, {
    key: "onAddMember",
    value: function onAddMember(member) {}
  }, {
    key: "onRemoveMember",
    value: function onRemoveMember(member, reason) {}
  }, {
    key: "onAddStream",
    value: function onAddStream(stream) {//stream undefined 表明 autoSub属性 空或false. autoSub = true时，自动订阅
    }
  }, {
    key: "onRemoveStream",
    value: function onRemoveStream(stream) {}
  }, {
    key: "onUpdateStream",
    value: function onUpdateStream(stream, update) {}
  }, {
    key: "onRecvRemoteMessage",
    value: function onRecvRemoteMessage(fromMember, argsObject) {}
  }, {
    key: "onSoundChanage",
    value: function onSoundChanage(member, stream, meterData) {}
  }, {
    key: "onTalking",
    value: function onTalking(member, stream, meterData) {}
  }]);

  return Attendee;
}(_Member);

/* harmony default export */ const components_Attendee = (Attendee);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__(5682);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__(490);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./emedia-sdk/src/components/_share.js



/**
 * TODO:将web和electron代码都集成进来
 */



var _share_logger = tagLogger('electron'); // electron环境集成


function openDesktopInElectron() {
  var screenOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['screen', 'window'];
  var callback = arguments.length > 1 ? arguments[1] : undefined;

  var electron = window.require('electron');

  var desktopCapturer = electron.desktopCapturer;
  desktopCapturer.getSources({
    types: screenOptions
  }).then( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(sources, error) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!error) {
                _context.next = 3;
                break;
              }

              callback(new components_event.OpenDesktopMediaAccessDenied({
                error: error
              }));
              return _context.abrupt("return");

            case 3:
              if (!(typeof emedia.chooseElectronDesktopMedia !== 'function')) {
                _context.next = 6;
                break;
              }

              callback(new components_event.OpenDesktopMedia({
                desktopStreamId: sources[0].id
              }));
              return _context.abrupt("return");

            case 6:
              sources.map(function (source) {
                return source.dataURLImg = source.thumbnail.toDataURL();
              });
              emedia.chooseElectronDesktopMedia(sources, function accessApproved(source) {
                var id = source.id;
                new components_event.OpenDesktopMedia({
                  desktopStreamId: id
                });
                callback({
                  electronShareId: id
                });
              }, function accessDenied() {
                callback(new components_event.OpenDesktopMediaAccessDenied({
                  message: 'User denied access'
                }));
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }())["catch"](function (e) {
    if (typeof emedia.chooseElectronDesktopMedia !== 'function') {
      callback(new components_event.OpenDesktopMedia({
        desktopStreamId: sources[0].id
      }));
    }
  });
}

function startShare(screenOptions, callback) {
  if (navigator.userAgent.indexOf('Electron') > -1) {
    openDesktopInElectron(screenOptions, callback);
  } else {
    callback();
  }
}


;// CONCATENATED MODULE: ./emedia-sdk/src/components/Service.js






//Service 类，会创建session(me), 并且将current属性设置为 me; 以后方法需要此值


var Service_logger = tagLogger('Service');











/**
 * {
 *  newSession:
 *  onCalling:
 *  onRinging:
 *
 *
 * }
 *
 *
 *
 */

var Service = /*#__PURE__*/function () {
  function Service(props) {
    _classCallCheck(this, Service);

    _defineProperty(this, "AVPubstream", components_Stream.extend({
      __init__: function __init__() {
        var self = this;
        self.type = 0;
        self._located = true;
        self.mutedMuted = true;

        if (self.constaints) {
          self.constaints.video || (self.voff = 1);
          self.constaints.audio || (self.aoff = 1);
        }

        self.constaints || (self.constaints = {
          audio: true,
          video: true
        });
        emedia.config.maxVideoBitrate && (self.vbitrate = emedia.config.maxVideoBitrate);
        emedia.config.maxAudioBitrate && (self.abitrate = emedia.config.maxAudioBitrate);
      }
    }));

    _defineProperty(this, "AudioMixerPubstream", new components_Stream.extend({
      __init__: function __init__() {
        var self = this;
        self.type = 2;
        self._located = true;
        self.mutedMuted = true;
        self.constaints || (self.constaints = {
          audio: true,
          video: false
        });

        if (self.constaints) {
          var audio = !!self.constaints.audio;
          self.constaints.video || (self.constaints.video = false);
          self.constaints.video || (self.voff = 1);
          self.constaints.audio || (self.aoff = 1);
          audio === false && (self.aoff = 1);
        }

        emedia.config.maxVideoBitrate && (self.vbitrate = emedia.config.maxVideoBitrate);
        emedia.config.maxAudioBitrate && (self.abitrate = emedia.config.maxAudioBitrate);
      },
      onGotRemoteMediaStream: function onGotRemoteMediaStream(remoteMediaStream) {
        var self = this;

        if (!self.remotePlayAudioObject) {
          var _audioId = '__o_remote_play_audio_' + self.id;

          var audioObject = document.querySelector('#' + _audioId);

          if (audioObject) {} else {
            audioObject = document.createElement('audio');
            audioObject.style.display = 'none';
            audioObject.id = '__o_remote_play_audio_' + self.id;
            audioObject.autoplay = true;
            audioObject.playsinline = true;
            document.body.appendChild(audioObject);
          }

          self.remotePlayAudioObject = audioObject;
        }

        self.remotePlayAudioObject.srcObject = remoteMediaStream;
      }
    }));

    _defineProperty(this, "ShareDesktopPubstream", components_Stream.extend({
      voff: 0,
      __init__: function __init__() {
        var self = this;
        self.type = 1;
        self._located = true;
        self.mutedMuted = true;
        self.constaints = {
          audio: !this.aoff,
          video: true
        };
        emedia.config.maxVideoBitrate && (self.vbitrate = emedia.config.maxVideoBitrate);
        emedia.config.maxAudioBitrate && (self.abitrate = emedia.config.maxAudioBitrate);
      }
    }));

    for (var key in props) {
      this[key] = props[key];
    }

    var _self = this;

    Service_logger.warn('emedia version: ', window._emediaVersion || 'unkown');
    Service_logger.warn('UserAgent: ', navigator.userAgent);
    var urlLogLevel = parseURL('__log_level___');

    if (urlLogLevel) {
      emedia.LOG_LEVEL = parse_int_default()(urlLogLevel);
    }

    _self.namespace = uuidFast();
    emedia.useCurrentXService = _self;

    if (_self.useRTCCfg === undefined) {
      _self.useRTCCfg = emedia.config.useRTCCfgIfServerReturn;
    }

    if (typeof _self.useRTCCfg === 'string') {
      _self.useRTCCfg = JSON.parse(_self.useRTCCfg);
    }

    _self.inboundAudio = components_PCStats.inboundAudio.bind(_self);
    _self.inboundVideo = components_PCStats.inboundVideo.bind(_self);
    _self.outboundAudio = components_PCStats.outboundAudio.bind(_self);
    _self.outboundVideo = components_PCStats.outboundVideo.bind(_self);
  }

  _createClass(Service, [{
    key: "__assertCurrent",
    value: function __assertCurrent() {
      var self = this;

      if (!self.current) {
        Service_logger.error('Please call emedia.service.setup(ticket)');
        throw 'Please call emedia.service.setup(ticket)';
      }

      if (self.current.closed) {
        Service_logger.error('current closed');
        throw 'current closed';
      }
    }
  }, {
    key: "hasAudioMixers",
    value: function hasAudioMixers() {
      var self = this;

      self.__assertCurrent();

      for (var sid in self.current.audioMixers) {
        var stream = self.current.audioMixers[sid];

        if (stream && stream.located()) {
          return true;
        }
      }
    }
  }, {
    key: "getMediaDevices",
    value: function getMediaDevices(kind, devices, errorCallback) {
      if (typeof kind === 'function') {
        errorCallback = devices;
        devices = kind;
        kind = undefined;
      }

      function gotDevices(deviceInfos) {
        var resultDeviceInfos = [];

        for (var i = 0; i !== deviceInfos.length; ++i) {
          var deviceInfo = deviceInfos[i]; //var deviceId = deviceInfo.deviceId;

          if (!kind) {
            resultDeviceInfos.push(deviceInfo);
          } else if (kind === deviceInfo.kind) {
            resultDeviceInfos.push(deviceInfo);
          } else if (deviceInfo.kind === 'audioinput') {} else if (deviceInfo.kind === 'audiooutput') {} else if (deviceInfo.kind === 'videoinput') {} else {
            Service_logger.info('Some other kind of source/device: ', deviceInfo);
          }
        }

        devices && devices(resultDeviceInfos);
      }

      navigator.mediaDevices.enumerateDevices().then(gotDevices)["catch"](function handleError(error) {
        Service_logger.warn('navigator.getUserMedia error: ', error);
        errorCallback && errorCallback(error);
      });
    }
  }, {
    key: "_stopTracks",
    value: function _stopTracks(_stream) {
      emedia.stopTracks(_stream);
      _stream && Service_logger.warn('Stream tracks stop. it = ', _stream);
    }
  }, {
    key: "_enableVideoTracks",
    value: function _enableVideoTracks(_stream, enabled) {
      emedia.enableVideoTracks(_stream, enabled);
    }
  }, {
    key: "_enableAudioTracks",
    value: function _enableAudioTracks(_stream, enabled) {
      emedia.enableAudioTracks(_stream, enabled);
    }
    /**
     * 手机 前置
     * video:{ 'facingMode': "user" }//调用前置摄像头
     * video: { facingMode: { exact: "environment" } }//后置
     *
     * @param pubS
     * @returns {{then: then}}
     */

  }, {
    key: "openUserMedia",
    value: function openUserMedia(pubS) {
      Service_logger.debug('begin open user media', pubS);
      var self = this;

      if (!pubS) {
        Service_logger.error('require pubS');
        throw 'require pubS';
      }

      return {
        then: function then(_success, errCallback) {
          function success() {
            _success.apply(null, arguments);

            var mediaStream = pubS.localStream;

            if (mediaStream) {
              mediaStream.oninactive = self._onStreamInactive.bind(self, pubS, mediaStream);
              mediaStream.onactive = self._onStreamActive.bind(self, pubS, mediaStream);
            }
          }

          if (pubS instanceof self.AVPubstream) {
            self._openCamera(pubS, success, errCallback);
          } else if (pubS instanceof self.ShareDesktopPubstream) {
            self._openSharedDesktop(pubS, success, errCallback);
          } else if (pubS instanceof self.AudioMixerPubstream) {
            self._openCamera(pubS, success, errCallback);
          } else {
            Service_logger.error('Unspported pubS');
            throw 'Unspported pubS';
          }
        }
      };
    }
  }, {
    key: "_openSharedDesktop",
    value: function _openSharedDesktop(pubS, success, errCallback) {
      var self = this;

      function getAudioStream(pubS) {
        var audioConstaints = {
          audio: true
        };

        if (pubS.constaints) {
          if (_typeof(pubS.constaints.audio) === 'object' && pubS.constaints.audio) {} else if (!pubS.constaints.audio) {
            audioConstaints.audio = false;
          }
        }

        self.__getUserMedia(audioConstaints, function (_user, stream) {
          var mediaStream = new MediaStream();
          mediaStream._located = true;
          stream && stream.getAudioTracks().forEach(function (track) {
            mediaStream.addTrack(track);
          });
          pubS.localStream && pubS.localStream.getVideoTracks().forEach(function (track) {
            mediaStream.addTrack(track);
          });
          pubS.localStream = mediaStream;
          success && success(self.current, mediaStream);
        }, errCallback);
      }

      var videoTracks;

      if (pubS._localMediaStream && (videoTracks = pubS._localMediaStream.getVideoTracks()) && videoTracks.length > 0) {
        pubS.localStream = pubS._localMediaStream;

        if (pubS.constaints.audio) {
          getAudioStream(pubS);
        } else {
          success && success(self.current, stream);
        }

        return;
      }

      startShare(pubS === null || pubS === void 0 ? void 0 : pubS.screenOptions, nextCb);

      function nextCb(data) {
        var params = data !== null && data !== void 0 && data.electronShareId ? {
          // https://www.electronjs.org/docs/api/desktop-capturer
          video: {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: data.electronShareId // minWidth: 1280,
              // maxWidth: 1280,
              // minHeight: 720,
              // maxHeight: 720

            }
          },
          audio: false
        } : {
          share: true,
          video: true,
          audio: false
        };

        self.__getUserMedia(params, function (_me, stream) {
          pubS.localStream = stream;

          if (pubS.constaints.audio) {
            getAudioStream(pubS);
          } else {
            success && success(self.current, stream);
          }
        }, function (params) {
          errCallback(params);
        });
      }
    }
  }, {
    key: "_openCamera",
    value: function _openCamera(pubS, success, errCallback) {
      var self = this;
      var constaints = pubS.constaints || {
        audio: true,
        video: true
      };

      function successCallback(_me, stream) {
        self.__controlStream(pubS, stream);

        pubS.localStream = stream;
        success && success(self.current, stream);
      }

      self.__getUserMedia(constaints, successCallback.bind(constaints), errCallback);
    }
  }, {
    key: "__controlStream",
    value: function __controlStream(pubS, stream) {
      emedia.enableVideoTracks(stream, !pubS.voff);
      emedia.enableAudioTracks(stream, !pubS.aoff);
    }
  }, {
    key: "__getUserMedia",
    value: function __getUserMedia(constaints, success, errCallback) {
      Service_logger.debug('get user media. using constaints', constaints);
      var self = this;
      constaints = proto.extend({}, constaints);

      var _openstream;

      function onFail(e) {
        Service_logger.debug('[WebRTC-API] getUserMedia() error: ', e);
        emedia.stopTracks(_openstream);
        self.current && self.current.onEvent(new components_event.OpenMediaError({
          member: self.current,
          event: e
        }));
        errCallback && errCallback(new components_event.OpenMediaError({
          member: self.current,
          event: e
        }));
      }

      function onSuccess(stream) {
        if (self.current && !self.current.closed) {
          //push stream时，由于异步，在未返回成功后，退出会议，摄像头不会被关闭问题
          //将stream 与 Attendee绑定
          self.current._openedRtcMediaStreams[stream.id] = stream;
          stream._bindAttendee = self.current;
          stream._bindAttendeeId = self.current.getMemberId();
          Service_logger.info('stream bind attendee.', stream.id, self.current.ticket && self.current.ticket.id, self.current.getMemberId(), self.current.memName);
        }

        emedia._yetGetUserMedia = true;
        _openstream = stream;
        var videoTracks = stream.getVideoTracks();
        var audioTracks = stream.getAudioTracks();

        if (videoTracks.length > 0) {
          var videoTrack = videoTracks[0];
          Service_logger.debug(stream.id, 'using video device: ', videoTrack.id, videoTrack.label, videoTrack.kind, videoTrack.enabled);
        }

        if (audioTracks.length > 0) {
          var audioTrack = audioTracks[0];
          Service_logger.debug(stream.id, 'using audio device: ', audioTrack.id, audioTrack.label, audioTrack.kind, audioTrack.enabled);
        }

        stream._located = true; //window electron 69-73, 当摄像头被占用后，不会抛出任何异常，但是stream active == false

        if (typeof stream.active === 'boolean' && !stream.active) {
          Service_logger.error('media stream not active. it is', stream.id);
          onFail({
            constraint: constaints,
            name: 'NotAllowedStreamNonactive',
            message: 'stream non-active'
          });
          return;
        }

        success && success(self.current, stream);
      }

      self.__sysGetUserMedia(constaints, onSuccess, onFail);
    }
  }, {
    key: "_onStreamInactive",
    value: function _onStreamInactive(pubS, mediaStream, event) {
      var self = this;
      Service_logger.warn('media stream inactive. it =', mediaStream.id);
      pubS.onMediaInactive && self.current && utilForEach(self.current._cacheStreams, function (_sid, _stream) {
        if (_stream.located() && _stream.localStream && _stream.localStream.id === mediaStream.id) {
          if (!_stream._webrtc || !_stream._webrtc.closed) {
            pubS.onMediaInactive.call(_stream, mediaStream, event, self);
          }
        }
      });
    }
  }, {
    key: "_onStreamActive",
    value: function _onStreamActive(pubS, mediaStream, event) {
      var self = this;
      Service_logger.warn('media stream active. it =', mediaStream.id);
      pubS.onMediaActive && self.current && utilForEach(self.current._cacheStreams, function (_sid, _stream) {
        if (_stream.located() && _stream.localStream && _stream.localStream.id === mediaStream.id) {
          pubS.onMediaActive.call(_stream, mediaStream, event, self);
        }
      });
    }
  }, {
    key: "__sysGetUserMedia",
    value: function __sysGetUserMedia(constaints, onSuccess, onFail) {
      function getUserMedia(constaints, onSuccess, onFail) {
        if (_typeof(emedia.config.globalConstraints) === 'object') {
          if (_typeof(emedia.config.globalConstraints.audio) === 'object' && constaints.audio) {
            if (typeof constaints.audio === 'boolean') {
              constaints.audio = proto.extend({}, emedia.config.globalConstraints.audio);
            } else {
              constaints.audio = proto.extend({}, emedia.config.globalConstraints.audio, constaints.audio);
            }
          }

          if (_typeof(emedia.config.globalConstraints.video) === 'object' && constaints.video) {
            if (typeof constaints.video === 'boolean') {
              constaints.video = proto.extend({}, emedia.config.globalConstraints.video);
            } else {
              constaints.video = proto.extend({}, emedia.config.globalConstraints.video, constaints.video);
            }
          }
        }

        Service_logger.info('navigator.mediaDevices.getUserMedia constaints = ', stringify_default()(constaints)); // FIXME: 使用其他方式来标识共享的视频

        if (constaints.share) {
          navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: false
          }).then(onSuccess)["catch"](onFail);
        } else {
          navigator.mediaDevices.getUserMedia(constaints).then(onSuccess)["catch"](onFail);
        }
      }

      if (!isSafari) {
        getUserMedia(constaints, onSuccess, onFail);
        return;
      }

      constaints = lodash_es_assignIn({}, constaints);

      function newStreamAndCallback() {
        var mediaStream = new MediaStream();
        constaints.audioStream && constaints.audioStream.getAudioTracks().forEach(function (track) {
          mediaStream.addTrack(track);
        });
        constaints.videoStream && constaints.videoStream.getVideoTracks().forEach(function (track) {
          mediaStream.addTrack(track);
        });
        onSuccess && onSuccess(mediaStream);
      }

      function successCallback(stream) {
        if (constaints.failed) {
          emedia.stopTracks(stream);
          return;
        }

        if (this.audio) {
          constaints.audioStream = stream;

          if (!constaints.video) {
            newStreamAndCallback();
            return;
          }
        }

        if (this.video) {
          constaints.videoStream = stream;

          if (!constaints.audio) {
            newStreamAndCallback();
            return;
          }
        }

        if (constaints.audioStream && constaints.videoStream) {
          newStreamAndCallback();
          return;
        }
      }

      function failCallback(e) {
        if (constaints.failed) {
          return;
        }

        constaints.failed = true;
        onFail(e);
      }

      if (constaints.audio) {
        var onlyAudio = {
          audio: constaints.audio
        };
        getUserMedia(onlyAudio, successCallback.bind(onlyAudio), failCallback);
      }

      if (constaints.video) {
        var onlyVideo = {
          video: constaints.video
        };
        getUserMedia(onlyVideo, successCallback.bind(onlyVideo), failCallback);
      }

      if (!constaints.video && !constaints.audio) {
        failCallback("Failed to execute 'getUserMedia' on 'MediaDevices': At least one of audio and video must be requested");
      }
    }
  }, {
    key: "setup",
    value: function setup(ticket, ext) {
      var self = this;
      Service_logger.count();
      Service_logger.debug('recv ticket', ticket, ext);
      Service_logger.debug('use sdk version', window._emediaVersion);
      Service_logger.debug(navigator.userAgent);
      ext = ext || {};
      var extObj = ext;

      if (lodash_es_isPlainObject(ext)) {
        //ext 是对象， extObj 也是对象
        ext = stringify_default()(ext);
      } else {
        //ext 是字符串， extObj 尽量转换为 对象
        try {
          extObj = JSON.parse(ext);
        } catch (e) {}
      }

      if (typeof ticket === 'string') {
        ticket = JSON.parse(ticket);
      }

      var sysUserId, memName;
      sysUserId = memName = ticket.memName;
      emedia._lastSetupConfr = ticket.confrId;
      emedia._lastSetupMemName = memName;
      emedia._lastSetupDate = new Date();
      emedia._lastSetupTktId = ticket.tktId;

      if (self.current && !self.current.closed) {
        var __eventCalling = new components_event.CurrentCalling();

        self.current.onEvent(__eventCalling);
        Service_logger.error('confr not close. calling...');
        throw __eventCalling;
      }

      var attendee = self.current = new components_Attendee({
        _service: self,
        service: self,
        autoSub: emedia.config.autoSub,
        getCopyIntervalMillis: emedia.config.getCopyIntervalMillis,
        sysUserId: sysUserId,
        memName: memName,
        resource: self.resource,
        nickName: self.nickName,
        ticket: ticket,
        ext: ext,
        extObj: extObj,
        sessionFactory: function sessionFactory(context) {
          return self.newSession(context, ticket);
        },
        listeners: self.listeners || {}
      });
      return attendee;
    }
  }, {
    key: "getStreamById",
    value: function getStreamById(streamId) {
      var stream = this.current && this.current._cacheStreams[streamId];
      return stream && proto.extend(false, {}, stream);
    }
  }, {
    key: "getStreamsByRtcId",
    value: function getStreamsByRtcId(rtcId) {
      if (!this.current || !this.current._cacheStreams) {
        return;
      }

      var streams = [];
      utilForEach(this.current._cacheStreams, function (sid, _stream) {
        if (_stream.rtcId === rtcId) {
          streams.push(_stream);
        }
      });
      return streams;
    }
  }, {
    key: "getMemberById",
    value: function getMemberById(memId) {
      var member = this.current && this.current._cacheMembers[memId];
      return member && proto.extend(false, {}, member);
    }
  }, {
    key: "exit",
    value: function exit(closeMyConfrIfICrtConfr) {
      Service_logger.warn('User click exit ', closeMyConfrIfICrtConfr);
      this.current && this.current.exit(closeMyConfrIfICrtConfr);
    }
  }, {
    key: "join",
    value: function join(joined, joinError) {
      Service_logger.debug('begin join ...');
      var self = this;

      self.__assertCurrent();

      if (self.current._memberId) {
        //已经加入会议
        Service_logger.warn('Had joined. igrone it');
        joined && joined(self.memId);
        return;
      } else {
        self.current._session._sessionId = undefined;
      }

      self.current.join(joined, joinError);
    }
  }, {
    key: "withpublish",
    value: function withpublish(pubS) {
      var self = this;

      if (!pubS || !pubS.localStream) {
        Service_logger.error('pubS null or stream not open');
        throw 'pubS null or stream not open';
      }

      self.__assertCurrent();

      if (self.current._memberId) {
        //已经加入会议
        Service_logger.warn('Had joined. igrone it');
      } else {
        self.current._session._sessionId = undefined;
      }

      return self.current.withpublish(pubS);
    }
  }, {
    key: "push",
    value: function push(pubS, pushed, onPushError) {
      Service_logger.debug('begin push ...');
      var self = this;

      if (arguments.length === 2) {
        onPushError = pushed;
        pushed = undefined;
      }

      if (!pubS || !pubS.localStream) {
        Service_logger.error('pubS or stream open');
        throw 'pubS or stream open';
      }

      self.__assertCurrent();

      self.current.push(pubS, pushed, onPushError, false);
    }
  }, {
    key: "subscribe",
    value: function subscribe(streamId, onSub, subfail, subArgs) {
      var self = this;
      Service_logger.info('begin subscribe ', streamId, subArgs);

      if (onSub && lodash_es_isPlainObject(onSub)) {
        subArgs = onSub;
        onSub = subfail = undefined;
      }

      if (subfail && lodash_es_isPlainObject(subfail)) {
        subArgs = subfail;
        subfail = onSub;
        onSub = undefined;
      }

      if (isSafari) {
        var _onSub = function _onSub() {
          try {
            var shiftsub = subs.shift();
            shiftsub && shiftsub.onSub && shiftsub.onSub.apply(shiftsub, arguments);
          } finally {
            next();
          }
        };

        var _subfail = function _subfail() {
          try {
            var shiftsub = subs.shift();
            shiftsub && shiftsub.subfail && shiftsub.subfail.apply(shiftsub, arguments);
          } finally {
            next();
          }
        };

        var next = function next() {
          if (subs.length > 0) {
            self.__subscribe(subs[0].streamId, _onSub, _subfail, subs[0].subArgs);
          }
        };

        // safari 两个流同时订阅可能会出现无声音 等一等
        var sub = {
          streamId: streamId,
          onSub: onSub,
          subfail: subfail,
          subArgs: subArgs
        };
        var subs = self.__safari_subs || (self.__safari_subs = []);
        subs.push(sub);

        if (subs.length === 1) {
          next();
        }
      } else {
        self.__subscribe(streamId, onSub, subfail, subArgs);
      }
    }
  }, {
    key: "__subscribe",
    value: function __subscribe(streamId, onSub, subfail, subArgs) {
      var self = this;

      self.__assertCurrent();

      if (arguments.length == 2) {
        subfail = onSub;
        onSub = undefined;
      }

      if (onSub && lodash_es_isPlainObject(onSub)) {
        subArgs = onSub;
        onSub = undefined;
      }

      if (subfail && lodash_es_isPlainObject(subfail)) {
        subArgs = subfail;
        subfail = undefined;
      }

      subArgs || (subArgs = {
        subSVideo: true,
        subSAudio: true
      });

      var webrtc = self.current._getWebrtc(streamId);

      var usePreRTCPeer = webrtc && webrtc.isConnected();
      var remoteStream = usePreRTCPeer && webrtc.getRemoteStream();

      if (remoteStream && (usePreRTCPeer = remoteStream.active)) {
        var hasAudioTracks = remoteStream.getAudioTracks().length;
        var hasVideoTracks = remoteStream.getVideoTracks().length;

        if (!hasAudioTracks && subArgs.subSAudio === true) {
          usePreRTCPeer = false;
        } else if (!hasVideoTracks && subArgs.subSVideo === true) {
          usePreRTCPeer = false;
        }
      }

      Service_logger.info('sub stream', streamId, ', use prertcpeer =', usePreRTCPeer);

      if (usePreRTCPeer) {
        self.current.subscribeStream(webrtc._rtcId, streamId, subfail, subArgs, onSub);
        onSub && onSub();
        return;
      }

      webrtc && !webrtc.closed && self.current.closeWebrtc(webrtc.getRtcId(), true, false);
      self.current.createWebrtcAndSubscribeStream(streamId, {
        onGotRemote: function onGotRemote(stream) {
          onSub && onSub(stream);
        },
        onEvent: function onEvent(_evt) {
          subfail && subfail(_evt);
        }
      }, undefined, subArgs);
    }
  }, {
    key: "closePubstream",
    value: function closePubstream(stream) {
      emedia.stopTracks(stream);
    } // 移除某个流，可考虑重构

  }, {
    key: "hungup",
    value: function hungup(streamId) {
      var stream = this.getStreamById(streamId);

      try {
        this._hungup(streamId);
      } finally {
        this.onHungup && stream && this.onHungup(stream);
      }
    }
  }, {
    key: "_hungup",
    value: function _hungup(streamId) {
      var self = this;

      self.__assertCurrent();

      var attendee = self.current;
      var stream = attendee._cacheStreams[streamId];
      stream && !stream.closeReason && stream.updateAttributes({
        closeReason: 'UserHangup'
      });
      var rtcId = stream && stream.rtcId;

      if (rtcId) {
        attendee.closeWebrtc(rtcId);

        if (stream.located()) {
          stream.type !== 1 && stream._localMediaStream && emedia.stopTracks(stream._localMediaStream);

          if (stream.remotePlayAudioObject) {
            document.body.removeChild(stream.remotePlayAudioObject);
          }

          attendee._cacheStreams[streamId] && attendee.onRemoveStream(stream);
          removeAttribute(attendee._cacheStreams, streamId);
          self._streamAutomators && removeAttribute(self._streamAutomators, streamId);
        }
      }

      if (stream && !stream.located()) {
        attendee._linkedStreams[stream.id] && removeAttribute(attendee._linkedStreams, stream.id);
        Service_logger.warn('Hangeup remove from _linkedStreams. stream = ', stream.id);
        stream = attendee._cacheStreams[streamId];

        if (!stream) {
          return;
        }

        stream.updateAttributes({
          rtcId: undefined,
          _webrtc: undefined,
          mediaStream: undefined
        });

        var _stream = new components_Stream(stream);

        attendee.onUpdateStream(_stream, new _stream.Update(_stream));
      }
    }
  }, {
    key: "postMessage",
    value: function postMessage(memberIdOrStreamId, message, fail, onRsp) {
      var self = this;
      var theMessage = message;

      if (typeof message !== 'string') {
        message = stringify_default()(message);
      }

      self.__assertCurrent();

      var attendee = self.current;
      var memberId;
      var linkedStream = attendee._linkedStreams[memberIdOrStreamId];

      if (linkedStream && linkedStream.owner) {
        memberId = linkedStream.owner.id;
      } else {
        memberId = memberIdOrStreamId;
      }

      var message = attendee.newMessage({
        op: 1003,
        memId: memberId,
        arg: message
      });
      attendee.postMessage(message, (fail || onRsp) && function (rsp) {
        onRsp && onRsp(rsp, theMessage);

        if (rsp.result != 0) {
          var _evt = new components_event.RemoteControlFail({
            memId: memberId,
            failed: rsp.result,
            cause: rsp.msg,
            type: 'postMessage',
            postMessage: message
          });

          attendee.onEvent(_evt);
          fail && fail(_evt, theMessage);
          return;
        }
      });
    } // 使手机闪光灯打开 关闭 仅支持手机端sdk

  }, {
    key: "torchRemote",
    value: function torchRemote(streamId, torch, success, fail) {
      var self = this;

      if (typeof torch === 'function') {
        fail = success;
        success = torch;
        torch = undefined;
      }

      if (torch !== undefined) {
        torch = torch ? 1 : 0;
      }

      self.__assertCurrent();

      var attendee = self.current;
      var linkedStream = attendee._linkedStreams[streamId];

      if (!linkedStream || linkedStream.located()) {
        Service_logger.error('not exsits or locate, not connect', streamId);
        throw streamId + ' not exsits or locate, not connect';
      }

      var lastTorch = linkedStream.torch;
      var torch = torch === undefined ? !linkedStream.torch ? 1 : 0 : torch;
      var arg = {
        op2: 20,
        streamId: streamId,
        tor: torch
      };
      var message = attendee.newMessage({
        op: 1002,
        memId: linkedStream.owner.id,
        arg: stringify_default()(arg),
        _reqOps: [100206]
      });
      linkedStream.updateAttributes({
        torch: torch
      });
      attendee.postMessage(message, function (rsp) {
        if (rsp.result != 0) {
          var _evt = new components_event.RemoteControlFail({
            stream: linkedStream,
            failed: rsp.result,
            cause: rsp.msg,
            type: 'torch_control'
          });

          attendee.onEvent(_evt);
          linkedStream.updateAttributes({
            torch: lastTorch
          });
          fail && fail(_evt, linkedStream.torch);
          return;
        } else {
          success && success(linkedStream.torch);
        }
      });
    }
  }, {
    key: "freezeFrameRemote",
    value: function freezeFrameRemote(streamId, success, fail) {
      var self = this;

      self.__assertCurrent();

      var attendee = self.current;
      var linkedStream = attendee._linkedStreams[streamId];

      if (!linkedStream || linkedStream.located()) {
        Service_logger.error('not exsits or locate, not connect', streamId);
        throw streamId + ' not exsits or locate, not connect';
      }

      var freezeFrame = !linkedStream.freezeFrame;
      var arg = {
        op2: 20,
        streamId: streamId,
        frz: freezeFrame ? 1 : 0
      };
      var message = attendee.newMessage({
        op: 1002,
        memId: linkedStream.owner.id,
        arg: stringify_default()(arg),
        _reqOps: [100204]
      });
      linkedStream.updateAttributes({
        freezeFrame: freezeFrame
      });
      attendee.postMessage(message, function (rsp) {
        if (rsp.result != 0) {
          var _evt = new components_event.RemoteControlFail({
            stream: linkedStream,
            failed: rsp.result,
            cause: rsp.msg,
            type: 'freeze_control'
          });

          attendee.onEvent(_evt);
          linkedStream.updateAttributes({
            freezeFrame: !linkedStream.freezeFrame
          });
          fail && fail(_evt, linkedStream.freezeFrame);
          return;
        } else {
          success && success(linkedStream.freezeFrame);
        }
      });
    }
  }, {
    key: "base64Img2Blob",
    value: function base64Img2Blob(code) {
      var parts = code.split(';base64,');
      var contentType = parts[0].split(':')[1];
      var raw = window.atob(parts[1]);
      var rawLength = raw.length;
      var uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      } // if(isSafari){
      //     return new Blob([uInt8Array], {type:"application/octet-stream"});
      // }


      return new Blob([uInt8Array], {
        type: contentType
      });
    }
  }, {
    key: "blob2URL",
    value: function blob2URL(blob) {
      return URL.createObjectURL(blob);
    }
  }, {
    key: "imagesPngContext2URL",
    value: function imagesPngContext2URL(code) {
      var self = this;
      return self.blob2URL(self.blob2URL(code));
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(fileName, content, blobs) {
      var self = this;
      var aLink = document.createElement('a');
      aLink.style.display = 'none';
      var blob = content ? self.base64Img2Blob(content) : blobs; //new Blob([content]);

      var blobUrl;
      aLink.download = fileName;
      aLink.href = blobUrl = self.blob2URL(blob);
      aLink.rel = 'noopener';
      var evt = document.createEvent('HTMLEvents');
      evt.initEvent('click', false, false); //initEvent 不加后两个参数在FF下会报错

      aLink.dispatchEvent(evt);
      document.body.appendChild(aLink);
      aLink.click();
      aLink.parentNode.removeChild(aLink);
      setTimeout(function () {
        URL.revokeObjectURL && URL.revokeObjectURL(blobUrl);
      }, 40000);
    }
  }, {
    key: "videoCaptureBase64Context2URL",
    value: function videoCaptureBase64Context2URL(videoObj) {
      var self = this;
      return self.imagesPngContext2URL(self.getCaptureBase64Context(videoObj));
    }
  }, {
    key: "getCaptureBase64Context",
    value: function getCaptureBase64Context(videoObj) {
      var canvas = document.createElement('canvas');
      var id = canvas.id = '__capture_video_' + new Date().getTime();
      canvas.width = videoObj.videoWidth;
      canvas.height = videoObj.videoHeight;
      var canvas2dContext = canvas.getContext('2d');
      canvas2dContext.drawImage(videoObj, 0, 0, canvas.width, canvas.height);
      var base64 = canvas.toDataURL('images/png'); //console.log(base64);

      return base64;
    } // TODO: 抓取 video图像，并保存，考虑将其废弃，移除到外层UI SDK中

  }, {
    key: "captureVideo",
    value: function captureVideo(videoObj, storeLocal, filename) {
      var self = this;
      var base64 = self.getCaptureBase64Context(videoObj);

      if (storeLocal) {
        filename = filename || 'capture_' + new Date().getTime();
        self.downloadFile(filename, base64);
      }

      return base64;
    } // 抓拍手机SDK摄像头

  }, {
    key: "capturePictureRemote",
    value: function capturePictureRemote(streamId, rspBase64Pic, success, fail) {
      var self = this;

      self.__assertCurrent();

      var attendee = self.current;
      var linkedStream = attendee._linkedStreams[streamId];

      if (!linkedStream || linkedStream.located()) {
        Service_logger.error('not exsits or locate, not connect', streamId);
        throw streamId + ' not exsits or locate, not connect';
      }

      var arg = {
        op2: 20,
        streamId: streamId,
        pic: 1,
        rspBase64Pic: rspBase64Pic === true
      };
      var message = attendee.newMessage({
        op: 1002,
        memId: linkedStream.owner.id,
        arg: stringify_default()(arg),
        _reqOps: [100205]
      });
      attendee.postMessage(message, function (rsp) {
        if (rsp.result != 0) {
          var _evt = new components_event.RemoteControlFail({
            stream: linkedStream,
            failed: rsp.result,
            cause: rsp.msg,
            type: 'capture_control'
          });

          attendee.onEvent(_evt);
          fail && fail(_evt);
          return;
        } else {
          if (!rspBase64Pic) {
            success && success();
            return;
          }

          if (!rsp.arg) {
            fail && fail(new components_event.RemoteControlFail({
              stream: linkedStream,
              failed: rsp.result,
              cause: 'Not found base64 pic'
            }));
            return;
          }

          var arg = JSON.parse(rsp.arg);
          success && success(arg.pic);
        }
      });
    } // 控制手机SDK摄像头，放大缩小

  }, {
    key: "zoomRemote",
    value: function zoomRemote(streamId, multiples, fail, success) {
      var self = this;

      self.__assertCurrent();

      var attendee = self.current;
      var linkedStream = attendee._linkedStreams[streamId];

      if (!linkedStream || linkedStream.located()) {
        Service_logger.error('not exsits or locate, not connect', streamId);
        throw streamId + ' not exsits or locate, not connect';
      }

      linkedStream._zoom || linkedStream.updateAttributes({
        _zoom: 1
      });

      var _zoom = linkedStream._zoom * multiples;

      if (_zoom < 1) {
        return;
      }

      linkedStream.updateAttributes({
        _zoom: _zoom
      });
      var arg = {
        op2: 20,
        streamId: streamId,
        zoom: Math.round(_zoom * 10000)
      };
      var message = attendee.newMessage({
        op: 1002,
        memId: linkedStream.owner.id,
        arg: stringify_default()(arg),
        _reqOps: [100201]
      });
      attendee.postMessage(message, function (rsp) {
        if (rsp.result != 0) {
          var _evt = new components_event.RemoteControlFail({
            stream: linkedStream,
            failed: rsp.result,
            cause: rsp.msg,
            type: 'zoom_control'
          });

          attendee.onEvent(_evt);
          fail && fail(_evt);
          return;
        }

        success && success();
      });
    }
  }, {
    key: "_getPosition",
    value: function _getPosition(obj) {
      var topValue = 0,
          leftValue = 0;

      while (obj) {
        leftValue += obj.offsetLeft;
        topValue += obj.offsetTop;
        obj = obj.offsetParent;
      }

      return {
        clientX: leftValue,
        clientY: topValue
      };
    }
  }, {
    key: "eventXYAtMedia",
    value: function eventXYAtMedia(eventXY, videoTag) {
      var videoXY = getDomPageRect(videoTag);
      var videoWidth = videoXY.width,
          videoHeight = videoXY.height;
      var mediaWidth = videoTag.videoWidth,
          mediaHeight = videoTag.videoHeight;

      if (mediaHeight / mediaWidth > videoHeight / videoWidth) {
        var t = mediaWidth / mediaHeight;
        mediaHeight = videoHeight;
        mediaWidth = mediaHeight * t;
      } else {
        var t = mediaHeight / mediaWidth;
        mediaWidth = videoWidth;
        mediaHeight = mediaWidth * t;
      }

      var clickXY = eventXY;
      var isRadioX, isRadioY;

      if (isRadioX = isFloat(clickXY.x)) {
        //比率
        clickXY.x = clickXY.x * videoWidth;
      }

      if (isRadioY = isFloat(clickXY.y)) {
        //比率
        clickXY.y = clickXY.y * videoHeight;
      }

      if (Math.abs(clickXY.x) < (videoWidth - mediaWidth) / 2 || videoWidth - Math.abs(clickXY.x) < (videoWidth - mediaWidth) / 2) {
        return;
      }

      if (Math.abs(clickXY.y) < (videoHeight - mediaHeight) / 2 || videoHeight - Math.abs(clickXY.y) < (videoHeight - mediaHeight) / 2) {
        return;
      }

      clickXY.x = clickXY.x < 0 ? Math.floor(clickXY.x + (videoWidth - mediaWidth) / 2) : Math.floor(clickXY.x - (videoWidth - mediaWidth) / 2);
      clickXY.y = clickXY.y < 0 ? Math.floor(clickXY.y + (videoHeight - mediaHeight) / 2) : Math.floor(clickXY.y - (videoHeight - mediaHeight) / 2);

      if (isRadioX) {
        clickXY.x = clickXY.x / mediaWidth;
      }

      if (isRadioY) {
        clickXY.y = clickXY.y / mediaHeight;
      }

      return {
        x: clickXY.x,
        y: clickXY.y,
        width: mediaWidth,
        height: mediaHeight
      };
    }
  }, {
    key: "eventXYAtVideo",
    value: function eventXYAtVideo(mediaXY, videoTag) {
      var videoXY = getDomPageRect(videoTag);
      var videoWidth = videoXY.width,
          videoHeight = videoXY.height;
      var mediaWidth = videoTag.videoWidth,
          mediaHeight = videoTag.videoHeight;

      if (mediaHeight / mediaWidth > videoHeight / videoWidth) {
        var t = mediaWidth / mediaHeight;
        mediaHeight = videoHeight;
        mediaWidth = mediaHeight * t;
      } else {
        var t = mediaHeight / mediaWidth;
        mediaWidth = videoWidth;
        mediaHeight = mediaWidth * t;
      }

      var isRadioX, isRadioY;

      if (isRadioX = isFloat(mediaXY.x)) {
        //比率
        mediaXY.x = mediaXY.x * mediaWidth;
      }

      if (isRadioY = isFloat(mediaXY.y)) {
        //比率
        mediaXY.y = mediaXY.y * mediaHeight;
      }

      mediaXY.x = mediaXY.x < 0 ? Math.floor(mediaXY.x - (videoWidth - mediaWidth) / 2) : Math.floor(mediaXY.x + (videoWidth - mediaWidth) / 2);
      mediaXY.y = mediaXY.y < 0 ? Math.floor(mediaXY.y - (videoHeight - mediaHeight) / 2) : Math.floor(mediaXY.y + (videoHeight - mediaHeight) / 2);

      if (isRadioX) {
        mediaXY.x = mediaXY.x / videoWidth;
      }

      if (isRadioY) {
        mediaXY.y = mediaXY.y / videoHeight;
      }

      return mediaXY;
    }
  }, {
    key: "getClickXY",
    value: function getClickXY(videoTag, clickEvent) {
      var self = this;
      var e = clickEvent || window.event;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.pageX || e.clientX + scrollX;
      var y = e.pageY || e.clientY + scrollY;

      var xy = self._getPosition(videoTag);

      Service_logger.info('Video tag position ', xy.clientX, ':', xy.clientY);
      var mediaWidth = videoTag.videoWidth;
      var mediaHeight = videoTag.videoHeight;

      if (mediaHeight / mediaWidth > videoTag.offsetHeight / videoTag.offsetWidth) {
        var t = mediaWidth / mediaHeight;
        mediaHeight = videoTag.offsetHeight;
        mediaWidth = mediaHeight * t;
        xy.clientX += (videoTag.offsetWidth - mediaWidth) / 2;
      } else {
        var t = mediaHeight / mediaWidth;
        mediaWidth = videoTag.offsetWidth;
        mediaHeight = mediaWidth * t;
        xy.clientY += (videoTag.offsetHeight - mediaHeight) / 2;
      }

      Service_logger.info('Media position ', xy.clientX, ':', xy.clientY);
      Service_logger.info('Media xy ', mediaWidth, ':', mediaHeight);
      Service_logger.info('Click position ', x, ':', y);
      return {
        mediaWidth: mediaWidth,
        mediaHeight: mediaHeight,
        x: x - xy.clientX,
        y: y - xy.clientY
      };
    } // 控制手机摄像头聚焦 曝光，仅支持手机端sdk

  }, {
    key: "focusExpoRemote",
    value: function focusExpoRemote(streamId, videoTag, clickEvent, fail, success) {
      var self = this;
      var e = clickEvent || window.event;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.pageX || e.clientX + scrollX;
      var y = e.pageY || e.clientY + scrollY;

      var xy = self._getPosition(videoTag);

      Service_logger.info('Video tag position ', xy.clientX, ':', xy.clientY);
      var mediaWidth = videoTag.videoWidth;
      var mediaHeight = videoTag.videoHeight;

      if (mediaHeight / mediaWidth > videoTag.offsetHeight / videoTag.offsetWidth) {
        var t = mediaWidth / mediaHeight;
        mediaHeight = videoTag.offsetHeight;
        mediaWidth = mediaHeight * t;
        xy.clientX += (videoTag.offsetWidth - mediaWidth) / 2;
      } else {
        var t = mediaHeight / mediaWidth;
        mediaWidth = videoTag.offsetWidth;
        mediaHeight = mediaWidth * t;
        xy.clientY += (videoTag.offsetHeight - mediaHeight) / 2;
      }

      Service_logger.info('Media position ', xy.clientX, ':', xy.clientY);
      Service_logger.info('Media xy ', mediaWidth, ':', mediaHeight);
      Service_logger.info('Click position ', x, ':', y);

      self._focusExpo(streamId, mediaWidth, mediaHeight, x - xy.clientX, y - xy.clientY, fail, success);
    }
  }, {
    key: "_focusExpo",
    value: function _focusExpo(streamId, width, height, x, y, fail, success) {
      var self = this;

      if (x <= 0 || x > width) {
        return;
      }

      if (y <= 0 || y > height) {
        return;
      }

      self.__assertCurrent();

      var attendee = self.current;
      var linkedStream = attendee._linkedStreams[streamId];

      if (!linkedStream || linkedStream.located()) {
        Service_logger.error('not exsits or locate, not connect', streamId);
        throw streamId + ' not exsits or locate, not connect';
      }

      var arg = {
        op2: 20,
        streamId: streamId,
        focus: 1,
        expo: 1,
        x: width === 0 ? 0 : Math.round(x * 10000 / width),
        y: height === 0 ? 0 : Math.round(y * 10000 / height)
      };
      var message = attendee.newMessage({
        op: 1002,
        memId: linkedStream.owner.id,
        arg: stringify_default()(arg),
        _reqOps: [100202, 100203]
      });
      attendee.postMessage(message, function (rsp) {
        if (rsp.result != 0) {
          var _evt = new components_event.RemoteControlFail({
            stream: linkedStream,
            failed: rsp.result,
            cause: rsp.msg,
            type: 'focus_expo_control'
          });

          attendee.onEvent(_evt);
          fail && fail(_evt);
          return;
        } else {
          success && success();
        }
      });
    }
  }, {
    key: "_republish",
    value: function _republish(pubS, success, error) {
      Service_logger.info('Republish stream. it = ', pubS.id);
      var self = this;
      var webrtc;

      if (pubS.id) {
        var rtcId = self.current.__getWebrtcFor(pubS.id);

        rtcId && self.current.closeWebrtc(rtcId, true);
        webrtc = self.current._getWebrtc(pubS.id);
      }

      var _pubS; // if(isSafari){
      //     emedia.enableAudioTracks(false);
      //     emedia.enableVideoTracks(false);
      // }


      switch (pubS.type) {
        case 0:
          //isSafari || emedia.stopTracks(pubS._localMediaStream);
          emedia.stopTracks(pubS._localMediaStream);
          _pubS = new self.AVPubstream(pubS);
          break;

        case 1:
          //isSafari || emedia.stopAndRemoveAudioTracks(pubS._localMediaStream);
          emedia.stopAndRemoveAudioTracks(pubS._localMediaStream);
          _pubS = new self.ShareDesktopPubstream(pubS);
          break;

        case 2:
          //isSafari || emedia.stopTracks(pubS._localMediaStream);
          emedia.stopTracks(pubS._localMediaStream);
          _pubS = new self.AudioMixerPubstream(pubS);
          break;
      }

      setTimeout(function () {
        self.openUserMedia(_pubS).then(function () {
          pubS.localStream = _pubS.localStream;
          pubS.isRepublished = true;
          pubS.optimalVideoCodecs = pubS.optimalVideoCodecs || webrtc && webrtc.optimalVideoCodecs;
          self.push(pubS, success, error);
        }, error);
      }, 100);
    } // 切换手机摄像头

  }, {
    key: "switchMobileCamera",
    value: function switchMobileCamera(pubS, error, success) {
      var self = this;

      if (typeof pubS === 'string') {
        //id
        pubS = self.current._cacheStreams[pubS];
      } else if (pubS.id) {
        pubS = self.current._cacheStreams[pubS.id];
      }

      if (pubS.voff) {
        Service_logger.warn('Stream id = ', pubS.id, ' voff, do not chanage camera.');
        return;
      }

      pubS.constaints || (pubS.constaints = {});
      var preConstaints = proto.extend({}, pubS.constaints);
      pubS._lastConstaints = preConstaints; //video: {'facingMode': "user"}, // 前置
      //video: { facingMode: { exact: "environment" } } //后置

      pubS.constaints.video = _typeof(pubS.constaints.video) === 'object' ? pubS.constaints.video : {};

      if (pubS.constaints.video.facingMode === 'user' || !pubS.constaints.video.facingMode) {
        //facingMode不存在或指定了user当前置
        pubS.constaints.video.facingMode = {
          exact: 'environment'
        };
      } else {
        //pubS.constaints.video.facingMode
        pubS.constaints.video.facingMode = 'user';
      }

      self._republish(pubS, function (mediaStream) {
        success && success(mediaStream);
      }, function (_evt) {
        if (_evt instanceof emedia.event.OpenMediaError) {
          //设备可能不支持，比如 没有摄像头，或 被禁止访问摄像头
          pubS.constaints = preConstaints;
        }

        error && error(_evt);
      });
    } // TODO: 切换摄像头，注意区分和手机摄像头切换的区别

  }, {
    key: "changeCamera",
    value: function changeCamera(pubS, error, success) {
      var self = this;

      if (typeof pubS === 'string') {
        //id
        pubS = self.current._cacheStreams[pubS];
      } else if (pubS.id) {
        pubS = self.current._cacheStreams[pubS.id];
      }

      if (pubS.voff) {
        Service_logger.warn('Stream id = ', pubS.id, ' voff, do not chanage camera.');
        return;
      }

      self.getMediaDevices('videoinput', function (devices) {
        if (devices.length <= 1) {
          Service_logger.warn('Only video input. not chanage');
          return;
        }

        var cameraIndex = pubS._cameraIndex;

        if (pubS._cameraIndex === null || pubS._cameraIndex === undefined) {
          var localStream = pubS.getLocalMediaStream();
          var videoTracks = localStream && localStream.getVideoTracks();
          var track = videoTracks && videoTracks.length && videoTracks[0];

          if (track && track.getCapabilities && typeof track.getCapabilities === 'function') {
            var videoCapabilities = track.getCapabilities();
            var deviceId = videoCapabilities && videoCapabilities.deviceId;

            for (var index in devices) {
              var device = devices[index];

              if (device.deviceId === deviceId || device.label == track.label) {
                cameraIndex = parse_int_default()(index);
                break;
              }
            }
          } else {
            for (var index in devices) {
              var device = devices[index];

              if (device.label == track.label) {
                cameraIndex = parse_int_default()(index);
                break;
              }
            }
          }
        }

        while (cameraIndex < devices.length) {
          var lastDevice = devices[cameraIndex];
          cameraIndex = (cameraIndex + 1) % devices.length;
          var device = devices[cameraIndex];
          var videoTracks = pubS.getLocalMediaStream().getVideoTracks();

          if (!videoTracks || videoTracks.length === 0 || device.label != videoTracks[0].label) {
            break;
          }
        }

        var device = devices[cameraIndex];
        var deviceInfoLabel = device.label;
        Service_logger.warn('Stream ', pubS.id, lastDevice.label, '>>', deviceInfoLabel);
        pubS._cameraIndex = cameraIndex;
        pubS.constaints || (pubS.constaints = {});
        var preConstaints = proto.extend({}, pubS.constaints);
        pubS._lastConstaints = preConstaints;
        pubS.constaints.video = _typeof(pubS.constaints.video) === 'object' ? pubS.constaints.video : {};
        pubS.constaints.video.deviceId = {
          exact: device.deviceId
        };

        self._republish(pubS, function (mediaStream) {
          success && success(mediaStream);
        }, function (_evt) {
          if (_evt instanceof emedia.event.OpenMediaError) {
            //设备可能不支持，比如 没有摄像头，或 被禁止访问摄像头
            pubS.constaints = preConstaints;
          }

          error && error(_evt);
        });
      }, error);
    } // 更改contrastints ,暂时留着

  }, {
    key: "chanageConstraints",
    value: function chanageConstraints(pubS, constraints, error, success) {
      var self = this;

      if (typeof pubS === 'string') {
        //id
        pubS = self.current._cacheStreams[pubS];
      } else if (pubS.id) {
        pubS = self.current._cacheStreams[pubS.id];
      }

      if (!pubS) {
        Service_logger.warn('Not found pubS');
        return;
      }

      Service_logger.info('chanage pubstream constraints. it', pubS.id, constraints);

      function updateAndDisabled() {
        var mediaStream = pubS.getMediaStream();
        emedia.enableVideoTracks(mediaStream, !pubS.voff);
        emedia.enableAudioTracks(mediaStream, !pubS.aoff);
      }

      if (isObject(constraints) && !lodash_es_isEqual(pubS.constaints, constraints)) {
        var preConstraints = pubS.constaints || {};
        var preVoff = pubS.voff;
        var preAoff = pubS.aoff;
        pubS._lastConstaints = preConstraints;
        pubS.constaints = proto.extend(true, {}, preConstraints, constraints);
        pubS.aoff = pubS.constaints.audio ? 0 : 1;
        pubS.voff = pubS.constaints.video ? 0 : 1;

        self._republish(pubS, function (mediaStream) {
          updateAndDisabled();
          success && success(mediaStream);
        }, function (_evt) {
          if (_evt instanceof emedia.event.OpenMediaError) {
            //设备可能不支持，比如 没有摄像头，或 被禁止访问摄像头
            pubS.constaints = preConstraints;
            pubS.aoff = preAoff;
            pubS.voff = preVoff;
          }

          error && error(_evt);
        });

        return;
      }

      updateAndDisabled();
      success && success(pubS.getMediaStream());
    }
  }, {
    key: "voff",
    value: function voff(pubS, _voff, error, success) {
      var self = this;

      if (typeof pubS === 'string') {
        //id
        pubS = self.current._cacheStreams[pubS];
      }

      var oldVoff = pubS.voff;
      _voff = _voff ? 1 : 0;
      pubS.voff = _voff;

      function updateAndDisabled() {
        if (_voff == oldVoff) {
          Service_logger.info('pubstream voff not chanage.');
          return;
        }

        emedia.enableVideoTracks(pubS.getMediaStream(), !_voff);
        self.current && self.current.voff(pubS, _voff);
      }

      if (!_voff && pubS.constaints && !pubS.constaints.video) {
        //error && error("When pub. only audio, voff invalidate");
        //throw "When pub. only audio, voff invalidate";
        var preVideo = pubS.constaints.video;
        pubS.constaints.video = true;

        self._republish(pubS, function (mediaStream) {
          updateAndDisabled();
          success && success(mediaStream);
        }, function (_evt) {
          if (_evt instanceof emedia.event.OpenMediaError) {
            //设备可能不支持，比如 没有摄像头，或 被禁止访问摄像头
            pubS.constaints.video = preVideo;
            pubS.voff = oldVoff;
          }

          error && error(_evt);
        });

        return;
      }

      updateAndDisabled();
      success && success(pubS.getMediaStream());
    }
  }, {
    key: "aoff",
    value: function aoff(pubS, _aoff, error, success) {
      var self = this;

      if (typeof pubS === 'string') {
        //id
        pubS = self.current._cacheStreams[pubS];
      }

      var oldAoff = pubS.aoff;
      _aoff = _aoff ? 1 : 0;
      pubS.aoff = _aoff;

      function updateAndDisabled() {
        if (_aoff == oldAoff) {
          Service_logger.info('pubstream aoff not chanage.');
          return;
        }

        emedia.enableAudioTracks(pubS.getMediaStream(), !_aoff);
        self.current && self.current.aoff(pubS, _aoff);
      }

      if (!_aoff && pubS.constaints && !pubS.constaints.audio) {
        var preAudio = pubS.constaints.audio;
        pubS.constaints.audio = true;

        self._republish(pubS, function (mediaStream) {
          updateAndDisabled();
          success && success(mediaStream);
        }, function (_evt) {
          if (_evt instanceof emedia.event.OpenMediaError) {
            //设备可能不支持，比如 没有摄像头，或 被禁止访问摄像头
            pubS.constaints.audio = preAudio;
            pubS.aoff = oldAoff;
          }

          error && error(_evt);
        });

        return;
      }

      updateAndDisabled();
      success && success(pubS.getMediaStream());
    }
  }, {
    key: "iceing",
    value: function iceing(streamId) {
      var self = this;
      return lodash_es_isPlainObject(self.current._linkedStreams[streamId]);
    }
  }, {
    key: "recording",
    value: function recording(streamId) {
      var self = this;
      return lodash_es_isPlainObject(self.current._records[streamId]);
    }
  }, {
    key: "startRecord",
    value: function startRecord(streamId, callback) {
      var self = this;
      var _stream = self.current._linkedStreams[streamId];

      if (!_stream) {
        Service_logger.error('not at linked streams', streamId);
        throw streamId + ' not at linked streams';
      }

      if (!_stream._webrtc) {
        callback && callback(false);
      }

      self.current.startRecord(_stream, callback);
    }
  }, {
    key: "stopRecord",
    value: function stopRecord(streamId, callback) {
      var self = this;
      var _stream = self.current._records[streamId];

      if (!_stream) {
        Service_logger.error('not at recording streams', streamId);
        throw streamId + ' not at recording streams';
      }

      self.current.stopRecord(_stream, callback);
    }
  }, {
    key: "getCurrentMembers",
    value: function getCurrentMembers() {
      var self = this;
      return self.current.getCurrentMembers();
    }
  }, {
    key: "_onCapturePicture",
    value: function _onCapturePicture(evt) {
      var self = this;
      var rspBase64Pic = evt.arg.rspBase64Pic;
      var streamId = evt.arg.streamId;
      var stream = self.current._cacheStreams[streamId];
      var base64;

      if (rspBase64Pic) {
        var htmlVideo;

        if (typeof self.getHTMLVideo !== 'function' || !(htmlVideo = self.getHTMLVideo(streamId))) {
          Service_logger.warn('Not support capture picture. caused by htmlVideo not found');
          return;
        }

        base64 = self.getCaptureBase64Context(htmlVideo);
      } else {
        if (typeof self.onCapturePicture !== 'function') {
          Service_logger.warn('Not support capture picture. caused by onCapturePicture not found');
          return;
        }

        self.onCapturePicture(stream);
      }

      var message = self.current.newMessage({
        op: 1001,
        tsxId: evt.tsxId,
        memId: evt.memId,
        arg: stringify_default()(base64 ? {
          pic: base64
        } : {}),
        result: 0
      });
      self.current.postMessage(message, function (rsp) {
        Service_logger.warn('Send remote control onCapturePicture response. the result = ', rsp.result, rsp.msg || '');
      });
      return true;
    } // _onRemotePannelControl (evt) {
    //
    // }

  }, {
    key: "newSession",
    value: function newSession(attendee, ticket) {
      var self = this;
      var ExtendSession = self.Session || Session;
      var session = new ExtendSession({
        ticket: ticket,
        owner: attendee,
        onTcklC: function onTcklC(evt) {
          attendee.onTcklC(evt.rtcId, evt.cands);
        },
        onAcptC: function onAcptC(evt) {
          attendee.onAcptC(evt.rtcId, evt.sdp, evt.cands);
        },
        onAnsC: function onAnsC(evt) {
          attendee.onAnsC(evt.rtcId, evt.sdp, evt.cands);
        },
        onTermC: function onTermC(evt) {
          //self.onTermC(me, evt);
          Service_logger.info('Server termc rtc: ', evt.rtcId, evt.message || evt.msg);

          if (evt.endReason === 21 || evt.endReason === 22) {
            utilForEach(attendee._cacheStreams, function (sid, _stream) {
              if (_stream.rtcId === evt.rtcId) {
                var _event;

                if (evt.endReason === 21) {
                  _event = new emedia.event.SwitchVCodes({
                    stream: _stream,
                    useVCodes: evt.useVCodes
                  });
                } else {
                  _event = new emedia.event.SubFailNotSupportVCodes({
                    stream: _stream
                  });
                }

                attendee.onEvent(_event);
              }
            });
          } else {
            attendee.closeWebrtc(evt.rtcId, false, true);
          }
        },
        onEnter: function onEnter(evt) {
          attendee.onEnter(evt.cver, evt.mem);
        },
        onExit: function onExit(evt) {
          attendee.onExit(evt.cver, evt.memId, evt.reason || 0);
        },
        onPub: function onPub(evt) {
          attendee.onPub(evt.cver, evt.memId, evt.pubS);
        },
        onUnpub: function onUnpub(evt) {
          attendee.onUnpub(evt.cver, evt.memId, evt.pubSId);
        },
        onMems: function onMems(evt) {},
        onClose: function onClose(evt) {
          attendee.onClose(evt.cver, evt.confrId);
        },
        onEvent: function onEvent(evt) {
          attendee.onEvent(evt);
        },
        onStreamControl: function onStreamControl(evt) {
          attendee.onStreamControl(evt.cver, evt.streamId, evt.voff, evt.aoff, evt.sver);
        },
        onRoleUpdate: function onRoleUpdate(evt) {
          attendee._onRoleUpdate(evt.role, evt.roleToken);
        },
        onRemoteControl: function onRemoteControl(evt) {
          if (typeof evt.arg === 'string') {
            evt.arg = JSON.parse(evt.arg);
          }

          if (evt.arg.op2 === 20 && evt.arg.pic && self._onCapturePicture.call(self, evt)) {
            return;
          }

          if (evt.arg.op2 === 30 && self._onRemotePannelControl) {
            try {
              self._onRemotePannelControl.call(self, evt);

              return;
            } catch (e) {
              Service_logger.warn(e);
            }
          }

          Service_logger.warn('Not support remote control');
          var message = attendee.newMessage({
            op: 1001,
            tsxId: evt.tsxId,
            memId: evt.memId,
            arg: stringify_default()(evt.arg),
            result: evt && evt.arg && evt.arg.op2 === 30 ? -405 : -507,
            msg: 'Not support the remote control.'
          });
          attendee.postMessage(message, function (rsp) {
            Service_logger.warn('Send remote control response. the result = ', rsp.result, rsp.msg || '');
          });
        },
        onRecvRemoteMessage: function onRecvRemoteMessage(evt) {
          attendee._onRecvRemoteMessage && attendee._onRecvRemoteMessage(evt.memId, evt.arg, evt);
        }
      });
      return session;
    }
  }, {
    key: "_judgeTalking",
    value: function _judgeTalking(meter) {
      if (!meter) {
        return false;
      }

      return meter.instant >= emedia.config.judgeTalkingByInstantGE;
    }
  }, {
    key: "graffitiVideo",
    value: function graffitiVideo(streamId, videoTag, canvasTag) {
      var self = this;
      var hxStream = self.getStreamById(streamId);
      var mediaStream = new MediaStream();
      mediaStream._located = true;

      hxStream._localMediaStream.getAudioTracks().forEach(function (track) {
        mediaStream.addTrack(track);
      });

      var drawStream = canvasTag.captureStream(25);
      drawStream.getVideoTracks().forEach(function (track) {
        mediaStream.addTrack(track);
      });
      videoTag.srcObject = mediaStream;
      hxStream.updateAttributes({
        localStream: mediaStream,
        isRepublished: true,
        optimalVideoCodecs: hxStream.optimalVideoCodecs
      });
      self.push(hxStream);
    }
  }, {
    key: "resetCanvas",
    value: function resetCanvas(canvasTag) {
      var set;

      if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
          set = arguments[i];
          typeof set === 'function' && set(canvasTag);
          typeof set !== 'function' && lodash_es_isPlainObject(set) && utilForEach(set, function (key, value) {
            Service_logger.debug('Canvas set ', key, ' = ', value);
            canvasTag.setAttribute(key, value);
          });
        }
      }
    }
  }, {
    key: "requestFrame",
    value: function requestFrame(stream, millis) {
      var self = this;

      var _cacheStream;

      if (typeof stream === 'string') {
        _cacheStream = this.current._cacheStreams[stream];
      } else if (stream.id) {
        _cacheStream = this.current._cacheStreams[stream.id];
      } else {
        return;
      }

      if (!_cacheStream) {
        return;
      }

      function _requestFrame() {
        _cacheStream.requestFrame();

        if (_cacheStream.canvas) {
          redraw(3, 3);
        }
      }

      if (!millis) {
        _requestFrame();

        return;
      }

      setTimeout(function () {
        _requestFrame();

        self.requestFrame(_cacheStream, millis);
      }, millis);
    }
  }, {
    key: "graffitiCanvas",
    value: function graffitiCanvas(withVoice, canvasTag) {
      if (targetDOM(withVoice)) {
        canvasTag = withVoice;
        withVoice = false;
      }

      var self = this;
      var pubS = new self.ShareDesktopPubstream({
        voff: 0,
        aoff: withVoice ? 0 : 1
      });
      canvasTag || (canvasTag = document.createElement('canvas')); //canvasTag.getContext("2d", {willReadFrequently: true}); //Fixed: Firefox captureStream  NS_ERROR_NOT_INITIALIZED

      canvasTag.getContext('2d');
      pubS.canvas = canvasTag;

      var diy = function diy() {};

      diy.prototype.setCanvas = function (set) {
        this.canvasTag = canvasTag;
        self.resetCanvas(canvasTag, set);
        return this;
      };

      diy.prototype.push = function (frameRate, _onpushed) {
        var diy = this;

        diy._push(frameRate, _onpushed);
      };

      diy.prototype._push = function (frameRate, _onpushed) {
        if (typeof frameRate === 'function') {
          _onpushed = frameRate;
          frameRate = undefined;
        }

        canvasTag.captureStream && (canvasTag.captureStream.enabled = true);
        var drawStream = canvasTag.captureStream(frameRate || 25);

        function pushed(stream) {
          stream.canvas = canvasTag;
          _onpushed && _onpushed(stream, canvasTag, drawStream);

          if (withVoice) {
            //发送一帧视频
            stream.requestFrame();
          }
        }

        function pub(pubS, pushed) {
          var mediaStream = new MediaStream();
          mediaStream._located = true;
          pubS._localMediaStream && pubS._localMediaStream.getAudioTracks().forEach(function (track) {
            mediaStream.addTrack(track);
          });
          drawStream.getVideoTracks().forEach(function (track) {
            mediaStream.addTrack(track);
          });
          pubS._localMediaStream = mediaStream;
          pubS.localStream = mediaStream;
          self.push(pubS, pushed);
        }

        if (withVoice) {
          self.__getUserMedia({
            audio: true
          }, function success(_user, stream) {
            pubS._localMediaStream = stream;
            pub(pubS, pushed);
          });
        } else {
          pub(pubS, pushed);
        }

        return this;
      };

      return new diy();
    }
  }, {
    key: "blobRecorder",
    value: function blobRecorder(mediaStream, options, handleDataAvailable, handleStop) {
      var self = this;

      if (targetDOM(mediaStream)) {
        mediaStream = mediaStream.srcObject;
      }

      options || (options = {
        mimeType: 'video/webm;codecs=vp9'
      });

      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        Service_logger.info(options.mimeType, ' is not Supported');
        options = {
          mimeType: 'video/webm;codecs=vp8'
        };

        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          Service_logger.info(options.mimeType, ' is not Supported');
          options = {
            mimeType: 'video/webm'
          };

          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            Service_logger.info(options.mimeType, ' is not Supported');
            options = {
              mimeType: ''
            };
          }
        }
      }

      try {
        var mediaRecorder = new MediaRecorder(mediaStream, options);
      } catch (e) {
        Service_logger.error('Exception while creating MediaRecorder: ', e);
        return;
      }

      var recordedBlobs = [];

      mediaRecorder.onstop = handleStop || function handleStop(event) {
        Service_logger.info('Recorder stopped: ', event);
      };

      mediaRecorder.ondataavailable = handleDataAvailable || function (event) {
        if (event.data && event.data.size > 0) {
          recordedBlobs.push(event.data);
        }
      };

      function BlobRecorder() {
        this.blobs = recordedBlobs;
      }

      BlobRecorder.prototype.start = function (secornds) {
        mediaRecorder.start(secornds);
      };

      BlobRecorder.prototype.stop = function () {
        mediaRecorder.stop();
      };

      BlobRecorder.prototype.playurl = function (options) {
        var superBuffer = new Blob(this.blobs, options || {
          type: 'video/webm'
        });
        return window.URL.createObjectURL(superBuffer);
      };

      BlobRecorder.prototype.download = function (filename, options) {
        var blobs = new Blob(this.blobs, options || {
          type: 'video/webm'
        });
        self.downloadFile(filename, undefined, blobs);
      };

      return new BlobRecorder();
    }
  }]);

  return Service;
}();

/* harmony default export */ const components_Service = (Service);
;// CONCATENATED MODULE: ./emedia-sdk/src/entry.js














var Emedia = /*#__PURE__*/function () {
  function Emedia(props) {
    _classCallCheck(this, Emedia);

    _defineProperty(this, "event", components_event);

    var config = props.config;

    var _handleMergeConfig = handleMergeConfig(config),
        mergedConfig = _handleMergeConfig.mergedConfig,
        _logContext = _handleMergeConfig._logContext,
        _logContextIndex = _handleMergeConfig._logContextIndex;

    this.config = mergedConfig;
    this._logContext = _logContext;
    this._logContextIndex = _logContextIndex; // 挂载模块

    this.stopAudioTracks = stopAudioTracks;
    this.stopAndRemoveAudioTracks = stopAndRemoveAudioTracks;
    this.stopTracks = stopTracks;
    this.enableVideoTracks = enableVideoTracks;
    this.enableAudioTracks = enableAudioTracks;
    this.hasEnabledTracks = hasEnabledTracks;
    this.fileReport = fileReport;
    this.PCStats = components_PCStats;
    this.Service = components_Service;
    this.helper = {
      PCStats: components_PCStats,
      pcstats: components_PCStats.echo,
      intervalPcstats: components_PCStats.intervalEcho,
      inboundAudio: components_PCStats.inboundAudio,
      inboundVideo: components_PCStats.inboundVideo,
      outboundAudio: components_PCStats.outboundAudio,
      outboundVideo: components_PCStats.outboundVideo
    };
    this.LOG_LEVEL = config.LOG_LEVEL;
    window.emedia = this;
    utils_log.count(); // TODO: 抽离优化

    this.bAPI();
  }

  _createClass(Emedia, [{
    key: "bAPI",
    value: function bAPI() {
      if (this.config.getMediaMeterIntervalMillis) {
        // https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11/46534088#46534088
        // There are two problems.
        // The main one is that Safari on iOS 11 seems to automatically suspend new AudioContext's that aren't created in response to a tap.
        // You can resume() them, but only in response to a tap.
        //
        // So, you have to either create it before you get the MediaStream, or else get the user to tap again later.
        this.__audioContext = new AudioContext();
        this.__usingWebAudio = true;

        try {
          if (typeof AudioContext === 'function') {} else {
            this.__usingWebAudio = false;
          }
        } catch (e) {
          this.__usingWebAudio = false;
        }

        if (!this.__usingWebAudio) {
          console.warn("'new AudioContext()' failed. can not know who talking.");
        }

        if (this.__audioContext && this.__audioContext.state === 'suspended') {
          console.warn('audioContext.state is suspended. can not know who talking. You can resume() this.__audioContext, but only in response to a tap.');
        }
      }

      if (!window.requestAnimationFrame || !this.config._useRequestAnimationFrame) {
        this.requestAnimationFrame = function (fn, timeoutMillis) {
          return setTimeout(fn, timeoutMillis || this.config.getMediaMeterIntervalMillis);
        };
      } else {
        this.requestAnimationFrame = function (callback) {
          window.requestAnimationFrame(callback);
        };
      }

      if (!window.cancelAnimationFrame || !this.config._useRequestAnimationFrame) {
        this.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
      } else {
        this.cancelAnimationFrame = function (id) {
          window.cancelAnimationFrame(id);
        };
      }
    }
  }]);

  return Emedia;
}(); // /**
//  *  Enter 客户端携带，进入
//  *  服务端可支持，Json字符串，或Json数据
//  */
// var res = {
//     type: 'ios|android|web',
//     ver: '1.0.2',
//     agent: '', //ios android可以不传，web navigator.userAgent
//     //可缺省，缺省默认支持
//     //107 300 302 303 304 301 204 206 400 401 1001
//     ops:[
//         1003, //透传消息
//         100201, //缩放
//         100202, //聚焦
//         100203, //曝光
//         100204, //定格
//         100205 //远程抓图
//     ],
//
//     vcodes:['H264', 'VP8'] //客户端进入，可以携带，也可以不携带。携带了，就使用这个广播给其他人。
//                            // A进入，没有携带此参数，服务端通过 type ver agent 补全此字段，广播给B C
// }


/* harmony default export */ const entry = (Emedia);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=EmediaSDK.js.map