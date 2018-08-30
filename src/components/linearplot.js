import Papa from 'papaparse';
import React, { Component } from 'react';
import { LineChart } from 'react-chartkick'

class Lineplot extends Component {

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
        var csvFilePath = require("../linearplot.csv");
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
        var series = []
        var series1 = { 'name': "BEN", "data": {} }
        var series2 = { 'name': "CO", "data": {}, 'color': '#DC3912' }
        var series3 = { 'name': "EBE", "data": {} }
        var series4 = { 'name': "MXY", "data": {}, 'color': '#109618' }
        var series5 = { 'name': "NMHC", "data": {}, 'color': '#FF9900' }
        var series6 = { 'name': "NO_2", "data": {} }
        var series7 = { 'name': "OXY", "data": {}, 'color': '#FF9900' }
        var series8 = { 'name': "O_3", "data": {} }
        var series9 = { 'name': "PM10", "data": {}, 'color': '#109618' }
        var series10 = { 'name': "PM25", "data": {}, 'color': '#FF9900' }
        var series11 = { 'name': "PXY", "data": {}, 'color': '#DC3912' }
        var series12 = { 'name': "SO_2", "data": {}, 'color': '#109618' }
        var series13 = { 'name': "TCH", "data": {} }
        var series14 = { 'name': "TOL", "data": {}, 'color': '#DC3912' }
        var series15 = { 'name': "NO", "data": {}, 'color': '#FF9900' }
        var series16 = { 'name': "CH4", "data": {} }



        this.state.data.forEach(function (element) {
            series1.data[element['da'].toString()] = parseInt(element['BEN']);
            series2.data[element['da'].toString()] = parseInt(element['CO']);
            series3.data[element['da'].toString()] = parseInt(element['EBE']);
            series4.data[element['da'].toString()] = parseInt(element['MXY']);
            series5.data[element['da'].toString()] = parseInt(element['NMHC']);
            series6.data[element['da'].toString()] = parseInt(element['NO_2']);
            series7.data[element['da'].toString()] = parseInt(element['OXY']);
            series8.data[element['da'].toString()] = parseInt(element['O_3']);
            series9.data[element['da'].toString()] = parseInt(element['PM10']);
            series10.data[element['da'].toString()] = parseInt(element['PM25']);
            series11.data[element['da'].toString()] = parseInt(element['PXY']);
            series12.data[element['da'].toString()] = parseInt(element['SO_2']);
            series13.data[element['da'].toString()] = parseInt(element['TCH']);
            series14.data[element['da'].toString()] = parseInt(element['TOL']);
            series15.data[element['da'].toString()] = parseInt(element['NO']);
            series16.data[element['da'].toString()] = parseInt(element['CH4']);
        });
        series = [series1, series4, series11, series7]
        return (
            <React.Fragment>
                <LineChart data={series} />
                <LineChart data={[series1]} />
                <LineChart data={[series2]} />
                <LineChart data={[series3]} />
                <LineChart data={[series4]} />
                <LineChart data={[series5]} />
                <LineChart data={[series6]} />
                <LineChart data={[series7]} />
                <LineChart data={[series8]} />
                <LineChart data={[series9]} />
                <LineChart data={[series10]} />
                <LineChart data={[series11]} />
                <LineChart data={[series12]} />
                <LineChart data={[series13]} />
                <LineChart data={[series14]} />
                <LineChart data={[series15]} />
                <LineChart data={[series16]} />
            </React.Fragment>
        )



    }

}


export default Lineplot;
