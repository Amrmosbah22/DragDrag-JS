let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let bOxs = document.querySelectorAll('.box');
let drag = null;

btn.onclick = function(){
  if(inp.value !=''){
    bOxs[0].innerHTML += `
      <p class="item" draggable="true">${inp.value}</p>
    `
    inp.value = '';
  }
  dragItem();
}

function  dragItem(){
  let item = document.querySelectorAll('.item')
  item.forEach(item=>{
    item.addEventListener('dragstart', function(){
      drag = item;
      item.style.opacity = '0.5';
    })
    item.addEventListener('dragend', function(){
      drag = null;
      item.style.opacity = '1';
    })

    bOxs.forEach(box=>{
      box.addEventListener('dragover', function(e){
        e.preventDefault()
        this.style.color = '#fff';
        this.style.background = '#000';
      })
      box.addEventListener('dragleave', function(){
        this.style.color = '#000';
        this.style.background = '#fff';
      })

      box.addEventListener('drop', function(){
        this.append(drag);
        this.style.color = '#000';
        this.style.background = '#fff';
      })
    })
  })
}