const validatePassword = (password : string) => {
    const specialCharRegex = /[^a-zA-Z0-9]/;
    const digitRegex = /[0-9]/;

    return(
        password.length >= 8 &&
        specialCharRegex.test(password) &&
        digitRegex.test(password) &&
        !password.toLowerCase().includes("ipl")
    );
}

export default validatePassword;