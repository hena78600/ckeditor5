/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	appendPeriodIfMissing( text ) {
		text = text ? text.trim() : '';
		const length = text.length;

		if ( length > 0 && text[ length - 1 ] !== '.' ) {
			text += '.';
		}

		return text;
	}
};
