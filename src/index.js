import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

var images = [
  {
    image: "https://i.imgur.com/5GXvZfK.jpg?1",
    name: "Steve Carell",
    quote: "I understand nothing."
  },
  {
    image: "https://i.imgur.com/0WC0G6L.jpg",
    name: "John Krasinski",
    quote: "Right now this is just a job. If I advance any higher in this company, this would be my career. And, uh, if this were my career, I'd have to throw myself in front of a train."
  },
  {
    image: "https://i.imgur.com/n0Zy6XV.jpg",
    name: "Rainn Wilson",
    quote: "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing."
  }
];
var n = Math.floor(Math.random() * images.length);
const bgimg = {
  background: 'url(' + images[n].image + ') no-repeat center fixed',
  backgroundSize: 'cover',
  width: '100%',
  height: '100vh',
  filter: 'grayscale()'
};
const h1 = {
  fontFamily: 'Times New Roman',
  fontSize: '30px',
  fontWeight: '500',
  paddingTop: '5em',
  color: '#fff'
};
const h2 = {
  fontFamily: 'Times New Roman',
  fontSize: '20px',
  fontWeight: '500',
  color: '#fff'
};
function Quote() {
  return images[n].quote;
}
function Author() {
  return images[n].name;
}
function App() {
  return (
    <section style={bgimg}>
      <h1 style={h1} className="title has-text-centered">Believe in something.<br />Even if it means <Quote /></h1>
      <h2 style={h2} className="title has-text-centered"><Author /></h2>
    </section>
  );
}

function NikeAds() {
  return <App />
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NikeAds />, rootElement);