const TaskModel = require('../model/TaskModel');

const MacAddressValidation = (req,res,next) => {

    if(!req.body.macaddress)
    return res.status(400).json({error: 'MacAddress é obritario'});
    else
    next();

}

module.exports = MacAddressValidation;