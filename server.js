const app = require('./lib/app');

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`started HTTP server on port ${PORT}. Chumps`);
});

