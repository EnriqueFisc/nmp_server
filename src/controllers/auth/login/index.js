const express = require('express');
const passwordEncrypter = require('bcrypt');

const UserCollection    = require('../../../models/users');
const { getTokenByServiceToken } = require('../../../utils/getToken');

const userLogin = async(req = express.request, res, next ) => {

    const { body } = req;
    try {
        const userQuery = UserCollection.where({email: body.email});
        const user = await userQuery.findOne();

        if( !user ) {
            console.log('user not exists');
            return res.status(200)
            .json({
                ok: false,
                msg: "Incorrect email or password"
            });
        }

        const samePassword = passwordEncrypter.compareSync(body.password, user.password)
        if (!samePassword) {
            console.log('contrase;as no iguales');
            return res.status(200).json({
                ok: false,
                msg: 'Incorrect email or password'
            });
        }

        const tokenResponse = await getTokenByServiceToken(user);
        const token = await tokenResponse.json();

        return res.status(200).json({
            ok: true,
            user: user,
            token: token.data
        });
    } catch (error) {
        console.error(error)
        return res.status(400)
            .json({
                ok: false,
                msg: 'Someting went wrong'
            });
    }



}

module.exports = {
    userLogin
};