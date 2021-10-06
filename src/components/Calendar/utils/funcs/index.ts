export type DayTypeID = 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu' | 'Minggu';

export type DayTypeEN = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export type MonthTypeID =
    | 'Januari'
    | 'Februari'
    | 'Maret'
    | 'April'
    | 'Mei'
    | 'Juni'
    | 'Juli'
    | 'Agustus'
    | 'September'
    | 'Oktober'
    | 'November'
    | 'Desember';

export type MonthTypeEN =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December'
    | undefined;

// export type DateIndo = [string, MonthTypeID, string]

export const getMonthID: (monthNumber: number) => MonthTypeID = (monthNumber) => {
    switch (monthNumber) {
        case 0:
            return 'Januari';
        case 1:
            return 'Februari';
        case 2:
            return 'Maret';
        case 3:
            return 'April';
        case 4:
            return 'Mei';
        case 5:
            return 'Juni';
        case 6:
            return 'Juli';
        case 7:
            return 'Agustus';
        case 8:
            return 'September';
        case 9:
            return 'Oktober';
        case 10:
            return 'November';
        case 11:
            return 'Desember';
        default:
            return 'Januari';
    }
};

export const getMonthEN: (monthNumber: number) => MonthTypeEN = (monthNumber) => {
    switch (monthNumber) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
    }
};

export const getDayID: (dayNumber: number) => DayTypeID = (dayNumber) => {
    switch (dayNumber) {
        case 0:
            return 'Minggu';
        case 1:
            return 'Senin';
        case 2:
            return 'Selasa';
        case 3:
            return 'Rabu';
        case 4:
            return 'Kamis';
        case 5:
            return 'Jumat';
        case 6:
            return 'Sabtu';
        default:
            return 'Minggu';
    }
};

export const getDayEN: (dayNumber: number) => DayTypeEN = (dayNumber) => {
    switch (dayNumber) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Sunday';
    }
};

export const monthIDToEN = (monthID: MonthTypeID): MonthTypeEN => {
    switch (monthID) {
        case 'Januari':
            return 'January';
        case 'Februari':
            return 'February';
        case 'Maret':
            return 'March';
        case 'April':
            return 'April';
        case 'Mei':
            return 'May';
        case 'Juni':
            return 'June';
        case 'Juli':
            return 'July';
        case 'Agustus':
            return 'August';
        case 'September':
            return 'September';
        case 'Oktober':
            return 'October';
        case 'November':
            return 'November';
        case 'Desember':
            return 'December';
    }
};

export const dateToStringID = (date: Date, withHours = false): string => {
    const dateInt = date.getDate();
    const monthString = getMonthID(date.getMonth());
    const yearInt = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (withHours)
        return `${dateInt} ${monthString} ${yearInt} ${hours.toString().padStart(2, '0')}.${minutes
            .toString()
            .padStart(2, '0')} WIB`;

    return `${dateInt} ${monthString} ${yearInt}`;
};

// Please dont change this function
export const dateToStringEN = (date: Date): string => {
    const dateInt = date.getDate();
    const monthString = getMonthEN(date.getMonth());
    const year = date.getFullYear();

    return `${monthString} ${dateInt}, ${year}`;
};

export const compareDateEquals = (firstDate: Date, secondDate: Date): boolean => {
    firstDate.setHours(0, 0, 0, 0);
    secondDate.setHours(0, 0, 0, 0);
    if (
        firstDate.getDate() !== secondDate.getDate() ||
        firstDate.getMonth() !== secondDate.getMonth() ||
        firstDate.getFullYear() !== secondDate.getFullYear()
    ) {
        return false;
    }

    return true;
};
