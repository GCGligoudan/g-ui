const ModalHelper = ((bodyCls: string) => {
  let scrollTop: number | null;
  return {
    afterOpen() {
      if (document.scrollingElement) {
        scrollTop = document.scrollingElement.scrollTop;
      } else {
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      }
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose() {
      document.body.classList.remove(bodyCls);
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = (scrollTop as number);
      } else {
        document.body.scrollTop = document.documentElement.scrollTop = (scrollTop as number);
      }
    },
  };
})('modal-open');

const toTime = (time = +new Date()) => {
  const date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
};

const isWeChat = () => {
  const ua = navigator.userAgent.toLowerCase();
  const matchResult = ua.match(/MicroMessenger/i);
  if (matchResult && matchResult[0] === 'micromessenger') {
    return true;
  } else {
    return false;
  }
};

export {
  ModalHelper,
  toTime,
  isWeChat,
};
