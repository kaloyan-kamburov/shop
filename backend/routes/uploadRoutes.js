import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkfileType(req, file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkfileType(req, file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send({
    message: "File uploaded successfully",
    image: `/${req.file.path}`,
  });
});

export default router;
