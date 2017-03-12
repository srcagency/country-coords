'use strict';

const test = require('tape');
const countries = require('iso-3166-1-codes');
const coords = require('./');

test(function( t ){
	t.ok(Array.isArray(coords));
	t.equal(coords.length, 249);

	const byCountry = coords.byCountry();

	t.ok(byCountry instanceof Map);

	t.deepEqual(byCountry.get('DK'), {
		country: 'DK',
		latitude: 56,
		longitude: 10,
	});

	t.ok(countries.every(country => byCountry.get(country.alpha2)),
		'All iso-3166-1 countries have coordinates');

	t.end();
});
