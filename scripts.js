var listNum = 1;

function add(title) {
    document.getElementById("content").innerHTML += "<div class='list' id='" + listNum + "'><center><p class='cardTitle'>" + title + "</p><div class='desc'><textarea placeholder='Describe It!' id='desc' name='desc'></textarea></div></center></div>";
    listNum += 1;
}

function addNote(note) {
    document.getElementById("1").innerHTML += "<p>" + note + "</p>";
}
     
function remove() {
    listNum -= 1;
    const element = document.getElementById(listNum);
    element.remove();
}
    
    // Space for Comments

    function setCookie(cname,cvalue,exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
      
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    function titleCookie() {
        let title = getCookie("title");
        title = prompt("Title your card:","");
        if (title != "" && title != null) {
            setCookie("title", title, 30);
        }

        add(title);
    }

    function noteCookie() {
        let note = getCookie("note");
        note = prompt("Write your note:","");
        if (note != "" && note != null) {
            setCookie("note", note, 30);
        }

        addNote(note);
    }

//  function copy() {
//    alert("Not done yet, maybe later? :)");
//  }

//    function paste() {
//    alert("Not done yet, maybe later? :)");
//  }
