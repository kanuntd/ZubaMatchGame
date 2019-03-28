var click;
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    click = ev.target.id;
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var src = document.getElementById(click).src;
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(ev.target.id).src = src;

    console.log(data+"/////"+ev.target.id)
  }