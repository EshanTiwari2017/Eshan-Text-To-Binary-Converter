document.addEventListener('DOMContentLoaded', () => {
    // Get the HTML elements we need to work with
    const textInput = document.getElementById('text-input');
    const convertButton = document.getElementById('convert-button');
    const clearButton = document.getElementById('clear-button');
    const binaryOutput = document.getElementById('binary-output');
    const copyButton = document.getElementById('copy-button');

    // Function to convert text to binary
    function textToBinary(text) {
        let binaryString = '';
        for (let i = 0; i < text.length; i++) {
            // Get the ASCII value of the character
            const charCode = text.charCodeAt(i);
            // Convert the ASCII value to a binary string
            let binary = charCode.toString(2);
            // Pad the binary string with leading zeros to make it 8 bits long
            binary = '00000000'.substr(binary.length) + binary;
            // Add a space after each 8-bit block
            binaryString += binary + ' ';
        }
        // Remove any trailing space
        return binaryString.trim();
    }

    // Add a click event to the Convert button
    convertButton.addEventListener('click', () => {
        const text = textInput.value;
        const binaryResult = textToBinary(text);
        binaryOutput.value = binaryResult;
    });

    // Add a click event to the Clear button
    clearButton.addEventListener('click', () => {
        textInput.value = '';
        binaryOutput.value = '';
    });

    // Add a click event to the Copy button
    copyButton.addEventListener('click', () => {
        binaryOutput.select(); // Select the text in the output box
        document.execCommand('copy'); // Copy the selected text
        
        // Optionally, give the user some feedback
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000); // Change the button text back after 2 seconds
    });
});