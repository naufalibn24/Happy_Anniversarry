const express = require("express");
const routes = express.Router();
const ReviewController = require("../controller/Review");
const upload = require("../Middleware/multer");
const errorHandler = require("../Middleware/errorHandler");

routes.post(
  "/Reviews/Create",
  upload.single("Picture"),
  ReviewController.postReview
);

routes.get("/Reviews/Get", ReviewController.getReview);
routes.patch(
  "/Reviews/Update/:id",
  upload.single("Picture"),
  ReviewController.update
);
routes.delete("/Reviews/Delete/:id", ReviewController.delete);

routes.use(errorHandler);

module.exports = routes;
