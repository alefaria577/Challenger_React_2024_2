// /src/js/Login.js

export const initiateSlideshow = (setCurrentImage, imagens, intervalTime = 3000) => {
    let index = 0;
    const interval = setInterval(() => {
        setCurrentImage(index);
        index = (index + 1) % imagens.length;
    }, intervalTime);
    return () => clearInterval(interval);
};
