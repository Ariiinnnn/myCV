'use strict';

// toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function() {
    const pageName = this.innerText.toLowerCase();
    pages.forEach((page) => page.classList.toggle("active", page.dataset.page === pageName));
    navigationLinks.forEach((lnk) => lnk.classList.toggle("active", lnk === this));
    window.scrollTo(0, 0);
  });
});

// Portfolio filter
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (value) => {
  filterItems.forEach(item => {
    if(value === "all" || item.dataset.category === value) item.classList.add("active");
    else item.classList.remove("active");
  });
};

let lastBtn = filterBtn[0];
filterBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(val);
    lastBtn.classList.remove("active");
    btn.classList.add("active");
    lastBtn = btn;
  });
});

select.addEventListener("click", () => elementToggleFunc(select));
selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const val = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterFunc(val);
  });
});

// Contact form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});