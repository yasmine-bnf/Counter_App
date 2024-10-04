const decreaseBtn= document.getElementById('decreaseBtn');
const resetBtn= document.getElementById('resetBtn');
const increaseBtn= document.getElementById('increaseBtn');
let c=0;

decreaseBtn.onclick=function(){
c--;
countLabel.textContent=c;
}
resetBtn.onclick=function(){
 c=0;
countLabel.textContent=c;
    }
increaseBtn.onclick=function(){
 c++;
 countLabel.textContent=c;
   }