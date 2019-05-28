exports.upperCamelCaseToLowerCamelCase = (word) => {
  return word.replace(/([A-Z])/g, (match, another, index) => index === 0 ? match.toLowerCase() : match);
};