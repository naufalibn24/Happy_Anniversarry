const Reviews = require("../model/Reviews");
const path = require("path");

class ReviewController {
  static postReview(req, res, next) {
    const { Name, Review, Rating } = req.body;
    const newreview = new Reviews({
      Name,
      Review,
      Rating,
      Picture: req.file.path,
    });
    if (newreview === null) {
      res.status(404).json({ msg: "Please Fill Required Data" });
    } else {
      newreview.save();
      res.status(201).json({ msg: "Review Created", data: newreview });
    }
  }
  static getReview(req, res, next) {
    Reviews.findAll()
      .then((data) => {
        res.status(200).json({ data: data });
      })
      .catch((err) => {
        next(err);
      });
  }
  static update(req, res, next) {
    const { Review, Rating } = req.body;
    const Picture = req.file.path;
    Reviews.update(
      { Review, Picture, Rating },
      { where: { id: req.params.id } }
    )
      .then((update) => {
        res.status(201).json({ msg: "Review Updated" });
      })
      .catch((err) => {
        next({ name: "NOT_FOUND" });
      });
  }
  static delete(req, res, next) {
    const review = Reviews.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.status(204).json({ msg: `Data is deleted successfully`, review });
        next();
      })
      .catch((err) => {
        next({ name: "AlREADY DELETED" });
      });
  }
}

module.exports = ReviewController;
