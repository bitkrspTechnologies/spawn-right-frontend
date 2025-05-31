/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top of the element (in pixels)
 */
export const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

/**
 * Smoothly scrolls to a specific position on the page
 * @param position - The position to scroll to (in pixels from top)
 */
export const scrollToPosition = (position: number) => {
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
}; 