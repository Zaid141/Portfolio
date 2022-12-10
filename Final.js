const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const map = L.map('map').setView([25,0], 2.5);




   
var camera = L.icon({
  iconUrl: 'camera.png',

  iconSize:     [48, 48], // size of the icon
  iconAnchor:   [24, 48], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

const marker1 = L.marker([53.8008, -1.5491], {icon:camera}).bindTooltip("The first video was made in Leeds in the North of England").addTo(map); // LEEDS, UK
marker1.bindPopup(
  `<div class="title"> VID-E-OH!!! </div> <img class ="pic" src="uk.png">  <h4 class="about">About</h4> <div class="modal-body">The idea for our project is to film a video consisting of 3 people that re-tell the same story from different perspectives. The story is - Mariette's assumes that her laundry got stolen, and the two suspects that NYUAD investigators have gathered are Chuckey and Farley. The purpose of this video was to to engage the community and to make it entertaining, hence more fun to watch and listen. A video can have many purposes, but the purpose of our video was main to entertain its audience. The viewers of the video had several reasons to follow the short detective film. The wanted to hear updates and breakdowns of current events in the university, learn about a new topic, laugh at cohost’s riffing and jokes, and to experience an exhilarating video drama or storytelling. But behind each of these reasons is the desire to be entertained. Whether viewers want to learn something new or simply have something to take their minds off of a mundane task, they want to enjoy the experience of watching our film. Our website gave the platform to the user to watch the film with a creative and fun interface.   </div> <h4 class="design">Design and Implementation</h4> <div>The website has a video of a washing machine running in a loop in the background which give the idea of what the website is about. There is a short description on the cover page regarding the video. I coded to make the cover page for the website. I positioned the video to in cooperate it into the website. I participated into script making process itself to gather the idea as a group and make the video as entertaining and fun as possible in the period we were allocated. I participated in the filming process. The idea overall was so engaging for the group as we could make any addition to the story we wanted to, hence in cooperating everyone’s interests. This was motivating for the team as well as the idea involved everyone, acting as a motivating factor to do better. Most parts were done collectively as we met together during class time or outside of class times.</div> <h4 class="link"> Link to the Webapge </h4> <div><a href=" https://douglasshi.github.io/FunnyInterviewWebsiteFull/index.html">  https://douglasshi.github.io/FunnyInterviewWebsiteFull/index.html </a></div>`,
  {
    minWidth:800,
    maxHeight:400
  }
)


var mic = L.icon({
  iconUrl: 'mic.png',

  iconSize:     [64, 64], // size of the icon
  iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

const marker2 = L.marker([39.9526, -75.1652], {icon:mic}).bindTooltip("The first microphone was made in Philadelphia, USA. ").addTo(map); // Philadelphia, USA
marker2.bindPopup(
 `<div class="title"> NYUAD Talk Show </div> <img class ="pic" src="usa.png"> </div> <h4 class="about">About</h4> <div class="modal-body">The project is a podcast about an experience of a NYUAD student’s fall break. The purpose of this podcast was to to engage the community and to make it entertaining, hence more fun to watch and listen. A podcast can have many purposes, but the purpose of our podcast was main to entertain its audience. The listeners of the podcast had several reasons to follow the podcast. The wanted to hear updates and breakdowns of current events in the university, learn about a new topic, laugh at cohost’s riffing and jokes, listen on interesting interviews with popular guests, and to experience an exhilarating audio drama or storytelling. But behind each of these reasons is the desire to be entertained. Whether listeners want to learn something new or simply have something to take their minds off of a mundane task, they want to enjoy the experience of listening to a podcast. Our website gave the user the desired entertainment.  </div> <h4 class="design">Design and Implementation</h4> <div>The website has a simplistic theme with a “CLICK TO PLAY AND PAUSE”, giving the user the ability to pause and play when desired. The images in the div change according to the audio track that is playing at the moment. I coded for the most part to make the cover page for the website. I positioned the panels to in cooperate them into the website. I participated into the podcast itself to gather the idea as a group and make the podcast as entertaining and fun as possible in the period we were allocated. I participated in the making of the advertisement break audio track.. The idea overall was so engaging for the group as we could make any addition to the story we wanted to, hence in cooperating everyone’s interests. This was motivating for the team as well as the idea involved everyone, acting as a motivating factor to do better. Most parts were done collectively as we met together during class time or outside of class times.</div> <h4 class="link"> Link to the Webapge </h4> <div><a href=" https://zaid141.github.io/Sound/sound.html">  https://zaid141.github.io/Sound/sound.html </a></div>`,
  {
    minWidth:800,
    maxHeight:400
  }
)


var mff = L.icon({
  iconUrl: '30mff.png',

  iconSize:     [48, 48], // size of the icon
  iconAnchor:   [24, 48], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

const marker3 = L.marker([24.5239, 54.4346], {icon:mff}).bindTooltip("Nature Reels was made in NYUAD in Abu Dhabi, UAE. ").addTo(map); //NYUAD, UAE
marker3.bindPopup(
  `<div class="title"> 30MFF WEB SITE </div> <img class ="pic" src="nature.jpg"> </div> <h4 class="about">About</h4> <div class="modal-body"> Nature Reels is video production company based in Abu Dhabi with members from all over the world. Our mission is to raise awareness of the on-going situations affeccting nature and at the same time make short films to engage the community to bring and spread the idea of sustainability. We also reach our audience to encourage them into donating towards a global cause. Currently, the website is focusing on the present flood situation in Pakistan and wants to create awareness and a platform for people to donate. The theme of the website is nature, hence there are short films related to nature and latest news and global problems. I wanted to create a simple yet informative website which would have a big purpose and would bring something to the community. Nature Reels believes that together we can change the world! </div> <h4 class="design">Design and Implementation</h4> <div> I had a very simple design in my mind from my wire frame which I had to evolve to make it a bit more detailed and informative. I added three pages: home, about and contact each having a purpose of its own. I created 3 html files, 3 css files and 2 java script files. The home section of the website was the first one to be implemented to give the website a face. This section starts with a short film regarding a nature debate as a means of information and entertainment. It further goes to tell the latest news regarding nature and images of the scenario. The images change upon clicking the next button which was implemented with java script. This section also has a facts section to house facts regarding the scenario. I then implemented the about section which was done creatively. I used to css to display text over the person's image when hovered upon the picture and blur it when doing so. This saved space and added an element of fun and interactivity for the user. The contact section was implemented next, it housed a contact form and a map of my location. The contact form when submitted, gives an alert of submission which was done with java script. </div> <h4 class="link"> Link to the Webapge </h4> <div><a href=" https://zaid141.github.io/Nature_Reels/plants.html">  https://zaid141.github.io/Nature_Reels/plants.html </a></div>`,
  {
    minWidth:800,
    maxHeight:400
  }
)

var comic = L.icon({
  iconUrl: 'comic.png',

  iconSize:     [64,64], // size of the icon
  iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});
const marker4 = L.marker([46.2044, 6.1432], {icon:comic}).bindTooltip("The first comic was made in Geneva, Switzerland. ").addTo(map); // Geneva, Switzerland
marker4.bindPopup(
 `<div class="title"> Comix Strip </div> <img class ="pic" src="space.png"> </div> <h4 class="about">About</h4> <div class="modal-body">The project is a comic strip about a professor named Professor S., who is a scientist from New York University Abu Dhabi. Our purpose was to create a comic to engage the community and to make comics interactive, hence more fun to read. The overall theme of the website is set in space as the idea behind the comic is time travel, therefore space acts as a medium for time travel. The story is about a scientist who is experimenting her latest creation: a teleportation portal. The portal drives her into different dimensions, in which she discovers new people, cultures and places. Her experiment is a success, and she can explore the world on a whole new level. </div> <h4 class="design">Design and Implementation</h4> <div> The website has a retro theme to give it sort of a game kind of look. As soon as you press “PRESS START TO PLAY”, the comic starts with a space themed music track. Clicking on the next button takes you through a portal GIF and the reader enters a new dimension. There are two buttons to move back and forth with each panel; these buttons also have a red, retro theme to go with the on-going retro, space theme. I coded for the most part to make the cover page for the website with a space themed music track. I positioned the panels and the buttons to in cooperate them into the website. The buttons were added with a hover effect, to indicate when they are pressed. I participated into the comic itself to gather the idea as a group and make the comic as interactive and fun as possible in the period we were allocated. I helped in the making of the Naruto panel as I had ample knowledge on the anime. The idea overall was so engaging for the group as we could make any dimension we wanted to, hence in cooperating everyone’s interests. This was motivating for the team as well as the idea involved everyone, acting as a motivating factor to do better. Most parts were done collectively as we met together during class time or outside of class times. </div> <h4 class="link"> Link to the Webapge </h4> <div><a href=" https://zaid141.github.io/Comic/comic1.html">  https://zaid141.github.io/Comic/comic1.html </a></div>`,
  {
    minWidth:800,
    maxHeight:400
  }
)


var aboutme= L.icon({
  iconUrl: 'aboutme.png',

  iconSize:     [50, 50], // size of the icon
  iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
});

const marker5 = L.marker([ 	31.463618, 74.383672], {icon:aboutme}).bindTooltip("I was born in Lahore, Pakistan. ").addTo(map); //Lahore,Pakistan
marker5.bindPopup(
  `<div class="title"> About Me </div> <img class ="pic" src="me.png"> </div> <h4 class="resume">Resume</h4> <div class="modal-body"> </div> <object data="resume_Zaid.pdf" type="application/pdf" width="800" height="400">
  Resume : <a href="resume_Zaid.pdf">resume_Zaid.pdf</a>
</object>`,
  {
    minWidth:800,
    maxHeight:400
  }
)


var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'info legend'),
        grades = ["3OMFF", "Video-oh","Sound","Comic Strip","About Me"],
        labels = ["30mff.png","camera.png","mic.png","comic.png","aboutme.png"];

    // loop through our density intervals and generate a label with an image for each interval
    div.innerHTML += "<h4> Key </h4>";
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            grades[i] + ("  <img src=" + labels[i]  +" height='35'  width='35'>") +'<br>';
    }

    return div;
};



legend.addTo(map);


// marker.on('click',openModal(modal));
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);





L.easyButton('<a href="index.html"><img class="leaf" src="left.png"></a>', function(btn, map){
  location.replace("index.html")
  }).addTo(map);

 











