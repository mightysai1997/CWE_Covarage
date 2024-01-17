//In this example, the function isImageFile is intended to check if a given file has a valid image extension. However, the code has a security flaw because it only checks if the filename ends with the allowed extensions. An attacker could potentially exploit this by using a filename like malicious_script.jpg.png, which would still pass the check and might be treated as an image file.

function isImageFile(filename: string): boolean {
    // Incorrect suffix check
    const allowedExtensions = ['.jpg', '.png', '.gif'];

    for (const extension of allowedExtensions) {
        if (filename.endsWith(extension)) {
            return true;
        }
    }

    return false;
}
