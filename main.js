function escrever(elemento){
  const array = elemento.innerHTML.split('');
  elemento.innerHTML='';
  array.forEach((lett, I)=>{
    setTimeout(()=>{
     elemento.innerHTML +=lett;
    },100 *I) 
  }) 
}
const title = document.getElementById('p');
escrever(title);
const barras = document.querySelector('.barras');
barras.addEventListener('click',function(){
   document.querySelector('.sidebar').classList.toggle('show-menu');
});
