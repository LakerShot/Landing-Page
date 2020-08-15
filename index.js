// btnUp
const btn_up = document.getElementById('btn_up')
btn_up.addEventListener('click', goUp)

window.addEventListener('scroll', scroll)

function scroll(e) {
  if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
    btn_up.style.display = "flex";
  } else {
    btn_up.style.display = "none";
  }
}

function goUp(e) {
  document.body.scrollTop = 0; 
}

// .............................................................................................................................................

const content_buttons = [...document.querySelectorAll('.button-cont__btn-radial')]
const content_p = [...document.querySelectorAll('.content__p')]

console.log(content_buttons);

content_buttons.forEach(button => {
  button.addEventListener('click', changeTab)
})

function changeTab(e) {

  // reset
  document.querySelector('.button-cont__btn-radial_active').classList.remove('button-cont__btn-radial_active')
  document.querySelector('.content__p_active').classList.remove('content__p_active')

  e.target.classList.add('button-cont__btn-radial_active')

  const paragraf = content_p.find(p => p.dataset.contentid === e.target.dataset.btnid)
  
  const p = document.getElementById(paragraf.id).classList.add('content__p_active')

}

// .............................................................................................................................................
