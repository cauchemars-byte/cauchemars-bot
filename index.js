const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        executablePath: '/opt/render/.cache/puppeteer/chrome/linux-127.0.6533.88/chrome-linux64/chrome',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
        ]
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log('QR CODE REÇU ! Scanne-le avec ton WhatsApp :');
});

client.on('ready', () => {
    console.log('Le Bot est en ligne et prêt !');
});

client.initialize();
