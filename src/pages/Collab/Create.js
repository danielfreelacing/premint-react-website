import {
    Box,
    Button,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import FeaturedCollections from './FeaturedCollections';

export default function Create () {
    return (
        <Box sx={{
            pt: 4
        }}>
            <Stack gap={10}>
                <Stack gap={2.5}>
                    <Typography variant='h5' sx={{ fontFamily: 'Inter' }}>Enter Collection OpenSea Slug</Typography>
                    <OutlinedInput 
                        size="small"
                        placeholder='cryptopunks'
                    />
                    <Stack flexDirection="row" >
                        <Button 
                            variant="contained"
                            size="small"
                            sx={{ textTransform: 'uppercase', bgcolor: '#BB86FC' }}>Find</Button>
                    </Stack>
                </Stack>
                <FeaturedCollections />
            </Stack>
        </Box>
    )
}