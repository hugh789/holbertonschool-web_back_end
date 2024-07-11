const util = require('util');

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  [util.inspect.custom]() {
    return `${this.constructor.name} [${this._code}] { _name: '${this._name}', _code: '${this._code}'}`;
  }

  toString() {
    const to = typeof this;
    return `[${to} ${this._code}]`;
  }
}