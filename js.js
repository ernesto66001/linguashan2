const isMobile={
    Android:function (){
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry:function (){
        return navigator.userAgent.match(/BlackBerry/i)
    },
    IOS:function (){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera:function (){
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows:function (){
        return navigator.userAgent.match(/IEMobile/i)
    },
    any:function (){
        return (isMobile.Android()||
            isMobile.BlackBerry()||
            isMobile.IOS()||
            isMobile.Opera()||
            isMobile.Windows()
        )
    }
}
if(isMobile.any()){
    document.body.classList.add('_touch')
    const menuArrow=document.querySelectorAll('.menu__arrow')
    if(menuArrow.length>0){
        for(let i=0;i<menuArrow.length;i++){
            const arrowElem=menuArrow[i]
            arrowElem.addEventListener('click',(e)=>{
                arrowElem.parentElement.classList.toggle('_active')
            })
        }
    }
}
else{
    document.body.classList.add('_pc')
}
const menuBurger=document.querySelector('.menu__icon')
if(menuBurger){
    const menuBody=document.querySelector('.menu__body')
    menuBurger.addEventListener('click',(e)=>{
        menuBurger.classList.toggle('_active')
        menuBody.classList.toggle('_active')
        document.body.classList.toggle('_lock')
    })
}

const links=document.querySelectorAll('a[data-goto]')
if(links.length>0){
    links.forEach(link=>{
        link.addEventListener('click',onMenuLinkClick)
    })
    function onMenuLinkClick(e){
const link=e.target
        if(link.dataset.goto && document.querySelector(link.dataset.goto)){
const gotoBlock=document.querySelector(link.dataset.goto)

            const gotoBlockPosition=gotoBlock.getBoundingClientRect().top + pageYOffset-document.querySelector('header').offsetHeight;
       window.scrollTo({
           top:gotoBlockPosition,
           behavior:'smooth'
       })
            e.preventDefault()
        }
    }
}

document.addEventListener('mousemove',(e)=>{
    const mountain=document.querySelector('.green__mountain')


    const mouseX=e.clientX
    const mouseY=e.clientY
    const rekt=mountain.getBoundingClientRect()
    const anchorX=rekt.left + rekt.width /2
    const anchorY=rekt.top + rekt.height /2
    const angleDeg=angle(mouseX,mouseY,anchorX,anchorY)

    mountain.style.filter=`hue-rotate(${angleDeg}deg)`

    function angle(cx,cy,ex,ey){
        const dy=ey-cy
        const dx=ex-cx
        const rad=Math.atan2(dy,dx)
        const degrees=rad*180 / Math.PI
        return degrees;
    }
    }
)

const adviceText=document.querySelectorAll('.advice__text')
adviceText.forEach(el=>{
    el.innerHTML=el.innerText.split('').map((elem,inx)=>`<b style="cursor: pointer; animation-delay: ${Math.random()*1000}ms" class="sec3__letter">${elem}</b>`).join('')
})
const tabs_item=document.querySelectorAll('.tabs__item').forEach(el=>{
    el.addEventListener('click',()=>{
        el.classList.add('active')
        if(el.classList.contains('active')){
            el.classList.remove('active')
        }
    })
})