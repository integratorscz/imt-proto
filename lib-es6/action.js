'use strict'

global.IMTAction = class IMTAction extends IMTBase {
	constructor() {
		super();
		
		this.type = IMTBase.MODULETYPE_ACTION;
	}

	/**
	 * Writes data.
	 * 
	 * @param {Object} bundle Collection of data to process.
	 * @callback done Callback to call when operations are done.
	 *     @param {Error} err Error on error, otherwise null.
	 */

	write(bundle, done) {
		throw new Error("Must override a superclass method 'write'.");
	}
}

/**
 * Base Gateway Action.
 */

global.IMTGatewayAction = class IMTGatewayAction extends IMTAction {}

/**
 * Base Gateway Responder.
 */

global.IMTGatewayResponder = class IMTGatewayResponder extends IMTAction {};
