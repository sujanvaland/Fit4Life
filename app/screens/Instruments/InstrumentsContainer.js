import React, { Component } from 'react';
import InstrumentsView from './InstrumentsView';
import { connect } from 'react-redux';

class InstrumentsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let DATA = [
            {
                id: 1,
                title: 'FOG Generator',
                makemode: 'MAX / FOG-1500WL',
                range: '15000 CFM',
                accuracy: '---',
                qty: '3'
            },
            {
                id: 2,
                title: 'Handy Camera',
                makemode: 'Sony / DCR-DVD',
                range: '---',
                accuracy: '---',
                qty: '2'
            },
            {
                id: 3,
                title: 'Particle Counter',
                makemode: 'TSI AEROTRAK 50 LPM, TSI AEROTAK 100 LPM',
                range: '---',
                accuracy: '---',
                qty: '3'
            },
            {
                id: 4,
                title: 'Aerosol Photometer',
                makemode: 'TEC SERVICES / PH-4',
                range: '0.0001 to 999 µg/Liter',
                accuracy: '---',
                qty: '4'
            },
            {
                id: 5,
                title: 'Aerosol Generator',
                makemode: 'ATI / TDA-4B',
                range: '8100 CFM',
                accuracy: '---',
                qty: '2'
            },
            {
                id: 6,
                title: 'Vane Type Anemometer',
                makemode: 'LUTRON / AM-4201, Testo / 410, Testo / 410',
                range: '0.4 To 30.0 m/s, 80-5910 Ft/min, 0.25 To 30.0 m/s, 50-6000 Ft/min',
                accuracy: '±(2% +0.2m/s),±(2%+40 Ft/min), ±1.0% Of Reading ±4ft/min(±0.2m/s)',
                qty: '2'
            }
        ]
        return <InstrumentsView {...this.props} intrumentdata={DATA} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InstrumentsContainer);
