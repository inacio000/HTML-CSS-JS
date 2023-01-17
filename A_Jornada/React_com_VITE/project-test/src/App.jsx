import { StyledButton, Button2 } from './components/Button.style';
import { Wrapper } from './components/Wrapper.styled';

function App() {

  return (
     <Wrapper>
       <StyledButton backgroundColor='white'>Front Beginners</StyledButton>
       <StyledButton backgroundColor='blue'>Front Beginners</StyledButton>
       <StyledButton>Front Beginners</StyledButton>
       <Button2>Front Beginners</Button2>
       <a href="#">Click here</a>
     </Wrapper>
  )
}

export default App
