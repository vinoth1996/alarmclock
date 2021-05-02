import React from "react";
import { useSelector } from 'react-redux';
import { Typography, Card, CardContent } from "@material-ui/core";

const Hours = (props) => {
    const Hour = useSelector((state) => state.hr);
    return(
        <div>
            <Card style={{ minWidth: 275, height: 180 }}>
                <CardContent>
                    <Typography variant="h6">Hour</Typography>
                    <Typography variant="h3">{Hour}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Hours;
