import { setState } from 'react';

const compFunctions = (function() {

    function getView(UI, form, edit, state) {
        let view;
        if (edit) view = form;
        else if (stateHasValue(state)) view = UI;
        return view;
    }

    function stateHasValue(state) {
        for (let [key, value] of Object.entries(state)) {
            if (value.replace(/\s/g, '').length) {
                return true;
            }
        }

        return false;
    }

    function toDateDisplay(date) {

        let fields = date.split('-');
        let month; 
        switch(fields[1]) {
            case '01':
                month = 'January'
                break;
            case '02':
                month = 'February';
                break;
            case '03':
                month = 'March'
                break;
            case '04':
                month = 'April'
                break;
            case '05':
                month = 'May'
                break;
            case '06':
                month = 'June'
                break;
            case '07':
                month = 'July'
                break;
            case '08':
                month = 'August'
                break;
            case '09':
                month = 'September'
                break;
            case '10':
                month = 'October'
                break;
            case '11':
                month = 'November'
                break;
            case '12':
                month = 'December'
                break;
            }

        let day = fields[2];

        let year = fields[0];

        let display = `${month} ${day}, ${year}`;

        return display;
    }


    return {
        getView,
        toDateDisplay
    }
})();

export default compFunctions;