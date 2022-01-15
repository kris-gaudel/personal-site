export const smallTablet = 768;

export const smallTabletMQ = (styles) => `
  @media screen and (max-width: ${smallTablet}px) {
    ${styles}
  }
`;
