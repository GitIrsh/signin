const Joi = require('@hapi/joi');

const userSchema = Joi.object({
    userName:  Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    DOB: Joi.date().less('30-08-2022').required(),
    userPassword: Joi.string().min(5).max(15).required()
})

module.exports={
    userSchema
}