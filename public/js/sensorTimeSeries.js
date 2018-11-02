var sensorTimeSeriesInfor = new Vue({
    el: '#sensorTimeSeriesMain',
    data: {
        sensorTimeSeries: [ ]
    },
    methods: {
        buildOutputChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].output)]);
            }
            Highcharts.chart('outputChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Output from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Output Rate'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'Output',
                    data: data
                }]
            });
        },
        buildHeatChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].heatrate)]);
            }
            Highcharts.chart('heatChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Heat Rate from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Heat Rate'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'Heat Rate',
                    data: data
                }]
            });
        },
        buildCompressorChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].compressorEfficiency)]);
            }
            Highcharts.chart('compressorChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Compressor Efficiency from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Compressor Efficiency'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'CompressorEfficiency',
                    data: data
                }]
            });
        },
        buildAvailabilityChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].availability)]);
            }
            Highcharts.chart('availabilityChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Availability from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Availability'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'Availability',
                    data: data
                }]
            });
        },
        buildReliabilityChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].reliability)]);
            }
            console.log(data);
            Highcharts.chart('reliabilityChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Reliability from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Reliability'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'Reliability',
                    data: data
                }]
            });
        },
        buildFiredHoursChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].firedHours)]);
            }
            Highcharts.chart('firedChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Fired from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Fired'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'Fired',
                    data: data
                }]
            });
        },
        buildTripsChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].trips)]);
            }
            Highcharts.chart('tripsChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Trips from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Trips'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'Trips',
                    data: data
                }]
            });
        },
        buildStartsChart: function() {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].starts)]);
            }
            Highcharts.chart('startsChart', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'Starts Rate from January to June'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'Starts'
                    },
                    min: 0
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'line',
                    name: 'Starts',
                    data: data
                }]
            });
        },
    },
    created: function () {
        const url = new URL(window.location.href);
        const siteId = url.searchParams.get('sensorId');
        fetch('../api/sensorTimeSeries.php?sensorId=' + siteId)
            .then( response => response.json() )
            .then( function(json) {
                sensorTimeSeriesInfor.sensorTimeSeries = json;
                sensorTimeSeriesInfor.buildOutputChart();
                sensorTimeSeriesInfor.buildHeatChart();
                sensorTimeSeriesInfor.buildCompressorChart();
                sensorTimeSeriesInfor.buildAvailabilityChart();
                sensorTimeSeriesInfor.buildReliabilityChart();
                sensorTimeSeriesInfor.buildFiredHoursChart();
                sensorTimeSeriesInfor.buildTripsChart();
                sensorTimeSeriesInfor.buildStartsChart();
            })
            .catch( err => {
            console.log('Sensor Time Series FETCH ERROR:');
            console.log(err);
            })

        
    }
})