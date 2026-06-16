const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const path = require('path'); // Ajoute cette ligne tout en haut

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        // On pointe vers le dossier local qu'on vient de créer
        executablePath: path.join(__dirname, '.puppeteer', 'chrome', 'linux-127.0.6533.88', 'chrome-linux64', 'chrome'),
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
        ]
    }
});
// ... reste du code identique ...
