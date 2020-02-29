import moment from 'moment';

const USER_DATA = 'superfood-userData';
const History_Storage = 'historyStorage';

function isExpired(time: any) {
  const now = moment();
  const checkedTime = moment(time);

  if (!checkedTime.isValid()) return true;
  if (now.isAfter(checkedTime)) return true;

  return false;
}

export const HistoryStorage = {
  setData(res: any) {
    localStorage.setItem(History_Storage, JSON.stringify(res));
  },
  clearData() {
    localStorage.removeItem(History_Storage);
  },
  getHistory() {
    const storedData = JSON.parse(localStorage.getItem(History_Storage)|| '');
    return storedData;
  }
};

export const LoginStorage = {
  setData(res: any, remember: any) {
    remember ? localStorage.setItem(USER_DATA, res) : sessionStorage.setItem(USER_DATA, res);
  },
  clearData() {
    localStorage.removeItem(USER_DATA);
    sessionStorage.removeItem(USER_DATA);
  },

  authenticated() {
    const storedData = JSON.parse(localStorage.getItem(USER_DATA)|| '{}') || JSON.parse(sessionStorage.getItem(USER_DATA)|| '{}');
    if (!storedData) return null;
    if (isExpired(storedData.expires_on)) return null;
    return storedData;
  }
};
