# QUIZ-ard
# Project Overview

## Project Name

QUIZ-ard

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
QUIZ-ard

An RPG browser game that uses the open trivia API to show you a quiz question at random with clues, you start  every wrong answer you loose a health point, but if you answer correctly you get a new item (clue counter) and show you a new trivia question - if you run out of health points, you lose but if you defeat the time "QUIZ-ard" you win the game! 

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

http://jservice.io/
or 
https://opentdb.com/api.php
https://www.programmableweb.com/api/open-trivia-database-rest-api-v1

......Jservice json......
[
  {
    "id": 28079,
    "answer": "gerrymandering",
    "question": "North Carolina's long, meandering \"I-85 District\" has been called an example of this tactic named for a politician",
    "value": 500,
    "airdate": "1999-07-05T12:00:00.000Z",
    "created_at": "2014-02-11T23:02:33.156Z",
    "updated_at": "2014-02-11T23:02:33.156Z",
    "category_id": 3141,
    "game_id": null,
    "invalid_count": null,
    "category": {
      "id": 3141,
      "title": "congressional districts",
      "created_at": "2014-02-11T23:02:32.637Z",
      "updated_at": "2014-02-11T23:02:32.637Z",
      "clues_count": 20
    }
  }
]
.......opentdb.........
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Television",
      "type": "multiple",
      "difficulty": "medium",
      "question": "In Breaking Bad, the initials W.W. refer to which of the following?",
      "correct_answer": "Walter White",
      "incorrect_answers": [
        "William Wolf",
        "Willy Wonka",
        "Wally Walrus"
      ]
    }
  ]
}
## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

main splash page, with the start button and character choice 
/assets/QUIZ-ard - Main Page.png

main play area with question guesses if applicable 
/assets/QUIZ-ard - play card.png

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build Splash Page | H | 2hrs| 3.5hrs | 3.5hrs |
| Build play page | H | 4hrs| 2.5hrs | 2.5hrs |
| Working with API | H | 4hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 6hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
