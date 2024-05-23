const path = require('path');
const fs = require('fs');
const baseDir = path.join(__dirname, '/inventory')
const { Command } = require('commander');
const readline = require('readline');
const rl = readline.createInterface(
  process.stdin,
  process.stdout
);

const program = new Command();
program
  .version('1.0.0')
  .description('An Inventory App')
  .option('-r, --read ', 'Read All Inventory', read);
  program
  .command('add <name> <action> <attr>')
  .description('Add Inventory')
  .action(add);

function add(name, action, attr) {
    const filepath = path.join(baseDir, `${name}.json`);
    const content = {[action]: attr};

    const jsonString = JSON.stringify(content, null, 2);

    fs.writeFile(filepath, jsonString, 'utf8', (err) => {
        if (err) {
            throw err;
        } else {
            console.log('Inventory created successfully');
        }
        process.exit(0);
    });
}

function read() {
    const items = fs.readdirSync(baseDir);
    const filenames = [];

    items.forEach(item => {
        const filepath = path.join(baseDir, item);
            const data = fs.readFileSync(filepath, 'utf8');
            const data_json = JSON.parse(data);
            const content = `${item}: ${JSON.stringify(data_json)}`;
            filenames.push(content);    
    });
    console.log(filenames);
    process.exit(0);
}


  program.parse(process.argv)