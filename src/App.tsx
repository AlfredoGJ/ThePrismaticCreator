import Button from './components/atoms/Button/Button';
import Icon from './components/atoms/Icon/Icon';
import Item from './components/atoms/Item/Item';
import Label from './components/atoms/Label/Label';
import Textbox from './components/atoms/Textbox/Textbox';
import Select from './components/molecules/Select/Select';
import { ReactComponent as WhiteMana } from './assets/svg/white-mana-symbol.svg'
import { ReactComponent as GreenMana } from './assets/svg/green-mana-symbol.svg'

function App() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Button />
      <Textbox placeholder='Name' />
      <Select>
        <Item value="White" label="White" />
        <Item value="Black" label="Black" />
        <Item value="Green" label="Green" />
        <Item value="Red" label="Red" />
        <Item value="Colorless" label="Colorless" />
      </Select>
      <Label />
      <Icon>
        <WhiteMana width={20} height={30}/>
      </Icon>
      <Icon>
        <GreenMana width={20} height={30}/>
      </Icon>
    </div>
  );
}

export default App;
