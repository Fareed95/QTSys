import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

import students from './routes/students.js'

const PORT = process.env.PORT || 5000

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API stuff',
      version: '1.0.0',
      description: 'API stuff for TPAT',
    },
    servers: [
      {
        url: `https://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./students/routes.js', './teachers/routes.js'],
}

const specs = swaggerJSDoc(options)

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

app.use('/api/students', students)

app.get('/', (req, res) => {
  res.send('Hello from homepage')
})
