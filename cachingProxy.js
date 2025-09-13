import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';
import fs from 'fs';



const fileContent = fs.readFileSync('urlStack.json','utf8');
let urlStack = JSON.parse(fileContent);
const fileName = 'urlStack.json';

if(!fs.existsSync(fileName)){
    fs.writeFileSync('urlStack.json',JSON.stringify(urlStack),'utf8');
}else{
    const data = fs.readFileSync('urlStack.json','utf-8');
    urlStack = JSON.parse(data);
}

function loadData(){
    
    const fileContent = fs.readFileSync('urlStack.json','utf8');
    fs.writeFileSync('urlStack.json',JSON.stringify(urlStack,null,2),'utf8');
}

async function welcomeUser(){
    const welcomeMessage = chalkAnimation.karaoke(
            'Enter the url, lets check if it is in cache! \n'
        );
}
async function getInputUrl(){
    //loadData();
    const {input_url} = await inquirer.prompt({
        name:'input_url',
        type: 'input'
    });
    const spinner = createSpinner('Lets check it!!!');
    if(urlStack.includes(input_url)){
        chalk.blue(console.log("HIT"));
    }else{
        urlStack.push(input_url);
        loadData();
        chalk.blue(console.log("MISS"));
    }
    console.log(urlStack);
}


await welcomeUser();
await getInputUrl();
