import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    number: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    passwordHash: {type: DataTypes.STRING, allowNull: false},
});

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    imgUrl: {type: DataTypes.STRING, allowNull: true},
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
});

const SelectedProduct = sequelize.define('selectedProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
});

const ProductType = sequelize.define('productType', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
});

const ProductBrand = sequelize.define('productBrand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
});

User.belongsToMany(Product, {through: SelectedProduct});
Product.belongsToMany(User, {through: SelectedProduct});

SelectedProduct.belongsTo(Product, {foreignKey: 'productId'});

Product.belongsToMany(Type, {through: ProductType});
Type.belongsToMany(Product, {through: ProductType});

ProductType.belongsTo(Product, {foreignKey: 'productId'});

Product.belongsToMany(Brand, {through: ProductBrand});
Brand.belongsToMany(Product, {through: ProductBrand});

ProductBrand.belongsTo(Product, {foreignKey: 'productId'});

Product.belongsTo(Type, {foreignKey: 'typeId'});
Product.belongsTo(Brand, {foreignKey: 'brandId'});

export {
    User, Product, Type, Brand, SelectedProduct, ProductType, ProductBrand
};