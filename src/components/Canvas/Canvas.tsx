import { useContext } from 'react';
import AmpContext from '../../context/AmpContext';
import { CanvasStyled } from './Canvas.styles';

const Canvas = () => {
  const { canvas } = useContext(AmpContext);

  return <CanvasStyled ref={canvas} />;
};
export default Canvas;
