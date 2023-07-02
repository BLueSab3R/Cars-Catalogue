import './App.scss';
import Header from './Header/Header';
import Table from './Table/Table';

function App() {
  return (
    <div className="wrapper">
      <div className="bgClickCatcher"></div>
      <div className="container">
        <div className="container__top">
          <Header />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
