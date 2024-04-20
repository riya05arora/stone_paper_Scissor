let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");




choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});




const playgame=(userchoice)=>{
    console.log("User choice==>",userchoice);
    const compchoice=gencompchoice();
    console.log("Computer choice==>",compchoice);

    if(userchoice===compchoice){
           drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;}

        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;}

        else{
            userwin=compchoice==="rock"?false:true;}
            winner(userwin,userchoice,compchoice);
    }
};


const winner=(userwin,userchoice,compchoice)=>{
    
    if(userwin){
        userscore++;
        usersc.innerHTML=userscore;
        console.log("you win");
        msg.innerHTML="You Win!!"+" Yourchoice:"+userchoice+" Computer choice:"+compchoice;;
        msg.style.backgroundColor="green";

    }

    else{
        compscore++;
        compsc.innerHTML=compscore;
        console.log("you loose");
        msg.innerHTML="You Loose!!"+" Your choice:"+userchoice+" Computer choice:"+compchoice;
        msg.style.backgroundColor="red";
    }
};

const drawgame=()=>{
    console.log("game was draw");
    msg.innerHTML="Game draw";
    msg.style.backgroundColor="#081b31";
    
};



const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const ridx=Math.floor(Math.random()*3);
    return options[ridx];

};

