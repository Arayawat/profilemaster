import './App.css';

function App() {
  return (
    <div className="wrapper">
        <div className="left">
          <img src="https://i.pinimg.com/280x280_RS/eb/73/01/eb7301d2cac97375e58e5be4162ba052.jpg" alt="user" />
          <h4>Sittipat Palawooth</h4>
          <p>@gunt</p>
          <div className="followbtn">
            <button>Follow</button>
          </div>
        </div>
        <div className="right">
          <div className="info">
            <h3>Info</h3>
            <div className="info_data">
              <div className="data">
                <h4>Description</h4>
                <p>Hi</p>
              </div>
            </div>
            <div className="info_data">
              <div className="data">
                <h4>Friend</h4>
                <p>8</p>
              </div>
              <div className="data">
                <h4>Email</h4>
                <p>1234567890@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="friend">
            <h3>Friend</h3>
            <div className="follower">
              <img src="https://i.redd.it/a1zcxisgjls71.png" alt="" className="followerImage" />
              <div className="name">
                <span>{'{'}follower.name{'}'}</span>
                <span>@{'{'}follower.username{'}'}</span>
              </div>
              <button className="button fc-button">Follow</button>
            </div>
            <div className="follower">
              <img src="https://i.redd.it/a1zcxisgjls71.png" alt="" className="followerImage" />
              <div className="name">
                <span>{'{'}follower.name{'}'}</span>
                <span>@{'{'}follower.username{'}'}</span>
              </div>
              <button className="button fc-button">Follow</button>
            </div>
            <div className="follower">
              <img src="https://i.redd.it/a1zcxisgjls71.png" alt="" className="followerImage" />
              <div className="name">
                <span>{'{'}follower.name{'}'}</span>
                <span>@{'{'}follower.username{'}'}</span>
              </div>
              <button className="button fc-button">Follow</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
