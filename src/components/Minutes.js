import { useSelector } from 'react-redux';
import { Typography, Card, CardContent } from "@material-ui/core";

const Minutes = (props) => {
    const Mins = useSelector((state) => state.min);
    return(
        <div>
            <Card style={{ minWidth: 275, height: 180 }}>
                <CardContent>
                    <Typography variant="h6">Min</Typography>
                    <Typography variant="h3">{Mins}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Minutes;