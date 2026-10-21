import { Moment } from 'moment-timezone';
export declare type NgcICalendarView = 'day' | 'week' | 'month';
export declare type NgcICalendarWeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export interface NgcICalendarPeriod {
    startDate: Moment;
    endDate: Moment;
}
export interface NgcICalendarEvent {
    id: number;
    name: string;
    moment: Moment;
    isEditing?: boolean;
    actionable?: boolean;
    inactive?: boolean;
    deletable?: boolean;
    color?: string;
    data?: any;
}
export interface NgcICalendarEventChange {
    id: number;
    name: string;
}
export interface NgcICalendarEventCreate {
    name: string;
    moment: Moment;
    color?: string;
}
