//MAGIC 8 BALL RESPONSE SCRIPT

var input = document.querySelector('#enter');
var textarea = document.querySelector('#questionbox');
var display = document.querySelector('#display');

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
var responses = [
    'It is Certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',

]

var negResponses = [
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don’t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
]



textarea.addEventListener("keydown", function(event){

    

    if (event.key == "Enter"){

        let answer = textarea.value;
        console.log(answer);
        

        for (let i = 0; i < 20; i++){

            console.log(i);

            let letter = answer[i];
            console.log(letter);


            if (["s", "r", "j", "h"].includes(letter)){
                var randomNegResponse = negResponses[Math.floor(Math.random() * negResponses.length)];
                document.querySelector('#display').innerHTML = randomNegResponse;
                document.getElementById('sad').style.display = "block";
                document.getElementById('happy').style.display = "none";
                document.getElementById('hello').style.display = "none";
                document.getElementById('display').style.color = "red";

              }

    
             
              
            
            if (["a", "b", "c", "d", "e", "f", "g","i", "k", "l", "m", "n", "o", "p", "q", "t", "u", "v", "w", "x", "y", "z",].includes(letter)){
            var randomResponse = responses[Math.floor(Math.random() * responses.length)];
            document.querySelector('#display').innerHTML = randomResponse;
            document.getElementById('happy').style.display = "block";
            document.getElementById('sad').style.display = "none";
            document.getElementById('hello').style.display = "none"; 
            document.getElementById('display').style.color = "blue";
            
            }

            
               
              
        };
    };
});

input.addEventListener('click', function () {
    textarea.value = '';
}, false);


textarea.addEventListener("keyup", function(event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enter").click();
        responses.style.display = 'block';
        
 
    }

}

);




function RandomBgImg(){
    var button= document.querySelector('.circle');
     button.addEventListener("click", RandomBgImg);
    var random=Math.random(); 
    console.log(random);
   
    
   if (random<0.5){

     document.body.style.backgroundImage = "url(bg1.jpg)";
    }
  
    if (random>0.5){
        document.body.style.backgroundImage = "url(bg5.jpg)";
    }
   if (random>0.7){
    document.body.style.backgroundImage = "url(bg3.jpg)";
    }
    if (random<0.3){
        document.body.style.backgroundImage = "url(bg4.jpg)";
    }




  }
  RandomBgImg()
  
  


//cursor


        // <![CDATA[
            var colour="random"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
            var sparkles=50;
    
    
            var x=ox=400;
            var y=oy=300;
            var swide=800;
            var shigh=600;
            var sleft=sdown=0;
            var tiny=new Array();
            var star=new Array();
            var starv=new Array();
            var starx=new Array();
            var stary=new Array();
            var tinyx=new Array();
            var tinyy=new Array();
            var tinyv=new Array();
    
            window.onload=function() { if (document.getElementById) {
                var i, rats, rlef, rdow;
                for (var i=0; i<sparkles; i++) {
                    var rats=createDiv(3, 3);
                    rats.style.visibility="hidden";
                    document.body.appendChild(tiny[i]=rats);
                    starv[i]=0;
                    tinyv[i]=0;
                    var rats=createDiv(5, 5);
                    rats.style.backgroundColor="transparent";
                    rats.style.visibility="hidden";
                    var rlef=createDiv(1, 5);
                    var rdow=createDiv(5, 1);
                    rats.appendChild(rlef);
                    rats.appendChild(rdow);
                    rlef.style.top="2px";
                    rlef.style.left="0px";
                    rdow.style.top="0px";
                    rdow.style.left="2px";
                    document.body.appendChild(star[i]=rats);
                }
    
                set_width();
                sparkle();
            }}
    
            function sparkle() {
                var c;
                if (x!=ox || y!=oy) {
                    ox=x;
                    oy=y;
                    for (c=0; c<sparkles; c++) if (!starv[c]) {
                        star[c].style.left=(starx[c]=x)+"px";
                        star[c].style.top=(stary[c]=y)+"px";
                        star[c].style.clip="rect(0px, 5px, 5px, 0px)";
                        star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
    
                        star[c].style.visibility="visible";
                        starv[c]=50;
                        break;
                    }
                }
                for (c=0; c<sparkles; c++) {
                    if (starv[c]) update_star(c);
                    if (tinyv[c]) update_tiny(c);
                }
                setTimeout("sparkle()", 40);
            }
    
    
    
            function update_star(i) {
                if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
                if (starv[i]) {
                    stary[i]+=1+Math.random()*3;
                    if (stary[i]<shigh+sdown && starx[i]>0) {
                        star[i].style.top=stary[i]+"px";
                        starx[i]+=(i%5-2)/5;
                        star[i].style.left=starx[i]+"px";
                    }
                    else {
                        star[i].style.visibility="hidden";
                        starv[i]=0;
                        return;
                    }
                }
    
                else {
                    tinyv[i]=50;
                    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
                    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
                    tiny[i].style.width="2px";
                    tiny[i].style.height="2px";
                    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
                    star[i].style.visibility="hidden";
                    tiny[i].style.visibility="visible"
                }
            }
    
            function update_tiny(i) {
                if (--tinyv[i]==25) {
                    tiny[i].style.width="1px";
                    tiny[i].style.height="1px";
                }
    
                if (tinyv[i]) {
                    tinyy[i]+=1+Math.random()*3;
                    if (tinyy[i]<shigh+sdown && tinyx[i]>0) {
                        tiny[i].style.top=tinyy[i]+"px";
                        tinyx[i]+=(i%5-2)/5;
                        tiny[i].style.left=tinyx[i]+"px";
                    }
    
                    else {
                        tiny[i].style.visibility="hidden";
                        tinyv[i]=0;
                        return;
                    }
                }
                else tiny[i].style.visibility="hidden";
            }
    
            document.onmousemove=mouse;
            function mouse(e) {
                set_scroll();
                y=(e)?e.pageY:event.y+sdown;
                x=(e)?e.pageX:event.x+sleft;
            }
    
            function set_scroll() {
                if (typeof(self.pageYOffset)=="number") {
                    sdown=self.pageYOffset;
                    sleft=self.pageXOffset;
                }
                else if (document.body.scrollTop || document.body.scrollLeft) {
                    sdown=document.body.scrollTop;
                    sleft=document.body.scrollLeft;
                }
                else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
                    sleft=document.documentElement.scrollLeft;
                    sdown=document.documentElement.scrollTop;
                }
                else {
                    sdown=0;
                    sleft=0;
                }
            }
    
            window.onresize=set_width;
            function set_width() {
                if (typeof(self.innerWidth)=="number") {
                    swide=self.innerWidth;
                    shigh=self.innerHeight;
                }
    
                else if (document.documentElement && document.documentElement.clientWidth) {
                    swide=document.documentElement.clientWidth;
                    shigh=document.documentElement.clientHeight;
                }
    
                else if (document.body.clientWidth) {
                    swide=document.body.clientWidth;
                    shigh=document.body.clientHeight;
                }
            }
    
            function createDiv(height, width) {
                var div=document.createElement("div");
                div.style.position="absolute";
                div.style.height=height+"px";
                div.style.width=width+"px";
                div.style.overflow="hidden";
                return (div);
            }
    
            function newColour() {
                var c=new Array();
                c[0]=255;
                c[1]=Math.floor(Math.random()*256);
                c[2]=Math.floor(Math.random()*(256-c[1]/2));
                c.sort(function(){return (0.5 - Math.random());});
                return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
            }
    
            // ]]>
