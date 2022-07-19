import {app} from './app';
import createProducts from './endpoints/CreateProducts';
import createPurchases from './endpoints/CreatePurchases';
import createUser from './endpoints/CreateUser';
import getAllProducts from './endpoints/GetAllProducts';
import getAllUsers from './endpoints/GetAllUsers';
import getUserPurchases from './endpoints/GetUserPurchase';

//Create User
app.post('/users', createUser);
//Create Products
app.post('/products', createProducts)
//Get All Users
app.get('/users', getAllUsers);
//Get All Products
app.get('/products', getAllProducts)
//Create Purchases
app.post('/purchases', createPurchases)
//Get User Purchases
app.get('/users/:user_id/purchases', getUserPurchases )