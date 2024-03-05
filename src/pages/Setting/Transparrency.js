import {
    Box, Stack, Typography, Button, Checkbox
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';import ViewStreamIcon from '@mui/icons-material/ViewStream';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Transparrency () {
    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: 8
            }}
        >
            <Stack gap={10}>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <AccountBalanceWalletIcon />
                        <Typography variant='h5'>Public Wallet List</Typography>
                    </Stack>
                    <Typography>A public wallet list of wallets entered will be displayed
                        <Typography component="span" sx={{ color: '#4D82F3' }}>&nbsp;www.link/list.com</Typography>
                    </Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                            <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                            <Stack gap={.5}>
                                <Typography>Expose wallet list publicly?</Typography>
                                <Typography variant="caption">This will add a accesible page that shows list of lists of wallet who registered</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <EmojiEventsIcon />
                        <Typography variant='h5'>Public Winner List</Typography>
                    </Stack>
                    <Typography>A public winner list of wallets entered will be displayed&nbsp;
                        <Typography component="span" sx={{ color: '#4D82F3' }}>&nbsp;www.link/list.com</Typography>
                    </Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                            <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                            <Stack gap={.5}>
                                <Typography>Expose winner list publicly?</Typography>
                                <Typography variant="caption">This will add a accesible page that shows list of lists of winners</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack flexDirection="row" justifyContent="flex-end">
                    <Button size="small" variant='contained' sx={{ bgcolor: '#BB86FC', textTransform: 'uppercase' }}>Save Settings</Button>
                </Stack>
            </Stack>
        </Box>
    );
}