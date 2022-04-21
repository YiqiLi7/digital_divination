document.addEventListener('DOMContentLoaded', function(){

    console.log("hello");
    let aa = document.querySelector("#bg-change");
    aa.addEventListener('click',function(){
        
        let r = Math.floor(Math.random()* 255);
        let g = Math.floor(Math.random()* 255);
        let b = Math.floor(Math.random()* 255);
        let c = 'rgb('+ r +',' + g + ',' + b + ')';
        document.body.style.background = c;
    })
    let ar = ["cat","dog","turtle","slime"];
    let btn = document.querySelector("button");
    btn.addEventListener("click",function(){
    
        let i = Math.floor(Math.random()* ar.length)
        let n = ar[i]
        let v = document.querySelector("#verb").value;
        let a = document.querySelector("#adverb").value;
    
        let blank1 = document.querySelector("#blank1");
        let blank2 = document.querySelector("#blank2");
        let blank3 = document.querySelector("#blank3");
    
        blank1.innerHTML = n;
        blank2.innerHTML = v;
        blank3.innerHTML = a;
    
        
    })
    })
    
    
    
    