import app from './app'

const port = Number(process.env.PORT || 8000)

app.listen(port, () => console.log(`\nServer started on port ${port} 🎉 (as ${process.env.NODE_ENV})`))
