const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.filter(item => typeof item === 'string')
                .map(item => item.trim().toUpperCase())
                .sort()
                .map(item => item[0])
                .join('');
};