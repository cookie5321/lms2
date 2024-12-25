const { UserDAO } = require('../../DAO');
const { generatePassword, verifyPassword } = require('../../lib/authentication');

// GET /auth/sign_in
const signInForm = async (req, res, next) => {
    try {
        const { user } = req.session;
        console.log("A", user);
        if (user) return res.redirect('/');
        else return res.render('auth/sign-in.pug', { user });
    } catch (err) {
        return next(err);
    }
};
// POST /auth/sign_in
const signIn = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throw new Error('BAD_REQUEST');
        const user = await UserDAO.getUserData(username);
        if (!user) throw new Error('UNAUTHORIZED');
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error('UNAUTHORIZED');
        const { user_id, name, std_num, role } = user;
        req.session.user = { user_id, username, name, role, std_num };
        return res.redirect('/');
    } catch (err) {
        return next(err);
    }
};

// GET /auth/sign_up
const signUpForm = async (req, res, next) => {
    try {
        const { user } = req.session;
        console.log("B", user);
        return res.render('auth/sign-up.pug', { user });
    } catch {
        return next(err);
    }
};
// POST /auth/sign_up
const signUp = async (req, res, next) => {
    try {
        const { username, password, name, std_num, role } = req.body;
        console.log("C", req.body);
        if (!username ||
            username.length > 16 ||
            !password ||
            !name ||
            name.length > 32 ||
            (role == '1' && std_num.length != 10)
        )
            throw new Error('BAD_REQUEST');
        const hashedPassword = await generatePassword(password);
        await UserDAO.createUser(username, hashedPassword, name, std_num ? std_num : null, role);
        return res.redirect('/auth/sign_in');
    } catch (err) {
        return next(err);
    }
};

// GET /auth/sign_out
const signOut = async (req, res, next) => {
    try {
        req.session.destroy(err => {
            if (err) throw err;
            else return res.redirect('/');
        });

    } catch (err) {
        return next(err);
    }
};
module.exports = {
    signInForm,
    signIn,
    signUpForm,
    signUp,
    signOut,
};