import {createSiteMenuTemplate} from "./components/menu.js";
import {createTasksTemplate} from "./components/tasks.js";
import {createEditTaskTemplate} from "./components/edit-task.js";
import {createButtonTemplate} from "./components/button.js";
import {createBoardTemplate} from "./components/board.js";
import {createFilterTemplate} from "./components/filter.js";
import {generateFilters} from "./mock/filter.js";
import {generateTasks} from "./mock/tasks";

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
const siteMainElement = document.querySelector(`.main`);

const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());
const filters = generateFilters();
render(siteMainElement, createFilterTemplate(filters));
const TASK_OUT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

render(siteMainElement, createBoardTemplate());
const tasks = generateTasks(TASK_OUT);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(taskListElement, createEditTaskTemplate(tasks[0]));
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
tasks.slice(1, showingTasksCount)
  .forEach((task) => render(taskListElement, createTasksTemplate(task), `beforeend`));

render(boardElement, createButtonTemplate());

const loadButton = boardElement.querySelector(`.load-more`);

loadButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, createTasksTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadButton.remove();
  }
});
