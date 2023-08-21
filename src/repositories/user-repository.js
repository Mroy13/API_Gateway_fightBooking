const { User,Role } = require('../models');
const crudRepository = require('./crud-repository');
class userRepository extends crudRepository {
    constructor() {
        super(User);
    }
    async findUser(data) {
        try {
            const res = await User.findOne({
                where: { email: data }
            });
            return res;
        } catch (error) {
            throw error;
        }
    }
    async addroleTouser(user){
        try {

            const role=await Role.findOne({where:{
                 name:'user'
            }});
             const res=await user.addRole(role);
            // return res;
        } catch (error) {
           // console.log(error);
            throw error;
        }
    }
}

module.exports = userRepository;