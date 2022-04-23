const fs=require('fs');
const folderName=process.argv[2] || 'Project';
fs.mkdirSync(folderName);
try
{
    fs.writeFileSync(`${folderName}/index.html`,'');
    fs.writeFileSync(`${folderName}/style.css`,'');
    fs.writeFileSync(`${folderName}/app.js`,'');
} catch(e){
    console.log("Something went wrong");
    console.log(e);
}

