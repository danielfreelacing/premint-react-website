import { Box, OutlinedInput, Stack, Typography, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddIcon from '@mui/icons-material/Add';
// import { Link } from 'react-router-dom';

export default function FullList () {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box>
            <Box sx={{ pt: 2.5, pb: 5 }}>
                <OutlinedInput
                    fullWidth
                    size='small'
                    placeholder='Search by wallet address or social username'
                    endAdornment={<SearchOutlinedIcon />}
                />
            </Box>
            <Stack 
                flexDirection={matchUpSm ? "row" : "column" }
                alignItems="center" 
                justifyContent="space-between"
                gap={3}
                sx={{
                    pb: 2
                }}
            >
                <Stack gap={.5} alignItems="center">
                    <Stack flexDirection="row" alignItems="center" gap={1}>
                        <AccountBalanceWalletIcon sx={{ color: '#64748B' }} />
                        <Typography sx={{ fontFamily: 'Inter-Semi-Bold' }}>Wallet</Typography>
                    </Stack>
                    <Typography>Balance/Date</Typography>
                </Stack>
                <Stack gap={.5} alignItems="center">
                    <Stack flexDirection="row" alignItems="center" gap={1}>
                        <TwitterIcon sx={{ color: '#5AC8FA' }} />
                        <Typography sx={{ fontFamily: 'Inter-Semi-Bold' }}>Twitter</Typography>
                    </Stack>
                    <Typography>Followers/Join Date</Typography>
                </Stack>
                <Stack gap={.5} alignItems="center">
                    <Stack flexDirection="row" alignItems="center" gap={1}>
                        {/* <AccountBalanceWalletIcon /> */}
                        <Box component="img" src="/images/discord.svg" />
                        <Typography sx={{ fontFamily: 'Inter-Semi-Bold' }}>Discord</Typography>
                    </Stack>
                    <Typography>Lorem Ipsum</Typography>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    py: 3,
                    borderTop: `1px solid ${theme.palette.divider}`,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }}
                alignItems="center"
                justifyContent="center"
            >
                <Stack 
                    flexDirection="row" 
                    alignItems="center" 
                    gap={.5} 
                    sx={{ cursor: 'pointer' }}
                    // onClick={() => navigate('/')}
                >
                    <Typography sx={{ color: '#BB86FC' }}>Manually add address</Typography>
                    <AddIcon sx={{ color: '#BB86FC' }} />
                </Stack>
            </Stack>
            <Stack 
                alignItems="center"
                justifyContent="center"
                sx={{
                    pt: 12
                }}
                gap={.5}
            >
                <Typography sx={{ fontFamily: 'Inter-Extra-Bold' }}>No one has signed up for the list yet</Typography>
                <Typography>When you are ready share your 
                    <Link sx={{ textDecoration: 'none', color: '#4D82F3' }} target="_blank"> public page link </Link>
                    for people to connect their wallet & join in the list
                </Typography>
            </Stack>
        </Box>
    );
}