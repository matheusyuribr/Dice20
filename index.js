function random(a,b){
    return Math.floor(Math.random() * (b-a+1))+a;
}

function roll(){
    const result = document.getElementById('val');
    const resul = random(1,20)
    result.innerHTML = resul;
    document.getElementById('val').style.color='black'
    if(resul==20){
        document.getElementById('val').style.color = 'red';
    }
}