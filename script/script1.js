class Client {
	#amount
	constructor(id, name, amount) {
		this.id = id
		this.name = name
		this.Amount = amount
	}
	get Amount() {
		return this.#amount
	}
	set Amount(value) {
		if (value < 0) throw new Error('Error value')
		return this.#amount = value
	}
	additionMoney(number) {
		return this.Amount += number
	}
	deductionMoney(number) {
		return this.Amount -= number
	}
	toString() {
		return `Номер рахунку: ${this.id}<br> Ім'я: ${this.name} <br> Залишок: ${this.Amount}`
	}
}
class GoldenClient extends Client {
	constructor(id, name, amount, limit, percent) {
		super(id, name, amount)
		this.limit = limit
		this.percent = percent
	}
	getAdditionMoney(number) {
		this.additionMoney(number)
	}
	getDeductionMoney(number) {
		this.deductionMoney(number)
	}
	toString() {
		return `Номер рахунку: ${this.id}<br> Ім'я: ${this.name} <br> Залишок: ${this.Amount} <br> Ліміт: ${this.limit}, <br> Відсоток: ${this.percent}`
	}
}
let clientList = [
	new GoldenClient(344, 'Tolya', 90, 560, 9),
	new GoldenClient(384, 'Nata', 900, 560, 67),
	new Client(678, 'Olga', 789, 5800, 7)
]
class Bank {

	constructor(clientList) {
		this.clientList = clientList
		this.clients = []
		this.goldClients = []
		this.sumMoney = 0
	}
	getClients() {
		for (const client of this.clientList) {
			if (client instanceof Client && !(client instanceof GoldenClient)) this.clients.push(client)
		}
	}
	getGoldonClients() {
		for (const client of this.clientList) {
			if (client instanceof GoldenClient) this.goldClients.push(client)
		}
	}
	getSum() {
		for (const client of this.clientList) {
			this.sumMoney += client.Amount
		}
		return this.sumMoney
	}
	toString() {
		return `Звичайні клієнти: ${this.clients} <br> Преміум клієнти: ${this.goldClients} <br> Загальна сума: ${this.sumMoney}`
	}
}

let bank = new Bank(clientList)
bank.getClients()
bank.getGoldonClients()
bank.getSum()
document.write(bank)

