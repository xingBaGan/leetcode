import { debounce, throttle } from '../src/concepts/fn_handle';
describe('timer', () => {
  test.skip('debounce', async () => {
    const mockClick = jest.fn();
    const debounceFn = debounce(mockClick, 1000);
    let times = 0;
    setInterval(() => {
      if (times < 3) {
        debounceFn();
        times++;
      }
    }, 800);
    await new Promise((resolve, reject) => {
      setTimeout(() => { resolve(1) }, 5000);
    });
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test('throttle', async () => {
    // const mockClick = jest.fn();
    // const throttleFn = throttle(mockClick, 1000);
    // let times = 0;
    // setInterval(() => {
    //   if (times < 4) {
    //     throttleFn();
    //     times++;
    //   }
    // }, 400);
    // await new Promise((resolve, reject) => {
    //   setTimeout(() => { resolve(1) }, 4000);
    // });
    // expect(mockClick).toHaveBeenCalledTimes(4);
    //https://jsbin.com/ruwucaw/edit?html,js,console,output
  })
});