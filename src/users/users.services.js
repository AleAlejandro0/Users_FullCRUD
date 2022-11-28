const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
   usersControllers.findAllUsers()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getUserById = (req, res) => {
   const id = req.params.id
   usersControllers.findUserById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(404).json({message: 'User not found'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body

    usersControllers.createUser({first_name, last_name, email, password, birthday })
      .then(newUser => {
        res.status(201).json(newUser)
      })
      .catch(err => {
        res.status(400).json({
          message: "invalid data",
          fields: {
            first_name: "*",
            last_name: "*",
            email: "*",
            password: "*",
            birthday: ""
          }
        })
      })
}

const patchUser = (req, res) => {
   const id = req.params.id 
   const {first_name, last_name, email, password, birthday} = req.body

   usersControllers.updateUser(id,  {first_name, last_name, email, password, birthday})
    .then(updateData => {
      if(updateData){
       res.status(200).json({message: `Data user has been update at id: ${id}`})
      }else{
       res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteUser = (req, res) => {
   const id = req.params.id

   usersControllers.deleteUser(id)
     .then(deleteUser => {
       if(deleteUser){
         res.status(204).json({message: 'User has been deleated'})
       }else{
         res.status(404).json({message: 'Invalid ID'})
       }
     })
     .catch(err => {
        res.status(400).json({message: err.message})
     })
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser
}


