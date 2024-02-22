/* Dando função de ficar com marcação ao clicar e também ficar marcado ao recarregar o site*/
var menuItem = document.querySelectorAll('.item-menu')


function selectlink(){
    menuItem.forEach((item)=>
item.classList.remove('ativo')   
    )
this.classList.add ('ativo')
}
menuItem.forEach((item)=>
item.addEventListener('click' , selectlink)
)

/*Declarando para q so abra qnd clicar no menu hamburguer*/
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
menuSide.classList.toggle('expandir')
})