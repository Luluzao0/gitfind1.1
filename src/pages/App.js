import { useState } from 'react';
import githubLogo from '../assets/gitlogo.png'
import Input from  '../components/Input';
import Button from  '../components/Button';
import ItemRepo from '../components/itemRepo';
import {Container} from './styles'

function App(){

  const[repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    
  }
  return(
    <Container>
      <img src={githubLogo}  width={72} height={72} alt='github logo'/>
      <Input />
      <Button />
      <ItemRepo/>
 
    </Container>
  );
}


export default App;
