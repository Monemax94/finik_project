function toggleMenu(){
  const nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}
function openLight(src){
  document.getElementById('lightImg').src = src;
  document.getElementById('lightBox').classList.add('show');
}
function closeLight(){
  document.getElementById('lightBox').classList.remove('show');
}
window.addEventListener("scroll", function(){
  const header = document.querySelector(".site-header");
  if(window.scrollY > 30){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
});
