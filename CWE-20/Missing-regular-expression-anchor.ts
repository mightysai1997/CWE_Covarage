function checkPasswordStrength(password: string): boolean {
    // Missing regular expression anchor
    const weakPasswordPattern = "password";

    const regex = new RegExp(weakPasswordPattern);

    return regex.test(password);
}
