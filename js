const search = document.querySelector('.search-img');
const searchContainer = document.querySelector('.search-container');
search.addEventListener ('click', function (e){
   searchContainer.classList.toggle('active');
});

const searchPopup = document.querySelector('.search-img-popup');
const popup = document.querySelector('.popup');
const body = document.querySelector('body')
// searchPopup.addEventListener ('click', function (e){
//    popup.classList.toggle('active');
// });
// document.addEventListener ('click', function (e){
//    if(!e.target.closest('.search-input-popup')){
//             popup.classList.remove('active');
           
//          }
// });


document.addEventListener ('click', function (e){
  
   
   if (e.target.closest('.search-img-popup') ) {
      popup.classList.toggle('active');
      body.classList.toggle('lock')
   } else if(!e.target.closest('.search-input-popup') && !e.target.closest('.search-img-popup-pop') && !e.target.closest('.search-close-popup')){
      popup.classList.remove('active');
      body.classList.remove('lock')
   }

   if (e.target.closest('.burger')) {
      document.querySelector('.burger').classList.toggle('active');
      document.querySelector('.main__categories').classList.toggle('active');
     document.querySelector('body').classList.toggle('lock');
   }
  
});


const sighnIn = ` <a href="#!" class="sigh-in-bur">Sign in</a>`
const avatar = ` <a href="#!" class="avatar-bur">
                    <img src="images/header/avatar.jpg" alt="">
                 </a>`
const categoryBody = document.querySelector('.category-wrapper');
if (matchMedia) {
   const mediaQueryList = window.matchMedia("(max-width: 767px)");
   mediaQueryList.addListener(changes);
   changes(mediaQueryList);
}
function changes (mediaQueryList) {
   if (mediaQueryList.matches && !categoryBody.querySelector('.sigh-in-bur') && !categoryBody.querySelector('.avatar-bur')) {
      console.log('меньше');
      categoryBody.insertAdjacentHTML('afterbegin', sighnIn)
      categoryBody.insertAdjacentHTML('afterbegin', avatar)
   } else  {
      console.log("Больше");
      if (categoryBody.querySelector('.sigh-in-bur') && categoryBody.querySelector('.avatar-bur')) {
      //    categoryBody.querySelector('.sigh-in-bur').remove 
      //  categoryBody.querySelector('.avatar-bur').remove
      categoryBody.removeChild(categoryBody.querySelector('.sigh-in-bur'));
      categoryBody.removeChild(categoryBody.querySelector('.avatar-bur'));
      }
      
   }
}

// const checkTitle = document.querySelectorAll('.checkbox__title');
// checkTitle.forEach((el)=> {
//    el.addEventListener ('click', function (e){
//       el.classList.toggle('active');
//    });
   
// })

let acc = document.getElementsByClassName("checkbox__title");
let filterTitle = document.getElementsByClassName("filter-item-title");
let subfilterTitle = document.getElementsByClassName("sub-menu-link");
let grey = document.getElementsByClassName("grey");
let sblink = document.getElementsByClassName("sub-menu-link");
let b;
let g;
let f;
let s;
let i;



for (g = 0; g < grey.length; g++) {
   grey[g].addEventListener("click", function() {
     this.classList.toggle("active");
     let panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
     
       
     } 
   });
}

for (s = 0; s < subfilterTitle.length; s++) {
   subfilterTitle[s].addEventListener("click", function() {
     this.classList.toggle("active");
     let panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
       
       
     } 
   });
}

for (f = 0; f < filterTitle.length; f++) {
   filterTitle[f].addEventListener("click", function() {
     this.classList.toggle("active");
     let panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
       
       
     } 
   });
}
for (b = 0; b < sblink.length; b++) {
   sblink[b].addEventListener("click", function() {
     this.classList.toggle("active");
     let panel = this.nextElementSibling;
     const sub = document.querySelector('.filter-item-sub-menu-2lvl')
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
      sub.style.maxHeight = sub.scrollHeight + "px";
       
       
     } 
   });
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
     
      
    } 
  });
}








// Create the query list.
// const mediaQueryList = window.matchMedia("(max-width: 767px)");
// function handleOrientationChange(mql) {
//    if (mql) {
//       categoryBody.insertAdjacentHTML('afterbegin', sighnIn)
//       categoryBody.insertAdjacentHTML('afterbegin', avatar)
//    }
  
// }
// handleOrientationChange(mediaQueryList);


