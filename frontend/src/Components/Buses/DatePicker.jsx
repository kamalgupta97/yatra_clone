//import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker({ selectedDate, setSelectedDate }) {
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <KeyboardDatePicker
          style={{ width: "100%" }}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Depart Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <Grid item>
    //     <KeyboardDatePicker
    //       margin="normal"
    //       id="date-picker-dialog"
    //       label="Date picker dialog"
    //       views={["year", "month", "date"]}
    //       value={selectedDate}
    //       format="dd/MM/yyyy"
    //       onChange={handleDateChange}
    //       KeyboardButtonProps={{
    //         "aria-label": "change date",
    //       }}
    //     />
    //   </Grid>
    // </MuiPickersUtilsProvider>
  );
}
