const users= [
    {
        id:1,
        name: 'Juan'
    },
    {
        id:2,
        name:'Alberto'
    }
]

function getUserById(id, callback){
  const user = users.find(function(user){
        return user.id===id
    })
    if(!user){
        return callback(`Usuario no encontrado ${id}`)
    }

    return callback(null, user)
    // console.log({user})
}
// getUserById(1)

module.exports={
getUserById
}