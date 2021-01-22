import Loader from './components/Loader';
import Nav from './components/Nav';
import Title from './components/Title';
import CardList from './components/CardList';
import About from './components/About';
import { websites } from './components/Websites';
import Footer from './components/Footer';

const App = () => {
    return (
        <div >
                    <Loader /> 
                    {/* <ModeSwitch />  */}
                    <Nav /> 
                    <Title />
                    <CardList websites={websites} />
                    <About />
                    <Footer />
                
            
        </div>
    )
}
export default App;

