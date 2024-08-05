var threedot=document.querySelector(".threedot")
var xmark=document.querySelector(".xmark")
var sidebar=document.querySelector(".sidebar")
threedot.addEventListener("click" ,function(){
     sidebar.style.left="0%"
})
xmark.addEventListener("click",function(){
    sidebar.style.left="-70%"
})