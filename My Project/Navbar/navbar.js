var userFetch = JSON.parse(localStorage.getItem("logged_in"));
var divChange = document.getElementById("ultra");

function myFunc() {
  value = document.getElementById("nav-select").value;
  if (value == "signout") {
    localStorage.removeItem("logged_in");
    window.location.reload();
  }
}

if (userFetch !== null) {
  divChange.innerHTML = `
    <div><a href="../about/about.html">About</a></div>
    <div><a href="../ConatactPage/contact.html">Contact</a></div>
    <div id = "new">
        <select id = 'nav-select' onchange="myFunc()">
            <option value = 'default'>${userFetch.name}</option>
            <option value = 'default'>Dashboard</option>
            <option value = 'default'>Account Info</option>
            <option value = 'default'>Notifications</option>
            <option value = 'signout'>Sign Out</option>
        </select>
    </div>
    `;
}