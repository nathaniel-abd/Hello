function add() {
  var div = document.createElement("div");
  div.classList.add('list');
  document.getElementById("content").innerHTML += "<center><form><label form='listlabel'></label><br><input type='text' id='listlabel' placeholder='Title It!' name='listlabel'><br></form><div class='desc'><textarea placeholder='Describe It!' id='desc' name='desc'></textarea></div></center>';";
  
  }
  
  function remove() {
  const div= document.getElementById('list');
  div.classList.add('list');
  div.remove();
  }
  
  // Space for Comments