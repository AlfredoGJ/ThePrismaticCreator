interface ElementCoordinates {
  left: number;
  top: number;
  width: number;
  height: number
}

export default function getElementCoordinates(
  element: HTMLElement
): ElementCoordinates {
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height
  };
}

export type {
    ElementCoordinates
}