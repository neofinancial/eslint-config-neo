const configBaseNext = require('./config-base-next');
const configBackend = require('./config-backend');

module.exports = [
  ...configBaseNext,
  ...configBackend.slice(1), // Skip the base config since it's already included in configBaseNext
];
