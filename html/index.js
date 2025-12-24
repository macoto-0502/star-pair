let cardArr = Array(24);  //24個の配列を用意する
let counter1 = 0;
let counter2 = 0;
let picArr = Array(2);
let card0;
let card1;

window.addEventListener('load',function(){

  function getRandomInt(max){ //ランダムな数字を発生させる関数
    return Math.floor(Math.random()*max) + 1;
  }

  cardArr[0]=getRandomInt(12);  //作った配列の中にランダムで数字を入れる

  for(i=1; i<24;){
    var num = getRandomInt(12); //最大12の乱数を発生
    var counter = 0;

    for(j=0; j<i; j++){   //新乱数が配列の数字と重複している回数を数える
      if(num == cardArr[j]){ counter += 1;}
    }

    if(counter >= 2){
      continue;
    }else{
      cardArr[i] = num;
      i++;
    }
  }

  for(i=0; i<=23; i++){ //決定した配列を表示
    console.log("配列" + i + "=" + cardArr[i]);
  }
});

//すべてのカードにクリックイベントを登録
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", (event) => {
      
      if(event.target.getAttribute("src") === "image/0.png"){
        
        if(counter1 === 0){
          card0 = document.getElementById(event.target.getAttribute("id")); //選んだカードのタグの内容をcard0に格納
          card0.src = "image/" + cardArr[event.target.id] + ".png";  //選んだカードを配列の絵柄に変更
          //console.log(card0);
          counter1 += 1;
        }else if(counter1 === 1){
          card1 = document.getElementById(event.target.getAttribute("id")); //選んだカードのタグの内容をcard0に格納
          card1.src = "image/" + cardArr[event.target.id] + ".png";  //選んだカードを配列の絵柄に変更
          //console.log(card1);

          //console.log("ジャッジを始めます")
          if(card0.src === card1.src){
            setTimeout(() =>{
              card0.style.opacity = 0;
              card1.style.opacity = 0;
              console.log("正解(^^)");
              counter1 = 0;
              counter2 += 1;
              console.log(counter2);
              card0 = undefined;
              if(counter2 === 12){
                console.log("発動");
                document.getElementById("24").style.opacity = 1;
                setTimeout(()=>{
                  location.reload();
                },2000);
              }
            }, 1000);
          }else{
            setTimeout(() =>{
              console.log("違うよ(- -)");
              card0.src = "image/0.png";
              card1.src = "image/0.png";
              counter1 = 0;
              card1 = undefined;
            }, 1000);
          }
        }
      }
    });
  });
