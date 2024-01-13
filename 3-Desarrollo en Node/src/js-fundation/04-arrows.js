const users = [
  {
    id: 1,
    name: "Juan",
  },
  {
    id: 2,
    name: "Alberto",
  },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  user ? callback(null, user) : callback(`Usuario no encontrado ${id}`);
};


module.exports = {
  getUserById,
};
