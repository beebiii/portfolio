'use strict';//마우스이벤트
var cursor=document.querySelector('.cursor'),link=document.querySelectorAll('a'),button=document.querySelectorAll('button'),title=document.querySelectorAll('.title'),character=document.querySelector('object');window.addEventListener('mousemove',function(a){var b=a.clientX-15+'px',c=a.clientY-15+'px';//링크태그
//제목
//버튼태그
cursor.style.cssText='left: '+b+'; top: '+c+';',link.forEach(function(a){a.addEventListener('mouseenter',function(){'logo-ico'==a.classList?cursor.classList.add('active3'):cursor.classList.add('active')}),a.addEventListener('mouseleave',function(){'logo-ico'==a.classList?cursor.classList.remove('active3'):cursor.classList.remove('active')})}),title.forEach(function(a){a.addEventListener('mouseenter',function(){cursor.classList.add('active2')}),a.addEventListener('mouseleave',function(){cursor.classList.remove('active2')})}),button.forEach(function(a){a.addEventListener('mouseenter',function(){cursor.classList.add('active3')}),a.addEventListener('mouseleave',function(){cursor.classList.remove('active3')})})});/* 
//클래스추가, 삭제 function
function classAdd(elem, className){
  elem.classList.add(className);
};
function classRemove(elem, className){
  elem.classList.remove(className);
};
*///sidebox
var menuButton=document.querySelector('.menu-btn'),aboutContent=document.querySelector('.about'),workContent=document.querySelector('.work'),bee=document.querySelector('.bee'),welcome=document.querySelector('.welcome');menuButton.addEventListener('click',function(){menuButton.classList.toggle('on'),aboutContent.classList.toggle('on'),workContent.classList.toggle('on'),bee.classList.toggle('animation'),welcome.classList.toggle('animation')});/*
//svg 각요소 총길이
const path = document.querySelectorAll('.st0');
const welcomeText = document.querySelectorAll('.welcome-text');
  for(let i = 0; i < welcomeText.length; i++ ) {
    console.log(`${i} is ${welcomeText[i].getTotalLength()}`);
  }
*/var filterButton=document.querySelectorAll('.filter a'),workContainer=document.querySelector('.work-con'),workBox=document.querySelectorAll('.work-box'),workBoxLength=workBox.length,workBoxWidth=workBox[0].offsetWidth,workWidth=workBoxLength*(workBoxWidth+20)+'px',rightButton=document.querySelector('.btn-right'),leftButton=document.querySelector('.btn-left'),idx=0;//포트폴리오 슬라이드
//work-con width값
workContainer.style.width=workWidth,rightButton.addEventListener('click',slideRight),leftButton.addEventListener('click',slideLeft);function slideRight(){if(idx<workBoxLength-4){idx++;var a=idx*(workBoxWidth+20);workContainer.style.marginLeft=-a+'px'}else workContainer.style.marginLeft=0,idx=0}function slideLeft(){if(0<idx){idx--;var a=idx*(workBoxWidth+20);workContainer.style.marginLeft=-a+'px'}}//포트폴리오 필터
filterButton.forEach(function(a){a.addEventListener('click',function(){//메뉴에 class on
for(var b=0;b<filterButton.length;b++)filterButton[b].classList.remove('on');//메뉴필터와 일치하는 컨텐츠 박스 보이기
//메뉴클릭했을 때 workBox 맨 처음부터
workBoxDisplay('none'),a.classList.add('on'),workBoxCheck(a),workContainer.style.marginLeft='0',idx=0})});function workBoxDisplay(a){for(var b=0;b<workBox.length;b++)workBox[b].style.display=a}/*
window.addEventListener('resize', ()=>{
  
  let width = window.innerWidth;
  
  if(width => 768){
   
  }
});
*/function workBoxCheck(b){var a=b.getAttribute('data-filter');'all'===a?workBoxDisplay('block'):workBox.forEach(function(b){var c=b.getAttribute('data-category');a===c&&(b.style.display='block')})}