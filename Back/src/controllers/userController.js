const { User } = require('../db')

const newUser = async ( name, surname, email, password) => {
    if (!name || !surname || !email || !password) throw Error('todos los campos son obligatorios')

    const userCreated = await User.create({
        name,
        surname,
        email,
        password
    })

    return userCreated
}

const getUser = async (email, password) => {
    const user = await User.findAll({
        where:
        {
            email: email,
            password: password
        }
    })
    return user

}

module.exports = {
    newUser,
    getUser
}