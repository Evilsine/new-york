const texts = document.querySelectorAll('.text-intro');

observerTexts = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0){
      entry.target.style.animation = `fadein-bottom 2s ${entry.target.dataset.delay} forwards`
    }else{
      entry.target.style.animation = `none`
    }
  });
})

texts.forEach(text =>{
  observerTexts.observe(text)
})

const showMap = document.querySelectorAll('.show-map');
const mapPage = document.querySelectorAll('.map-background');
const mapWindow = document.querySelectorAll('.map-window');


showMap.forEach(map => {
  map.addEventListener('click',() =>{
    mapPage.forEach(mappage => {
      mappage.style.display = "block";
    });
    mapWindow.forEach(mapwindow => {
      mapwindow.style.animation = `show-map-animation 1s`;
    });
  })
});


mapPage.forEach(mappage => {
  mappage.addEventListener('click',() =>{
    mapWindow.forEach(mapwindow => {
      mapwindow.style.animation = "close-map-animation 0.5s";
      setTimeout(function(){
        mapPage.forEach(mappage => {
            mappage.style.display = "none";
        });
        mapwindow.style.animation = "none";
      }, 500);
    });
  })

});


const burgerButton = document.querySelector('.burger');
const mobileMenu = document.querySelector('.navigation-links-mobile');

burgerButton.addEventListener('click',() =>{
  if(mobileMenu.style.display != "flex"){
    mobileMenu.style.display = "flex";
  }else{
    mobileMenu.style.display = "none";
  }
})


