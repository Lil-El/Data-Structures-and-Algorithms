// 防抖  定时器
let timer = null;
function fd(callback) {
  if (timer) {
    clearTimeout(timer);
  } else {
    setTimeout(() => {
      callback();
    }, 1000);
  }
}

// 节流  时差
let last = null;
function jl(callback) {
  let now = new Date().getTime();
  if (now - last >= 3000) {
    callback();
    last = now;
  }
}
