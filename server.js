// IMPORTING REQUIRED MODULES
import express from 'express';
import { connect, Schema, model } from 'mongoose';
import cors from 'cors';


//CREATING AN EXPRESS APP
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

//CONNECTING TO MONGO DB 
connect('mongodb://admin:omkar2531@127.0.0.1:27017/Photography',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log('MongoDB connected') })
    .catch((err) => { console.log(err) });

// CREATED A MONGOOSE SCHEMA AND MODEL
const Formschema = new Schema({
    name: String,
    email: String,
    phone: String,
    schedule: String,
    service: String,
});

const Formdata = model('clientdetail', Formschema);


// DEFINING API ROUTES

//GETTING DATA
app.get('/formdata', async (req, res) => {
    try {
        const data = await Formdata.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Data' });
    }
})


app.post('/formdata', async (req, rep) => {
    try {
        const newData = new Formdata(req.body);
        await newData.save();
        rep.status(201).json(newData);
    } catch (error) {
        rep.status(500).json({ message: 'Error Saving Data' })
    }
});

app.put('/formdata/:id', async (req, res) => {
    try {
        const updatedData = await Formdata.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ message: 'Error Updating the Data' });
    }
});

app.delete('/formdata/:id', async (req, res) => {
    try {
        console.log('Deleting ID:', req.params.id); 
        await Formdata.findByIdAndDelete(req.params.id);
        res.json({ message: 'Data Deleted Successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Error Deleting the Data' });
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});