
// querySelector()   htmlから取得する
//ver 再宣言、再代入OK   let 再宣言 NG  再代入OK  const 再宣言、再代入NG  


function update(_v){                //inputで入れられた物を_vに変換し全消しする
  document.querySelector('input').value =_v
}

function append(_v){
document.querySelector('input').value +=_v    //繰り返し後ろに数字を追加させる
}

function append1(_v){
document.querySelector('input').value +=_v    //繰り返し後ろに演算子を追加させる
}

function calc()
{
  const v = document.querySelector( 'input' ).value
  const f = new Function( 'return' + v )              //Functionは新しく作る　returnでくり開始　vを作る
  update( f().toString() )     //'return'をupdate(f().toString() )で繰り返
}

function calc() // 「＝」ボタンが押されたので計算する
{
    const v = document.querySelector( 'input' ).value        //inputされたものをvに変換
    const f = new Function( 'return ' + v )
    update( f().toString() )
}





// var append1 = (function() {
//   var b = true;
//   return function() {
//     if (b) {
//       b = false;
//       return true;
//     }
//     return false;
//   };
// })();