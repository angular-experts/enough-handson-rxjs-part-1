// Enough Handson - RxJS
// Part 1


// Data stream from a "string"
console.log('----------String Stream-------------');

Rx.Observable.from("hah").subscribe(
  // Function to call when there is more data available
  function (x) {
    console.log('Next: ' + x);
  },

// Function to call when there is a error in the stream
  function (err) {
    console.log('Error: ' + err);
  },

// Function to call when there is no more data available
  function () {
    console.log('Completed');
  }
);


console.log('----------Set Stream-------------');

let sampleSet = new Set(['myWindow', window]);

Rx.Observable.from(sampleSet).subscribe(
  function (x) {
    console.log(x);
  },
  function (error) {
    console.log('error', error);
  },
  function () {
    console.log('Completed');
  }
);

console.log('----------Event Stream-------------');

let clickCount = 0;
function init() {
  var btn = document.getElementById('btnSignUp');

  var btnClick$ = Rx.Observable.fromEvent(btn, 'click');

  btnClick$.subscribe(
    function (x) {
      console.log('Click:', x);
      clickCount++;
      document.getElementById('clickCount').innerHTML = clickCount;
    },
    function (error) {
      console.log('error', error);
    },
    function () {
      console.log('Completed');
    }
  );

}

window.onload = init;



