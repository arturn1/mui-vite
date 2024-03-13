import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Home() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Link href={'/form'}>
                    <Button variant="contained">Form</Button>
                </Link>
            </Grid>
            <Grid item xs={2}>
                <Link href={'/users'}>
                    <Button variant="contained">Users</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Home