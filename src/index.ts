import app from './app'

const port = Number(process.env.PORT || 8000)

const server = app.listen(port, () => console.log(`Server started on port ${port} 🎉`))
