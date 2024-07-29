const express = require("express");
const cors = require("cors");
const pokemonRouter = require("./routes/pokemon");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/pokemon", pokemonRouter);

//middleware for handling error
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
