const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    total: {
        type: Sequelize.FLOAT,
        defaultValue: 0.00,
        validate: {
            min: 0.00
        }
    },
})

module.exports = Cart;
