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

// replace data-feather icons
feather.replace();
