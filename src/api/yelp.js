import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer km42EXIeksT4YIr1Q9Ix9k2VD9Ppyrmu9UYRzBTt3oK4CjVI-47ZyRFOZzGnpDiKbRMD6-nTL5583I-cRne_ZZSEDy8Qk7QUocSaSDnA1d-xIwTkkGS44TutWd67YHYx'
  }
});