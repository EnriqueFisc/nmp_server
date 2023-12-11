const { userLogin } = require('../controllers/auth/login');
const { usersRegistration } = require('../controllers/auth/register');

const route = require('express').Router();


/**
 * @openapi
 * /users:
 *   post:
 *     tags:
 *       - Creacion de usuario
 *     parameters:
 *       - in: body
 *         name: user data
 *         schema:
 *           type: object 
 *           properties:
 *              name: 
 *                  type: string
 *                  example: Enrique
 *              lastname: 
 *                  type: string
 *                  example: Fischer
 *              email: 
 *                  type: string
 *                  example: jorge@mail.com
 *              password:       
 *                  type: strgin
 *                  example: my secret password shhh
 *         description: User create
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object 
 *                   properties:
 *                      name: 
 *                          type: string
 *                          example: Enrique
 *                      lastname: 
 *                          type: string
 *                          example: Fischer
 *                      email: 
 *                          type: string
 *                          example: jorge@mail.com
 *                 token:
 *                    type: string 
 *                    exapmle: token
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                    type: boolean
 *                    example: false
 *                 msg:
 *                    type: string 
 *                    exapmle: Something went wrong
 */
route.post('/users', usersRegistration);


/**
 * @openapi
 * /users/auth:
 *   post:
 *     tags:
 *       - Inicio de sesión de usuario
 *     parameters:
 *       - in: body
 *         name: user data
 *         schema:
 *           type: object 
 *           properties:
 *              password:       
 *                  type: strgin
 *                  example: my secret password shhh
 *              email: 
 *                  type: string
 *                  example: jorge@mail.com
 *         description: User login
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object 
 *                   properties:
 *                      name: 
 *                          type: string
 *                          example: Enrique
 *                      lastname: 
 *                          type: string
 *                          example: Fischer
 *                      email: 
 *                          type: string
 *                          example: jorge@mail.com
 *                 token:
 *                    type: string 
 *                    exapmle: token
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                    type: boolean
 *                    example: false
 *                 msg:
 *                    type: string 
 *                    exapmle: Something went wrong
 */
route.post('/users/auth', userLogin)


module.exports = route;