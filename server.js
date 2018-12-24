const express = require('express');
const App = express();
const path = require('path');


App.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})


App.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/bundle.js'))
})

App.listen(3000, () => {
    console.log('Listening for requests on port 3000')
})