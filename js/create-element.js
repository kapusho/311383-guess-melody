const createElementFromTemplate = (template) => {
  const div = document.createElement('div');
  div.innerHTML = template;
  return div.firstChild;
};

export default createElementFromTemplate;
