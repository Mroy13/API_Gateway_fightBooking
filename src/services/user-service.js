const StatusCode=require('http-status-codes');
const {userRepository}=require('../repositories');
const Apperror=require('../utils/error/App-error');

const UserRepository=new userRepository();


async function createUser(data){
   // console.log(data);
    try {
        const user = await UserRepository.create(data);
        return user;
    }
    //client side errorHandling
    catch (error) {
      //  console.log(error);
        if (error.name == 'SequelizeValidationError' || error.name=='SequelizeUniqueConstraintError') {
            const explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });

            throw new Apperror(explanation, StatusCode.BAD_REQUEST);
        }
        //server side error handling
        else {
            throw new Apperror("request not resolved due to server side probelem", StatusCode.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports={
  createUser,

}