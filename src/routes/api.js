const express = require('express');
const defaultController = require('../controller/defaultController');
const {
    registerUser,
    loginUser
} = require("../controller/userController");
const {
    createBrand,
    getBrandList
} = require('../controller/brandController');
const {
    createCategory,
    getCategoryList
} = require('../controller/categoryController');
const {
    createCustomer,
    getCustomerList
} = require('../controller/customerController');
const {
    createSupplier,
    getSupplierList
} = require('../controller/supplierController');
const { createExpenseType } = require('../controller/expensetypeController');
const { createExpense, getExpenseList } = require('../controller/expenseController');

const router = express.Router();

/* Application routes */

//? default route api
router.get("/", defaultController);

//todo: user api

//? register a user
router.post("/register-user", registerUser)

//? login a user
router.post("/login-user", loginUser)

//todo: brand api

//? create a brand
router.post("/create-brand", createBrand)

//? get all brand list
router.get("/get-brand-list", getBrandList)

//todo: category api

//? create category
router.post("/create-category", createCategory)

//? get all category list
router.get("/get-category-list", getCategoryList)

//todo: customer api

//? create customer
router.post("/create-customer", createCustomer)

//? get all customer list
router.get("/get-customer-list", getCustomerList)

//todo: supplier api

//? create supplier
router.post("/create-supplier", createSupplier)

//? get all supplier list
router.get("/get-supplier-list", getSupplierList)

//todo: expense type api

//? create expense type
router.post("/create-expense-type", createExpenseType)

//todo: expense api

//? create expense
router.post("/create-expense", createExpense)

//? get expense
router.get("/get-expense-list", getExpenseList)

module.exports = router;