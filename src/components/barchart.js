import Papa from 'papaparse';
import React, { Component } from 'react';
import { ColumnChart } from 'react-chartkick'
import { Grid, Cell } from 'react-md';
import {

    Card,
    CardActions,
    CardText,
    CardTitle,
} from 'react-md';
const style = { maxWidth: 600 };

class Barchart extends Component {

    constructor(props) {
        // Call super class
        super(props);

        this.state = {
            data: []
        }
        // Bind this to function updateData (This eliminates the error)
        this.updateData = this.updateData.bind(this);
    }

    updateData(result) {
        const data = result.data;
        // Here this is available and we can call this.setState (since it's binded in the constructor)
        this.setState({ data: data }); // or shorter ES syntax: this.setState({ data });
    }

    componentWillMount() {

        // Your parse code, but not seperated in a function
        var csvFilePath = require("../barchart.csv");
        var Papa = require("papaparse/papaparse.min.js");
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: this.updateData

        });
    }



    render() {
        console.log(this.state.data)
        var name = [
            28079004,
            28079008,
            28079011,
            28079016,
            28079017,
            28079018,
            28079024,
            28079027,
            28079035,
            28079036,
            28079038,
            28079039,
            28079040,
            28079047,
            28079048,
            28079049,
            28079050,
            28079054,
            28079055,
            28079056,
            28079057,
            28079058,
            28079059,
            28079060]
        var i = -1
        return (
            <Grid className="grid-example">{
                this.state.data.map((station) =>
                    <Cell >
                        <Card style={style} className="md-block-centered">
                            <CardTitle
                                title={name[i = i + 1]}
                                subtitle="The gases distributio"
                            />
                            <CardActions expander>
                            </CardActions>
                            <CardText expandable>
                                <ColumnChart data={station} />
                            </CardText>
                        </Card>
                    </Cell>
                )
            }
            </Grid>
        )
    }

}


export default Barchart;
