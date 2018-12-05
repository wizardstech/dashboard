import axios from 'axios';

export default axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
