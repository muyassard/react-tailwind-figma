import "./App.css";
import { Brands, Choose, Customer, Footer, Header, HowItWorks, Jobs, Nav, Prices, Statistics } from "./components";

function App() {
  return (
    <>
      <div className="bg-violet-50 pt-12 px-[10%]">
        <Nav />
        <Header />
      </div>
      <Brands />
      <HowItWorks />
      <Choose />
      <Jobs />
      <Customer />
      <Statistics />
      <Prices />
      <Footer />
    </>
  );
}
export default App;
