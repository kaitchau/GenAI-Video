import Carousel from "./Carousel";

function Home() {
  return (
    <div style={{ padding: '20px', marginTop: '60px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content area. You can add more sections here.</p>
      <Carousel />
      <div style={{ height: '2000px' }}>
        <p>Scroll down to see more content...</p>
      </div>
    </div>
  );
};

export default Home;