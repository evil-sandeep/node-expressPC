const bodyParser = require('body-parser')
const express=require('express')
const app =express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

app.get('/form',(req,res)=>{
 res.send(`
 <form method="post" action="/form">
 <label for="name">Name:</label>
 <input type="text" id="name" name="name" required>
 <br>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
<br>

<input type="submit" value="submit">
</form>
 `
  );
});



app.use('/form',(req,res)=>{
    const {name,email}=req.body;
    console.log(`Your Name is ${name} and You have ${email} this email`)
    res.send('From Submitted Successfully')
})


const port = 30000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});