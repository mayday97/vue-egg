const BaseController = require('./base')

class UserController extends BaseController{
    async userInfo(){
        const {ctx}=this
        // console.log(this.ctx.query);
        try{
            // setTimeout(() => {
            //     this.success({
            //         user_name:'xy',
            //         user_age:23,
            //         sex:'male'
            //     })
            // }, 1000);
            // this.success({
            //     user_name:'xy',
            //     user_age:23,
            //     sex:'male'
            // })
            const userInfo=await this.app.mysql.get('user', {id:1});
            console.log(userInfo);
            this.success({
                ...userInfo
            })
            return true
        }catch(error){
            console.log(error);
            return false
        }
        
    }

    async editInfo(){
        const {ctx}=this
        const ret=ctx.request.body 
        this.success('成功')
        
    }
}
module.exports = UserController;
