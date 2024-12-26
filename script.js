function calculateLove(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
    const result=document.getElementById("result");

    if (name1===""||name2===""){
        alert("Please enter the names")
    }
    const lovePercent=Math.floor(Math.random()*101)

    result.innerHTML=`${name1} and ${name2}'s Love Percentage ${lovePercent}%`
    if (lovePercent<30){
        result.innerHTML+="<br> Not a great Match , Keep looking "
    }else if (lovePercent>=30 && lovePercent>70){
        result.innerHTML+="<br> There is a potential , Give it a try "
    }else {
        result.innerHTML+="<br> Great Match! Love is in the air! "
    }

}