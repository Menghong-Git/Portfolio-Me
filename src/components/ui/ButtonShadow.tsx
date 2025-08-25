
import { Share } from 'lucide-react';
import styled from 'styled-components';

interface ButtonShadowProps {
  title: string;

}

const ButtonShadow: React.FC<ButtonShadowProps> = ({ title }) => {
  return (
    <StyledWrapper>
      <button className='flex gap-5 justify-center items-center'>
        {title}
        <Share/>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 165px;
    height: 62px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    border-radius: 2rem;
    border: none;
    position: relative;
    background: #100720;
    transition: 0.1s;
  }

  button::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient( circle farthest-corner at 10% 20%, oklch(63.7% 0.237 25.331) 50.8%, oklch(44.4% 0.177 26.899) 100.2% );
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }

  button:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient( circle farthest-corner at 10% 20%,  oklch(63.7% 0.237 25.331) 17.8%, oklch(44.4% 0.177 26.899)100.2% );
    transition: 0.5s;
  }`;

export default ButtonShadow;
