class CreatureObject {
	constructor(options) {
		this.x = options.x
		this.y = options.y
		this.imgSrc = options.imgSrc
		this.interval = options.interval
	}
	render(containerId) {
		this.container = document.getElementsByClassName(containerId)[0]
		const imageContainer = document.createElement('div')
		imageContainer.classList = 'imageContainer'
		this.container.append(imageContainer)

		this.element = document.createElement('img')
		this.element.src = this.imgSrc
		this.element.style.left = `${this.x}px`
		this.element.style.top = `${this.y}px`
		imageContainer.append(this.element)
	}
}
class House extends CreatureObject {
	constructor(options) {
		super(options)
	}
	renderHouse(containerId) {
		return this.render(containerId)
	}
	updateHouse() {
		this.scale = 1
		this.step = 0.3
		setInterval(() => {
			this.scale += this.step
			if (this.scale > 1 || this.scale < 1) {
				this.step = -this.step;
			}

			this.element.style.transform = `scale(${this.scale})`;
		}, this.interval * 1000)
	}
}

class Dog extends CreatureObject {
	constructor(options) {
		super(options)
	}

	renderDog(containerId) {
		return this.render(containerId)
	}
	updateDog() {
		setInterval(() => {
			this.step = parseInt(Math.random() * (50 - (-50)) + (-50))

			this.x += this.step

			this.element.style.left = `${this.x}px`

		}, this.interval * 1000)
	}
}

class Bird extends CreatureObject {
	constructor(options) {
		super(options)
	}
	renderBird(containerId) {
		return this.render(containerId)
	}
	updateBird() {
		setInterval(() => {
			this.step = parseInt(Math.random() * (10 - (-10)) + (-10))
			this.y += this.step
			this.element.style.top = `${this.y}px`
		}, this.interval * 1000)
	}
}
const optionsHouse = {
	x: 0,
	y: 0,
	imgSrc: '../img/house.png',
	interval: 1
}
let obg = new House(optionsHouse)
obg.renderHouse('container')
obg.updateHouse()

const optionsDog = {
	x: 200,
	y: 0,
	imgSrc: '../img/dog.png',
	interval: 1
}
let dog = new Dog(optionsDog)
dog.renderDog('container')
dog.updateDog()

const optionsBird = {
	x: 0,
	y: 0,
	imgSrc: '../img/bird.png',
	interval: 1
}
let bird = new Bird(optionsBird)
bird.renderBird('container')
bird.updateBird()
// class Creature {
// 	constructor(options) {
// 		this.x = options.x;
// 		this.y = options.y;
// 		this.imagePath = options.imagePath;
// 		this.container = options.container;
// 		this.element = null;
// 	}

// 	generateMarkup() {
// 		const imageContainer = document.createElement('div');
// 		imageContainer.classList.add('image-container');
// 		this.container.appendChild(imageContainer);

// 		const element = document.createElement('img');
// 		element.src = this.imagePath;
// 		element.classList.add('creature-image');
// 		element.style.left = `${this.x}px`;
// 		element.style.top = `${this.y}px`;
// 		imageContainer.appendChild(element);
// 		this.element = element;
// 	}
// }

// class House extends Creature {
// 	constructor(options, scale = 1) {
// 		super(options);
// 		this.scale = scale;
// 		this.minScale = options.minScale;
// 		this.maxScale = options.maxScale;
// 		this.scaleStep = options.scaleStep;
// 		this.updateInterval = options.updateInterval;
// 	}

// 	update() {
// 		this.scale += this.scaleStep;

// 		if (this.scale > this.maxScale || this.scale < this.minScale) {
// 			this.scaleStep = -this.scaleStep;
// 		}

// 		this.element.style.transform = `scale(${this.scale})`;
// 	}
// }

// class Dog extends Creature {
// 	constructor(options) {
// 		super(options);
// 		this.maxHorizontalShift = options.maxHorizontalShift;
// 		this.updateInterval = options.updateInterval;
// 	}

// 	update() {
// 		const shift = Math.floor(Math.random() * (this.maxHorizontalShift * 2 + 1)) - this.maxHorizontalShift;
// 		this.x += shift;
// 		this.element.style.left = `${this.x}px`;
// 	}
// }

// class Bird extends Creature {
// 	constructor(options) {
// 		super(options);
// 		this.maxShift = options.maxShift;
// 		this.updateInterval = options.updateInterval;
// 	}

// 	update() {
// 		const shiftX = Math.floor(Math.random() * (this.maxShift * 2 + 1)) - this.maxShift;
// 		const shiftY = Math.floor(Math.random() * (this.maxShift * 2 + 1)) - this.maxShift;
// 		this.x += shiftX;
// 		this.y += shiftY;
// 		this.element.style.left = `${this.x}px`;
// 		this.element.style.top = `${this.y}px`;
// 	}
// }

// const containerTaskTwo = document.getElementById('creature-container');

// const houseOptions = {
// 	x: 0,
// 	y: 0,
// 	imagePath: './img/house.jpg',
// 	container: containerTaskTwo,
// 	minScale: 0.85,
// 	maxScale: 1,
// 	scaleStep: 0.05,
// 	updateInterval: 200
// };
// const house = new House(houseOptions);
// house.generateMarkup();

// const dogOptions = {
// 	x: 0,
// 	y: 0,
// 	imagePath: './img/dog.jpg',
// 	container: containerTaskTwo,
// 	maxHorizontalShift: 5,
// 	updateInterval: 100
// };
// const dog = new Dog(dogOptions);
// dog.generateMarkup();

// const birdOptions = {
// 	x: 0,
// 	y: 0,
// 	imagePath: './img/hummingbird.jpg',
// 	container: containerTaskTwo,
// 	maxShift: 5,
// 	updateInterval: 150
// };
// const bird = new Bird(birdOptions);
// bird.generateMarkup();

// const creatures = [house, dog, bird];

// creatures.forEach(creature => {
// 	setInterval(() => {
// 		creature.update();
// 	}, creature.updateInterval);
// });