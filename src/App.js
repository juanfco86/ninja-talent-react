import './App.css';
import MainRouter from './Routes/PublicRoutes'

function App() {
  return (
    <>
      <MainContext>
        {/* <Header /> */}
        <MainRouter />
        {/* <Footer /> */}
      </MainContext>
    </>
  );
}

export default App;
