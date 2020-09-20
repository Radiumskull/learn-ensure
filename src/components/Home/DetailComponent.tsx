import React from 'react'
import { Grid } from 'semantic-ui-react';
import styles from './Home.module.css'
import { ReactComponent as Circle} from '../../assets/svgs/circle.svg'

const DetailComponent = ({ reversed }: any) => {
    return(
        <Grid className={styles.detailComponent} container stackable reversed={reversed ? 'mobile' : 'computer'} centered>
            <Grid.Row>
                <Grid.Column width={8} verticalAlign="middle"><Circle /></Grid.Column>
                <Grid.Column width={8} verticalAlign="middle">
                    <h1>This is the Header</h1>
                    <h3>Eiusmod laboris veniam amet consequat excepteur occaecat. Et aute sit sint do dolore nostrud occaecat reprehenderit et officia labore excepteur officia. Mollit velit ex do nulla laborum veniam aute deserunt ut deserunt eiusmod in. Laboris proident qui sint deserunt nostrud sunt proident reprehenderit eiusmod incididunt et tempor. Cillum cillum deserunt cillum elit proident laborum cillum. Elit cupidatat laborum tempor nisi enim occaecat fugiat sunt est minim ullamco exercitation.</h3>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default DetailComponent;