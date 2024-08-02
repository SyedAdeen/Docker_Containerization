const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/:username/:age',userController.postUser); 

router.get('/getuser',userController.getUser);
    
router.put('/update/:id/:age',userController.editUser);

router.delete('/delete/:id', userController.deleteUser);

router.get('/getCar/:username', userController.getUserCar);

router.get('/userage',userController.getuserAge);

router.get('', userController.maxAge);

router.get('/paging/:page/:limit',userController.paging);

router.get('/getcity/:username',userController.getusercity);





module.exports = router;
