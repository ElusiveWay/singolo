window.onload = () => {
    window.singolo = (function (){
        /*header sect*/
        const sct = [
            { home : 'slider'},
            { services : 'services'},
            { portfolio : 'portfolio'},
            { about : 'about-us'},
            { contact : 'quote'}
        ]
        const selectorLi = '.header nav ul li'
        const selectorLi2 = '.services'
        const changeActive = (v,i) => {
            if (scrollY >= document.querySelector(`.${sct[i][Object.keys(sct[i])[0]]}`).offsetTop - 1 - parseFloat(getComputedStyle(document.querySelector('.main')).marginTop) && v.innerHTML == Object.keys(sct[i])[0]) {
                document.querySelectorAll(selectorLi).forEach(r=>r.classList.remove('active'))
                v.classList.add('active')
            }
        }
        document.onscroll = ()=> {
            document.querySelectorAll(selectorLi).forEach(v=>{
                v.classList.remove('active')
                for (let i=0; i < sct.length; i++){
                    changeActive(v,i)
                }
            })
        }
        const binder = (el,i) => {
            el.onclick = () => {
                    window.scrollTo({
                        top: document.querySelector(`.${sct[i][Object.keys(sct[i])[0]]}`).offsetTop - 95,
                        behavior: "smooth"
                });
                }
            }
            document.querySelectorAll(selectorLi).forEach(binder)

            //slider
            
            document.querySelector('.n2').style.transform = 'translateY(-100%) translateX(calc(100% + 100vw))'
            document.querySelector('.n1').style.transform = ''  
            const click = {
                prev : ()=>{ 
                    if (document.querySelector('.n2').style.transform == 'translateY(-100%) translateX(calc(100% + 100vw))' && document.querySelector('.n1').style.transform == ''){
                        document.querySelector('.n2').style.transition = '0s'
                        document.querySelector('.n1').style.transition = '0s'
                       document.querySelector('.n2').style.transform = 'translateY(-100%) translateX(calc(-100% - 100vw))'
                        setTimeout(()=>{
                            document.querySelector('.n2').style.transition = '0.5s'
                            document.querySelector('.n1').style.transition = '0.5s'
                            document.querySelector('.n2').style.transform = 'translateY(-100%)'
                            document.querySelector('.n1').style.transform = 'translateX(calc(100% + 100vw))'
                        },25)
                    }
                    else if (document.querySelector('.n2').style.transform == 'translateY(-100%)' && document.querySelector('.n1').style.transform == 'translateX(calc(100% + 100vw))'){
                        document.querySelector('.n2').style.transition = '0s'
                        document.querySelector('.n1').style.transition = '0s'
                        document.querySelector('.n1').style.transform = 'translateX(calc(-100% - 100vw))'
                        setTimeout(()=>{
                            document.querySelector('.n2').style.transition = '0.5s'
                            document.querySelector('.n1').style.transition = '0.5s'
                            document.querySelector('.n2').style.transform = 'translateY(-100%) translateX(calc(100% + 100vw))'
                            document.querySelector('.n1').style.transform = ''
                        },25)
                    }
                },
                next : ()=>{ 
                    if (document.querySelector('.n2').style.transform == 'translateY(-100%) translateX(calc(100% + 100vw))' && document.querySelector('.n1').style.transform == ''){
                        document.querySelector('.n2').style.transition = '0s'
                        document.querySelector('.n1').style.transition = '0s'
                        setTimeout(()=>{
                            document.querySelector('.n2').style.transition = '0.5s'
                            document.querySelector('.n1').style.transition = '0.5s'
                            document.querySelector('.n2').style.transform = 'translateY(-100%)'
                            document.querySelector('.n1').style.transform = 'translateX(calc(-100% - 100vw))'
                            setTimeout(()=>{
                                document.querySelector('.n2').style.transition = '0s'
                                document.querySelector('.n1').style.transition = '0s'
                                document.querySelector('.n1').style.transform = 'translateX(calc(100% + 100vw))'
                            },100)
                        },25)
                    }
                    else if (document.querySelector('.n2').style.transform == 'translateY(-100%)' && document.querySelector('.n1').style.transform == 'translateX(calc(100% + 100vw))'){
                        document.querySelector('.n2').style.transition = '0s'
                        document.querySelector('.n1').style.transition = '0s'
                        document.querySelector('.n1').style.transform = 'translateX(calc(100% + 100vw))'
                        setTimeout(()=>{
                            document.querySelector('.n2').style.transition = '0.5s'
                            document.querySelector('.n1').style.transition = '0.5s'
                            document.querySelector('.n2').style.transform = 'translateY(-100%) translateX(calc(-100% - 100vw))'
                            document.querySelector('.n1').style.transform = ''
                            setTimeout(()=>{
                                document.querySelector('.n2').style.transition = '0s'
                                document.querySelector('.n1').style.transition = '0s'
                                document.querySelector('.n2').style.transform = 'translateY(-100%) translateX(calc(100% + 100vw))'
                            },350)
                        },25)
                    }
                }
            }
            document.querySelectorAll('.phone').forEach(v=>{
                v.onclick = ()=>{
                    if (v.getElementsByClassName('screen-background')[0].style.backgroundPosition != '1000% center'){
                        v.getElementsByClassName('screen-background')[0].style.backgroundPosition = '1000% center'
                        v.getElementsByClassName('screen-background')[0].style.backgroundRepeat = 'no-repeat'
                    }
                    else{
                        v.getElementsByClassName('screen-background')[0].style.backgroundPosition = 'unset'
                        v.getElementsByClassName('screen-background')[0].style.backgroundRepeat = 'unset'
                    }
                }
            })
            //sort
            document.querySelectorAll('.portfolio__image').forEach(v=>{
                v.onclick = ()=>{
                    if (v.style.border == '5px solid #F06C64' || v.style.border == '5px solid rgb(240, 108, 100)') {
                        v.style.border = '0px solid #F06C64'
                        return 
                    }
                    document.querySelectorAll('.portfolio__image').forEach(v=>v.style.border = '0px solid #F06C64')
                    v.style.border = '5px solid #F06C64'
                }
            })

            function shuffle(k,e){
                document.querySelectorAll('.portfolio__nav ul li').forEach((v,i)=>{
                    v.classList.remove('act')
                })
                e.target.classList.add('act')
                let el = document.querySelector('.portfolio__images-container');
                for (var i = el.children.length; i >= 0; i--) {
                    el.appendChild(el.children[Math.random() * i | 0]);
                }
                
            }  
            //quote
            const submit = (form, e) =>{
                e.preventDefault()
                let sub = (form.subject.value=='')?('Без темы'):('Тема: '+form.subject.value)
                let dec = (form.decribe.value=='')?('Без описания'):('Описание: '+form.decribe.value)
                const str = `Письмо отправлено<br/>${sub}<br/>${dec}`
                console.log(str)
                let elem = document.createElement('div')
                let s = elem.style
                s.width = 'auto'
                s.height = 'auto'
                s.position = "fixed"
                s.left = '50%'
                s.top = '50%'
                s.transform = 'translate(-50%,-50%)'
                s.padding = '30px'
                s.display = 'flex'
                s.flexDirection = 'column'
                s.justifyContent = 'center'
                s.alignItems = 'center'
                s.background = 'white'
                s.textAlign = "center"
                elem.innerHTML =`
                <p>${str}</p><br/>
                <div style="padding:5px;cursor:pointer"onclick="this.parentNode.parentNode.removeChild(this.parentNode)">OK</div>
                `
                document.body.append(elem)
                return false
            }
            function toggle(e) {
                e.target.parentNode.classList.toggle("active");
                e.target.classList.toggle("actiove");
              }
            return {toggle:toggle,click:click,shuffle:shuffle,submit:submit}
    })()
}