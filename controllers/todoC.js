const {createtodo} = require("../services/todoS")

module.exports = {
    createTodo : async (req, res) => {
        try {
            const todo = await createtodo(req.body);
            return res.send({
                response : todo.response
            })
        } catch (error) {
            return res.send({
                error : {
                    error : error.message,
                    fileName : "Todo Controller"
                }
            })
        }
        
    }
}