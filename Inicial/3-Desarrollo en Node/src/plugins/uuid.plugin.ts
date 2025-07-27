// const { v4: uuidv4 } = require("uuid");

import { v4 as  uuidv4 } from 'uuid';

export const getUuid = () => {
  return uuidv4();
};

// module.exports = {
//   getUuid,
// };
