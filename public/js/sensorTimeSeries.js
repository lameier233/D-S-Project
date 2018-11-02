var sensorTimeSeriesInfor = new Vue({
    el: '#sensorTimeSeriesMain',
    data: {
        sensorTimeSeries: [ ]
    },
    methods: {
        mainFunction: function(sid) {(
            fetch('../api/sensorTimeSeries.php?sensorId=' + sid)
            .then( response => response.json() )
            .then( function(json) {
                sensorTimeSeriesInfor.sensorTimeSeries = json;
                //sensorTimeSeriesInfor.buildOutputChart();
            })
            .catch( err => {
            console.log('Sensor Time Series FETCH ERROR:');
            console.log(err);
            })
        )},
        buildOutputChart: function(tsid) {
            var data = [];
            for(var i = 0; i < sensorTimeSeriesInfor.sensorTimeSeries.length; i++) {
                data.push([Date.parse(sensorTimeSeriesInfor.sensorTimeSeries[i].dataCollectedDate), parseInt(sensorTimeSeriesInfor.sensorTimeSeries[i].output)]);
            }
            Highcharts.chart(tsid, {
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
        }
    },
    created: function () {
        const url = new URL(window.location.href);
        const siteId = url.searchParams.get('sensorId');
        sensorTimeSeriesInfor.mainFunction(siteId);
    }
})