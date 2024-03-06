export const storeData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeData = async (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {}
};

export const removeAllData = async () => {
  try {
    localStorage.clear();
  } catch (e) {}
};
