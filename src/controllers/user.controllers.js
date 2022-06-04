const userCtrl = { };
const User = require('../model/User');

userCtrl.createNewUser = async (req, res) => {
    const { firstName, lastName, phone, gender, email, password, createdAt } = req.body;
    const newUser = new User({ firstName, lastName, phone, gender, email, password, createdAt });
    await newUser.save();
    res.send(newUser);
};

module.exports = userCtrl;