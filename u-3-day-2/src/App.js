
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';


function App() {
  return (
    <div class="body">
      <MyNav title="The Book Spot" />

      <Welcome title="The Book Spot" />

      <LatestRelease />

      <MyFooter />
    </div>
  );
}

export default App;
