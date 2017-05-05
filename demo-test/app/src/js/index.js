import '../css/index.styl';

function *like() {
  yield 5;
  console.log('test');
}

let it = like();

console.log(it.next());


