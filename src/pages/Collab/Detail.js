import {
    Box,
    Button,
    Stack,
    Typography,
    Link,
    OutlinedInput,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AttachmentIcon from '@mui/icons-material/Attachment';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Detail () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Stack gap={7.5}>
            <Typography>
                This will create a dedicated signup page for Moonbirds owners to sign up for Bored Ape Yacht. 
                This does not mean that your project is officially endorsed by Moonbirds.
            </Typography>
            <Stack
                flexDirection="row"
                gap={2}
                sx={{
                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                    borderRadius: 1,
                    bgcolor: '#fff',
                    p: 2.5,
                    flexWrap: 'wrap'
                }}
            >
                <Box component="img" src="/images/collabs/3.png" sx={{ width: 132, height: 120, borderRadius: 2 }} />
                <Stack gap={.5}>
                    <Stack flexDirection="row" gap={1}>
                        <Typography variant="h5">MoonBird</Typography>
                        <VerifiedIcon fontSize="small" sx={{ color: '#4D82F3' }} />
                    </Stack>
                    <Stack flexDirection="row" gap={1} alignItems="center">
                        <AttachmentIcon />
                        <Link sx={{ textDecoration: 'none', display: matchUpSm ? 'block': 'none' }}>https://opensea.io/collection/proof-moonbirds</Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack gap={2}>
                <Typography variant="h5">Spots Available</Typography>
                <Typography>
                    How many spots are being set aside for the partner community? 
                    This will not limit the number of people who can sign up. 
                    It will just set the expectation with the collector of how many spots are available.
                </Typography>
                <OutlinedInput placeholder='0' size="small" sx={{ bgcolor: '#fff' }} />
            </Stack>
            <Stack gap={2}>
                <Typography variant="h5">Selection method</Typography>
                <Typography>
                    How will winners be chosen? We recommend Raffle. 
                    If selection method is Guaranteed, the form will close when you get that many entries.
                </Typography>
                <OutlinedInput placeholder='Raffle' size="small" sx={{ bgcolor: '#fff' }} />
            </Stack>
            <Stack flexDirection="row" justifyContent="flex-end">
                <Button variant="contained" size="small" sx={{ textTransform: 'uppercase' }}>Save</Button>
            </Stack>
        </Stack>
    );
}