import styled from "styled-components";
import  v  from "../../../styles/variables"
const Container =styled.div`
color: ${(props) => props.theme.text};
background: ${(props) => props.theme.bg};
position: fixed;
padding-top: 20px;
z-index: 100;
height: 100%;
`

const Main =styled.div`
  
`

export default function Sidebar({state, setState}) {
  return (
  
<Main>
<Container>
<div className="imgContent">
<img src={v.logo1}/>
</div>
<h1>Sidebar</h1>
  </Container>
</Main>);
}
