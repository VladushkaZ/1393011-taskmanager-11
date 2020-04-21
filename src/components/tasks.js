import {MONTH_NAMES} from "../const.js";
import {formatTime} from "../utils.js";

export const createTasksTemplate = (task) => {
  const {discription, dueDate, color, repeatingDays, isArchive, isFavorite} = task;
  const isExpired = dueDate instanceof Date && dueDate < Date.now();
  const isDateShowing = !!dueDate;

  const date = isDateShowing ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? formatTime(dueDate) : ``;

  const repeatClass = Object.values(repeatingDays).some(Boolean) ? `card--repeat` : ``;
  const deadLineClass = isExpired ? `card--deadline` : ``;
  const archiveButtomInactiveClass = isArchive ? `` : `card_btn--disabled`;
  const favoriteButtomInactiveClass = isFavorite ? `` : `card_btn--disabled`;
  return (
    `<article class="card card--${color} ${repeatClass} ${deadLineClass}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive ${archiveButtomInactiveClass} ">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites ${favoriteButtomInactiveClass} ">
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">${discription}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${date}</span>
                          <span class="card__time">${time}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`
  );
};
