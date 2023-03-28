class _userStateService {
  constructor() {
    this.users = {};
  }

  getUser(id) {
    return this.users[id];
  }

  addUser(id, date, money) {
    const user = this.getUser(id);
    this.users[id] = {};
    this.users[id].transaction = [];
    this.users[id].transaction =
      user && user.transaction ? [...user.transaction, date] : [date];
    this.users[id].freeCharge = money;
  }
}

export const userStateService = new _userStateService();
