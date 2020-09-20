import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import {
    Container,
    Header,
    Menu,
    Button
} from 'semantic-ui-react'

const Navbar = (props : any) => {
    const [ currentPage, setPage ] = useState('')
    useEffect(() => {
        if(currentPage !== props.location.pathname){
            switch(props.location.pathname){
                case '/':
                    setPage('home')
                    break;
                case '/notes':
                    setPage('notes')
                    break;
                case '/quizes':
                    setPage('quiz')
                    break;
                default:
                    break;
            }
        }

    }, [props.location.pathname, setPage, currentPage])
    const linkHandler = (event : any, { name } : any) => {
        if(name === 'home') props.history.push('/');
        else props.history.push(name);
        setPage(name);
    }


    return(
    <Menu secondary fluid fixed="top" className="navbar" color="orange">
        <Container fluid className="nav">
            <Menu.Item header>
                <Header>Learn Ensure</Header>
            </Menu.Item>
            <Menu.Menu position="right" >
                <Menu.Item onClick={linkHandler} name="home" active={currentPage === 'home'}/>
                <Menu.Item onClick={linkHandler} name="notes" active={currentPage === 'notes'}/>
                <Menu.Item onClick={linkHandler} name="quiz" active={currentPage === 'quiz'}/>
                <Menu.Item content={
                    <Link to="/login"><Button>Login</Button></Link>
                } disabled>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>)
}


export default withRouter(Navbar);