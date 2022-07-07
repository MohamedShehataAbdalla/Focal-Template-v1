/* Start Up Button */ 
let upButton = document.querySelector(".up");


window.addEventListener("scroll", function () {
    (this.scrollY >= 600)? upButton.classList.add("show") : upButton.classList.remove("show");
});
upButton.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}
/* End Up Button */ 


/* Start Header */
let header_links = document.querySelectorAll('header nav ul li');

header_links.forEach(el => {
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/* End Header */


/* Start Skills*/

let skills_section = document.querySelector(".skills");
window.addEventListener("scroll", function () {
    let skill_offsetTop = skills_section.offsetTop;
    let skill_offsetHeight = skills_section.offsetHeight;
    let window_innerHeight = this.innerHeight;
    let window_pageYOffset = this.pageYOffset;

    if( window_pageYOffset >= (skill_offsetTop + skill_offsetHeight - window_innerHeight )){
        let allSkills = document.querySelectorAll('.skills .progress .technique span');
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
            skill.innerHTML = skill.dataset.progress;
        });
    }

}); 

/* End Skills*/


/** Start testimonials */

let links_test = document.querySelectorAll(".testimonials ul li"),
    divs_test = document.querySelectorAll(".testimonials .text .box");

    links_test.forEach((ele) => {
    ele.addEventListener("click",function (e) {
        links_test.forEach((ele) => {
            ele.classList.remove("active");
            this.classList.add("active");
        });
        divs_test.forEach((ele) => {
            ele.classList.remove("active");
        });
        document.querySelector(ele.dataset.test).classList.add("active");
    });
});


/** End testimonials */


/* Start Portofolio */

let links_work = document.querySelectorAll(".portofolio ul li"),
    divs_work = document.querySelectorAll(".portofolio .our-work > div");

links_work.forEach(el => {
    el.addEventListener("click", activeLink);
    el.addEventListener("click", managImages);
});

/* Remove Active Class*/
function activeLink(){
    links_work.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
/** Manage Images */
function managImages(){
    divs_work.forEach((img) => {
        img.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.prot).forEach((img) => {
        img.style.display = 'block';
    });
}

/* End Portofolio */



/* Start Footer */
document.querySelector('footer span.year').innerHTML = new Date().getFullYear();
/* End Footer */


