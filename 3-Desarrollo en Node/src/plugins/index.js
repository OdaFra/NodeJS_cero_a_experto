const { getAge } = require("../plugins/get-age.plugin");
const { getUuid } = require("../plugins/uuid.plugin");
const { http } = require("../plugins/http-clients.plugin");
const buildLogger = require('../plugins/logger.plugins')

module.exports = {
  getAge,
  getUuid,
  http,
  buildLogger
};
