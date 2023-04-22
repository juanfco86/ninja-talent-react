import './App.css';
import MainProvider from './Components/Context/MainProvider';
import MainRouter from './Routes/PublicRoutes'

function App() {
  return (
    <>
      <MainProvider>
        {/* <Header /> */}
        <MainRouter />
        {/* <Footer /> */}
      </MainProvider>
    </>
  );
}

export default App;
