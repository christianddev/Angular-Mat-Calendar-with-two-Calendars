import { Component } from '@angular/core';
import { DateRange, MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline-calendar-example',
  templateUrl: 'datepicker-inline-calendar-example.html',
  styleUrls: ['datepicker-inline-calendar-example.css'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class DatepickerInlineCalendarExample {
  selectedRange: DateRange<Date> | null;
  maxDateOfFirtsCalendar = new Date(2023, 3, 30);
  minDateOfSecondCalendar = new Date(2023, 4, 1);
  startDateOfSecondCalendar = new Date(2023, 4, 1);

  selectedDateChange(date: Date) {
    if (!this.selectedRange?.start || this.selectedRange?.end) {
      this.selectedRange = new DateRange<Date>(date, null);
    } else {
      const start = this.selectedRange.start;
      const end = date;
      if (date < start) {
        this.selectedRange = new DateRange<Date>(end, start);
      } else {
        this.selectedRange = new DateRange<Date>(start, end);
      }
    }
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
