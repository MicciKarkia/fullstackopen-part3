const express = require('express')
const app = express()
//const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

/*app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  
})*/

app.post('/api/persons', (request, response) => {
  const body = request.body

  //const isFound = persons.some((person) => person.name === body.name)

  const person = new Person({
    name: body.name,
    number: body.number,
    //id: generateId(),
  })

  person.save().then((savedPerson) => {
    response.json(savedPerson)
  })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})

/*


app.use(express.json())

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 4,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 5,
  },
]

let d = Date(Date.now())

let amountPersons = persons.length

const generateId = () => {
  //const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0
  //return maxId + 1
  return Math.floor(Math.random() * 10000000000000)
}

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${amountPersons} people</p><p>${d}</p>`)
})

morgan.token('body', function (req, res) {
  return JSON.stringify(req.body)
})

const loggerFormat =
  ':method :url :status :res[content-length] - :response-time ms :body'

app.use(
  morgan(loggerFormat, {
    skip: function (req, res) {
      return req.method !== 'POST'
    },
    stream: process.stdout,
  })
)

app.use(
  morgan('tiny', {
    skip: function (req, res) {
      return req.method === 'POST'
    },
    stream: process.stdout,
  })
)



*/
