function switchVideoes(){
    const mainVideo = document.querySelector('.card .mvid .vid')
    const vid = document.querySelector('.vid-list .active video')
    mainVideo.innerHTML = vid.outerHTML
}


switchVideoes()
playTitle()
unmute()

function activeVideo(){
    const videoes  = document.querySelectorAll('.vid-list .vid')
    videoes.forEach(video =>{
        video.addEventListener('click',()=>{
            videoes.forEach(vid =>{
                vid.classList.remove('active')
            })
            video.classList.add('active')
            switchVideoes()
            playTitle()
            unmute()

        })    
    
    })

}


activeVideo()
unmute()


function playTitle(){
    const tit = document.querySelector('.description .title')
    const title = document.querySelector('.vid-list .active .name')
    tit.textContent = title.textContent
}


function unmute(){
    const video = document.querySelector('.mvid .vid video')
    video.muted = !video.muted;
    video.controls = true
    console.log(video.duration)
    video.play()
    video.loop = true
}
unmute()

function like(){
    const like = document.querySelector('.reaction .bx-like')
    const dislike = document.querySelector('.reaction .bx-dislike')

    like.addEventListener('click', () =>{
        if (like.classList.contains('bx-like')){
            like.classList.replace('bx-like','bxs-like')

            if (dislike.classList.contains('bxs-dislike')){
                dislike.classList.replace('bxs-dislike','bx-dislike')
            
            }

        }else{
            like.classList.replace('bxs-like','bx-like')
        }

        
    })
}
function dislike(){
    const dislike = document.querySelector('.reaction .bx-dislike')
    const like = document.querySelector('.reaction .bx-like')

    dislike.addEventListener('click', () =>{
        if (dislike.classList.contains('bx-dislike')){
            dislike.classList.replace('bx-dislike','bxs-dislike')

            if (like.classList.contains('bxs-like')){
                like.classList.replace('bxs-like','bx-like')
            
            }

        }else{
            dislike.classList.replace('bxs-dislike','bx-dislike')
        }
    })
}

function control(){
    const like = document.querySelector('.reaction .bx-like')
    const dislike = document.querySelector('.reaction .bx-dislike')    

    like.addEventListener('click',()=>{
        console.log('liked')
    })
    dislike.addEventListener('click',()=>{
        console.log('disliked')
    })
}

like()
dislike()

function doobles(){
    const dooble = document.querySelector('.doble button');
    dooble.addEventListener('click',()=>{
        console.log(dooble)
        dooble.classList.toggle('dobled');
        console.log(dooble)
    });
    if (dooble.classList.contains('dobled')){
        dooble.innerHTML = "<i class='bx bx-slideshow'></i>Doobled</button>"
    }else{
        dooble.innerHTML = "<i class='bx bx-slideshow'></i>Dooble it!</button>";
    }
}
doobles()

function navBar(){
    const buttons = document.querySelectorAll('.nav i')
    buttons.forEach(btn =>{
        btn.addEventListener('click',()=>{
            buttons.forEach(batan =>{
                batan.classList.remove('active')
            })
            btn.classList.add('active')

        })    
    
    })

}

navBar()