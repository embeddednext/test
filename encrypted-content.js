const CryptoJS = require("crypto-js");
const fs = require("fs");

// Read your HTML content
const htmlContent = fs.readFileSync("index.html", "utf8");

// Encrypt the HTML content
const passphrase = "your-secure-passphrase";  // Use a strong passphrase
const encryptedContent = CryptoJS.AES.encrypt(htmlContent, passphrase).toString();

// Save the encrypted content to a file
fs.writeFileSync("encrypted-content.js", `const encryptedContent = "${encryptedContent}";`);
