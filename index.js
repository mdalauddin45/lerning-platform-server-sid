const exprss = require("express");
const app = exprss();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./Data/courses.json");
const coursCategories = require("./Data/coursesCategories.json");

app.get("/", (req, res) => {
  res.send("course start");
});

// categories
app.get("/courses-categories", (req, res) => {
  res.send(coursCategories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "07") {
    res.send(courses);
  } else {
    const category_courses = courses.filter((e) => e.id === id);
    res.send(category_courses);
  }
});
// courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("BGC Tech server runnig on port", port);
});
