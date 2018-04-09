const moment = require.requireActual('moment');

const mockedMoment = (timestamp=0) => {
    return moment(timestamp);
};
mockedMoment.weekdaysShort = () => [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];
export default mockedMoment;