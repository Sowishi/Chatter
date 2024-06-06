import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const currentUser = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: currentUser } }).select(
      ["-password"]
    );

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in user controller");
    res.status(500).json({ error: error.message });
  }
};
