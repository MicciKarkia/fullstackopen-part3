const express = require('express')
const app = express()

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
  /*const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0
  return maxId + 1*/
  return Math.floor(Math.random() * 10000000000000)
}

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${amountPersons} people</p><p>${d}</p>`)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log('id:', id)
  const person = persons.find((person) => person.id === id)
  console.log('person: ', person)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((person) => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  const isFound = persons.some((person) => person.name === body.name)

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing',
    })
  } else if (isFound) {
    return res.status(400).json({
      error: 'name must be unique',
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`)
})
