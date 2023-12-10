const express = require('express');
const User    = require('../../../models/users');
const passwordEncrympter = require('bcrypt');
const { getTokenByServiceToken } = require('../../../utils/getToken');


// CREATE USER ON DATABASE
const usersRegistration = async( req = express.request, res, next ) => {
    const {
        name,
        lastname,
        email,
        password
    } = req.body;

    // PASSWORD ENCRYPTION
    const saltGenerated = passwordEncrympter.genSaltSync(10);
    const encryptedPassword = passwordEncrympter.hashSync(password, saltGenerated);

    // INSTANCE TO CREATE USER
    const userToCreate = new User({
        name,
        lastname,
        email,
        password: encryptedPassword
    });

    try {

        // SAVING USER ON DATABASE
        const userCreated = await userToCreate.save();

        // GETTING USER TOKEN TO LOGIN USER IN APP
        const response = await getTokenByServiceToken(userCreated);
        const token = await response.json()

        // SENDING RESPONSE
        return res.status(200)
            .json({
                ok: true,
                msg: 'User created successful',
                token: token.data
            });

    } catch (error) {
        return res.status(400)
            .json({
                ok: false,
                error: 'Something went wrong'
            });
    }

}


module.exports = {
    usersRegistration
}