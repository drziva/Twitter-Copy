let tweets = JSON.parse(localStorage.getItem('tweets')) || [{
  id:"id1",
  profilePicture:"profile-pictures/jockster.png",
  name:"Jocko Willink",
  username:"@jockowillink",
  text:"Get after it.",
  contentImage:"tweet-images/jocko-bjj.webp"  
},
{
  id:"id2",
  profilePicture:"profile-pictures/joerogan.jpg",
  name:"Joe Rogan",
  username:"@joerogan",
  text:"There is something about the sheer size of tigers that blows my fucking mind everytime I see it.",
  contentImage:"tweet-images/tiger.jpg"  
},
{
  id:"id3",
  profilePicture:"profile-pictures/lex.jpg",
  name:"Lex Fridman",
  username:"@lexfridman",
  text:"Had a great time talking to my great friend Tucker Carlson on the latest episode of podcast.",
  contentImage:"tweet-images/tucker-lex.jpg"  
},
{
  id:"id4",
  profilePicture:"profile-pictures/brad-pitt.png",
  name:"Brad Pitt",
  username:"@Wil_BradPitt",
  text:"Taking a moment to appreciate the journey.",
  contentImage:"tweet-images/brad-pitt-bike.jpg"  
},
{
  id:"id5",
  profilePicture:"profile-pictures/tom-cruise.png",
  name:"Tom Cruise",
  username:"@tomcruise",
  text:"We have worked on this film for years and it's finally in theaters. We hope you love it as much as we loved making it for you. Thank you for continuing to support the Mission: Impossible films.",
  contentImage:"tweet-images/Mission+Impossible+7+Horizontal.jpeg"  
}];

function fetchText(){
  let postButton=document.querySelector('.js-tweet-post-button');

  postButton.addEventListener('click',()=>{
    let tweetText = document.querySelector('.js-tweet-input').value;
  });
  return tweetText;
};


function renderTweets(){
  let tweetsHTML='';
  tweets.forEach((tweet)=>{
    tweetsHTML+=`
    <div class="tweet">
      <div class="tweet-profile-picture">
      <img src="${tweet.profilePicture}">
      </div>
      <div class="tweet-content">
        <div class="tweet-name">
          ${tweet.name}
          <img class="verified-badge" src="icons/Twitter_Verified_Badge.svg.png">
          <span class="tweet-username">${tweet.username} &middot; 4h ago</span>
        </div>
        <div class="tweet-text">
          ${tweet.text}
        </div>
        <div class="tweet-image-container">
          <img src="${tweet.contentImage}">
        </div>
        <div class="tweet-bottom-icons">
          <img src="icons/icons.png">
        </div>
      </div>
    </div class="tweet">
    `
  });

  document.querySelector('.tweets-container').innerHTML=tweetsHTML;
};

function postTweet() {
  const tweetText = document.querySelector('.js-tweet-input').value;
  const imageInput = document.querySelector('#uploadPicture').files[0]; // Get the uploaded image file

  if (tweetText) {
    let maxId = 0;
    tweets.forEach(tweet => {
      const idNumber = parseInt(tweet.id.substring(2));
      if (idNumber > maxId) {
        maxId = idNumber;
      }
    });

    let newId = "id" + (maxId + 1);

    // Create a FileReader object to read the uploaded image file
    const reader = new FileReader();

    // Define a function to handle the onload event when the image is successfully loaded
    reader.onload = function(event) {
      const imageData = event.target.result; // Get the data URL of the uploaded image
      let newTweet = {
        id: newId,
        profilePicture: "profile-pictures/lex.jpg",
        name: "Lex Fridman",
        username: "@lexfridman",
        text: tweetText,
        contentImage: imageData // Assign the image data to the tweet object
      };

      // Insert the new tweet at the beginning of the tweets array
      tweets.unshift(newTweet);
      localStorage.setItem('tweets', JSON.stringify(tweets));
      renderTweets();
    };

    // Read the uploaded image file as a data URL
    reader.readAsDataURL(imageInput);
  } else {
    alert("Tweet cannot be empty");
  }
}

renderTweets();

document.querySelector('.js-tweet-post-button')
  .addEventListener('click',()=>{
    postTweet();
  });