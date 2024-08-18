import express from 'express';
const app = express();
app.get('/',(req, res) => {
    res.send('Server is ready');
});

// get a list of five jokes
app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title: 'A Third joke',
            content: 'This is  Third joke'
        },
        {
            id:4,
            title: 'A Forth joke',
            content: 'This is the Forth joke'
        },
        {
            id:5,
            title: 'A Fifth joke',
            content: 'This is the Fifth joke'
        },
        {
            id:6,
            title: 'A Sixth joke',
            content: 'This is the Sixth joke'
        },
    ]
    res.send(jokes);
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})