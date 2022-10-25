import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Martin Bullman - Home',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: 'Martin Bullman - About',
		},
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
		meta: {
			title: 'Martin Bullman - Projects',
		},
	},
	{
		path: '/projects/single-project',
		name: 'Single Project',
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/SingleProject.vue'
			),
		meta: {
			title: 'Martin Bullman - Single Project',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import(/* webpackChunkName: "projects" */ '../views/Contact.vue'),
		meta: {
			title: 'Martin Bullman - Contact',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;
