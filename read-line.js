const readline = require('readline');

const rl = readline.createInterface(
  process.stdin,
  process.stdout
);

// // rl.question('what is your name?', function(answer){
// //     console.log(answer);
// // })
// rl.setPrompt('How Old are you? ');
//  rl.prompt()
//  rl.on("line", (answer)=>{
//     console.log(answer, "answer")
//  })
// // console.log(answer);
// rl.on("SIGINT",()=>{
//     console.log("terminated");
//     rl.close();
// })

// add inventory
const { Command } = require('commander');

const program = new Command();
program
  .version('1.0.0')
  .description('A simple calculator tool')
  .option('-a, --add <numbers>', 'Add numbers', add)
  .option('-s, --subtract <numbers>', 'Subtract numbers', subtract);
function add(numbers) {
  const numArray = numbers.split(',').map(Number);
  const result = numArray.reduce((acc, num) => acc + num, 0);
  console.log('Result:', result);
}
function subtract(numbers) {
  const numArray = numbers.split(',').map(Number);
  const result = numArray.reduce((acc, num) => acc - num);
  console.log('Result:', result);
}
program.parse(process.argv);