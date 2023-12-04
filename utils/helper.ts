export const getPageNum = (url: string) => {
  return Number(url.split('?=')[1]);
};

export const getMaterialsSentence = (materials: object) => {
  return Object.values(materials).join('');
};
