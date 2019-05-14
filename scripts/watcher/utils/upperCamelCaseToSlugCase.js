exports.upperCamelCaseToSlugCase = (word) => {
  return word.replace(/([A-Z])/g, (match) => ` ${match.toLowerCase()}`).trim().replace(/\s/g, '-');
};