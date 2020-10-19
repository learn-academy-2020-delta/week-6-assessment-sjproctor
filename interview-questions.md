# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id, it would be on the sightings model with the data type of integer

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer: update, delete, show, edit - you must select a single item from the database (params of the id)

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer:
  - rails g model - creates a table
  - rails g resource - creates a table, routes, controller
  - rails g migration - allows you to make changes to the database
  - rails g controller

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users - index, get all the users       

method="GET"    /users/1 - show, return the user object with an id of 1

method="GET"    /users/new - new, html form for adding a new user

method="GET"    /users/edit/1 - edit, show an html to edit the user with an id of 1   

method="POST"   /users - create, add a new user to the database    

method="PUT"    /users/1 - update, update the user with id 1    

method="DELETE" /users/1 - destroy, delete the user at id 1     



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.
