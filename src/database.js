const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://127.0.0.1/form';

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));