export const getItem = (key) => {
  const data = localStorage.getItem(key);
  if(!data) {
    return;
  }
  return JSON.parse(data);
}

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}