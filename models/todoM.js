const {models} = require("./index")

module.exports = {
    createtodo :async (body) => {
        try {
            const todo = await models.todo.create({
                ...body
            })
            return {
                response : todo
            }
        } catch (error) {
            return {
                error : {
                    error : error.message,
                    fileName : "todoM"
                }
            }
        }
        
    }
}