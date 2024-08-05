import User from "../models/user.model.js";

export const getUserProfile = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserProfile", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const followUnfollowUser = async (req, res) => {
  try {
    const {id} = res.params;

    const userToModify = await User.findById(id);
    //req.user => field that we have added in protectRoute middleware
    const currentUser = await User.findById(req.user._id);


  } catch (error) {
    console.log("Error in followUnfollowUser", error.message);
    res.status(500).json({ error: error.message });
  }
};
