// class Range {
// 	constructor(minValue, maxValue) {
// 		this.minValue = minValue
// 		this.maxValue = maxValue
// 	}
// 	inRange(value) {
// 		return value >= this.minValue && value <= this.maxValue
// 	}
// 	toString() {
// 		return `Range (${this.minValue}, ${this.maxValue})`
// 	}
// }

// class PensionerChecker extends Range {
// 	constructor(pensionAge = 65) {
// 		super(pensionAge, Infinity)
// 	}
// 	isPensioner(age) {
// 		return this.inRange(age)
// 	}
// 	toString() {
// 		return `PensionerChecker >= ${this.minValue}`
// 	}
// 	checkAge() {
// 		const age = parseInt(this.input.value)
// 		if (this.isPensioner(age))
// 			alert('Pensioner')
// 		else alert('Not a pensioner')

// 	}
// 	render(containerId) {
// 		const div = document.createElement('div')
// 		this.input = document.createElement('input')
// 		div.append(this.input)
// 		const btn = document.createElement('button')
// 		div.append(btn)

// 		btn.onclick = this.checkAge.bind(this)
// 		btn.innerText = 'Check'
// 		document.getElementById(containerId).append(div)
// 	}
// }

// let p1 = new PensionerChecker()
// p1.render('cnt')

// class Dice {
// 	constructor(faceCount) {
// 		this.faceCount = faceCount
// 	}
// 	getScore() {
// 		return 1 + Math.floor(Math.random() * this.faceCount)
// 	}
// }
// class SuperDice extends Dice {
// 	constructor(faceCount, attemptCount) {
// 		super(faceCount)
// 		this.attemptCount = attemptCount
// 	}
// 	getScore() {
// 		let sum = 0
// 		for (let i = 0; i < this.attemptCount; i++) {
// 			let score = super.getScore()
// 			sum += score
// 		}
// 		return sum / this.attemptCount
// 	}
// }
// let s1 = new SuperDice(6, 3)
// document.write(s1.getScore())

class DataList {
	constructor(numbersList) {
		this.numbersList = numbersList
	}
	getMax() {
		return Math.max(...this.numbersList)
	}
	getMin() {
		return Math.min(...this.numbersList)
	}
	getSum(){
		
	}
	getAverage() {
		let sum = this.numbersList.reduce((prevSum, el) => prevSum + el)
		return sum / this.numbersList.length
	}
	createNumberElement(num, average) {
		const li = document.createElement('li')
		li.innerText = num
		if (num > average) li.style.color = 'red'
		return li
	}
	render(containerId) {
		const container = document.getElementById(containerId)
		const average = this.getAverage()
		const ol = document.createElement('ol')
		container.append(ol)
		this.numbersList.forEach(num => {
			ol.append(this.createNumberElement(num, average))
		});
	}
	readList(elSelector, elValueProp) {
		const elements = document.querySelectorAll(elSelector)
		this.numbersList = []
		for (const el of elements) {
			this.numbersList.push(parseInt(el[elValueProp]))
		}
	}
}
class PriceList extends DataList {
	constructor(pricelist) {
		super(pricelist)
	}
	getMinPrice() {
		this.getMin()
	}
	getMaxPrice() {
		this.getMax()
	}
	getAveragePrice() {
		this.getAverage()
	}
	readPrices(divSelector) {
		this.readList(divSelector, 'innerText')
	}
	getTotalPrice(){

	}
}
// const d1 = new DataList([3, 10, 69, 7, 8, 90])
// d1.render('cnt')
const d3 = new DataList
d3.readList('.data', 'innerText')
d3.render('cnt')