const express = require('express')
const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static(__dirname ));

app.get( '/', (req,res)=>{
  res.render('home.ejs')
})

app.get( '/workouts', (req,res)=>{
  res.render('workouts.ejs')
})

app.get( '/workouts/:workoutID', (req,res)=>{
  res.render('workouts.ejs')
})

app.get( '/exercises', (req,res)=>{
  res.render('exercises.ejs')
})

app.listen( PORT, ()=> console.log(`Running on port ${PORT}` ))
