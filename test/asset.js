var _ = require(__dirname+'/../index.js')

var A = {
  _: _,
  lone: function(x){return ['',x].join('*')},
  pair: function(x,y){return [x,y].join('*')},
  S: 'a',
  T: 0,
  U: ['a','b','c'],
  UU: ['a','b','c','d','e','f'],
  V: [1,2,3],
  VV: [1,2,3,4,5,6],
  N: [-1,-2,-3],
  R: [3,2,1],
  L: [['a','b'],['c','d'],['e','f']],
  M: [[1,2],[3,4],[5,6]],
  K: [[-1,-2],[-3,-4],[-5,-6]],
  reNum: /[0-9]+/,
  reWord: /[a-zA-Z]+/,
  str: 'Pi314159',
  strNum: '314159',
  strWord: 'Pi'
}

module.exports = A;


// console.log(_.distributeBoth(A.pair, A.V, A.W));
