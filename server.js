const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = 3001;
app = express();

app.use(express.static("public"));
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
