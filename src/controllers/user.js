const User = require('../models/user');

module.exports.register = async (req, res) => {

    try {
        const {email, displayName, password} = req.body;
        const user = new User({email,displayName});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err) return next(err)
            req.flash('success', 'Welcome to the Robotech Character Creator! Create your first campaign now!');
            res.redirect('/campaigns');
        });
    } catch (e) {
        req.flash('error', e.message)
        res.redirect('/');
    }

}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect('/campaigns');
}

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Until next time...');
        res.redirect('/');
    });
}

module.exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body.user);
    if (req.body.newPass != '') {
        try {
            await user.changePassword(req.body.oldPass, req.body.newPass);
            req.flash('success', 'Successfully reset your password');
        } catch (err) {
            req.flash('error', 'Old password entered incorrectly');
        }
    }
    res.redirect('/account')
}