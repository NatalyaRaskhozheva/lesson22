class IsNotNumberError extends Error {
	constructor() {
		super()
		this.message = 'Має бути числом'
		this.name = 'IsNotNumberError'
	}
}
class IsNegativeNumberError extends Error {
	constructor() {
		super()
		this.message = "Не може бути від'ємним"
		this.name = 'isNegativeNumberError'
	}
}
class IsTooHightNumberErrorMounth extends Error {
	constructor(currentNumber) {
		super()
		this.currentNumber = currentNumber
		this.message = 'Число повинно бути не більше 12'
		this.name = 'IsTooHightNumberError'
	}
}
class IsTooHightNumberErrorRaiting extends Error {
	constructor(currentNumber) {
		super()
		this.currentNumber = currentNumber
		this.message = 'Число повинно бути не більше 100'
		this.name = 'IsTooHightNumberError'
	}
}

class ElementsCreator {
	static createHTMLElement({ tag, attrs, props, events }) {
		const el = document.createElement(tag)
		if (attrs) {
			for (const attrKey in attrs) {
				el.setAttribute(attrKey, attrs[attrKey])
			}
		}
		if (props) {
			for (const propKey in props) {
				el[propKey] = props[propKey]
			}
		}
		if (events) {
			for (const eventType in events) {
				el.addEventListener(eventType, events[eventType])
			}
		}
		return el
	}
	static createInputWithLabel({ labelOptions, inputOptions }) {
		const inp = ElementsCreator.createHTMLElement({
			tag: 'input',
			...(inputOptions ?? {}),
		})
		const label = ElementsCreator.createHTMLElement({
			tag: 'label',
			...(labelOptions ?? {})
		})
		label.append(inp)
		return { label, inp }
	}
}
class CreateInputElem {
	constructor({ title, nameClass }) {
		this.title = title
		this.nameClass = nameClass
		this.el = this.createElement()
	}
	onValue() {
		const valueEvent = new CustomEvent('value', {
			detail: {
				input: this.obj.inp
			}
		})
		this.el.dispatchEvent(valueEvent)
	}
	createElement() {
		this.obj = ElementsCreator.createInputWithLabel({
			labelOptions: {
				props: {
					innerText: `${this.title}`,
				}
			},
			inputOptions: {
				props: {
					value: 1
				},
				events: {
					change: this.onValue.bind(this)
				}
			}
		})
		return this.obj.label
	}
}

class CreateButton {
	constructor() {
		this.el = this.createElement()
	}
	send() {
		const sendEvent = new CustomEvent('send', {

		})
		this.el.dispatchEvent(sendEvent)
	}
	createElement() {
		const button = ElementsCreator.createHTMLElement({
			tag: 'button',
			props: {
				innerText: 'Надіслати'
			},
			events: {
				click: this.send.bind(this),
			}
		})
		return button
	}
}

class CreateResultDiv {
	constructor() {
		this.el = this.createElement()
	}
	createElement() {
		const container = document.createElement('div')

		return container
	}
}

class Form {
	constructor() {
		this.el = this.createElement()
		this.result = ''
	}
	validValueRaiting(event) {
		try {
			let valueUser = document.forms[0].elements[0].value
			if (isNaN(valueUser)) throw new IsNotNumberError()
			else if (valueUser <= 0) throw new IsNegativeNumberError()
			else if (valueUser > 100) throw new IsTooHightNumberErrorRaiting()
		}
		catch (err) {
			if (err instanceof IsNotNumberError) {
				console.log(err.message)
			} else if (err instanceof IsNegativeNumberError) {
				console.log(err.message)
			} else if (err instanceof IsTooHightNumberErrorRaiting) {
				console.log(err.message)
			} else console.log(err.message)
			return false
		}
		return true
	}
	validValueMounth(event) {
		try {
			let valueUser = document.forms[0].elements[1].value
			if (isNaN(valueUser)) throw new IsNotNumberError()
			else if (valueUser <= 0) throw new IsNegativeNumberError()
			else if (valueUser > 12) throw new IsTooHightNumberErrorMounth()
		}
		catch (err) {
			if (err instanceof IsNotNumberError) {
				console.log(err.message)
			} else if (err instanceof IsNegativeNumberError) {
				console.log(err.message)
			} else if (err instanceof IsTooHightNumberErrorRaiting) {
				console.log(err.message)
			} else console.log(err.message)
			return false
		}
		return true
	}
	sendResult() {
		let valueUserRaiting = document.forms[0].elements[0].value
		let valueUserMounth = document.forms[0].elements[1].value

		if ((this.validValueRaiting() == true) && (this.validValueMounth() == true)) {
			if (valueUserRaiting < 60 && (valueUserMounth != 5 || valueUserMounth != 12)) {
				this.el.innerText = 'Ви можете виправити оцінку!'
			}
			if (valueUserRaiting < 60 && (valueUserMounth == 5 || valueUserMounth == 12)) { 
				this.el.innerText = 'Ви не можете виправити оцінку!'
			}
			if(valueUserRaiting >= 60) {
				this.el.innerText = 'Ви склали предмет!'
			}
		}
	}

	createElement() {
		this.container = document.createElement('div')
		this.form = document.createElement('form')

		const input1 = new CreateInputElem({ title: 'Оцінка', nameClass: 'inputRaiting' })
		input1.el.addEventListener('value', this.validValueRaiting.bind(this))
		this.form.append(input1.el)

		const input2 = new CreateInputElem({ title: 'Місяць', nameClass: 'inputMounth' })
		input2.el.addEventListener('value', this.validValueMounth.bind(this))
		this.form.append(input2.el)

		const button = new CreateButton()
		button.el.addEventListener('send', this.sendResult.bind(this))
		this.form.append(button.el)

		this.container.append(this.form)

		this.result = new CreateResultDiv()
		this.container.append(this.result.el)
		return this.container
	}
	render(targetEl) {
		document.querySelector(targetEl).append(this.el)
	}
}


window.onload = function () {
	const newForm = new Form()
	newForm.render('.task')
}