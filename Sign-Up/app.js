const getEmail = document.getElementById("semail");
const getPass = document.getElementById("spass");

const signup = () => {

    if (getEmail.value.trim() === "" || getPass.value.trim() === "") {
        Swal.fire({
            title: "Error!",
            text: "Please fill all the fields",
            icon: "error"
        });
        return;
    }

    localStorage.setItem("email", getEmail.value.trim());
    localStorage.setItem("pass", getPass.value.trim());

    Swal.fire({
        title: "Signup Successful!",
        icon: "success",
    });
    document.querySelector(".swal2-confirm").addEventListener("click", () => {
    window.location.href = "Signin.html";
});
}
checkEmail = document.getElementById("lemail")
chechPass = document.getElementById("lpass")
const signin = () => {
    if (localStorage.getItem("email") == checkEmail.value && localStorage.getItem("pass") == chechPass.value) {
        Swal.fire({
            title: "Signin Successful!",
            icon: "success"
        });
    document.querySelector(".swal2-confirm").addEventListener("click", () => {
    window.location.href = "Success-page.html";
});
    } else {
        Swal.fire({
            title: "Invalid Credentials!",
            text: "Try again",
            icon: "error",
            footer: "<a style='color:#7066e0' href='signup.html'>Don't have account?</a>"
        });
    }
}

