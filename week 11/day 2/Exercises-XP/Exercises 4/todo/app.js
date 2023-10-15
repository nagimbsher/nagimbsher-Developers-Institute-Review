const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use(express.static('htt'))
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res, next) {
	res.render('home.ejs');
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});












// const e = require('express')
// const express = require('express')
// const app = express()
// const port = 3000

// app.use("/", express.static +"/index.html")
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })