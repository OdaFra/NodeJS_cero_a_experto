const { v4: uuidv4 } = require("uuid");

const getUuid = (uuid) => {
  return uuidv4();
};

module.exports = {
  getUuid,
};
