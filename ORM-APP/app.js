const express = require('express');
const app = express();
const { sequelize } = require('./models'); // Ensure this import is correct
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync(); 
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(port,'0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});
