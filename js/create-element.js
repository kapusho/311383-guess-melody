const createElementFromTemplate = (template) => {
  const div = document.createElement("div");
  div.innerHTML = template;
  div.className = "main";
  return div;
};

export default createElementFromTemplate;
