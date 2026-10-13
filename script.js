(function(){
  var screen=document.getElementById('screen'),txt=document.getElementById('screenText'),
      st=document.getElementById('state'),bB=document.getElementById('bBroken'),bF=document.getElementById('bFixed');
  function set(fixed){
    screen.classList.toggle('fixed',fixed);
    bB.setAttribute('aria-pressed',String(!fixed));
    bF.setAttribute('aria-pressed',String(fixed));
    txt.textContent=fixed?'Como nuevo':'Zaka Phone';
    st.textContent=fixed?'Pantalla reparada y lista para usar.':'Así llega un móvil con la pantalla rota.';
  }
  bB.addEventListener('click',function(){set(false)});
  bF.addEventListener('click',function(){set(true)});
})();
