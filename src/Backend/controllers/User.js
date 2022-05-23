const userService = require('../services/User')
require('express-async-errors')

const createUser = (req, res) => {

    const { name, email, password, bornDate, gender, cpf, phoneNumber, curriculum, typeOfUser } = req.body;

    console.log(typeOfUser)

    const user = new userService.User(name, email, password, bornDate, gender, cpf, phoneNumber, typeOfUser);

    user.generateUser().then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                error: resul.message
            })
        } else {
            res.status(200).json({
                message: resul.message
            })
        }
    });

    return user
}

const AuthUser = (req, res) => {
    const { email, password } = req.body;

    const user = new userService.User();

    user.Authentication(email, password).then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                error: resul.message
            })
        } else {
            res.status(200).json({
                message: resul.message,
                token: resul.token
            })
        }
    });
}

const UpdateUser = (req, res) => {
    const { id, name, email, password, bornDate, gender, cpf, phoneNumber, curriculum, typeOfUser } = req.body;

    const user = new userService.User();

    user.updateUser(id, name, email, password, bornDate, gender, cpf, phoneNumber, curriculum, typeOfUser).then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                error: resul.message
            })
        } else {
            res.status(200).json({
                message: resul.message,
            })
        }
    })
}

const deleteUser = (req, res) => {
    const { id } = req.body;

    const user = new userService.User();

    user.deleteUser(id).then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                error: resul.message
            })
        } else {
            res.status(200).json({
            })
        }
    })
}

const verifyCurriculum = (req, res) => {
    const { id } = req.body;

    const user = new userService.User();

    user.verifyCurriculum(id).then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                error: resul.message
            })
        } else {
            res.status(200).json({
                message: resul.message,
                haveCurriculum: resul.haveCurriculum
            })
        }
    })
}

const updatePermission = (req, res) => {
    const { id, isAdmin } = req.body;

    const user = new userService.User();

    user.changeUserPermission(id, isAdmin).then((resul) => {
        if(resul.type === "error") {
            res.status(500).json({
                error: resul.message
            })
        } else {
            res.status(200).json({
                message: resul.message,
            })
        }
    })
}

module.exports = {
    createUser, AuthUser, UpdateUser, deleteUser, verifyCurriculum, updatePermission
}