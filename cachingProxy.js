import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import { createProxy } from 'proxy';
import * as http from 'http';

/*
We'll be using the inquirer to get the values from the CLI and then check our stack for the URL.
If the URL is present in the stack, we will return a HIT, if not, MISS.


*/

const server = createProxy(http.createServer());
server.listen(3030, ()=>{
    var port = server.address().port;
    console.log('HTTPs server is up and is running on port %d', port);
});

