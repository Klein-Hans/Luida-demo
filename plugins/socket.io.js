import io from 'socket.io-client'
const socket = io(process.env.baseURL)

export default socket