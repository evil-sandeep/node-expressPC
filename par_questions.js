// Question: Create a middleware that logs the IP address, method, and path of every incoming request.
// const express = require('express');
const nodemon = require('nodemon');
// const app = express();


// // Your middleware function here
// // It should log the IP address, method, and path of every incoming request

// app.use((req,res,next)=>{
//     const {ip,method,path}=req;
//     console.log(`[${new Date().toISOString()}], IP:${ip},method:${method},path:${path}`)
//     next();
// })

// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.get('/greet/:name', (req, res) => {
//   const { name } = req.params;
//   res.send(`Hello, ${name}!`);
// });

// // Start the server on port 3000
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


//Question: Create an Express application that uses a template engine to render a dynamic HTML page. The page should display a greeting message with the user's name.

// const express=require('express')
// const app=express();

// app.set('view engine', 'ejs')

// app.get('/greet/:name',(req,res)=>{
//   const {name}=req.params
//   res.render('gretting',{name})
// })

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// Implement a middleware that logs an error message if a route is accessed with an invalid parameter. Additionally, create a custom error handler middleware to handle and respond to these errors.
// const express=require('express')
// const app=express()

// app.use((err,req,res,next)=>{
//     console.error(`Error Message ${err.message}`)
//     res.status(500).send('internal Server error')
// })

// app.get('/greet/:name',(req,res,next)=>{
//     const {name}=req.params

//     if(!isValidName(name)){
// const error=new Error('invalid parameter:name must can only letters')
// next(error);
// return;
//     }
//     res.send(`hello ${name}`)
// })


// app.use((req,res,next)=>{
//     res.status(400).send(`Bad request: ${err.message}`)
// })

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// function isValidName(name) {
//     return /^[a-zA-Z]+$/.test(name);
//   }


// Question: Create an Express application that displays a list of products. Implement two routes: one for displaying all products and another for displaying details of a specific product.

const express = require('express');
const app = express();

// Sample data: array of products
const products = [
  { id: 1, name: 'Product A', price: 20 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 25 },
];

// Route to display all products
app.get('/products', (req, res) => {
  res.send('List of Products: ' + JSON.stringify(products));
});

// Route to display details of a specific product
app.get('/products/:id', (req, res) => {
  // Extract the product ID from the request parameters
  const productId = parseInt(req.params.id);

  // Find the product with the matching ID
  const product = products.find(p => p.id === productId);

  // Check if the product exists
  if (!product) {
    // If not found, send a 404 Not Found status and a message
    res.status(404).send('Product not found');
    return;
  }

  // If found, send the details of the product
  res.send(`Product Details: ${JSON.stringify(product)}`);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
