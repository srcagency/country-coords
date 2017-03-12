'use strict';

var coords = require('./data.json');

coords.byCountry = byCountry;

module.exports = coords;

var countryMap;

function byCountry( alpha2 ){
	if (countryMap === undefined)
		countryMap = new Map(coords.map(function( coords ){
			return [ coords.country, coords ];
		}));

	return countryMap;
}
