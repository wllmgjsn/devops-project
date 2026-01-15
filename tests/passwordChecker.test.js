import validatePassword from "../src/passwordChecker";


test("Choufleur1! is a valid password", () => {
    const pw = "Choufleur1!";
    expect(validatePassword(pw)).toBe(true);
})

test("abc is not a valid password", () => {
    const pw = "abc";
    expect(validatePassword(pw)).toBe(false);
})
