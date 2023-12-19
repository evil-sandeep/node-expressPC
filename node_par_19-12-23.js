// Question: Create a Basic API with Express
const express = require('express');
const bodyParser = require('body-parser');
const nodemon=require('nodemon')

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define your array of books
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
  { id: 4, title: 'Book 4', author: 'Author 4' },
  { id: 5, title: 'Book 5', author: 'Author 5' },
  // Add more books as needed
];

// Define your routes here
app.get('/api/books',(req,res)=>{
res.send('List Of Products '+JSON.stringify(books))
})

app.get('/api/books/:id',(req,res)=>{
    //it access url books id 
    const bookid=parseInt(req.params.id)
//and here we use of this id find in books
    const book=books.find(b=> b.id===bookid);

    if(!books){
        res.status(404).send("Not Found")
        return
    }
    res.send('Product Details'+ JSON.stringify(book))

})

app.post('/api/books',(req,res)=>{
    const newBook=req.body;
    newBook.id=books.length+1
    books.push(newBook)
    res.status(201).json(newBook);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
