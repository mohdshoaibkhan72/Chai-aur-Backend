const Cart = required("../models/user");
const adcard = async (req, res) => {
  try {
    const { username, userpassword } = req.body;
    const exitinguser = await Cart.findOne({ username });
    if (exitinguser) {
      console.log("alreedy register");
      return res
        .status(400)
        .json({ success: false, message: "user alredy exit" });
    }
    const newuser = new ClipboardItem({
      username,
      userpassword,
    });
    await newuser.save();
    res.status(201).json({ success: true, message: "new user register" });
  } catch (error) {
    console.error(Error, "domthing wents wrong ");
  }
};
