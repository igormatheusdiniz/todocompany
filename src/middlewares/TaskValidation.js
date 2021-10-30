const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {

    const { macaddress, type, tittle, description, when } = req.body;

    if (!macaddress)
        return res.status(400).json({ error: 'macaddress é obrigatório' });
    else if (!type)
        return res.status(400).json({ error: 'type é obrigatório' });
    else if (!tittle)
        return res.status(400).json({ error: 'tittle é obrigatório' });
    else if (!description)
        return res.status(400).json({ error: 'description é obrigatório' });
    else if (!when)
        return res.status(400).json({ error: 'when é obrigatório' });
    else {

        let exists;

        if (req.params.id) {
            exists = await TaskModel.findOne({
                '_id': { '$ne': req.params.id },
                'when': { '$eq': new Date(when) },
                'macaddress': { '$in': macaddress }

            });

        }
        else { 
        if (isPast(new Date(when)))
            return res.status(400).json({ error: 'Escolha uma data futura' });    
        exists = await TaskModel.findOne({
            'when': { '$eq': new Date(when) },
            'macaddress': { '$in': macaddress }

        });
    }
    if (exists)
        return res.status(400).json({ error: 'Já existe uma atividade cadastrada para você' });

    next();
    }
}

module.exports = TaskValidation;