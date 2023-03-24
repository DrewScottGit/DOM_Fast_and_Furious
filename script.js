let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  let mainTitle = document.querySelector("#main-titleID");
  
    // Part 2
  let bodyMain = document.querySelector('body')
  bodyMain.style.backgroundColor = 'blue'
    // Part 3
  let favList = document.getElementById("favorite-things")
  
  let lastFavItem = favList.lastElementChild

  lastFavItem.remove()
  
    // Part 4
  let specialTitle = document.querySelectorAll("special-title")
  for(let things of specialTitle){
    specialTitle[things].style.fontsize = '2rem'
  }
  
    // Part 5
  let pastRaces = document.getElementById('past-races')
  // define a variable for past races and set the element by id grab to "past races"
  // if a child of past races == chicago then remove it
  // we need to loop through the array of races to find chicago

  if(pastRaces.hasChildNodes()){
    // this for loop is not working. 
    // pastRaces.length did not work but pastRace.childElementCount did. Not sure why and google isnt giving me a stright answer.
    for (let i = 0; i < pastRaces.childElementCount; i ++){
        if(pastRaces.children[i].textContent == 'Chicago'){
        pastRaces.removeChild(pastRaces.children[i])
        }
    }
  }
  
    // Part 6
    // this did not work as a function becuase there was no way to initiate the 
  let addNewRace = document.createElement("li")
  let newText = document.createTextNode("Columbus")
  addNewRace.appendChild(newText)
  //I had a typo here that was not allowing this last step to complete. 
  document.getElementById("past-races").appendChild(addNewRace)
  
    // Part 7
    //first grab the "main" class that the blog posts belong in
  let newBlogPost = document.querySelector('.main')
  //create a new div container for the new blog post
  let newDivBox = document.createElement('div')
  //we have our main selected and a new div in it now we need to add the style properties to this new div. .style wont work because we need to attach CSS classes to it not individual styles...
  //class list is super important and I need to start leaning on it when pulling CSS styling into JS. 
  newDivBox.classList.add('blog-post')
  newDivBox.classList.add('purple')
  //now the div is styled. Move onto the header
  let newHead = document.createElement('h1')
  // put the same city name used in step 6 here
  let newBlogText = document.createTextNode('Columbus')
  //repeat the steps you did in part 6 to append this child onto the blog post class
  newDivBox.appendChild(newHead)
  newHead.appendChild(newBlogText)

  // this wont show any changes becuase we have not appened the main class. I'm starting to get familiar with seeing how html elements stacking on each other (parent/child relationship) is used in JS and its a cool AHA moment
  // put a new paragrah with text inside the new div. then put that new div into the main
  let newPara = document.createElement('p')
  let textInP = document.createTextNode('I live my life a 1/4 mile at a time')
  newPara.appendChild(textInP)
  newDivBox.appendChild(newPara)
  newBlogPost.appendChild(newDivBox)

    // Part 8
  //on the click of the quote of the day button we want to be able to change the quote 
  //
  let changeQuote = document.querySelector('#quote-title')
  changeQuote.addEventListener('click', randomQuote)
    // Part 9
  // select all blog post
  let selectBlog = document.querySelectorAll('.blog-post')
  for(let i = 0; i < selectBlog.length; i++){
    selectBlog[i].addEventListener('mouseout', function(){
        selectBlog[i].classList.toggle('purple')
    })
    selectBlog[i].addEventListener('mouseenter', function(){
        selectBlog[i].classList.toggle('red')
    })
    
  }
  
  
  
  });