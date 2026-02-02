const configBase = require('./config-base');
const configBaseNext = require('./config-base-next');
const configBackend = require('./config-backend');
const configBackendNext = require('./config-backend-next');
const configFrontend = require('./config-frontend');
const configFrontendNext = require('./config-frontend-next');
const configArchitecture = require('./config-architecture');

module.exports = {
  configBase,
  configBaseNext,
  configBackend,
  configBackendNext,
  configFrontend,
  configFrontendNext,
  configArchitecture,
  // Default export for backward compatibility
  ...configBase,
};
