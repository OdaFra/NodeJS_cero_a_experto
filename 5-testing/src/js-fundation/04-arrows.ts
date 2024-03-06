interface Usuario {
  id: number,
  name: string
}

const Usuario: Usuario[] = [
  {
    id: 1,
    name: "Juan",
  },
  {
    id: 2,
    name: "Alberto",
  },
];

export const getUserById = (id: number,
  callback: (err?: string, Usuario?: Usuario) => void) => {
  const user = Usuario.find((usuario) =>
    usuario.id === id);

  user ? callback(undefined, user) : callback(`Usuario no encontrado ${id}`);
};


module.exports = {
  getUserById,
};
