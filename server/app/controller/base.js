/**
 * 公共controllera
 */

const { Controller } = require("egg");


class BaseController extends Controller {
    success(data){
        this.ctx.body={
            code:1,
            data,
            msg:"成功"
        }
    }

    error(){
        this.ctx.body={
            code:0,
            data:null,
            msg:"失败"
        }
    }


}

module.exports=BaseController