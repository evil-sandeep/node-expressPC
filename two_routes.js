const express=require('express');
const app=express();


app.use((req,res,next)=>{

    const timeStamp=new Date().toISOString();
    const method=req.method
    console.log(`[${timeStamp}] ${method} request received for ${req.originalUrl}`);
    next;

})

app.get('/',(req,res)=>{
    res.send("Hello WOrld")
})

app.get('/greet/:name',(req,res)=>{
const {name}=req.params;
res.send(`hello ${name}`)
})



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});