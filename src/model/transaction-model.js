const { DataTypes } = require('sequelize');
const sequelize = require('./db-config');

const Transaction = sequelize.define(
  'Transaction',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    price_per_unit: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
  },
  {
    tableName: 'transactions',
    timestamps: false,
  }
);

module.exports = Transaction;
