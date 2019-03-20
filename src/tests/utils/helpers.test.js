import moment from 'moment';
import { getYearList, calendarDates } from '../../utils/helpers';

test('expect to getYearList return correct values', () => {
    const years = getYearList(1979, 2);

    expect(years).toHaveLength(5);
    expect(years).toEqual([1977, 1978, 1979, 1980, 1981]);
});

test('expect calendarDates to retun correct value', () => {
    const pointInTime = moment();
    const startsAt = pointInTime.day();
    const month = calendarDates(pointInTime);

    expect(month).toHaveLength(6);
    expect(month[0]).toHaveLength(7);
    expect(month[0][startsAt]).toEqual(pointInTime);
    expect(month).toEqual(calendarDates(moment()));
});