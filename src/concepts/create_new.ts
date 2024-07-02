function create_new() {
  const obj = {};
  const Constructor = [].shift.call(arguments);
  let result;
  try {
    // @ts-ignore
    obj.__proto__ = Constructor.prototype;
    result = Constructor.apply(obj, arguments);
  } catch (e) {
    console.error('Constructor is not a function');
  }

  return typeof result === 'object' ? result : obj
}

function Ninja(weapon) {
  this.weapon = weapon
}
// @ts-ignore
let ninja = create_new(Ninja, 'gang')
console.log('msg', ninja.weapon);
