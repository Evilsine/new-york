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