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
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()} ${req.method}Request recevied ${req.path}Present]`)
    next()
});

app.use((req, res, next) => {
    const authorizationHeder = req.get('Authorization')

    if (authorizationHeder) {
        console.log(`Authorization present ${authorizationHeder}`)
    } else {
        console.log('authorization is not present')
    }
    next();
})

app.get('/api/error', (req, res) => {
    try {
        throw new Error('Internal Server Error')
    } catch (error) {
        next(error);
    }
})

app.use((err, req, res, next) => {
    console.error(`Error : ${err.message}`)
    res.status(500).json({ error: 'Internal server error' })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

