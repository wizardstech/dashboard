import axios from 'axios';

export default axios.create({
  timeout: 30000,
  headers: {
    'Access-Control-Expose-Headers': 'Access-Control-*',
    'Access-Control-Allow-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Origin': '*',
    Allow: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  },
});
