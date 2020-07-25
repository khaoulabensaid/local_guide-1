var express = require("express");
var bodyParser = require("body-parser");
var multer  = require('multer');
var path = require('path')

var userRoutes = require("./resources/routers/routers");
var users = require("../database-mongo/index");

var ctrl = require("../server/resources/controllers/controller");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api", userRoutes);

app.post("/", (req, res) => {
  ctrl.add(req, res);
});
app.get("/1", (req, res) => {
  ctrl.selectAll(req, res);
});
app.get("/search", (req, res) => {
  ctrl.select(req, res);
});

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      cb(null, true);
  } else {
      cb(null, false);
  }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post('/upload', upload.single('image'), (req, res, next) => {
  try {
    console.log(req.file)
      return res.status(201).json({
          message: 'File uploded successfully'
      });
  } catch (error) {
      console.error(error);
  }
});


app.listen(3000, function () {
  console.log("listening on port 3000!");
});
