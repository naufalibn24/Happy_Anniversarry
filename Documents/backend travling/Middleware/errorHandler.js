module.exports = (err, req, res, next) => {
  let code;
  let name = err.name;
  let message;

  switch (name) {
    case "NOT_FOUND":
      code = 404;
      message = "Data not found";
      break;
    case "AlREADY DELETED":
      code = 404;
      message = "Data already deleted";
    default:
      code = 500;
      message = "Internal Server Error!";
  }
};
