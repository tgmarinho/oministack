import axios from 'axios';

/**
 * ANDROID: fazer o redirecionamento de portas
 * $ adb reverse tcp:3333 tcp:3333 
 */

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api;