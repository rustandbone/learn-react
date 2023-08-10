
// 이름 내보내기 (named export)
export const getRandom = (n) => Math.round(Math.random() * n);

const getRandomMinMax = (min = 0, max = 100) =>
  getRandom(max - min) + min;

// 기본 내보내기 (default export)
export default getRandomMinMax;