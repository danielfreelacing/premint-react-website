import { 
    Stack, 
    Box, 
    Button,
    Typography, 
    OutlinedInput,
    TextareaAutosize,
    Checkbox
} from '@mui/material';

export default function BulkUpdate () {
    return (
        <Stack gap={8} sx={{ pt: 4 }}>
            <Typography>
                This will allow you to update winners. whitelisted or disqualified. 
                Disqualified will be not be choosen as winners 
            </Typography>
            <Stack gap={2}>
                <Typography variant="h5">What would you like to do?</Typography>
                <OutlinedInput placeholder='Mark Wallet as Winners' size="small" sx={{ bgcolor: '#fff' }} />
            </Stack>
            <Stack gap={2}>
                <Typography variant="h5" sx={{ lineHeight: 1 }}>Ethereum Wallet Addresses?</Typography>
                <Typography>
                    Place one address per line. 
                    We recommend adding 100 no more than at a time.
                </Typography>
                <TextareaAutosize 
                    placeholder='0xjdsi623620xfg562F98sdFF493HST77J8J' 
                    minRows={5} 
                    style={{
                        paddingTop:16, 
                        paddingBottom:16, 
                        paddingRight: 10,
                        paddingLeft: 10,
                        border: '1px solid #F1F4F9',
                        borderRadius: 4,
                        filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))'
                    }}
                />
            </Stack>
            <Stack gap={2}>
                <Typography variant="h5" sx={{ lineHeight: 1 }}>Add wallets that are not already in the list</Typography>
                <Typography>
                    We will ignore new wallets if it isn't checked.
                </Typography>
                <Stack flexDirection="row" alignItems="center" gap={1}>
                    <Checkbox sx={{ p: 0 }} />
                    <Typography>Add wallets that are not already in the list</Typography>
                </Stack>
            </Stack>
            <Stack flexDirection="row" justifyContent="flex-end">
                <Button variant="contained" sx={{ textTransform: 'uppercase', bgcolor: '#BB86FC' }}>Save</Button>
            </Stack>

        </Stack>
    )
}