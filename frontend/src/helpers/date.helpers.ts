/**
 * Formats a given date into a human-readable string.
 * If no date is provided, an empty string is returned.
 *
 * @param {Date} [date] - The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date?: Date): string => {
  if (!date) return '';
  return new Date(date).toDateString();
};

/**
 * Adds a specified number of months to a given date.
 * If no date is provided, the current date is used.
 *
 * @param {number} x - The number of months to add.
 * @param {Date} [date] - The date to which months will be added.
 * @returns {Date} The new date after adding the specified months.
 */
export const addxMonths = (x: number, date?: Date) => {
  const d = date ? new Date(date) : new Date();
  d.setMonth(d.getMonth() + x);
  return d;
};

/**
 * Retrieves the month and year information from a given date.
 *
 * @param {Date} date - The date from which to extract month and year.
 * @returns {{ month: string, monthNumber: number, year: number }} An object containing the month name, month number, and year.
 */
export const getMonthYearObject = (date: Date) => {
  return {
    month: date.toLocaleString('default', { month: 'long' }),
    monthNumber: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};
