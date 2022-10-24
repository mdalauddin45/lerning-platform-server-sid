const exprss = require("express");
const app = exprss();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("course start");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectCourse = courses?.find((e) => e.id === id);
  res.send(selectCourse);
});

app.listen(port, () => {
  console.log("new protal server runnig on port", port);
});
