const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/loaderio-00660a6577182fa90bf2cc75351199b9", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "./public/loaderio-00660a6577182fa90bf2cc75351199b9.txt"
    )
  );
});

app.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
