ScrollReveal().reveal('#introduction-panel', {
  delay: '300',
  duration: '600',
  easing: 'ease-out',
  distance: '50px'
});

const memojis = document.getElementById("memojis")

setTimeout(function(){
  if (memojis) {
    const firstItem = document.getElementById("memoji-1");
    const secondItem = document.getElementById("memoji-2");
    firstItem.classList.toggle('hidden');
    secondItem.classList.toggle('hidden');
  }
}, 1000);

setTimeout(function(){
  if (memojis) {
    const firstItem = document.getElementById("memoji-1");
    const secondItem = document.getElementById("memoji-2");
    firstItem.classList.toggle('hidden');
    secondItem.classList.toggle('hidden');
  }
}, 1200);

if (memojis) {
  const firstItem = document.getElementById("memoji-1");
  const secondItem = document.getElementById("memoji-2");

  memojis.addEventListener('mouseenter', () => {
    firstItem.classList.toggle('hidden');
    secondItem.classList.toggle('hidden');
  })

  memojis.addEventListener('mouseleave', () => {
    firstItem.classList.toggle('hidden');
    secondItem.classList.toggle('hidden');
  })
}
