const sr = ScrollReveal();
const memojis = document.getElementById("memojis");
const firstMemoji = document.getElementById("memoji-1");
const secondMemoji = document.getElementById("memoji-2");
setInterval(wink, 3000)

function wink() {
  firstMemoji.classList.toggle('hidden');
  secondMemoji.classList.toggle('hidden');
  setTimeout(function(){
    firstMemoji.classList.toggle('hidden');
    secondMemoji.classList.toggle('hidden');
  }, 80)
}

sr.reveal('#introduction-panel', {
  delay: '300',
  duration: '600',
  easing: 'ease-out',
  distance: '50px'
});


sr.reveal('.srcol', {
  interval: 300,
  reset: true
})
