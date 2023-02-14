var listNum = 1;

function add() {
    document.getElementById("content").innerHTML += "<div class='list' id='" + listNum + "'><center><form><label form='listlabel'></label><br><input type='text' id='listlabel' placeholder='Title It!' name='listlabel'><br></form><div class='desc'><textarea placeholder='Describe It!' id='desc' name='desc'></textarea></div></center></div>";

    console.log(listNum);
    listNum += 1;
}
     
function remove() {
    const div = document.getElementById(listNum);

    if (listNum <= 1) {} else {listNum -= 1;}
    
    console.log(listNum);
}
    
    // Space for Comments
