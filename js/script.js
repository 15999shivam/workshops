
var li = document.getElementsByTagName("li");
var ul = document.getElementsByTagName("ul");
//console.log(li);
//console.log(ul);
var previd=null;

function del(id)
{
    if(previd!=null)
    li[previd].children[0].classList.remove('hover');
    previd = id-1;
  for(var i=0;i<5;i++)
  {
    var k = parseInt((Math.random()*1000)%255);
    var l = parseInt((Math.random()*1000)%255);
    var m = parseInt((Math.random()*1000)%255);
      li[i].style.width = "5%";
      li[i].children[2].style.display = "block";
      li[i].style.background = ` rgb( ${k},${l},${m})`;
      li[i].children[1].style.display = "none";
      li[i].children[2].classList.add('eventClick');
      li[i].children[2].classList.remove('event');
      
  }
  id--;
  li[id].style.width = "80%";
  li[id].children[0].classList.add('hover');
  if(screen.height<800)
      {
        li[id].children[0].style.fontSize="20px"
      }
  li[id].children[2].style.display = "none";
  li[id].children[1].style.display = "block";
}
var i = 0;
function change_image(){
var img = document.getElementById('slideshow');
img.src = "./pics/"+(i++%6+1)+".JPG";
if(screen.width<800)
{
  img.style.width="100%";
  img.style.marginLeft = "0%";
}
else{
  img.style.width="68%";
  img.style.marginLeft = "16%";
}
}
var i1=0;
var i2=0;
var i3=0;
var i4=0;
function change_image1(){
    var img = document.getElementById('slideshow1');
    img.src = "./pics/aws"+(i1++%3+1)+".PNG";
  if(screen.width<800)
  {
    img.style.width="100%";
    img.style.marginLeft = "0%";
  }
  else{
    img.style.width="68%";
    img.style.marginLeft = "16%";
  }
    }
    function change_image2(){
        var img = document.getElementById('slideshow2');
        img.src = "./pics/app"+(i2++%2+1)+".jpg";
        if(screen.width<800)
        {
          img.style.width="100%";
          img.style.marginLeft = "0%";
        }
        else{
          img.style.width="68%";
          img.style.marginLeft = "16%";
        }
        }
        function change_image3(){
            var img = document.getElementById('slideshow3');
            img.src = "./pics/fclty"+(i3++%1+1)+".jpg";
            if(screen.width<800)
            {
              img.style.width="100%";
              img.style.marginLeft = "0%";
            }
            else{
              img.style.width="68%";
              img.style.marginLeft = "16%";
            }
            }
            function change_image4(){
                var img = document.getElementById('slideshow4');
                img.src = "./pics/tech"+(i4++%1+1)+".jpg";
                if(screen.width<800)
                {
                  img.style.width="100%";
                  img.style.marginLeft = "0%";
                }
                else{
                  img.style.width="68%";
                  img.style.marginLeft = "16%";
                }
                }
function slider()
{
    setInterval(change_image,1500);
    setInterval(change_image1,1500);
    setInterval(change_image2,1500);
    setInterval(change_image3,1500);
    setInterval(change_image4,1500);
    console.log(screen.width);
    console.log(screen.height);
}
var msg = document.getElementById("msg");
console.log(msg);

msg.addEventListener("click", function()
{ 
 msg.style.display="none";
 del(3);
});