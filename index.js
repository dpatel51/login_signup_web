const inputs = document.querySelectorAll(".input");
const btn = document.querySelector("#register-button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


btn.addEventListener("click", async () => {
    console.log('btn1 clicked');
    let name = email.value;
    let pass = password.value;

    email.value = "";
    password.value = "";

    console.log(name);
    console.log(pass);

    const id = 22;

    const res= await fetch(`https://mindful-braid-380816.el.r.appspot.com/insert/${name}/${pass}`);
    console.log(res.status);
    console.log(res.statusText);
    console.log(res.body);

    const data = await res.json();

    console.log(data);
})