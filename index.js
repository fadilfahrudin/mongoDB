const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./router/userRouter')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(userRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


