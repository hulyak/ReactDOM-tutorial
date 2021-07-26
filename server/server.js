import express from 'express';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../src/App';

const app = express();

const PORT = process.env.PORT || 3000;

// define routes
app.use('^/$', (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${renderToString(<App />)}</div>`
      )
    );
  });
});

// serve static files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
// server side support for jsx babel
