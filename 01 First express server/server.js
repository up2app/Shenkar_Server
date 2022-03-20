//ייבוא החבילה האחראית על יצירת השרת
const express = require('express');

//ייבוא חבילה האחראית על מציאת ניתוב קבצים בשרת
const path = require('path');

//הגדרת הפורט של השרת המקומי יכול להיות כל מספר 
const PORT = 5001;

//מימוש ויצירת השרת 
const app = express();

//הגדרה לשרת להשתמש בקבצים סטטיים הנמצאים בתיקייה מסויימת
app.use(express.static(path.join(__dirname, '/website/')))

//הגדרה לפעולת שליחת קובץ כאשר ניגשים לכתובת הראשית של השרת
app.get(`/`, async (req, res) => {
    res.sendFile(`./index.html`);
})

// /home הגדרה לשליחת מידע טקסטואלי כאשר ניגשים לכתובת 
app.get(`/home`, async (req, res) => {
    res.send('Home sweet home');
})

//הפעלת השרת בפורט הרשום מעלה 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));



/*

כדי ליצור פרוייקט של שרת: 
1) npm init 
2) set entry point as "server.js"
3) install the express package: npm install express
4) install the nodemon package: npm install --save-dev nodemon
5) edit the packages.json file:
    5.1) add the start command script: "start": "node server.js"
    5.2) add the start-dev command script: "start-dev":"nodemon server.js"
*/
