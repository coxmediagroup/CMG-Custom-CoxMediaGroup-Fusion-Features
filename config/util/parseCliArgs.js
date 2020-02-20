module.exports = function(rawArgs) {
  const { original } = rawArgs;
  if (original) {
    const parsed = original.reduce((acc, el) => {
      if (el.startsWith("--")) {
        acc.push(el.substring(2));
      }
      return acc;
    }, []);
    if (parsed.length > 0) return parsed;
  }
  return null;
};
