import { useEffect, useState } from "react";
import { Col,Row, Container } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
export const Banner = () => {
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const rotating = ['Web dev','UI/UX','Web Design']
    const [text,setText] = useState('');
    const period = 3000;
    const [delta,setDelta] = useState(300 - Math.random()*100);
    useEffect(() => {
        let ticker = setInterval(() => {
           ticking();
        }, delta);

        return() => {clearInterval(ticker)}
    },{text})

    const ticking = () => {
        let i = loopNum % rotating.length;
        let fullText = rotating(i);
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText = (updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        else if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }
    return(
        <section className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm AbdelKerim`}<span className="wrap">I'm a web developer</span></h1>
                        <p>Lorem Ipsum dolor Sit Amet </p>
                        <button onClick={console.log('Lets play')}>Let's connect <FaArrowCircleRight size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src=''></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
