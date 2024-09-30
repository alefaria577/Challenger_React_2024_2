export const createSlideshow = (setCurrentIndex, totalSlides) => {
    let currentIndex = 0;

    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        setCurrentIndex(currentIndex);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval); // Retorna uma função para limpar o intervalo
};
