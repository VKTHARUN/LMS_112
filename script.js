function login() {
    const name = document.getElementById("username").value;

    if (name === "") {
        alert("Enter Student ID");
        return;
    }

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("studentName").innerText = "Hello, " + name;
}
