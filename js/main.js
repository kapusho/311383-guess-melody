import welcome from './module-welcome';
import levelGenre from './module-level-genre';
import result from './module-result';
import levelArtist from './module-level-artist';


  let slides = [
    welcome,
    levelGenre,
    levelArtist,
    result
  ];

  let current = -1;

  let select = (index) => {
    current = index;
    let mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37: current--; break;
      case 39: current++; break;
    }

    select(current);
  };

  select(0);

