const assert = require('assert');

describe('Error', () =>
	it('UnknownError', done => {
		let e = new UnknownError(new Error("Error message."));
		
		assert.equal(e.message, "Error message.");
		assert.equal(typeof e.stack, 'string');
		
		let err = JSON.parse(JSON.stringify(e));
		
		assert.equal(err.message, 'Error message.');
		
		// ---
		
		let te = new TypeError("Error message.");
		te.something = true;
		e = new UnknownError(te);
		
		assert.equal(e.message, "Error message.");
		assert.equal(typeof e.stack, 'string');
		
		err = JSON.parse(JSON.stringify(e));
		
		assert.equal(err.message, 'Error message.');
		assert.equal(err.something, true);
		
		done();
	})
);
