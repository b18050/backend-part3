const express = require('express')
const app = express()

app.use(express.json())

const persons = [
	{
		name: "Arto Hellas",
		number: "040-123456"
	},
	{
		name: "Ada-Lovelace",
		number: "39-34-234534"
	},
	{
		name: "Dan Abramov",
		number: "12-34-345"
	},
	{
		name: "Harry Poppendieck",
		number: "39-234-234"
	}
]
	



app.get('/',(request,response) => {
	response.send('<h2> Hello World </h2>')
})

app.get('/api/persons',(request,response) => {
	console.log(persons)
	response.json(persons)
})

app.get('/info',(request,response) => {
	console.log('IN INfo')
	const len=persons.length
	const date = new Date()
	const info = `Phonebook has info for ${len} persons
	<br> ${date}`
	response.send(info)

})
const port = 3001
app.listen(port)
console.log(`Server running at port ${port}`)