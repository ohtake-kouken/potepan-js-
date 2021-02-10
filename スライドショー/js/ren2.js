$('.slick01').slick({
dots: true,   // 123のやつ
arrows: true,
speed: 600,
autoplay:true,
autoplaySpeed:5000,  // 多分ミリ秒計算 7秒ご
});



const totalTime = 5000;
const oldTime = Date.now();

const timeId = setInterval(() => {
  const currentTime = Date.now();

  // 差分を求める
  const diff = currentTime - oldTime;
  const diffSec = totalTime - diff;

  //ミリ秒を整数に変換
  const remainSec = Math.ceil(diffSec / 1000);

  let text = `残り${remainSec}秒`;

  // 0秒以下になったら
  if (diffSec <= 0) {
    clearInterval(timeId);
  }

  // 画面に表示する
  document.querySelector('#log').innerHTML = text;
})

function startfnc(){
  setInterval("timeId",1000);
}
