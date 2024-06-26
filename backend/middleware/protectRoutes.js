import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userID).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Sender user not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("error in protect routes", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoutes;
