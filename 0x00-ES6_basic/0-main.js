import { taskFirst, taskNext } from './0-constants';
import taskBlock from './1-block-scoped.js'

console.log(`${taskFirst()}  ${taskNext()}`);


console.log(taskBlock(true));
console.log(taskBlock(false));