import React from 'react';
import ReactDOM from 'react-dom';
import { AboutView } from './AboutView'
import  {Enzyme, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

 
describe('AboutView', () => {

    it('should show text', () => {
        const wrapper = shallow(<AboutView />);
        const text =wrapper.find('h3');
        const result = text.text();
        expect(result).toBe('FunFood är för hemma kockar som behöver lite inspiration, med mat för alla tillfällen.');
    });

    it('should show text in about view sektion1', () => {
        const wrapper = shallow(<AboutView />);
        const text =wrapper.find('h4.sektion1');
        const result = text.text();
        expect(result).toBe('Välj bland våra receptfavoriter och dela vår passion för den godaste maten. Här finns middagstips, goda bakverk, mättande mellis och festmenyer. Vi har samlat middagstips för så väl jäktiga vardagar och de dagar då du vill njuta lite extra av middagen. En bra vardagsmiddag går att laga snabbt och enkelt, samtidigt som resultatet bjuder på läckra smaker. Allt från enkla vardagsrätter till en lyxigare middag med passande vin. Alla våra recept är provlagade av våra kockar. Var så god, våra middagsrecept!');
    });

});
