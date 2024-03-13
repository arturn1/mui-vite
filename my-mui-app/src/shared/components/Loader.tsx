import Skeleton from '@mui/material/Skeleton'

function Loader() {
    return (
        <>
            <Skeleton variant="circular" width={60} height={60} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rounded" width={210} height={60} />
        </>
    )
}

export default Loader