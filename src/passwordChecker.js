const validatePassword = (password) => {
    if(typeof password !== "string"){
        return false;
    }

    const specialCharRegex = /[^a-zA-Z0-9]/;
    const digitRegex = /[0-9]/;

    return(
        password.length >= 8 &&
        specialCharRegex.test(password) &&
        digitRegex.test(password) &&
        !password.toLowerCase().includes("ipl")
    );
}

module.exports = validatePassword;