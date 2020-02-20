/* eslint-disable */
export const stripBadAttributes = element => {
  if (typeof element === "string") {
    const newElement = element
      .replace(/target=\"[^\"]*\"/g, "")
      .replace(/style=\"[^\"]*\"/g, "")
      .replace(/style='[^']*'/g, "")
      .replace(/onclick=\"[^\"]*\"/g, "")
      .replace(/type=\"[^\"]*\"/g, "")
      .replace(/shape=\"[^\"]*\"/g, "");
    return newElement;
  }
  return element;
};
