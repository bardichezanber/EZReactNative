import Alt from 'alt'

// Create alt instance.
const alt = new Alt()

alt.dispatcher.register(console.log.bind(console))

export default alt
