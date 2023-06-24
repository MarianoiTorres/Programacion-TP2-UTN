
const { newUser, getUser } = require('../controllers/userController')

const createUser = async (req, res) => {
    try {
        const { name, surname, email, password } = req.body
        const user = await newUser( name, surname, email, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUserToLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await getUser(email, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createUser,
    getUserToLogin
}