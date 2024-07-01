import { buildMinHeap, printAsBinaryTree } from '../src/数据结构/Heap_cp';
import generateArr from '../src/utils/getRandomArray';


let randomArr = generateArr(10, 200);
let minHeap = buildMinHeap([...randomArr]);
printAsBinaryTree(minHeap);