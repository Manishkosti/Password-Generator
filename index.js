function generatePasswords() {
    const length = document.getElementById('password-length').value;
    const includeSymbols = document.getElementById('include-symbols').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    
    const password1 = generatePassword(length, includeSymbols, includeNumbers);
    const password2 = generatePassword(length, includeSymbols, includeNumbers);
    
    document.getElementById('password1').innerText = password1;
    document.getElementById('password2').innerText = password2;
}

function generatePassword(length, includeSymbols, includeNumbers) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}

function copyPassword(elementId) {
    const password = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    });
}
