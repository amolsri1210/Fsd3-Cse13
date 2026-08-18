import {writeFile} from "fs/promises";
import {readFile} from "fs/promises";
const writeData =async (fname,contents)=>{
await writeFile(fname,contents);
console.log("file written");
};
const readData=async(fname)=>{
const data=await readFile("happy.txt","utf-8");
console.log("file contents");
console.log(data);
};
await writeData("happy.txt","I am very happy");
await readData("happy.txt");
const appendData=async(fname,contents)=>{
    await appendFile(fname,'\n'+contents)
};
const deleteFile=async (fname)=>{
    await unlink(fname);
    console.log(`${fname} deleted`);
};
// await writeData("happy.txt","I am very happy");
// await readData("happy.txt");
// await writeData("happy.txt","I am very happy");
// await readData("happy.txt");
await deleteFile("happy.txt")

