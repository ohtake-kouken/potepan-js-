
document.getElementById("s1").style.display ="block";      //最初は表示
function clickBtn1(){
  const s1 = document.getElementById("s1");
 if(s1.style.display=="block"){
  s1.style.display ="none";
 }else{
  s1.style.display ="block";
 }
}

//タイム作り             〜１秒＝1000ミリ秒のルール〜
let startTime;
let timeoutId;

function countUp() {
  const d = new Date(Date.now() - startTime + elapsedTime); //Date　現時点時刻-スタートボタン
            //.padStart 桁数(冒頭に０桁追加)　今回は一桁数の秒数計なので １ １ msは３  で表示
  const m = String(d.getMinutes()).padStart(1, '0');  //.getMinutes() .分の0〜59の整数
  const s = String(d.getSeconds()).padStart(1, '0');  //getSeconds() .秒の0〜59の整数
  const ms = String(d.getMilliseconds()).padStart(3, '0');  // .getMilliseconds()　.ミリ秒の0〜999の整数
  timer.textContent = `${m}:${s}.${ms}`;            //タイムメーター表示
     // ストップボタンの機能     10ms の時間取得に停止させるには   
  timeoutId = setTimeout(() => {                 //一定時間後に特定の処理をおこなう（繰り返さずに一度だけ）
    countUp();
  }, 10);
}

  //スタートボタンの作成
start.addEventListener('click', () => {
   // ↓ここでボタンがinactiveかチェックする
   if (start.classList.contains('inactive') === true) {
    return;                              //スタートボタン押した時、スタートボタンを押せないようにする
  }
  // ↓以下はinactive時には行いたくない処理
  setButtonStateRunning();  //スタートボタンを押した後の、ボタンの状態！  
  startTime = Date.now();
  countUp();
});

// ストップボタン  
let elapsedTime = 0;                     //最初に空の定義
stop1.addEventListener('click', () => {
  if (stop1.classList.contains('inactive') === true) {
    return;                         //ストップ押した時、ストップボタンを押せないようにする
  }
  setButtonStateStopped();
  clearTimeout(timeoutId);
  elapsedTime += Date.now() - startTime;  //elapsedTimeはストップで止めた時の余剰時間に変換
});

//リセットボタン  
reset.addEventListener('click', () => {
  if (reset.classList.contains('inactive') === true) {
    return;             //リセット押した時、リセットボタンを押せないようにする
  }
  setButtonStateInitial();
  timer.textContent = '0:0:0:0';     //'00:00.000'
  elapsedTime = 0;                 //ストップ→リセットで　０　にする
});


function setButtonStateInitial() {   //　ボタンの初期状態の設定も忘れずに
  start.classList.remove('inactive');
  stop1.classList.add('inactive');
  reset.classList.add('inactive');
}
function setButtonStateRunning() {  //スタートボタンを押した時
  start.classList.add('inactive');
  stop1.classList.remove('inactive');
  reset.classList.add('inactive');
}
function setButtonStateStopped() {  //ストップボタンを押した時
  start.classList.remove('inactive');
  stop1.classList.add('inactive');
  reset.classList.remove('inactive');
}
setButtonStateInitial(); //ボタンの初期状態の設定




window.onload = function() {
  document.getElementById("glitch1").classList.add("active")
};







