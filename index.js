const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8900;

const io = require('socket.io')(PORT, {
	cors: {
		origin: process.env.CLIENT_URL,
	},
});

io.on('connection', (socket) => {
	console.log('User is connected');
	socket.on('sendComment', ({name, userId, reviewId, desc}) => {
		io.emit('getComment', {name, userId, reviewId, desc});
	});

	socket.on('disconnect', () => {
		console.log('User is disconnected');
	});
});
