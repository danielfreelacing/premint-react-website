import {
    Box,
    Button,
    Stack,
    Typography,
    Link,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import FeaturedCollections from './FeaturedCollections';
import AttachmentIcon from '@mui/icons-material/Attachment';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Collab () {
    const navigate = useNavigate();
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Stack gap={6}>
            <Stack
                flexDirection={matchUpMd ? "row": "column"}
                alignItems="flex-start"
                gap={matchUpMd ? 0 : 3}
            >
                <Typography flex={2}>
                    Fantom helps you clean your list from possible bots and fraudulent activity. 
                    Remember, it's up to you to actually decide what you consider fraudulent. 
                    We just try to make it easy. 
                    When you clean your list, entries are marked as disqualified and will not be considered when running the raffle. 
                </Typography>
                <Stack 
                    flexDirection="row"
                    justifyContent="flex-end"
                    flex={1}>
                    <Button 
                        variant="contained"
                        size="small"
                        sx={{
                            bgcolor: '#BB86FC',
                            textTransform: 'uppercase'
                        }}
                        endIcon={<AddIcon />}
                        onClick={() =>  navigate('/collab/create')}
                    >Create A New</Button>
                </Stack>
            </Stack>
            <Stack flexDirection={matchUpSm ? "row" : "column"}
                justifyContent="space-around"
                gap={matchUpSm ? 0 : 1}
                sx={{
                    py: matchUpSm ? 4.5 : 3,
                    bgcolor: '#fff',
                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                    borderRadius: 4,
                    px: matchUpMd ? 0: 3
                }}
            >
                <Typography variant="subtitle1">Total entries:0</Typography>
                <Typography variant="subtitle1">Spots Offered:0</Typography>
                <Typography variant="subtitle1">Collabs:0</Typography>
            </Stack>
            
            <Box
                sx={{
                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                    borderRadius: 4,
                    bgcolor: '#fff',
                    p: 2.5
                }}
            >
            <Stack
                flexDirection="row"
                gap={2}
                sx={{ flexWrap: matchUpMd ? 'nowrap' : 'wrap'}}
            >
                <Stack>
                    <Box component="img" flex={0} src="/images/collabs/3.png" sx={{ width: 132, height: 120, borderRadius: 2 }} />
                </Stack>
                <Stack flex={1} gap={.5}>
                    <Stack 
                        flexDirection="row" 
                        alignItems="center" 
                        justifyContent="space-between"
                    >
                        <Stack gap={.5}>
                            <Stack flexDirection="row" gap={1}>
                                <Typography variant="h5">MoonBird</Typography>
                                <VerifiedIcon fontSize="small" sx={{ color: '#4D82F3' }} />
                            </Stack>
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" sx={{ display: matchUpMd ? 'flex': 'none' }}>
                            <Typography variant="h5">Spots:&nbsp;</Typography>
                            <Typography variant="subtitle1"> 0 </Typography>
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" sx={{ display: matchUpMd ? 'flex': 'none' }}>
                            <Typography variant="h5">Entries:&nbsp;</Typography>
                            <Typography variant="subtitle1"> 0 </Typography>
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" gap={1} sx={{ display: matchUpMd ? 'flex': 'none' }}>
                            <Button sx={{ textTransform: 'uppercase', color: '#BB86FC' }}>Edit</Button>
                            <Button variant="contained" size="small" sx={{ textTransform: 'uppercase', bgcolor: '#BB86FC' }}>View Offer Page</Button>
                        </Stack>
                    </Stack>
                    <Stack flexDirection="row" gap={1} alignItems="center">
                        <AttachmentIcon />
                        <Link sx={{ textDecoration: 'none', display: matchUpMd ? 'inline-block' : 'none' }}>https://opensea.io/collection/proof-moonbirds</Link>
                    </Stack>
                </Stack>
            </Stack> 
            
            <Stack
                sx={{ display:  matchUpSm ? 'none': 'flex', pt: 2 }}
                gap={2}
            >
                <Stack 
                    flexDirection="row" 
                    justifyContent="space-between"
                >
                    <Stack flexDirection="row" alignItems="center">
                        <Typography variant="h5">Spots:&nbsp;</Typography>
                        <Typography variant="subtitle1"> 0 </Typography>
                    </Stack>
                    <Stack flexDirection="row" alignItems="center">
                        <Typography variant="h5">Entries:&nbsp;</Typography>
                        <Typography variant="subtitle1"> 0 </Typography>
                    </Stack>
                </Stack>
                <Stack alignItems="center" gap={1}>
                    <Button sx={{ textTransform: 'uppercase', color: '#BB86FC' }} fullWidth>Edit</Button>
                    <Button variant="contained" size="small" sx={{ textTransform: 'uppercase', bgcolor: '#BB86FC' }} fullWidth>View Offer Page</Button>
                </Stack>
            </Stack>
            </Box>
            <FeaturedCollections />
        </Stack>

    )
}