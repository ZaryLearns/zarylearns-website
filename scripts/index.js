let current_page = 'home'
let current_category = 'big'

function change_page(page) { 
    if (current_page != page) { 
        document.getElementById(current_page+'-container').style.display = 'none';
        document.getElementById(page+'-container').style.display = 'grid' 
        current_page = page

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { 
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
        setTimeout(() => { 
            links = Array.from(document.getElementsByClassName('quick-link'))
            links.forEach((link) => { link.style.textDecoration = 'none' })
        },10)
    }

    if (current_page == page && (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)) { 
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        setTimeout(() => { 
            links = Array.from(document.getElementsByClassName('quick-link'))
            links.forEach((link) => { link.style.textDecoration = 'none' })
        },100)
    }
}

function navigate_to_category(page, category) { 
    _goto('_self', page)
    sessionStorage.setItem('category', category)
}

function check_navigation() {
    category = sessionStorage.getItem('category')
    if (category == 'mathematics-category' || category == 'science-category' || category == 'english-language-category' || category == 'social-studies-category') { 
        document.getElementById(category).scrollIntoView({behavior: 'smooth'})
        sessionStorage.removeItem('category')
    }
        
}

function menu(go_to_page) { 
    phone_menu = document.getElementById('phone-menu')
    grid_container = document.getElementById('grid-container')

    if(phone_menu.style.display == 'grid') { 
        phone_menu.style.display = 'none'
        grid_container.style.display = 'grid'
    }else {
        phone_menu.style.display = 'grid'
        grid_container.style.display = 'none'
    }
}

function _goto(open_in='', link, element='') { 
    console.log(link)
    window.open(link, open_in)

    if(element.classList == 'shop-now-button') {  
        setTimeout(() => { element.style.backgroundColor = 'rgba(180,35,35,255)' }, 50)
    }else if (element.classList == 'product-div' || element.classList == 'seasonal-product') { 
        setTimeout(() => { element.style.border = '1px solid transparent' }, 50)
    }
}

window.onscroll = function() {scroll_function()}
function scroll_function() { 
    scroll_button = document.getElementById('top')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
        scroll_button.style.display = 'block'
    }else { 
        scroll_button.style.display = 'none'
    }
}

function top_function() { 
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}