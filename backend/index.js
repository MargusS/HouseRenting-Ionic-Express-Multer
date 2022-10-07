const express = require('express');
const cors = require("cors");
let path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./models');

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
})

// app.get("/", (req, res) => {
//   res.json({ message: "Hello Express" });
// })

require('./routes/house.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})