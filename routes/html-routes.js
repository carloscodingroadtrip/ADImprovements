const express = require('express');
const router = express.Router();

// -------- Homepage route
router.get('', (req, res) => {
	const title = 'Home Page';
	res.render('./main/index', { title: title });
});

// -------- portfolio route
router.get('/portfolio', (req, res) => {
	const title = 'Portfolio';
	res.render('./main/portfolio', { title: title });
});

// -------- Licenses route
router.get('/licenses', (req, res) => {
	const title = 'Licenses';
	res.render('./main/licenses', { title: title });
});

// -------- About route
router.get('/about', (req, res) => {
	const title = 'About';
	res.render('./main/about', { title: title });
});

// -------- Contact route
router.get('/contact', (req, res) => {
	const title = 'Contact Us';
	res.render('./main/contact', { title: title });
});

module.exports = router;
