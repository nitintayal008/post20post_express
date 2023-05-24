const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const connectDb = require("./config.js");
// const Blog = require("./models/blogModel.js");
// const checkAuthentication = require("./middleware/authMiddleware.js");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// const DATABASE_URL = "mongodb://127.0.0.1:27017";
// connectDb(DATABASE_URL);

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
  },
  {
    id: 3,
    name: "Peter Smith",
    email: "petersmith@example.com",
  },
  {
    id: 4,
    name: "Susan Jones",
    email: "susanjones@example.com",
  },
  {
    id: 5,
    name: "David Williams",
    email: "davidwilliams@example.com",
  },
  {
    id: 6,
    name: "Sarah Brown",
    email: "sarahbrown@example.com",
  },
  {
    id: 7,
    name: "Michael Green",
    email: "michaelgreen@example.com",
  },
  {
    id: 8,
    name: "Emily White",
    email: "emilywhite@example.com",
  },
  {
    id: 9,
    name: "John Black",
    email: "johnblack@example.com",
  },
  {
    id: 10,
    name: "Jane Grey",
    email: "janegrey@example.com",
  },
  {
    id: 11,
    name: "Peter Brown",
    email: "peterbrown@example.com",
  },
  {
    id: 12,
    name: "Susan Green",
    email: "susangreen@example.com",
  },
  {
    id: 13,
    name: "David White",
    email: "davidwhite@example.com",
  },
  {
    id: 14,
    name: "Sarah Black",
    email: "sarahblack@example.com",
  },
  {
    id: 15,
    name: "Michael Grey",
    email: "michaelgrey@example.com",
  },
  {
    id: 16,
    name: "Emily Brown",
    email: "emilybrown@example.com",
  },
  {
    id: 17,
    name: "John Green",
    email: "johngreen@example.com",
  },
  {
    id: 18,
    name: "Jane White",
    email: "janewhite@example.com",
  },
  {
    id: 19,
    name: "Peter Grey",
    email: "petergrey@example.com",
  },
  {
    id: 20,
    name: "Susan Black",
    email: "susanblack@example.com",
  },
];

app.get("/post", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
