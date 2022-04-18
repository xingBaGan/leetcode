import {rotate} from '../src/数组/rotate'

describe('[1,2,3,4,5,6,7]',()=>{
    test('smoke 1 k=3',()=>{
        let arr = [1,2,3,4,5,6,7];
        rotate(arr,3)
        expect(arr).toEqual([5,6,7,1,2,3,4])
    })
   
    test('smoke 2 k=2',()=>{
        let arr = [1,2,3,4,5,6,7];
        rotate(arr,2)
        expect(arr).toEqual([6,7,1,2,3,4,5])
    })
    test('smoke 2 k=4',()=>{
        let arr = [1,2,3,4,5,6,7];
        rotate(arr,4)
        expect(arr).toEqual([4,5,6,7,1,2,3])
    })
})
describe('[-1,-100,3,99]',()=>{
    test('smoke 1 k=2',()=>{
        let arr = [-1,-100,3,99];
        rotate(arr,2)
        expect(arr).toEqual([3,99,-1,-100])
    })
    test('smoke 2 k=4',()=>{
        let arr = [-1,-100,3,99];
        rotate(arr,4)
        expect(arr).toEqual([-1,-100,3,99])
    })
})
describe('[1,2,3,4,5,6,7]',()=>{
    test('boundary k=0',()=>{
        let arr = [1,2,3,4,5,6,7];
        rotate(arr,0)
        expect(arr).toEqual([1,2,3,4,5,6,7])
    })
    test('boundary k=7',()=>{
        let arr = [1,2,3,4,5,6,7];
        rotate(arr,7)
        expect(arr).toEqual([1,2,3,4,5,6,7])
    })
    test('boundary  k=10',()=>{
        let arr = [1,2,3,4,5,6,7];
        rotate(arr,10)
        expect(arr).toEqual([5,6,7,1,2,3,4])
    })
})

