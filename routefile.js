const express = require('express');

const inter = express.Router();

const {
    DataG, DataSg, DataPo, DataPu, DataD
}= require('../olaexpress/picker')

inter.route('/').get(DataG).post(DataPo)
inter.route('/:id').get(DataSg).put(DataPu).delete(DataD)


module.exports = inter