//마우스이벤트
const cursor = document.querySelector('.cursor');
const link = document.querySelectorAll('a');
const button = document.querySelectorAll('button');
const title = document.querySelectorAll('.title');
const character = document.querySelector('object');

window.addEventListener('mousemove', (e)=>{
  const mouseX = e.clientX - 15 + 'px';
  const mouseY = e.clientY - 15 + 'px';
  
  cursor.style.cssText = `left: ${mouseX}; top: ${mouseY};`;

  //링크태그
  link.forEach(elem => {
    elem.addEventListener('mouseenter', ()=>{
      if(elem.classList == 'logo-ico'){
        cursor.classList.add('active3');
      } else {
        cursor.classList.add('active');
      }
    });
    elem.addEventListener('mouseleave', ()=>{
      if(elem.classList == 'logo-ico'){
        cursor.classList.remove('active3');
      } else {
        cursor.classList.remove('active');
      }
    });
  });
  //제목
  title.forEach(elem => {
    elem.addEventListener('mouseenter', ()=>{
      cursor.classList.add('active2');
    });
    elem.addEventListener('mouseleave', ()=>{
      cursor.classList.remove('active2');
    });
  });
  //버튼태그
  button.forEach(elem => {
    elem.addEventListener('mouseenter', ()=>{
      cursor.classList.add('active3');
    });
    elem.addEventListener('mouseleave', ()=>{
      cursor.classList.remove('active3');
    });
  });

});

/* 
//클래스추가, 삭제 function
function classAdd(elem, className){
  elem.classList.add(className);
};
function classRemove(elem, className){
  elem.classList.remove(className);
};
*/

//sidebox
const menuButton = document.querySelector('.menu-btn');
const aboutContent = document.querySelector('.about');
const workContent = document.querySelector('.work');
const bee = document.querySelector('.bee');
const welcome = document.querySelector('.welcome');
menuButton.addEventListener('click', ()=> {
  menuButton.classList.toggle('on')
  aboutContent.classList.toggle('on');
  workContent.classList.toggle('on');
  bee.classList.toggle('animation');
  welcome.classList.toggle('animation');
});

/*
//svg 각요소 총길이
const path = document.querySelectorAll('.st0');
const welcomeText = document.querySelectorAll('.welcome-text');
  for(let i = 0; i < welcomeText.length; i++ ) {
    console.log(`${i} is ${welcomeText[i].getTotalLength()}`);
  }
*/

const filterButton = document.querySelectorAll('.filter a');
const workContainer = document.querySelector('.work-con');
const workBox = document.querySelectorAll('.work-box');

//포트폴리오 슬라이드
const workBoxLength = workBox.length;
const workBoxWidth = workBox[0].offsetWidth;
let workWidth = workBoxLength * (workBoxWidth + 20) + 'px';
const rightButton = document.querySelector('.btn-right');
const leftButton = document.querySelector('.btn-left');
let idx = 0;
//work-con width값
workContainer.style.width = workWidth;
// 각버튼 클릭시 이벤트
rightButton.addEventListener('click', slideRight); 
leftButton.addEventListener('click', slideLeft); 

function slideRight() {
  if (idx < (workBoxLength - 4)) {
    idx++;
    const move = idx * (workBoxWidth + 20);
    workContainer.style.marginLeft = -move + 'px';
  } else {
    workContainer.style.marginLeft = 0;
    idx = 0;
  }
};
function slideLeft() {
  if (idx > 0) {
    idx--;
    const move = idx * (workBoxWidth + 20);
    workContainer.style.marginLeft = -move + 'px';
  }
};

//포트폴리오 필터
filterButton.forEach(elem => {
  elem.addEventListener('click', ()=>{
    //메뉴에 class on
    for(let i = 0; i < filterButton.length; i++){
      filterButton[i].classList.remove('on');
    };
    workBoxDisplay('none');
    elem.classList.add('on');
    //메뉴필터와 일치하는 컨텐츠 박스 보이기
    workBoxCheck(elem)
    //메뉴클릭했을 때 workBox 맨 처음부터
    workContainer.style.marginLeft = '0';
    idx = 0;
  });
});

function workBoxDisplay(display) {
  for(let j = 0; j < workBox.length; j++) {
    workBox[j].style.display = display;
  };
};
function workBoxCheck(a) {
  const category = a.getAttribute('data-filter');
  if(category === 'all') {
    workBoxDisplay('block');
  } else {
    workBox.forEach(elem => {
      const categoryCheck = elem.getAttribute('data-category');
      if(category === categoryCheck){
        elem.style.display = 'block';
      }
    });
  }
};

/*
window.addEventListener('resize', ()=>{
  
  let width = window.innerWidth;
  
  if(width => 768){
   
  }
});
*/
