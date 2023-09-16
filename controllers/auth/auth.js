const userModel = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const JWT_SECRET_KEY = process.env.TOKEN_KEY

function generateAuthToken(data){
  const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: '10h' })
  return token
}

module.exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: true,
        status: 400,
        message: "user does not exist with this email and password",
      });
    }

    // bcrypting the password and comparing with the one in db
    if (await bcrypt.compare(password, user.password)) {

      const token = generateAuthToken({_id : user?._id, email : email})
      user.token = token
      user.save()

      return res.json({
        success: true,
        status: 200,
        message: "user Logged in",
        data: user,
      });
    }
    return res.json({
        success: false,
        status: 400,
        message: "user credentials are not correct",
    })

  } catch (error) {
    return res.send(error.message);
  }
};

module.exports.register = async (req, res) => {
  try {
    const { email, password, name, userType } = req.body;
    console.log(req.body)
    // if any one of the field from email and password is not filled
    if (!email || !password) {
      return res.json({
        success: false,
        message: "email or password is empty",
      });
    }
    req.body.password = await bcrypt.hash(password, 10);

    let user = new userModel(req.body);
    await user.save();

    return res.json({
      success: true,
      message: "user registered successfully",
      data: user,
    });
  } catch (error) {
    return res.send(error.message);
  }
};

