// http://en.wikipedia.org/wiki/Bertrand%27s_box_paradox
var
  iterations = 1e7,
  boxes = [
    [ 'G', 'G' ],
    [ 'S', 'G' ],
    [ 'S', 'S' ]
  ], box, drawer, i = iterations,
  results, gFound = 0;

while ( i ) {
  box = randomBox();
  drawer = rand2();

  // If first coin isn't G, skip
  if ( box[ drawer ] !== 'G' ) { continue; }

  // If second coin is also G, increment count
  if ( box[ ++drawer % 2 ] === 'G' ) { gFound++; }
  i--;
}
results = ( gFound / iterations ) * 100;

console.log( iterations + ' iterations:');
console.log( results + '% chance second coin is gold');

// Returns either GG or SG box
function randomBox () { return boxes[ rand2() ]; }

// Returns either 0 or 1
function rand2 () { return ~~( Math.random() * 2 ); }
