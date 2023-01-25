const app = require('./app');

const port = process.env.PORT || 3000

async function init() {
  try {
    app.listen(port, () => {
      console.log(`Server listening on port : ${port}`);
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}

init();