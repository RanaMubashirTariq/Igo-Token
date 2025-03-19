import './App.css';
import ByIgo from './Components/ByIgo';
import Faqs from './Components/Faqs';
import FooterSection from './Components/FooterSection';
import GetInvolved from './Components/GetInvolved';
import HomeSection from './Components/HomeSection';
import MainSection2 from './Components/MainSection2';
import TokenomicsIgo from './Components/TokenomicsIgo';
import WhyChoiceIgoSection from './Components/WhyChoiceIgoSection';

function App() {
  return (
    <div className="App">
           <HomeSection/>
           {/* <MainSection2/> */}
           <ByIgo/>
            <TokenomicsIgo/>
            {/* <WhyChoiceIgoSection/> */}
           <Faqs/>
           <GetInvolved/>
           <FooterSection/>
    </div> 
  );
}

export default App;
