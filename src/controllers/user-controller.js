const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const {userService}=require('../services');
async function createUser(req, res) {
    try {
           const userInfo = await userService.createUser({
                  userName: req.body.userName,
                  email: req.body.email,
                  password:req.body.password
           });
           SuccessResponse.data = userInfo;
           return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse);
    }
    catch (error) {
          // console.log(error);
           ErrorResponse.error = error;
           return res
                  .status(error.statusCode)
                  .json(ErrorResponse);
    }


}

module.exports={
    createUser,
}