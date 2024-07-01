// 没到时间重新执行
export function debounce(func, wait) {
  let timer;
  return function () {
    const ctx = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      func.apply(ctx, args);
    }, wait);
  }
}

// 节流: 一定时间只执行一次
export function throttle(func, wait, immediate = false) {
  let timer;
  return function () {
    const ctx = this;
    const args = arguments;
    if (timer) {
     return;
    }

    if (immediate) {
      func.apply(ctx, args);
      immediate = false;
    }
    
    timer = setTimeout(() => {
      func.apply(ctx, args);
      timer = null;
    }, wait);
  }
}