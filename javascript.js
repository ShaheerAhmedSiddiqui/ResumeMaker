function toggle(params) {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.style.display === "none") {
        menuItems.style.display = "block";
      } else {
        menuItems.style.display = "none";
      }

    var header = document.getElementsByClassName("header");
    header.style.background  = "black";
}
