import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Card, CardContent, Typography } from "@material-ui/core";
import { MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const SetTimer = () => {
    const dispatch = useDispatch();
    const selectedTime = useSelector((state) => state.selectedTime);
    const currentTime = useSelector((state) => state.hr + ':' + state.min);

    const handleTimeChange = (time) => {
        dispatch({ type: 'ALARMTIME', payload: time })
    }

    return(
        <div>
            <Card style={{ minWidth: 800 }}>
                <CardContent style={{  }}>
                    <Typography variant="body1">Alarm Time is {selectedTime}</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <TimePicker
                            clearable
                            ampm={false}
                            onChange={handleTimeChange}
                        />
                    </MuiPickersUtilsProvider>
                    {selectedTime === currentTime ? <Typography variant="body1" style={{ color: "green" }}>Done</Typography> : ''}
                </CardContent>             
            </Card>
        </div>
    )
}

export default SetTimer;