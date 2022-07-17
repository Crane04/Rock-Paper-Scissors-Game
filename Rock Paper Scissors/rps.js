   //array options
   const opt1=["paper", "scissors", "rock"]
   const opt2=["scissors", "rock", "paper"]
   //getting elements from the DOM
   const p1=document.querySelector("#p1")
   const p2=document.querySelector("#p2")
   let para=document.querySelector("p")
   //players points
   let sum1=0
   let sum2=0
   let oneWins=false
   let twoWins=false
document.querySelector("button").addEventListener("click",function(){


//set a timer for the PLAY button
let counttDown=3
let x = setInterval(
   function(){
   
para.innerHTML = counttDown
counttDown=counttDown-1
if(counttDown===-1){

//countdown stops when it reaches 0
   clearInterval(x)
   para.innerHTML="Shoot!"
   startGame()
}
   }
,1000)
})

function startGame() {
//get random values from the array

let goIndex1=Math.floor(Math.random()*3)
   
let goIndex2=Math.floor(Math.random()*3)
//array values and the corresponding Images
//p1
if(opt1[goIndex1]==="rock"){
p1.innerHTML=`<img src="rock.jpeg">`

}else if(opt1[goIndex1]==="paper"){
p1.innerHTML=`<img src="paper.png">`

}else if(opt1[goIndex1]==="scissors"){
p1.innerHTML=`<img src="scissors.png">`
//p2
} if(opt2[goIndex2]==="rock"){
p2.innerHTML=`<img src="rock.jpeg">`

}else if(opt2[goIndex2]==="paper"){
p2.innerHTML=`<img src="paper.png">`

}else if(opt2[goIndex2]==="scissors"){
p2.innerHTML=`<img src="scissors.png">`

}

//conditions for winning
//rock displays as P1
if (p1.innerHTML===`<img src="rock.jpeg">`&& p2.innerHTML===`<img src="scissors.png">`) {
   document.querySelector("#result").innerText="Player 1 Wins"
oneWins=true
sum1++
}
else if (p1.innerHTML===`<img src="rock.jpeg">`&&p2.innerHTML===`<img src="paper.png">`) {
   document.querySelector("#result").innerText="Player 2 Wins"
   twoWins=true
   sum2++
}
//scissors displays as P1
 if (p1.innerHTML===`<img src="scissors.png">`&&p2.innerHTML===`<img src="paper.png">`) {
   document.querySelector("#result").innerText="Player 1 Wins"
   oneWins=true
   sum1++
} else if (p1.innerHTML===`<img src="scissors.png">`&&p2.innerHTML===`<img src="rock.jpeg">`) {
   document.querySelector("#result").innerText="Player 2 Wins"
   twoWins=true
   sum2++
}
//paper displays as P1
 if (p1.innerHTML===`<img src="paper.png">`&&p2.innerHTML===`<img src="scissors.png">`) {
   document.querySelector("#result").innerText="Player 2 Wins"
   twoWins=true
   sum2++
} else if (p1.innerHTML===`<img src="paper.png">`&&p2.innerHTML===`<img src="rock.jpeg">`) {
   document.querySelector("#result").innerText="Player 1 Wins"
   oneWins=true
   sum1++
}
//paper displays as P1 and P2
if (p1.innerHTML===`<img src="paper.png">`&&p2.innerHTML===`<img src="paper.png">`) {
   document.querySelector("#result").innerText="Draw! Play again"
       oneWins=false
       twoWins=false
}
//rock displays as P1 and P2
else if (p1.innerHTML===`<img src="rock.jpeg">`&&p2.innerHTML===`<img src="rock.jpeg">`) {
   document.querySelector("#result").innerText="Draw! Play again"
   oneWins=false
   twoWins=false
}
//scissors displays as P1 and P2
else if (p1.innerHTML===`<img src="scissors.png">`&&p2.innerHTML===`<img src="scissors.png">`) {
   document.querySelector("#result").innerText="Draw! Play again"
   oneWins=false
   twoWins=false
} 


if(twoWins===true&&oneWins===false) {
document.querySelector("#playerTwoScore").innerText="Player 2: "+sum2
  
}
else if(oneWins===true&&twoWins===false) {
document.querySelector("#playerOneScore").innerText="Player 1: "+sum1
   
}

}
