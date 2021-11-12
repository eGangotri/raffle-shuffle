import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    boxRoot: {
        "@media (min-width: 1280px)": {
            height: '90vh',
            width: '1',
            boxShadow: '0px 6px 15px -4px #00000033',
            margin: '0px 20px'
        },
        [theme.breakpoints.down("xs")]: {
            height: '80vh',
            width: '1',
            boxShadow: '0px 6px 15px -4px #00000033',
            margin: '0px 20px'
        },
        [theme.breakpoints.between("sm", "md")]: {
            boxShadow: '0px 6px 15px -4px #00000033',
            height: '90vh',
            width: '1',
            margin: '0px 20px'
        }
    },
    boxRightRoot: {
        "@media (min-width: 1280px)": {
            height: '90vh',
            width: '1',
            boxShadow: '0px 6px 15px -4px #00000033',
            margin: '0px 20px'
        },
        [theme.breakpoints.down("xs")]: {
            height: '80vh',
            width: '1',
            boxShadow: '0px 6px 15px -4px #00000033',
            margin: '0px 20px'
        },
        [theme.breakpoints.between("sm", "md")]: {
            boxShadow: '0px 6px 15px -4px #00000033',
            height: '90vh',
            width: '1',
            margin: '0px 20px'
        }
    }
}));


export default function Section() {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            style={{ height: '100vh', margin: '20px 0px' }} >
            <Grid container>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Box className={classes.boxRoot}>
                        <div>
                            <label className="heading-label">Get More Tickets</label>
                            <button className="buyBtn">Buy</button>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={9} lg={9} style={{ paddingLeft: '20px' }}>
                    <Box className={classes.boxRightRoot}>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}