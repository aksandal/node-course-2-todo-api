const expect = require('expect');
const request = require('supertest');
const {ObjectID}=require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../model/todo');

var todos=[{
  _id:new ObjectID(),
  text:'the first todo app'
},{
  _id:new ObjectID(),
  text:'the second todo app'
}]
//executes before every test case is processed
beforeEach((done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos[0])
  }).then(()=>{
    console.log('insertion complete')
    done()
  });
});

/*describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'the first todo app';

    request(app)
      .post('/todos')
      .send(todos[0])
      .expect(200)
      .expect((res) => {
        console.log(`${res.body.text}`)
        console.log(`${todos[0].text}`)
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
            console.log("\n===>\n"+todos+"\n===========\n")
            expect(todos.length).toBe(1);
            //expect(todos[0].text).toBe();
            done();
          }).catch((e) => done(e));
    });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});*/


describe('GET /todos/:id',()=>{
    it('should return todo doc',(done)=>{
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
          expect(res.body.todos.text).toBe(todos[0].text)

        })
        .end(done)
    })
})