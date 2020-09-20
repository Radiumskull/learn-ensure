import React from 'react';
import Lottie from 'react-lottie';
import {
    Button,
    Container,
    Grid,
} from 'semantic-ui-react'
import styles from './Home.module.css'


import animationData from '../../assets/lottie/27637-welcome.json'

const Jumbotron = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
    <div className={styles.header}>
        <Grid container stackable padded>
            <Grid.Column computer={4} verticalAlign="middle" className={styles.imageGridChild}>
                <Lottie options={defaultOptions} isClickToPauseDisabled={true}/>
            </Grid.Column>
            <Grid.Column computer={8} verticalAlign="middle" textAlign="center">
                <Container>
                    <h1>A Distration Free Online Class</h1>
                    <h3>Get all your lectures notes at one place and verify your understanding.</h3>
                    <Button style={{marginTop : '1.2em'}} color="blue">Register Now</Button>
                </Container>
            </Grid.Column>
            <Grid.Column computer={4} verticalAlign="middle" className={styles.imageGridChild}>
                <Lottie options={defaultOptions} isClickToPauseDisabled={true} speed={1}/>
            </Grid.Column>
        </Grid>
    </div>);
}

export default Jumbotron;