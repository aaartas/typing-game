// import textList from '/textList.js';

const subject = document.getElementById('subject');
const timer = document.getElementById('timer');
const correct = document.getElementById('correct');
// const form = document.forms.typing;
const form = document.forms[0];
const textList = [
  'Hello World',
  'Good',
  'I love JavaScript',
  'This is MyApp',
  'Welcome'
];

let TIME = 60;
let count = 0;
let state = true; //操作可能かどうか

const countdown = setInterval(function() {

  timer.textContent = '制限時間：' + --TIME + '秒';

  if(TIME <= 0) 
    finish();
}, 1000);


window.addEventListener('keydown', function(e) {
  if(e.keyCode === 13){
    console.log('Enterキー押されたよ')
    console.log(form.input[0].value)
    
    // if(!state) return;
  
    if(form.input[0].value === subject.textContent) {
      count++;
      correct.textContent = '正解数：' + count;
      init();
    } else {
      subject.textContent = '間違いです！';
      setTimeout(function(){ init() },200)
    }
  }
});

init();

function init() {
  const rnd = Math.floor(Math.random() * textList.length);

  subject.textContent = textList[rnd];
  form.input[0].value = '';
  form.input[0].focus();
}

function finish() {
  clearInterval(countdown);
  subject.textContent = '正解数は' + count + '個でした！';
  state = false;
}