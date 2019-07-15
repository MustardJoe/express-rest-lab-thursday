const request = require('supertest');
const app = require('../lib/app');


describe('videogames routes', () => {
  it('can creat a videogame with POST', () => {
    return request(app)
      .post('/api/v1/videogames')
      .send({ name: 'Star Ocean', system: 'SNES', type: 'jrpg', rating: '5 stars' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Star Ocean',
          system: 'SNES',
          type: 'jrpg',
          rating: '5 stars'
        });
      });
  });

  it('can get and array of items with GET', () => {
    return request(app)
      .get('/api/v1/videogames')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'Star Ocean',
          system: 'SNES',
          type: 'jrpg',
          rating: '5 stars'
        }]);
      }); 
  });

  it('can get an item by index numb', () => {
    return request(app)
      .get('/api/v1/videogames/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Star Ocean',
          system: 'SNES',
          type: 'jrpg',
          rating: '5 stars'
        });
      });
  });

  it('can update game with PUT', () => {
    const updatedGame = {
      name: 'Star Ocean 2',
      system: 'PSX',
      type: 'jrpg',
      rating: '5 stars'
    };

    return request(app)
      .put('/api/v1/videogames/0')
      .send(updatedGame)
      .then(res => {
        expect(res.body).toEqual({
          name: 'Star Ocean 2',
          system: 'PSX',
          type: 'jrpg',
          rating: '5 stars'
        });
      });
  });

  it('can delete and item by index', () => {
    return request(app)
      .delete('/api/v1/videogames/0')
      .then( res => {
        expect(res.body).toEqual({
          name: 'Star Ocean 2',
          system: 'PSX',
          type: 'jrpg',
          rating: '5 stars'
        });
      });
  });

});
