export default class counter {
    constructor() {
        this._value = 1;
    }

    getValue() {
        return this._value;
    }
    incrementValue() {
        return this._value += 1;
    }
}

