var allUsers = [];
let users = localStorage.getItem("users");

if (users !== null) {
    allUsers = JSON.parse(users);
}

function Signup() {
    var SignupName = document.getElementById("signupName");
    var SignupEmail = document.getElementById("signupEmail");
    var SignupPassword = document.getElementById("signupPass");

    var name = SignupName.value.trim();
    var email = SignupEmail.value.trim().toLowerCase();
    var password = SignupPassword.value.trim();

    // Empty fields
    if (name === "" || email === "" || password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all fields!"
        });
        return;
    }

    // Password validation
    if (password.length < 6) {
        Swal.fire({
            icon: "warning",
            title: "Weak Password",
            text: "Password must be at least 6 characters long."
        });
        return;
    }

    // Check duplicate email
    var exists = allUsers.find(
        (user) => user.email.toLowerCase() === email
    );

    if (exists) {
        Swal.fire({
            icon: "error",
            title: "Email Already Exists",
            text: "Please use another email."
        });
        return;
    }

    var user = {
        name: name,
        email: email,
        password: password
    };

    allUsers.push(user);

    localStorage.setItem("users", JSON.stringify(allUsers));

    Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "Redirecting to login page...",
        timer: 2000,
        showConfirmButton: false
    }).then(() => {
        window.location.href = "login.html";
    });

    SignupName.value = "";
    SignupEmail.value = "";
    SignupPassword.value = "";
}

function Login() {
    var LoginEmail = document.getElementById("loginEmail");
    var LoginPass = document.getElementById("loginPass");
    var filterUser = allUsers.filter(
        data =>
            data.email === LoginEmail.value.trim() &&
            data.password === LoginPass.value.trim()
    );
    if (filterUser.length) {
        Swal.fire({
            title: "Login successfull!",
            icon: "success"
        });
        document.querySelector(".swal2-confirm").addEventListener("click", () => {
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(filterUser[0])
            );

            window.location.href = "success.html";
        });
        LoginEmail.value = ""
        LoginPass.value = ""
    } else {
        Swal.fire({
            icon: "error",
            title: "Invalid credentials",
            text: "Login not successful",
        });
    }
}