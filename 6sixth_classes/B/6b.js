const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.get('/form', (req, res) => {
    res.send('<form>input 1 <input type="text" name="input1"><br>input 2 <input type="text" name="input2"><br>input 3 <input type="text" name="input3"><br></form>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})