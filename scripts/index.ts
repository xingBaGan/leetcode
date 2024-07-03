import { buildMinHeap, buildMinHeapByLiftup, printAsBinaryTree, heapSort } from '../src/数据结构/Heap_cp';
import generateArr from '../src/utils/getRandomArray';


let randomArr = generateArr(10, 200);
let minHeap = buildMinHeap([...randomArr]);
printAsBinaryTree(minHeap);

console.log('\n\n');

let minHeap2 = buildMinHeapByLiftup([...randomArr]);
printAsBinaryTree(minHeap2);

console.log('\n\n');
const arr = heapSort([...randomArr]);
console.log('arr', arr);
