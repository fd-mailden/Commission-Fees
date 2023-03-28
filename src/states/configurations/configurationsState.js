class _configurationsState {
  constructor() {
    this.configs = {};
  }

  set(type, date) {
    this.configs[type] = date;
  }

  get(type) {
    return this.configs[type];
  }
}

export const configurationsState = new _configurationsState();
