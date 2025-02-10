window.addEventListener("load", () => {
document.getElementById('button-laigth').addEventListener('click', () => {
	let tl = gsap.timeline({ defaults: { duration: 0.3, stagger: 32 } })
	tl.fromTo(
		'#myButton-one',
		{ opacity: 0, x: -100, y: -100, rotate: 100 },
		{ opacity: 100, x: 0, y: 0, rotate: 0 }
	)
		.fromTo(
			'#myButton-two',
			{ opacity: 0, y: -100 },
			{ opacity: 100, x: 0, y: 0 }
		)
		.fromTo(
			'#myButton-three',
			{ opacity: 0, x: 100, y: -100, rotate: 30 },
			{ opacity: 100, x: 0, y: 0, rotate: 0 }
		)
		.fromTo(
			'#myButton-four',
			{ opacity: 0, x: -100 },
			{ opacity: 100, x: 0, y: 0 }
		)
		.fromTo('#myButton-five', { opacity: 0 }, { opacity: 100 })
		.fromTo('#myButton-six', { opacity: 0, x: 100 }, { opacity: 100, x: 0 })
		.fromTo(
			'#myButton-seven',
			{ opacity: 0, x: -100, y: 100 },
			{ opacity: 100, x: 0, y: 0 }
		)
		.fromTo(
			'#myButton-eight',
			{ opacity: 0, y: 100 },
			{ opacity: 100, x: 0, y: 0 }
		)
		.fromTo(
			'#myButton-nine',
			{ opacity: 0, x: 100, y: 100 },
			{ opacity: 100, x: 0, y: 0 }
		)
		.fromTo('#myButton-ten', { opacity: 0, y: 100 }, { opacity: 100, y: 0 })

	let dl = gsap.timeline()

	dl.to('body', { duration: 0.4, backgroundColor: '#000000' }).to('body', {
		duration: 0.4,
		backgroundColor: '#FFFFFF',
	})
})
})