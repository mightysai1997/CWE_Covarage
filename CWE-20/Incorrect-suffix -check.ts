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
