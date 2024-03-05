import {
    Box, Stack, Typography, Paper
} from '@mui/material';

export default function NftCard (props) {
    return (
        <Paper
            sx={{
                p: 1.5,
                borderRadius: 4,
                boxShadow: '0px 17px 26px -9px #E2E8F0'
            }}
        >
            <Box src={props.image} component="img" sx={{ width: '100%' }} />
            <Stack alignItems="center" gap={1} sx={{ py: 2 }}>
                <Typography variant="h5">{props.name}</Typography>
                <Typography>{props.entry ? Number(props.entry) : 0} Entries</Typography>
            </Stack>
        </Paper>
    )
};