// Question: Create a Basic API with Express
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// // Define your array of books
// const books = [
//   { id: 1, title: 'Book 1', author: 'Author 1' },
//   { id: 2, title: 'Book 2', author: 'Author 2' },
//   { id: 3, title: 'Book 3', author: 'Author 3' },
//   { id: 4, title: 'Book 4', author: 'Author 4' },
//   { id: 5, title: 'Book 5', author: 'Author 5' },
//   // Add more books as needed
// ];

// // Define your routes here
// app.get('/api/books',(req,res)=>{
// res.send('List Of Products '+JSON.stringify(books))
// })

// app.get('/api/books/:id',(req,res)=>{
//     //it access url books id 
//     const bookid=parseInt(req.params.id)
// //and here we use of this id find in books
//     const book=books.find(b=> b.id===bookid);

//     if(!books){
//         res.status(404).send("Not Found")
//         return
//     }
//     res.send('Product Details'+ JSON.stringify(book))

// })

// app.post('/api/books',(req,res)=>{
//     const newBook=req.body;
//     newBook.id=books.length+1
//     books.push(newBook)
//     res.status(201).json(newBook);
// })

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// ----------------------------------------------------------------------------------------------------
// Question: Middleware and Error Handling
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// app.use((req, res, next) => {
//     console.log(`[${new Date().toISOString()} ${req.method}Request recevied ${req.path}Present]`)
//     next()
// });

// app.use((req, res, next) => {
//     const authorizationHeder = req.get('Authorization')

//     if (authorizationHeder) {
//         console.log(`Authorization present ${authorizationHeder}`)
//     } else {
//         console.log('authorization is not present')
//     }
//     next();
// })

// app.get('/api/error', (req, res) => {
//     try {
//         throw new Error('Internal Server Error')
//     } catch (error) {
//         next(error);
//     }
// })

// app.use((err, req, res, next) => {
//     console.error(`Error : ${err.message}`)
//     res.status(500).json({ error: 'Internal server error' })
// })

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

//----------------------------------------------------------------------------------------------------------

// Create a simple Express.js server with a" single API endpoint that returns a list of books. "Assume the list of books is an array of objects, each containing a title and an author. The endpoint should be accessible at http://localhost:3001/books.

// const express = require('express')
// const app = express()
// const port = 3001;

// const books = [
//     { id: 1, title: 'book1', author: 'author1' },
//     { id: 2, title: 'book2', author: 'author2' }
// ]

// app.get('/books', (req, res) => {
//     res.json(books)
// })

// app.get('/books/:id', (req, res) => {
//     const booksId = parseInt(req.params.id)
//     const book = books.find(b => b.id === booksId)
//     if (!book) {
//         res.status(400).send('Books not find in api')
//         return
//     }
//     res.json(book)
// })

// app.listen(port, () => {
// console.log(`Server is running on http://localhost:${port}`);
// });

//--------------------------------------------------------------------------------------
// Question 4: MongoDB and Mongoose

// Assuming you have MongoDB installed locally and the Mongoose npm package installed in your project, your task is to create a simple Mongoose model for a "Task" with fields title and description. Then, create a route in your Express.js application that fetches all tasks from the MongoDB database and returns them as JSON.

// const express = require('express')
// const mongoose = require('mongoose')

// const app = express();
// const port = 3001;

// mongoose.connect('mongodb://localhost:27017/task_db', { useNewUrlParser: true })
// const db = mongoose.connection;
// // console.log(db)

// const taskSchema = new mongoose.Schema({
//     title: String, 
//     description: String
// })

// const Task = mongoose.model('Task', taskSchema)

// app.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find()
//         res.json(tasks)
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//         res.status(500).send('Internal server error')
//     }
// })
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

//-=========================================================================================================================================
// Q.Express.js and MongoDB CRUD Operations

// Create an Express.js application that performs CRUD (Create, Read, Update, Delete) operations on a simple entity, let's say "Task". Define routes for the following operations:
// const express = require('express')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')

// const app = express()
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/task_db',  { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection
// db.on('error', () => {
//     console.log('Mongodb connect error')
// })
// db.once('open', () => {
//     console.log("mongodb success connect")
// })

// const taskSchema = mongoose.Schema({
//     title: String,
//     description: String
// })

// const Task = mongoose.model('Task', taskSchema)



// // Create a Task
// app.post('/tasks', async (req, res) => {
//     try {
//         const newTask = new Task(req.body)
//         await newTask.save()
//         res.status(201).send('Data save success' + newTask)
//     } catch (err) {
//         // throw new Error(err.message)
//         res.status(500).json({ err: 'Internal server error' })
//     }
// })

// //Read Task
// app.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find();
//         res.json(tasks)
//     } catch (error) {
//         res.status(500).send({ error: 'Internal server error' })
//     }
// });

// // Read a Task by ID
// app.get('/tasks/:id', async (req, res) => {
//     try {
//         const taskId = req.params.id
//         const task = await Task.findById(taskId)
//         if (!task) {
//             res.status(404).json({ error: "Task Not found" })
//             return
//         }
//         res.json(task)
//     } catch (error) {
//         res.status(500).send({ error: 'Server error' })
//     }
// });



// // Update a Task by ID

// app.put('/tasks/:id', async (req, res) => {
//     try {
//         const updateTask =await Task. findByIdAndUpdate(req.params.id, req.body, { new: true })

//         if (!updateTask) {
//             res.status(404).json({ error: "Task Not found" })
//             return
//         }
//         res.json(updateTask)
//     } catch (error) {
//         res.status(500).send({ error: 'Server error' })
//     }
// });

// //Delete a task by id
// app.delete('/tasks/:id', async (req, res) => {
//     try {
//         const deleteTask = await Task.findByIdAndDelete(req.params.id)
       
//         if (!deleteTask) {
//             res.status(404).json({ error: "Task Not found" })
//             return
//         }
// res.json(deleteTask)
//     } catch (error) {
//         res.status(500).send({ error: 'Server error' })
//     }
// });

// app.listen(3005,()=>{
//     console.log("app run ")
// })
