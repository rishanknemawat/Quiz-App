const   express                 = require('express'),
        mongoose                = require('mongoose'),
        methodOverride          = require('method-override'),
        flash                   = require('connect-flash'),
        Test                    = require('./models/test');
        Question                = require('./models/question');
        PORT                    = 5000;
        app                     = express();

mongoose.connect("mongodb://localhost/quizApp");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(flash());

app.get('/api/game/test', function(req, res){
    Test.find({})
    .then(test => {res.json(test)})
    .catch(error => console.log(error));
});

app.post('/api/createtest', async (req, res) => {
    try{
        const questions = req.body;
        const test = {questions: []};

        var insertedQuestions = await Question.create(questions);

        insertedQuestions.forEach(question => {
            test.questions.push(question._id);
        });
        
        //console.log("here--" ,test.questions);
        Test.create(test)
        .then(test => {
            res.status(200).send({"message": "success"})
        })
        .catch(error => console.log(error));
    }
    catch(err){ console.log(err); }
});

app.get('/api/game/test/:id', function(req, res){
    Test.findById(req.params.id)
    .then(test => res.json(test))
    .catch(err => console.log(err));
});

app.listen(PORT, function(){
    console.log('The server has started and running.');
})