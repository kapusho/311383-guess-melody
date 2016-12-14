const drawBlock = (block) => {
  let mainElement = document.querySelector('.main');
  return mainElement.parentNode.replaceChild(block, mainElement);
};

export default drawBlock;
