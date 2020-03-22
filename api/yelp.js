import axios from 'axios';
export default axios.create({

  baseURL: 'https://api.yelp.com/v3/businesses',

  headers: {

    Authorization:

      'Bearer Tq7LWf3mLB9UFAIuKqH-v79LM_sAK-bFoeEiKbOr2y00RkXQR0vmVIA0Owi2zz1fGePpFR1U-mPu_sS2vOYwuLW2FPsy6cd-31T-TCOqHqGYvRomgeirRll6tb9KXnYx'
  }

});