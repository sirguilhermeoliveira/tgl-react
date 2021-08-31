import {
  Main,
  GreatestAppTop,
  GreatestAppMiddle,
  GreatestAppBottom,
} from './styles';

const GreatestApp: React.FC = () => {
  return (
    <Main>
      <GreatestAppTop>The</GreatestAppTop>
      <GreatestAppTop>Greatest</GreatestAppTop>
      <GreatestAppTop>App</GreatestAppTop>
      <GreatestAppMiddle>for</GreatestAppMiddle>
      <GreatestAppBottom>lottery</GreatestAppBottom>
    </Main>
  );
};

export default GreatestApp;
