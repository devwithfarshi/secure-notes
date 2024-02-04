import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const protectedRoute = (req, res, next) => {
  // console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    res.status(401).send({
      message: "Unauthorized , token does not exist 1",
    });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token === "") {
    res.status(401).send({
      message: "Unauthorized , token does not exist 2",
    });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
    if (err) {
      res.status(400).send({
        message: "Cannot verify JWT token. " + err,
      });
      console.log({ err });
    } else if (result) {
      req.user = { _id: result.id };
      next();
    } else {
      res.status(400).send({
        message: "Token is invalid or expired.",
      });
    }
  });
};
