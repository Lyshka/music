export const pagination = (num) => {
  switch (num) {
    case 1:
      return "#about";
    case 2:
      return "#price";
    case 3:
      return "#contacts";
    case 4:
      return "#distribution";
    case 5:
      return "#faq";
  }
};
