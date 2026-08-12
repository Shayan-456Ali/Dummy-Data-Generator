import express from "express"
import "./models/connection.js"
// const mongoose  = require('mongoose')
import {Employee} from "./models/Employee.js"
// mongoose.connect('mongodb://127.0.0.1:27017/company');


const app = express()
const port = 3000

app.set('view engine', 'ejs')

const getRandom = (arr)=>{
  let rno = Math.floor(Math.random() * (arr.length-1))
  return arr[rno];

}

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
})

app.get('/generate', async(req, res) => {
  
   await Employee.deleteMany({})

  let randomNames = ["Shayan", "Danish", "Huzaifa", "Amir", "Raja Ahmad Ali"]
  let randomLang = ["Python", "Java", "Javascript", "C++", "DSA", "COAL"]
  let randomCities = ["Karachi", "Lahore", "Rawalpindi", "Multan", "Bahawalpur"]
  for(let i=0; i<10; i++){
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      Language: getRandom(randomLang),
      City: getRandom(randomCities),
      isManager: (Math.random()>0.5)?true:false
    })

    console.log(e)

    

  }
    res.render('index', {foo: 'FOO'}) ;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
