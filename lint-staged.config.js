module.exports = {
  '*.{ts,js}': 'prettier --write',
  '*': ['./node_modules/@neofinancial/neo-precommit/check.sh'],
};
