const express = require('express')
const app = express()

app.listen(8080, ()=>{
    console.log('http://localhost:8080에서 서버 실행중')
})

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/angel_home.html')
})
