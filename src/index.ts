import app from './app'
import { isProd } from './utils/misc.utils'

const port = Number(process.env.PORT || 8000)

const server = app.listen(port, () => {
  console.log(`\nServer started on port ${port} 🎉`)
  if (isProd) console.log('Running as production 🚨')
})
