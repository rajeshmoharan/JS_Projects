
const btn = document.querySelectorAll('.button');


btn.forEach(function(el) {
   el.addEventListener('click',function(e){
      if (e.target.id === 'grey'){
        document.body.style.backgroundColor = e.target.id;
      }
      else if (e.target.id === 'white'){
        document.body.style.backgroundColor = e.target.id
      }
      else if (e.target.id === 'blue'){
        document.body.style.backgroundColor = e.target.id
      }
      else if (e.target.id === 'yellow'){
        document.body.style.backgroundColor = e.target.id
      }
   })
})