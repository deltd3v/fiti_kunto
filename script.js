const el = {
	body: document.querySelector('body'),

	navLogo: document.querySelector('.nav-bar__logo'),
	navMenu: document.querySelector('#nav-bar__mobile-menu'),
	navMenuLinks: document.querySelector('.nav-bar__menu'),
};

const toggleMobileMenu = () => {
	console.log('menu-toggled');
	el.body.classList.toggle('active');
	el.navMenu.classList.toggle('active');
	el.navMenuLinks.classList.toggle('active');
};

el.navMenu.addEventListener('click', toggleMobileMenu);

// feather-icons
// replace data-feather atributes with svg icons
feather.replace();

// GSAP
gsap.registerPlugin(ScrollTrigger);

// hero section animations: on-page load, make the elements drop in from the top
gsap.from('.hero-anim', {
	duration: 0.7,
	opacity: 0.2,
	y: -160,
	stagger: 0.4,
});

// services section animations: on scroll to that section, make the elements slide in from the left
gsap.from('.svcs-anim', {
	scrollTrigger: '.svcs-anim',
	duration: 0.5,
	opacity: 0,
	x: -160,
	stagger: 0.2,
});

gsap.from('.img-anim', {
	scrollTrigger: '.svcs-anim',
	duration: 1.2,
	opacity: 0,
	stagger: 0.12,
	x: -180,
});

// plans section animations: Make the elements fall from the sky, each arriving after the other's fall-animation is complete
gsap.from('.plans-anim', {
	scrollTrigger: '.plans-anim',
	duration: 1.1,
	opacity: 0,
	y: -145,
	stagger: 0.12,
	delay: 0.5,
});

gsap.from('.plans__card-anim', {
	scrollTrigger: '.plans__card-anim',
	duration: 1.15,
	opacity: 0,
	y: -200,
	stagger: 0.6,
	delay: 0.6,
});

// staff section animations. Make the elements
gsap.from('.staff-anim', {
	scrollTrigger: '.staff-anim',
	duration: 0.8,
	opacity: 0,
	y: -145,
	stagger: 0.4,
	delay: .4,
});

// mail section animations. Make the elements
gsap.from('.mail-anim', {
	scrollTrigger: '.mail-anim',
	duration: 1,
	opacity: 0,
	y: -130,
	stagger: 0.6,
	delay: 0.6,
});
