import React from "react";
import * as dateFns from "date-fns";
import '../components/css/Calendar.css';


class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    currentDay: new Date(),
  };

  renderHeader() {
    const dateFormat = "eeee MMMM do";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            {/* left-facing stagecoach? */}
            prev
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentDay, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          {/* right-facing stagecoach? */}
          <div className="icon">next</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        console.log(cloneDay);
        days.push(
          <div
            className={`col shadow cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay, "eeee mmmm do", new Date()))}
          >
            <span className="number">{formattedDate}</span>
            <span className="shows"></span>
            {/* this is where the on:hover displays the larger date # for background text */}
            <span className="bg">{formattedDate}</span>
            
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });

    // this.renderHeader()

  };


  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
      currentDay: dateFns.startOfMonth(this.state.currentMonth)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
      currentDay: dateFns.startOfMonth(this.state.currentMonth)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;