/*
*  Client facing scripts here
*/

// Validate input text from cross-scripting attack
const escapeText = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const capFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//  Create dish HTML JQuery element
const createDishElement = function(dish) {
  const $dish = $(
    `
    <div class="dish-box">
      <div class="dish">
        <picture class="dish-image-box">
          <img class="dish-image" src=${escapeText(dish.photo_url)} alt=${escapeText(dish.name)}>
        </picture>
        <div class="dish-name">${escapeText(dish.name)}</div>
        <div class="dish-details">
          <div class="dish-price">$${escapeText(dish.price / 100)}</div>
          <div class="dish-dot-spacer">•</div>
          <div class="dish-calorie">${escapeText(dish.calorie)} Cal.</div>
        </div>
        <i class="fa-solid fa-circle-plus" id="${escapeText(dish.id)}"></i>
      </div>
    </div>
    `
  );
  return $dish;
};

//  Create menu HTML JQuery element
const createMenuElement = function(dishes) {
  const menus  = {};
  let currentType = dishes[0].type;
  menus[currentType] = $(
    `
    <div class="menu-by-type">
    <div class="type-header"> ${escapeText(capFirstLetter(currentType))} </div>
    <div class="dish-list"></div>
    </div>
    `
  );
  for (const dish of dishes) {
    const $dish = createDishElement(dish);
    if (dish.type !== currentType) {
      currentType = dish.type;
      if (!menus[currentType]) {
        menus[currentType] = $(
          `
          <div class="menu-by-type">
          <div class="type-header"> ${escapeText(capFirstLetter(currentType))} </div>
          <div class="dish-list"></div>
          </div>
          `
        );
      }
    }
    menus[currentType].children('.dish-list').append($dish);
  }
  return menus;
}

// Create HTML elements for all menus and append them to the menu container
const renderMenus = function(data) {
  const menus = createMenuElement(data);
  for (const index in menus) {
    $('.menu-container').append(menus[index]);
  }
}

//  Load menu and all dishes using AJAX request
const loadMenus = function() {
  $.get('/menus', (data) => {
    console.log('data: ', data[0]);
    renderMenus(data);
  });
};

//  Load page
$(document).ready(function() {
  loadMenus();
});
