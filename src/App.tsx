import Header from './Header/Header';
import Table from './Table'
import { Users } from "./Seed";

const App = () => {
    return (
      <>
        <div className="App">
          <Header />
        </div>
        <Table Users={Users} />
      </>
    );
}

export default App;
