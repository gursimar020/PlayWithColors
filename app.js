function clear(){
    body.innerHTML="";
}
function display(){
    randomt=Math.round(Math.random() * 99);
    randoml=Math.round(Math.random() * 99);
    h=(randoml*4)+",";
    s="100%,";
    l="50%";
    body.innerHTML+="<span style='top:"+randomt+"%; left:"+randoml+"%; background:hsl("+h+""+s+""+l+");'></span>";
}
