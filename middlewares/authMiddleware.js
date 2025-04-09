module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.session.isAuthenticated) {
            return next();
        }
        res.redirect('/login');
    }
};
