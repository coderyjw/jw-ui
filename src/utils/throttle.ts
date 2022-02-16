export const useThrottleFn = function (
  fn,
  interval,
  { leading = true, trailing = true } = {}
) {
  let nowTime;
  let lastTime = 0;
  let timer;

  function _throttle(...args) {
    nowTime = new Date().getTime();
    // leading为flase表示不希望立即执行函数
    // lastTime为0表示函数没执行过
    if (!leading && lastTime === 0) {
      lastTime = nowTime;
    }

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (nowTime - lastTime >= interval) {
      fn.apply(this, args);
      lastTime = nowTime;
      return;
    }

    // 如果选择了最后一次执行 就设置一个定时器
    if (trailing && !timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
        lastTime = 0;
      }, interval - (nowTime - lastTime));
    }
  }

  return _throttle;
};
