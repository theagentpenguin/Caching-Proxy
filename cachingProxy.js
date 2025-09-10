import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';

const urlStack = [];
/*
We'll be using the inquirer to get the values from the CLI and then check our stack for the URL.
If the URL is present in the stack, we will return a HIT, if not, MISS.


*/
async function welcomeUser(){
    const welcomeMessage = chalkAnimation.karaoke(
            'Enter the url, lets check if it is in cache! \n'
        );
}
async function getInputUrl(){

    const {input_url} = await inquirer.prompt({
        name:'input_url',
        type: 'input'
    });
    const spinner = createSpinner('Lets check it!!!');
    if(urlStack.includes(input_url)){
        chalk.blue(console.log("HIT"));
    }else{
        urlStack.push(input_url);
        chalk.blue(console.log("MISS"));
    }
    console.log(urlStack);
}

// const server = createProxy(http.createServer());
// server.listen(3030, ()=>{
//     var port = server.address().port;
//     console.log('HTTPs server is up and is running on port %d', port);
// });
await welcomeUser();
await getInputUrl();
