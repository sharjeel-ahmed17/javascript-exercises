const fs = require('fs');
const path = require('path');

// Function to create folder and files
const createChapters = (numChapters) => {
    for (let i = 1; i <= numChapters; i++) {
        const folderName = `chapter${i}`;
        const folderPath = path.join(__dirname, folderName);

        // Create folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(`Created folder: ${folderName}`);
        }

        // Create index.html file
        const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${folderName}</title>
</head>
<body>
    <h1>Welcome to ${folderName}</h1>
    <script src="script.js"></script>
</body>
</html>`;

        fs.writeFileSync(path.join(folderPath, 'index.html'), indexHtmlContent);
        console.log(`Created file: ${folderName}/index.html`);

        // Create script.js file
        const scriptJsContent = `console.log('This is ${folderName}');`;
        fs.writeFileSync(path.join(folderPath, 'script.js'), scriptJsContent);
        console.log(`Created file: ${folderName}/script.js`);
    }
};

// Number of chapters you want to create
createChapters(5); // Change this number to create more or fewer chapters
