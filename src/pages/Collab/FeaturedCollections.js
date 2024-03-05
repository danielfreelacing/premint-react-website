import { useMenuItem } from '@mui/base';
import {
    Box, Button, Stack, Typography, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';

export default function FeaturedCollections () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'))
    const router = useNavigate();
    return (
        <Box>
            <Typography>Featured Collections</Typography>
            <Box 
                sx={{ pt: 2, 
                    display: 'grid',
                    gridTemplateColumns: matchUpLg 
                                        ? 'repeat(4, 1fr)'
                                        : matchUpMd 
                                        ? 'repeat(3, 1fr)'
                                        : matchUpSm 
                                        ? 'repeat(2, 1fr)'
                                        : 'repeat(1, 1fr)',
                    gap: 3
                }}>
                {[1,2,3,4,5,6,7,8].map((element, key) => 
                <Stack
                    key={key}
                    onClick={() =>  router('/collab/detail')}
                    sx={{
                        bgcolor: '#fff',
                        boxShadow: '0px 18.0085px 27.5424px -9.5339px #E2E8F0',
                        borderRadius: 1,
                        p: 1.5,
                        cursor: 'pointer'
                    }}
                    gap={2}
                >
                    <Box src={`/images/collabs/${element % 4 ? element % 4 : 4}.png`} component="img" sx={{ width: '100%' }} />
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Inter-Bold' }}>OSYC Project</Typography>
                    <Button fullWidth variant="contained" sx={{ bgcolor: '#BB86FC' }}>Create</Button>
                </Stack>
                )}
            </Box>
        </Box>
    );
}