export default {
    user: { authenticated: false },
    authenticated: function() {
    fetch("http://localhost:3000/auth/authenticate", {
    credentials: 'include'}) // Don't forget to specify this if you need cookies
    .then((response) => response.json())
    .then((data) => {
    this.user.authenticated = data.authenticated;
    })
    .catch((e) => {
    console.log("error logout");});
    return this.user.authenticated;}
    }
//Pole kindel kas see õiges kohas, aga slaidi järgi peaks siuke funktsioon olema / kaustas.
//Ei toimi vist praegu