// @flow

const mapIds = value => value.map(({ id }) => id);

mapIds([{ id: 1 }]); // works
// mapIds([{ foo: 'bar' }]); // flow shows warning, property id not found
// mapIds(['a', 'b', 'c']); // flow shows warning, property id not found
// mapIds('a'); // flow shows warning, property map not found

// ---------

// const mapIds = (value: Array<Object>): Array<number> => value.map(({ id }) => id);

// mapIds([{ id: 1 }]); // works
// mapIds([{ id: 'abc' }]); // works, but 'abc' is not a number
// eslint-disable-next-line
// (mapIds([{ id: 'abc' }]): Array<number>); // works, but 'abc' is not a number

// ----------

// const mapIds = (value: Array<Object>): Array<string> => value.map(({ id }) => id);
// eslint-disable-next-line
// (mapIds([{ id: 'abc' }]): (Array<number>)); // flow shows warning
