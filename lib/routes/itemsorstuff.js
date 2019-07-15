const { Router } = require('express');

const videogames = [];

module.exports = Router()
  .post('/', (req, res) => {
    console.log(req.body);
    //our req that we recieve
    const {
      name,
      system,
      type,
      rating
    } = req.body;
    //const type = req.body.type

    //create item with info from req
    const videogame = {
      name,
      system,
      type,
      rating
    };

    videogames.push(videogame);
    res.send(videogame);  //item or items?

  })
  
  .get('/', (req, res) => {
    res.send(videogames);
  })

  .get('/:id', (req, res) => {
    res.send(videogames[req.params.id]);
  })

  .put('/:id', (req, res) => {
    const {
      name,
      system,
      type,
      rating
    } = req.body;

    const updatedVideogame = {
      name,
      system,
      type,
      rating
    };

    videogames[req.params.id] = updatedVideogame;
    res.send(videogames[req.params.id]);
  })

  .delete('/:id', (req, res) => {
    const deleted = videogames.splice(req.params.id, 1);
    res.send(deleted[0]);
  });
