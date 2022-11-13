import './App.css';
var images = [
  {
    image: "https://i.imgur.com/5GXvZfK.jpg?1",
    name: "Michael Scott",
    quote: "I understand nothing."
  },
  {
    image: "https://i.imgur.com/UOgeqUi.jpeg",
    name: "Jim Halpert",
    quote: "Right now this is just a job. If I advance any higher in this company, this would be my career. And, uh, if this were my career, I'd have to throw myself in front of a train."
  },
  {
    image: "https://i.imgur.com/n0Zy6XV.jpg",
    name: "Dwight Schrute",
    quote: "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing."
  }
];
var n = Math.floor(Math.random() * images.length);
const bgimg = {
  background: 'url(' + images[n].image + ') no-repeat center fixed',
  backgroundSize: 'contain',
  filter: 'grayscale()'
};
function Quote() {
  return images[n].quote;
}
function Author() {
  return images[n].name;
}
function App() {
  return (
    <section className="bgimg" style={bgimg}>
      <div className="cover">
        <main>
          <h1>Believe in something.<br />Even if it means <Quote /></h1>
          <h2><Author /></h2>
        </main>
      </div>
    </section>
  );
}

export default App;
