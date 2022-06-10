import React,{useEffect} from "react"
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"

const Soups = ()=>{
   
    useEffect(()=>{
        Aos.init({duration:1500}) 
          },[])
    return(
        <Container data-aos="fade-up">
            <Wrapper>
              
                <Card>
                    <CardWrap>
                        <Name>
    Ferrari204
                        </Name>
                        <Image>
                        <img src = "/images/soup.jpg" alt="images of soups"/>
                        </Image>
                        <Down>
                            <Price>
                                $9000.00
                            </Price>
                            <Add>+</Add>
                        </Down>
                    </CardWrap>
                </Card>
                <Card>
                    <CardWrap>
                        <Name>
    iwatch200
                        </Name>
                        <Image>
                        <img src = "/images/soup.jpg" alt="images of soups"/>
                        </Image>
                        <Down>
                            <Price>
                                $9000.00
                            </Price>
                            <Add>+</Add>
                        </Down>
                    </CardWrap>
                </Card>
                <Card>
                    <CardWrap>
                        <Name>
    Sneaks
                        </Name>
                        <Image>
                        <img src = "/images/soup.jpg" alt="images of soups"/>
                        </Image>
                        <Down>
                            <Price>
                                $9000.00
                            </Price>
                            <Add>+</Add>
                        </Down>
                    </CardWrap>
                </Card>
                <Card>
                    <CardWrap>
                        <Name>
    Ferrari204
                        </Name>
                        <Image>
<img src = "/images/soup.jpg" alt="images of soups"/>
                        </Image>
                        <Down>
                            <Price>
                                $9000.00
                            </Price>
                            <Add>+</Add>
                        </Down>
                    </CardWrap>
                </Card>
                
            </Wrapper>
        </Container>
    )
}

export default Soups

const Container= styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
margin-top:30px;


`
const Wrapper= styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items :center;
margin:10px 0;



width:1200px;

@media(max-width:1200px){
    width:90%;  
}
@media(max-width:800px){
    justify-content:center;


}
`

const Card= styled.div`
background:white;
width:220px;
padding:15px;
height:100%;
border-radius:10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
@media(max-width:800px){
    justify-content:center;
margin:10px 0

}
`
const CardWrap= styled.div``
const Name= styled.div`
width:100px;
height:40px;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
font-family:montserrat;
background:red;
color:#fff
`
const Image= styled.div`
width:200px;
img{
    width:100%
}
`
const Down= styled.div`
display:flex;
width:220px;
justify-content:space-between;
align-items:center;

`
const Price= styled.div`
color:green;
font-family:montserrat
`
const Add= styled.div`
width:30px;
height:30px;
background:red;
color:#fff;
font-family:montserrat;
font-weight:bold;
font-size:25px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center
`
