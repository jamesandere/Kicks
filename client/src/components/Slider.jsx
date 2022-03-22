import styled from 'styled-components';
import { sliderItems } from '../data';
import { useState } from 'react';
import { mobile } from '../responsive';
import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'

const Container = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;

  ${mobile({
    height: '50vh',
  })}
`;

const Arrow = styled.div`
   height: 30px;
   width: 30px;
   position: absolute;
   z-index: 2;
   background-color: black;
   color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 0;
   bottom: 0;
   left: ${props => props.direction === 'left' && '20px'};
   right: ${props => props.direction === 'right' && '20px'};
   margin: auto;
   cursor: pointer;
   opacity: 0.8;
   display: none;
   ${mobile({
     display: 'block',
     textAlign: 'center',
     margin: 'auto'
   })}
`;

const Wrapper = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  position: absolute;
  transition: all 0.5s ease;
  transform: translateX(${props=> props.sliderIndex * -100 }vw);
  /* animation-name: move;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes move {
    0%, 25%{
      left: 0;
    }
    50% {
      left: -100%;
    }
    75% {
      left: -200%;
    }
  } */
  ${mobile({
    height: '100%',
  })}
`;

const Slide = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;

  ${mobile({
    objectFit: 'cover'
  })}
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0,0,0,0.05),
    rgba(0,0,0,0.05)
  );
  position: absolute;
  top: 0;
`;

const Title = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1.9em;
  font-weight: bold;
  font-family: 'Zurich', sans-serif;;
  letter-spacing: 1.5px;
  line-height: 1.2;
  margin-bottom: 15px;
  cursor: pointer;

  ${mobile({
    fontSize: '1.4em'
  })}
`;

const ButtonContainer = styled.div`
   position: absolute;
   bottom: 16%;
   width: 100%;
   /* background-color: #030c41; */
   margin: auto;
   padding: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Button = styled.button`
  background-color: #1B2120;
  border: 1px solid #1b2120;
  padding: 0.6875rem 1.375rem;
  cursor: pointer;
  border-radius: 2px;
  color: white;
  font-style: normal;
  font-size: 0.721875rem;
  font-weight: 400;
  letter-spacing: .05em;
  transition: background 0.5s ease;

  ${mobile({
    width: '30%',
    padding: '10px'
  })}
`;

const Dots = styled.ol`
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  bottom: 25px;
  list-style: none;
  text-align: center;
  line-height: 1;
  /* background-color: yellow; */
  ${mobile({
    display: 'none'
  })}
`;

const Dot = styled.li`
  width: 8px;
  height: 8px;
  display: inline-block;
  background: ${props=> props.isActive ? '#A5A5A5' : 'white'};
  border-radius: 50%;
  border: 1px white solid;
  margin: 0 4px;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isActive, setActive] = useState(false);

  const handleClick= (index) => {
    if(index === "first"){
      setSliderIndex(0);
      setActive(true);
    } else if(index === "second"){
      setSliderIndex(1);
      
    } else {
      setSliderIndex(2);
    }
  }

  const handleMobileClick = (direction) => {
    if(direction === "left"){
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  }

    return (
        <Container>
          <Arrow direction="left" onClick={() => handleMobileClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <Arrow direction="right" onClick={()=> handleMobileClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {sliderItems.map((item)=> (
                  <Slide key={item.id}>
                  <Image src={item.img} />
                  <Overlay></Overlay>
                  <ButtonContainer>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
              </ButtonContainer>
                  </Slide>
                ))}
            </Wrapper>
            
            <Dots>
              <Dot isActive={isActive} index="first" onClick={()=>handleClick("first")}></Dot>
              <Dot isActive={isActive} index="second" onClick={()=>handleClick("second")}></Dot>
              <Dot isActive={isActive} index="third" onClick={()=>handleClick("third")}></Dot>
            </Dots>
        </Container>
    )
}

export default Slider
