import React, { createRef } from 'react'
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react';
import animationData from '../assets/lottie/23920-error-state-dog.json'


const ErrorPage = () => {    
    const lottie: any = createRef()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
    <div className="page" style={{textAlign: 'center'}}>
        
        <Lottie options={defaultOptions}
            height={300}            
            width={300}
            ref={lottie as any} 
            isClickToPauseDisabled={true}
        />
        <Header color="red">Page Not Found</Header>
        <Link to="/" className="ui button blue">Return Home</Link>
    </div>);
}

export default ErrorPage