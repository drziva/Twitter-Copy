
// TRENDS/TREND OPTIONS GENERATION BELOW:
let trends = [{
  class:"Sports &middot; Trending",
  name:"Falcons",
  postCount:"25K"
},
{
  class:"Military &middot; Trending",
  name:"M1A3 Abrams Tank",
  postCount:"12K"
},
{
  class:"Cars &middot; Trending",
  name:"BMW M4",
  postCount:"161K"
},
{
  class:"Fashion &middot; Trending",
  name:"Bottega Veneta",
  postCount:"189K"
},
{
  class:"Trending",
  name:"Tigers",
  postCount:"43K"
},
{
  class:"Trending",
  name:"A$AP Rocky",
  postCount:"254K"
},
{
  class:"Trending",
  name:"PowerfulJRE",
  postCount:"526.8K"
},]
let trendsHTML='';
trends.forEach((trend)=>{
  trendsHTML+=`
  <div class="trend-option">
    <div class="trend-option-text">
      ${trend.class} <br/>
      <span class="trend-option-span">${trend.name}</span> <br/>
      ${trend.postCount} posts
    </div>
    <div class="trend-option-button">
      <img src="icons/3 dots icon.webp">
    </div>
  </div>
  `
});

document.querySelector('.trend-options-container')
  .innerHTML = trendsHTML;


// FOLLOW PROFILES GENERATION BELOW:

let followProfiles=[
  {
    id:"id1"
  },
  {
    id:"id4"
  },
  {
    id:"id2"
  }
];
