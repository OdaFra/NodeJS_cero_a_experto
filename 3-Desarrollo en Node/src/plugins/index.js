const { getAge } = require("../plugins/get-age.plugin");
const { getUuid } = require("../plugins/uuid.plugin");
const { http } = require("../plugins/http-clients.plugin");

module.exports = {
  getAge,
  getUuid,
  http,
};
