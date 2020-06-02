const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())  //Middle ware functions
app.use(cors())
app.use(express.static('build'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host')); // This is a modified version of morgan's tiny predefined format string.

morgan.token('host', function(req, res) {
	const person = {
		name:req.body.name,
		number: req.body.number
	}

    return (JSON.stringify(person));
});

// app.use(morgan(':method : :status :res[content-length] - :response-time ms :name'))
// morgan.token('host', function(req, res) {
//     return req.body;
// });

let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456"
	},
	{
		id: 2,
		name: "Ada-Lovelace",
		number: "39-34-234534"
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-34-345"
	},
	{
		id: 4,
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

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
  	
    response.status(404).end()
  }
})

app.get('/info',(request,response) => {
	console.log('IN INfo')
	const len=persons.length
	const date = new Date()
	const info = `Phonebook has info for ${len} persons
	<br> ${date}`
	response.send(info)

})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const getRandomInt = () => {
	const Id = Math.floor(Math.random() * Math.floor(10000)); 
	console.log(Id)
	return Id
  }

app.post('/api/persons', (request, response) => {
  
  const body = request.body
  console.log(body)
  
  if(!body.name) {
  	return response.status(400).json({
  		error: 'name missing'
  	})
  }

  if(!body.number) {
  	return response.status(400).json({
  		error: 'number missing'
  	})
  }


  if(persons.filter(person => person.name === body.name).length > 0) {
  	console.log("Name already exists")
  	return response.status(409).json({
  		error: 'name already exists'
  	})
  }

  const person = {
  	id : getRandomInt(),
  	name: body.name,
  	number: body.number,
  }

  persons = persons.concat(person)
  response.json(person)

})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running at port ${PORT}`)