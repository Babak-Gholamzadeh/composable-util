const Right = require('./right');
const Left = require('./left');

const tryCatch = f => {
	try {
		return Right(f());
	} catch(e) {
		return Left(e);
	}
}

module.exports = tryCatch;