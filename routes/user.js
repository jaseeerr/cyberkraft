var express = require('express');
var router = express.Router();
const userController = require('../controller/user-controller')
const userHelper = require('../helpers/userHelper')
const auth = require('../authentication/auth-user')

/* GET users homepage. */
router.get('/',userController.homepage);

/* GET users login. */
router.get('/login',userController.userlogin);

/* POST users login. */
router.post('/login_submit',userController.postuserlogin);

/* GET users logout. */
router.get('/logout',userController.userlogout);

/* GET users signup. */
router.get('/signup',userController.usersignup);

/* POST users signup. */
router.post('/signup_submit',userController.postusersignup);

/* GET users profile. */
router.get('/profile',auth.userAuthentication,userController.userprofile);



module.exports = router;
