const fs = require('fs');

fs.writeFile('myFile.txt',"Hey My Name Is Naveen ",(err)=>{
    if(err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully");
    }
});

fs.readFile('myFile.txt','utf-8', (err,data)=>{
    if(err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
})

fs.appendFile('myFile.txt',"\n I am a Software Engineer",(err)=>{
    if(err) {
        console.error("Error appending to file:", err);
    } else {
        console.log("File appended successfully");
    }
});

fs.rename('myFile.txt','newFile.txt',(err)=>{
    if(err) {
        console.error("Error renaming file:", err);
    } else {
        console.log("File renamed successfully");
    }
});

fs.unlink('newFile.txt',(err)=>{
    if(err) {
        console.error("Error deleting file:", err);
    } else {
        console.log("File deleted successfully");
    }
}
);

fs.readdir('.', (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
    } else {
        console.log("Files in directory:", files);
    }
});

fs.mkdir('myDirectory', (err) => {
    if (err) {
        console.error("Error creating directory:", err);
    } else {
        console.log("Directory created successfully");
    }
}
);

fs.rmdir('myDirectory', (err) => {
    if (err) {
        console.error("Error removing directory:", err);
    } else {
        console.log("Directory removed successfully");
    }
}
);