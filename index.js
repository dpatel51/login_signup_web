const inputs = document.querySelectorAll(".input");
const btn = document.querySelector("#register-button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

btn.addEventListener("click", async () => {
    let name = email.value;
    let pass = password.value;

    email.value = "";
    password.value = "";

    console.log(name);
    console.log(pass);

    await fetch(`https://mindful-braid-380816.el.r.appspot.com/insert/10/${name}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
    });
})