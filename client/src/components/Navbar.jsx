import { KeyboardArrowDown, KeyboardArrowRight, MenuOutlined, PersonOutline, SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { FaShoppingBag } from 'react-icons/fa';
import { airJordans, yeezyItems, nikeItems, adidasItems, clothingItems } from "../data";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 120px;
  /* display: flex;
  padding-top: 6px; */
  position: relative;
  background-color: #fff;
  ${mobile({
    height: '50px',
    width: '100vw',
  })}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  padding-top: 6px;

  ${mobile({
    width: '100vw',
  })}
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
      transform: scale(1.1);
  }

  ${mobile({
    width: '25px',
    height: '25px',
  })}
`;

const MenuSearch = styled.div`
  display: flex;
  flex: 1;
  margin-left: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex : 3;
  height: 100%;

  ${mobile({
    flex : 1,
  })}
`;

const Title = styled.h1`
  ${mobile({
    fontSize: '20px',
  })}
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  padding-right: 20px;
`;

const DropdownList = styled.ul`
  position: absolute;
  background-color: #fff;
  border-radius: 4px;
  padding: 26px 0;
  /* top: 30px; */
  /* top: ${props=>props.name === "airmax" && 46}%;
  left: ${props=>props.name === "airmax" && 100}%; */
  z-index: 1;
  display: none;

  ${props => {
        if (props.name === 'airmax') return `
            
              display: none;
              // visibility: hidden;
              top: 46%;
              left: 100%;
              padding: 0.5em;
           
        `
    }}
  /* background-color: blue; */
`;

const NavContainer = styled.div`
  width: 100%;
  height: 45px;
  /* background-color: yellow; */
  position: absolute;
  display: flex;
  align-items: center;

  
`;

const MenuList = styled.ul`
  /* background-color: red; */
  position: relative;
  ${mobile({
    display: 'none',
  })}

  
`;

const DownIcon = styled.div`
  /* background-color: teal; */
  display: inline;
  padding-top: 10px;
  text-align: center;
  position: absolute;
  top: -4px;
  /* height: 10px;
  width: 10px; */
`;

const RightDropdown = styled.div`
  
`;

const RightIcon = styled.div`
  /* background-color: teal; */
  display: inline;
  padding-top: 10px;
  text-align: center;
  position: absolute;
  bottom: 27px;
  right: 3px;
  /* height: 10px;
  width: 10px; */
`;

const MenuItem = styled.li`
  display: inline-block;
  color: gray;
  margin: 0 10px;
  padding: 8px;
  text-transform: uppercase;
  font-family: 'Questrial', sans-serif;
  font-size: 0.865625rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  cursor: pointer;
  /* background-color: purple; */
  position: relative;

  &:hover ${DropdownList} {
    display:block;
  }
`;



const DropdownItem = styled.li`
  list-style: none;
  color: gray;
  width: 12em;
  padding: 0.8em 4.5em 0.5em 1.5em;
  /* text-align: center; */
  cursor: pointer;
  text-transform: capitalize;
  /* background-color: red; */

  &:hover {
    background-color: #f5f5f5;

  }
`;

const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity);

    return (
        <Container>
            <Wrapper>
            <MenuSearch>
                <Icon>
                <MenuOutlined
                style={{fontSize:'32px'}} />
                </Icon>
                <Icon>
                <SearchOutlined
                style={{fontSize:'32px'}} />
                </Icon>
            </MenuSearch>
            <TitleContainer>
              <Link style={{textDecoration:'none', color:'black'}} to='/'>
                <Title>KICKS&reg;</Title>
                </Link>
            </TitleContainer>
            <DetailsContainer>
                <Icon>
                    <PersonOutline
                    style={{fontSize:'32px'}} />
                </Icon>
                <Link to="/cart">
                <Icon>
                <Badge badgeContent={quantity} color="primary">
                <FaShoppingBag 
                    style={{fontSize:'32px', color: 'black'}} />
                    </Badge>
                </Icon>
                </Link>
            </DetailsContainer>
            </Wrapper>
            <NavContainer>
              <MenuList>
                <MenuItem>New Arrivals</MenuItem>
                <MenuItem>Best Sellers</MenuItem>
                <MenuItem className="jordans" name="jordans" >Air Jordan 
                <DownIcon><KeyboardArrowDown fontSize="small" /></DownIcon>
                <DropdownList >
                  {airJordans.map((item)=> (
                    <DropdownItem key={item.id}>{item.name}</DropdownItem>
                  ))}
                </DropdownList>
                </MenuItem>
                <MenuItem >Yeezy
                <DownIcon><KeyboardArrowDown fontSize="small" /></DownIcon>
                <DropdownList  name="yeezy">
                  {yeezyItems.map((item)=> (
                    <DropdownItem key={item.id}>{item.name}</DropdownItem>
                  ))}
                </DropdownList>
                </MenuItem>
                <MenuItem>Nike
                <DownIcon><KeyboardArrowDown fontSize="small" /></DownIcon>
                <DropdownList name="nike">
                  {nikeItems.map((item)=> (
                    <DropdownItem name={item.name} key={item.id}>{item.name} <RightIcon><KeyboardArrowRight /></RightIcon>
                    <DropdownList className="airmax" name="airmax">
                  {item.airMax?.map((airMax)=> (
                    <DropdownItem  key={airMax.id}>{airMax.name}</DropdownItem>
                  ))}
                </DropdownList>
                    </DropdownItem>
                  ))}
                </DropdownList>
                </MenuItem>
                <MenuItem>Adidas
                <DownIcon><KeyboardArrowDown fontSize="small" /></DownIcon>
                <DropdownList name="adidas">
                  {adidasItems.map((item)=> (
                    <DropdownItem key={item.id}>{item.name}</DropdownItem>
                  ))}
                </DropdownList>
                </MenuItem>
                <MenuItem>Clothing
                <DownIcon><KeyboardArrowDown fontSize="small" /></DownIcon>
                <DropdownList name="clothing">
                  {clothingItems.map((item)=> (
                    <DropdownItem key={item.id}>{item.name}</DropdownItem>
                  ))}
                </DropdownList>
                </MenuItem>
                <MenuItem>Women</MenuItem>
                <MenuItem>Shop All</MenuItem>
              </MenuList>
            </NavContainer>
        </Container>
    )
}

export default Navbar
