module.exports.login = (req, res) => {
    res.status('200').json({
        login: 'From controller'
    })
};

module.exports.register = (req, res) => {
    res.status('200').json({
        register: 'From controller'
    })
};