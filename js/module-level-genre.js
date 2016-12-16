import result from './module-result';
import createElementFromTemplate from './create-element.js';
import drawBlock from './draw-block.js';

const levelGenre = createElementFromTemplate(`\
<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`);

const buttonAnswer = levelGenre.querySelector('.genre-answer-send');
buttonAnswer.disabled = true;

buttonAnswer.onclick = (e) => {
  e.preventDefault();
  drawBlock(result);
};

const answers = levelGenre.querySelectorAll('.genre-answer');

answers.forEach((answer) =>{
  answer.onclick = (e) => {
    buttonAnswer.disabled = false;
  };
});

export default levelGenre;
