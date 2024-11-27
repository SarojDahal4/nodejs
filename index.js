const express = require("express");
const customerRoutes = require("./src/customer/routes");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello World");
});
app.use("/api/v1/customers", customerRoutes);

app.listen(4000, () => console.log("app logging on port 3000"));
