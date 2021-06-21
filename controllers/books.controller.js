'user strict';

const userModel = require('../models/user.model');

const getBooks = (req, res) => {
	const { email } = req.query;

	userModel.find({ email: email }, (error, user) => {
		if (error) {
			res.send(error)
		} else {
			res.json(user)
		}
	});
}

module.exports = getBooks;