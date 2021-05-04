'use strict';

// let i =1;
// if(i===1){console.log("真です")};
function scorecheck(){
let testScore = document.getElementById('score').value

if (testScore >= 80) {
　document.write("合格です！おめでとう！");
} 
else if (testScore >= 70) {
　document.write("惜しい！あと少し頑張って！");
} else {
　document.write("不合格です！勉強して再挑戦しましょう！");
}
}


// const namelist=["田中","山田","林","佐藤"];
// for (let i=0; i<namelist.length;i++)
// {console.log(`${i+1}.${namelist[i]}`);}