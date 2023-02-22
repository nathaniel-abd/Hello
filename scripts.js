var listNum = 1;

function add(title) {
    document.getElementById("content").innerHTML += "<div class='list' id='" + listNum + "'><center><p class='cardTitle'>" + title + "</p><div class='desc'><textarea placeholder='" + title + "' id='desc' name='desc' onfocusout='descCookie()'></textarea></div></center></div>";

    console.log(listNum);
    listNum += 1;
}
     
function remove() {
    // check box sends id to remove 
    const div = document.getElementById(listNum);

    if (listNum <= 1) {} else {listNum -= 1;}
    
    console.log(listNum);
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

    function descCookie() {
        let desc = getCookie("desc");
        let x = document.getElementById("desc");
        desc = x;
        if (desc != "" && desc != null) {
            setCookie("description", desc, 30);
        }


    }