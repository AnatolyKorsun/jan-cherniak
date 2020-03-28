"use strict";

const firstLevel = document.querySelector(".js-first");
const secondLevel = document.querySelector(".js-second");
const heavyLevel = document.querySelector(".js-strong");
const mastersLevel = document.querySelector(".js-master");
const root = document.querySelector(".root");




const buildSlider = (skill) => {
    let cls
    const clases = ['active-slider']
    clases.push(skill)
    cls=clases.join(' ')
    const slider = document.createElement("div")
    const activeSlider = document.querySelector('.active-slider')
    slider.setAttribute("class", cls)
    activeSlider.replaceWith(slider)
}

const upMasterLevel = () => {
  buildSlider('skill-100')
}
const upSecondLevel=()=>{
    buildSlider('skill-50')
}
const upFirstLevel=()=>{
    buildSlider('skill-25')
}
const upHeavyLevel=()=>{
    buildSlider('skill-75')
}

firstLevel.addEventListener("click", upFirstLevel)
secondLevel.addEventListener("click", upSecondLevel)
heavyLevel.addEventListener("click", upHeavyLevel)
mastersLevel.addEventListener("click", upMasterLevel)
