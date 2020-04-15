import {createSiteMenuTemplate} from "./components/menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createTasksTemplate} from "./components/tasks.js";
import {createEditTaskTemplate} from "./components/edit-task.js";
import {createButtonTemplate} from "./components/button.js";
import {createBoardTemplate} from "./components/board.js";


const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
const siteMainElement = document.querySelector(`.main`);

const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());

render(siteMainElement, createFilterTemplate());

render(siteMainElement, createBoardTemplate());
const TASK_OUT = 3;
const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createEditTaskTemplate());
for (let i = 0; i < TASK_OUT; i++) {
  render(taskListElement, createTasksTemplate());
}

render(boardElement, createButtonTemplate());
