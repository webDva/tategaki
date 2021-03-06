function makeVertical(text, rows = 3) {
    let newText = '';
    const padded = (text.length % rows == 0) ? text : text + '　'.repeat(rows - text.length % rows);
    // start from the end. reverse the string
    const reversed = padded.split('').reverse().join('');
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < reversed.length / rows; j++) {
            newText += `${reversed[i * j + rows - i - 1 + j * rows - i * j]}` + '　';
        }
        newText = newText.slice(0, -1);
        newText += '\n';
    }
    newText = newText.slice(0, -1);

    return newText;
}