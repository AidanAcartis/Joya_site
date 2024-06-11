Pour les fichier html relier à un fichier Json. Il faut suivre les étapes suivants pour pouvoir afficher les données du Json.

1. **Project Structure:**
   ```
   project-folder/
   ├── data.json
   ├── index.html
   ├── script.js
   ├── styles.css
   └── server.js
   ```

2. **Package.json:**
   Your `package.json` file should look like this:
   ```json

   ---> npm init -y

   {
     "name": "display-cards",
     "version": "1.0.0",
     "description": "Display Cards from JSON",
     "main": "server.js",
     "scripts": {
       "start": "node server.js"
     },
     "dependencies": {
       "express": "^4.17.1"
     }
   }
   ```

3. **Installing Dependencies:**
   Run `npm install` in your project folder to install Express.

4. **server.js:**
   This file will serve your HTML, CSS, JS, and JSON file using Express.
   ```javascript
   const express = require('express');
   const path = require('path');

   const app = express();
   const PORT = process.env.PORT || 3000;

   app.use(express.static(path.join(__dirname, '/')));

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

5. **index.html, styles.css, script.js, and data.json:**
   Place these files in the project folder as you provided.

6. **Running the Server:**
   Run `npm start` in your terminal, and your server will start.

Now, you can visit `http://localhost:3000` in your browser to view your `index.html` file served by the Node.js server.