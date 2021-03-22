"use strict";

let scrollAnchor = document.querySelector('.slider__icon-block');
let anchor = document.querySelector(".about");

scrollAnchor.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(".about").scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Hidden mobile menu marginLeft = -windowWidth
let mobileMenu = document.querySelector('.header__mobile-menu-block');
let mobileMenuItems = document.querySelectorAll('.header__mobile-menu .menu__item');

//Burger visible
let menuBurger = document.querySelector(".header__burger-container");
menuBurger.addEventListener('click', function () {
    mobileMenu.classList.toggle('header__mobile-menu-visible');
});

mobileMenuItems.forEach(function (item, i, arr) {
    arr[i].addEventListener('click', function () {
        mobileMenu.classList.toggle('header__mobile-menu-visible');
    });
});

//Mobile menu
let menu = document.querySelector('.header');
window.addEventListener('scroll', function (event) {
    let topCoord = document.querySelector('.slider').offsetHeight;
    if (this.pageYOffset > topCoord) {
        menu.className = "header header_scrolled";
    } else {
        menu.className = "header";
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     let item = document.querySelector(".about");
//     let scrollAnchor = document.querySelector('.slider__icon-block');
//     scrollAnchor.addEventListener('click', function () {
//         item.scrollIntoView(true);
//     });
//  }, false);


//Blog slider
let blogSliderItems = document.querySelector(".blog__items-container");
let circles = document.querySelectorAll(".blog__circle");
let left = 0;
let index = 0;
let blogItemWidth;
circles[0].classList.add('blog__circle_active');

let blogSlider = setInterval(function () {
    let max = +blogItemWidth * 2;
    blogItemWidth = document.querySelector(".blog__slide").offsetWidth;
    // console.log("Left :" + left);
    // console.log("Max" + -max);
    // console.log("Counter" + counter);
    if (left > -max) {
        circles.forEach(function (item, i, arr) {
            if (i === index + 1) arr[i].classList.add('blog__circle_active'); else arr[i].classList.remove('blog__circle_active');
        });
        left -= blogItemWidth;
        index++;
    } else {
        left = 0;
        index = 0;
        circles.forEach(function (item, i, arr) {
            if (i === index) arr[i].classList.add('blog__circle_active'); else arr[i].classList.remove('blog__circle_active');
        });
    }
    blogSliderItems.style.left = left + 'px';
}, 4000);

//Testimonilas slider
let tesSliderItems = document.querySelector(".testimonials__slide-container");
let tesCircles = document.querySelectorAll(".testimonials__circle");
let tesLeft = 0;
let tesIndex = 0;
let tesItemWidth;
tesCircles[0].classList.add('testimonials__circle_active');

let tesSlider = setInterval(function () {
    let max = +tesItemWidth * 2;
    tesItemWidth = document.querySelector(".testimonials__slide").offsetWidth;
    // console.log("Left :" + left);
    // console.log("Max" + -max);
    // console.log("Counter" + counter);
    if (tesLeft > -max) {
        tesCircles.forEach(function (item, i, arr) {
            if (i === tesIndex + 1) arr[i].classList.add('testimonials__circle_active'); else arr[i].classList.remove('testimonials__circle_active');
        });
        tesLeft -= tesItemWidth;
        tesIndex++;
    } else {
        tesLeft = 0;
        tesIndex = 0;
        tesCircles.forEach(function (item, i, arr) {
            if (i === tesIndex) arr[i].classList.add('testimonials__circle_active'); else arr[i].classList.remove('testimonials__circle_active');
        });
    }
    tesSliderItems.style.marginLeft = tesLeft + 'px';
}, 3500);

//Team slider
let teamSliderItems = document.querySelector(".team__slides-container ");
let teamCircles = document.querySelectorAll(".team__circle");
let teamLeft = 0;
let teamIndex = 0;
let teamItemWidth;
teamCircles[0].classList.add('team__circle_active');

let teamSlider = setInterval(function () {
    teamItemWidth = document.querySelector(".team__slide").offsetWidth;
    let max = +teamItemWidth * 2;
    // console.log("Left :" + left);
    // console.log("Max" + -max);
    // console.log("Counter" + counter);
    if (teamLeft > -max) {
        teamCircles.forEach(function (item, i, arr) {
            if (i === teamIndex + 1) arr[i].classList.add('team__circle_active'); else arr[i].classList.remove('team__circle_active');
        });
        // console.log(teamLeft);
        teamLeft -= teamItemWidth;
        teamIndex++;
    } else {
        teamLeft = 0;
        teamIndex = 0;
        teamCircles.forEach(function (item, i, arr) {
            if (i === teamIndex) arr[i].classList.add('team__circle_active'); else arr[i].classList.remove('team__circle_active');
        });
    }
    teamSliderItems.style.marginLeft = teamLeft + 'px';
}, 3500);

// let defaultContainerSize = document.querySelector('.container').offsetWidth;
// console.log(containerSize);
// window.addEventListener('resize', function() { 
//     let containerSize = document.querySelector('.container').offsetWidth;
//     if(defaultContainerSize != containerSize) { 
//         blogItemWidth = document.querySelector(".blog__slide").offsetWidth;    
//         for (blogIndex = 0; blogIndex < array.length; blogIndex++) {

//         }  
//    } 
// });

// let teamBars = document.querySelectorAll(".team__slide .team__inner-bar");
// teamBars.forEach(function(item, i, arr) { 
//     item[i].style.width = item[i].dataset.branding + "%";
// })