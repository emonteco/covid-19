export const getNumberString = (number) => ((typeof number === 'number') ? number : '-');

export const getPercentageString = (value, total) => (typeof value === 'number' && typeof total === 'number' && `(${((value / total) * 100).toFixed(2)}%)`);
