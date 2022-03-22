import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos, ArrowLeftOutlined } from '@material-ui/icons';
import { announcements } from '../data';
import { useState } from 'react';

const Container = styled.div`
  height: 42px;
  background-color: #1b2120;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 500px;
`;

const Title = styled.span`
  text-decoration: underline;
  text-underline-offset: 3px;
  text-transform: uppercase;
  letter-spacing: -.005em;
  font-size: 12px;
  font-style: normal;
  font-family: Zurich,sans-serif;
  font-weight: 400;
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: all 0.5s ease infinite;
  transform: translateX(${props=> props.announcementIndex * -100}%);
`;


const Announcement = () => {
    const [announcementIndex, setAnnouncementIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left"){
            setAnnouncementIndex(announcementIndex > 0 ? announcementIndex - 1 : 1);
        } else {
            setAnnouncementIndex(announcementIndex < 1 ? announcementIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <ArrowBackIos direction="left"
            style={{fontSize:'medium', color:'#D1D3D2', 
            opacity:'0.7', cursor: 'pointer'}}
            onClick={()=>handleClick("left")} />
            <Wrapper>
                <TitleWrapper>
                {announcements.map((item)=>(
                    <Title announcementIndex={announcementIndex} key={item.id}>{item.title}</Title>
                ))}
                </TitleWrapper>
                </Wrapper>
            <ArrowForwardIos  direction="right"
            style={{fontSize:'medium', color:'#D1D3D2', 
            opacity:'0.7', cursor: 'pointer'}}
            onClick={() => handleClick("right")} />
            
        </Container>
    )
}

export default Announcement
