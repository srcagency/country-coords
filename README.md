# GPS Coordinates (latitude and longitude) for all iso-3166-1 countries

```js
const coords = require('country-coords');

console.log(currencies.map(c => c.country+': '+c.latitude+','+c.longitude));
    // AD: 42.5,1.5
    // …

// export a Map
byCountry()

const byCountry = coords.byCountry();

byCountry.has('DK');
    // true

byCountry.get('DK');
    // { country: 'DK', latitude: 56, longitude: 10 }
```

See also:

- https://github.com/srcagency/iso-3166-1-codes (countries list)
- https://github.com/srcagency/country-currencies (currencies per country)
- https://github.com/srcagency/country-to-emoji-flag
