function validateInput(input: string): boolean {
    // Missing regular expression anchor
    const pattern = "admin";
    const regex = new RegExp(pattern);

    return regex.test(input);
}
