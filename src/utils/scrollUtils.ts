
/**
 * Smooth scroll to a specific element by ID with an optional offset
 * @param id The ID of the element to scroll to
 * @param offset Optional offset from the top (default: 80px to account for the fixed header)
 */
export const scrollToElement = (id: string, offset: number = 80): void => {
  const element = document.getElementById(id);
  
  if (!element) {
    console.warn(`Element with ID "${id}" not found.`);
    return;
  }
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Scroll to the top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Check if an element is in the viewport
 * @param element The element to check
 * @param offset Optional offset (default: 100px)
 * @returns Boolean indicating if element is in viewport
 */
export const isInViewport = (element: HTMLElement, offset: number = 100): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight - offset) &&
    rect.bottom >= offset
  );
};
