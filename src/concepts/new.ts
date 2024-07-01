const FUNC_ERROR_TEXT = 'is not a constructor';
export function _new(Constructor, ...args) {
  if(typeof Constructor === 'function' && !Constructor.prototype) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  // 将原型链指向该函数
  let instance = Object.create(Constructor.prototype);
  Constructor.call(instance, ...args);
  return instance;
}

export default function __extend(Parent) {
  if(!(typeof Parent === 'function' && Parent.prototype.constructor == Parent)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  // 构造新的原型对象，并用来存储现在的对象的属性
  const __proto__ = new Parent();
  for(let key in __proto__) {
    __proto__[key] = this.prototype[key];
  }

  this.prototype = __proto__;
  // 构造函数必须指向原型对象。
  Object.defineProperty(this.prototype, "constructor", {
    enumerable: false,
    writable: true,
    value: this,
  });
}

export function __instanceOf(Parent) {
  if (!(typeof Parent === 'function' && Parent.prototype.constructor == Parent)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  let __proto__ = this.__proto__;
  while(__proto__) {
    if(__proto__ === Parent.prototype) {
      return true;
    }
    __proto__ = __proto__.__proto__;
  }
  return false;
}