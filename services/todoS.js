const models = require('../models/todoM')
const {v4 : uuid} = require("uuid")


module.exports = {
    createtodo : async (body) => {
        try {
            body.id = uuid();
            const todo = await models.createtodo(body)
            if(todo.error){
                return{
                    error : todo.error
                }
            }
            return{
                response : todo.response
            }
        } catch (error) {
            return {
                error : {
                    error : error.message,
                    fileName: "todoS"
                }
            }
        }
    }
}