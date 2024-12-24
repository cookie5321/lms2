const express = require('express')
const app = express();
const port = 3000;

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));