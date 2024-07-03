const express = require('express');
const app = express();

const port = 3000;
app.use(express.json());

let courses = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'python' },
    { id: 3, name: 'java' }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req, res) => {    
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    
    courses.push(course);
    res.json(courses);
});

app.put('/courses', (req, res) => {
    const courseName = req.body.name;
    let course = courses.find(c => c.name === courseName);

    if (course) {
        res.json(courses);
    }
    else {
        let newCourse = {
            id: courses.length + 1,
            name: courseName
        };

        courses.push(newCourse);
        res.json(courses);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
