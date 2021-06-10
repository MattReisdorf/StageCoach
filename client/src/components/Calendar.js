import React, { useState, useEffect, Component, setState } from "react";
import { Link } from "react-router-dom";
import * as dateFns from "date-fns";
import axios from "axios";
import "../components/css/Calendar.css";

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    currentDay: new Date(),
    cityShows: [],
  };

  // this will need changed with Geolocation /api/shows/city/whatever

  componentDidMount() {
    axios
      .get("/api/shows/city/Chicago")
      .then((showData) => {
        this.setState({ cityShows: showData.data });
      })
      .catch((err) => console.log(err));
  }

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
    const apiFormat = "yyyy-MM-dd";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() =>
              this.onDateClick(
                dateFns.parse(cloneDay, "eeee mmmm do", new Date())
              )
            }
          >
        
            <span className="number">{formattedDate}</span>
            {/* this is where the api call for shows in the area will go, if date = day maybe with dateFns isSameDay() */}
            <div className="shows-date">
              {this.state.cityShows
                ? this.state.cityShows.map((show) => (
                    <div>
                      {show.date_formed ==
                      dateFns.format(cloneDay, apiFormat) ? (
                        <div>
                        <Link to={"/shows/" + show.id} className="shows-date">
                          {show.artist.artist_name} at {show.venue.venue_name}
                          
                        </Link>
                        </div>
                      ) : null}
                 
                    </div>
                  ))
                : null}
            </div>
            {/* this is where the on:hover displays the larger date # for background text */}
            {/* <span className="bg">{formattedDate}</span> */}
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

  onDateClick = (day) => {
    this.setState({
      selectedDate: day,
    });

    // this.renderHeader()
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
      currentDay: dateFns.startOfMonth(this.state.currentMonth),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
      currentDay: dateFns.startOfMonth(this.state.currentMonth),
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
