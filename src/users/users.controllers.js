
const Users = require('../models/users.models')

const findAllUsers = async () => {
  const data = await Users.findAll()
  return data
}

const findUserById = async (id) => {
  const data = await Users.findOne({
    where : {
     id: id
    }
  })
  return data 
}

const createUser =  async (obj) => {
  const newUser = await Users.create({
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday
  }
 )
  return newUser
}

const updateUser = async (id, obj) => {
  const updateData = await Users.update(obj, {
    where : {
      id: id
    }
  })
  return updateData[0]
}

const deleteUser = async (id) => {
  const deleteUser = await Users.destroy({
    where: {
      id: id
    }
  }) 
  return deleteUser
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser
}


