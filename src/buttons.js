const buttons = (() => {
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about');

    return {home, menu, about};
})();

export {buttons};