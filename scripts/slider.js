function initialize() { 
    circle1 = document.getElementById('circle1')
    circle1.style.background = '#bbb'

    start_slider('Mathematics', 'assets/images/mathematics.png', 'Engaging resources for teaching and learning Mathematics')
    interval = setInterval(loop_slideshow, 7000)
    set_slider_height()
}

function start_slider(description, src, alt='') { 
    initializing = true
    slider_description = document.getElementById('slider-description-div')
    slider_description_span = document.getElementById('slider-description-span')
    slider_image = document.getElementById('slider-image')

    if (slider_description.classList[0] == 'fade-in' && slider_image.classList[0] == 'fade-in') { 
        slider_description.classList.remove('fade-in')
        slider_image.classList.remove('fade-in')
        initializing = false
    }

    if (initializing) { 
        slider_description_span.innerText = description
        slider_description.classList.add('fade-in')

        slider_image.src = src 
        slider_image.alt = alt
        slider_image.classList.add('fade-in')

    }else { 
        setTimeout(() => {
            slider_description_span.innerText = description
            slider_description_span.style.visibility = 'visible'
            slider_description.style.visibility = 'visible'
            slider_description.classList.add('fade-in')

            slider_image.src = src 
            slider_image.alt = alt
            slider_image.classList.add('fade-in')
            slider_image.style.visibility = 'visible'

        }, 10)
    }
}

function change_slide(id, clicked) { 
    if (document.getElementById(id).style.background = 'white') { 
        if (clicked) { 
            clearInterval(interval)
            interval = setInterval(loop_slideshow, 7000)
        }
        slider_description = document.getElementById('slider-description-div')
        slider_image = document.getElementById('slider-image')

        slider_description.style.visibility = 'hidden'
        slider_image.style.visibility = 'hidden'

        for (let i = 1; i <= 3;i++) { 
            if ('circle'+i == id) { 
                document.getElementById('circle'+i).style.background = '#bbb'
                if(id == 'circle1') { 
                    start_slider('Mathematics', 'assets/images/mathematics.png', 'Engaging resources for teaching and learning Mathematics')
                }else if(id == 'circle2') { 
                    start_slider('Science', 'assets/images/science.png', 'Engaging resources for teaching and learning Science')
                }else if(id == 'circle3') { 
                    start_slider('English Language', 'assets/images/english-language.png', 'Engaging resources for teaching and learning English Language')
                }
            }else { 
                document.getElementById('circle'+i).style.background = 'white'
            }
        }
    }
}

function loop_slideshow() { 
    for(let i = 1; i <= 3;i++) {
        if (document.getElementById('circle'+i).style.background == 'rgb(187, 187, 187)') { 
            i = i + 1
            if (i == 4) i = 1
            change_slide('circle'+i, false)
            break
        }
        
    }
}

function set_slider_height() { 
    const slider_columns = document.getElementById('slider-columns')
    const slider_description_span = document.getElementById('slider-description-span')
    const slider_image = document.getElementById('slider-image')

    slider_description_span.style.visibility = 'hidden'
    slider_image.style.visibility = 'hidden'

    slider_description_span.innerText = 'English Language'
    slider_image.src = 'assets/images/english-language.png'
    slider_image.alt = 'Engaging resources for teaching and learning English Language'
    const height = slider_columns.offsetHeight
    document.getElementById('slider').style.gridTemplateRows = "" + height + "px"
    start_slider('Mathematics', 'assets/images/mathematics.png')
}