// Question: Create a Basic API with Express
const express = require('express');
const bodyParser = require('body-parser');

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
app.get('/books',(req,res)=>{

    
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
