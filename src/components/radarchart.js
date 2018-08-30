import React, { Component } from 'react';
import Radar from 'react-d3-radar';
import Papa from 'papaparse';
import {

    Card,
    CardActions,
    CardText,
    CardTitle,
} from 'react-md';

import { Grid, Cell } from 'react-md';



const style = { maxWidth: 600 };

class Radarchart extends Component {

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
        var csvFilePath = require("../radar.csv");
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
        return (
            <React.Fragment>

                <Grid className="grid-example">
                    {
                        this.state.data.map((station) =>
                            <Cell >
                                <Card style={style} className="md-block-centered">
                                    <CardTitle
                                        title={station.station}
                                        subtitle="the polution rate of this station from 2001 to 2017"
                                    />
                                    <CardActions expander>
                                    </CardActions>
                                    <CardText expandable>
                                        <Radar
                                            width={500}
                                            height={500}
                                            padding={70}
                                            domainMax={10000000}
                                            highlighted={null}

                                            data={{
                                                variables: [
                                                    { key: 'BEN', label: 'BEN' },
                                                    { key: 'CH4', label: 'CH4' },
                                                    { key: 'CO', label: 'CO' },
                                                    { key: 'EBE', label: 'EBE' },
                                                    { key: 'MXY', label: 'MXY' },
                                                    { key: 'NMHC', label: 'NMHC' },
                                                    { key: 'NO', label: 'NO' },
                                                    { key: 'NO_2', label: 'NO_2' },
                                                    { key: 'NOx', label: 'NOx' },
                                                    { key: 'OXY', label: 'OXY' },
                                                    { key: 'O_3', label: 'O_3' },
                                                    { key: 'PM10', label: 'PM10' },
                                                    { key: 'PM25', label: 'PM25' },
                                                    { key: 'PXY', label: 'PXY' },
                                                    { key: 'SO_2', label: 'SO_2' },
                                                    { key: 'TCH', label: 'TCH' },

                                                ],
                                                sets: [
                                                    {
                                                        key: 'me',
                                                        label: station.station,
                                                        values: {
                                                            BEN: station.BEN,
                                                            CH4: station.CH4,
                                                            CO: station.CO,
                                                            EBE: station.EBE,
                                                            MXY: station.MXY,
                                                            NMHC: station.NMHC,
                                                            NO: station.NO,
                                                            NO_2: station.NO_2,
                                                            NOx: station.NOx,
                                                            OXY: station.OXY,
                                                            O_3: station.O_3,
                                                            PM10: station.PM10,
                                                            PM25: station.PM25,
                                                            PXY: station.PXY,
                                                            SO_2: station.SO_2,
                                                            TCH: station.TCH,

                                                        },
                                                    },

                                                ],
                                            }}
                                        />

                                    </CardText>
                                </Card>
                            </Cell>

                        )}
                </Grid>

            </React.Fragment>

        );
    }

}


export default Radarchart;
