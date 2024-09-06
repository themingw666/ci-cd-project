import "./App.css";

function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };
  return (
    <div className="App">
      Hello world
      <div>I' Grey</div>
      <div>Thanks you Grey, I'm Xiao Ming.. testing your app</div>
      <div className="App" style={containerStyle}>
      <img src="https://top10az.com/wp-content/uploads/2021/06/top-10-hacker-noi-tieng-nhat-viet-nam.jpg" alt="Mô tả hình ảnh" style={imageStyle} />
    </div>
    </div>
  );
}

export default App;
