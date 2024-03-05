import {
    Box, Stack, Typography, Button, Checkbox, OutlinedInput, TextareaAutosize, Divider, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TwitterIcon from '@mui/icons-material/Twitter';
import TitleIcon from '@mui/icons-material/Title';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function Requirements () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box
            sx={{
                pt: 8
            }}
        >
            <Stack gap={10}>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <Box src="/images/ethereum.svg" component="img" sx={{ width: 16, color: '#E8A94B' }} />
                        <Typography variant='h5'>Wallet requirements</Typography>
                    </Stack>
                    <Typography>All users will be required to login but you can also set other requirements about what’s in their wallet</Typography>    
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={3}>
                            <Stack gap={1}>
                                <Typography>Required ETH balance</Typography>
                                <OutlinedInput placeholder='Required ETH Balance' size="small" />
                                <Typography variant="caption">
                                    You can require users who register to hold a minimum amount of ETH in their wallet.
                                </Typography>
                            </Stack>
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>Disqualify entries if wallet balance falls below minimum?</Typography>
                                    <Typography variant="caption">
                                        PREMINT will recheck the required wallet balance after registration. 
                                        Bots tend to move money around, so this is a great way to disqualify bots.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <ChangeCircleIcon sx={{ color: '#32C1CC' }} />
                        <Typography variant='h5'>Token Ownership</Typography>
                    </Stack>
                    <Typography>You can enter two collections below, and the user will need to own an NFT from either one.</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={5}>
                            <Stack 
                                flexDirection={matchUpMd ? "row" : "column"} 
                                alignItems={matchUpMd ? "center" : "inherit"} 
                                justifyContent="space-between" 
                                gap={3}
                            >
                                <Typography flex="auto">Collection 1</Typography>
                                <Stack 
                                    flexDirection={matchUpMd ? "row" : "column"} 
                                    justifyContent="space-between" 
                                    flex="auto" 
                                    gap={3}
                                >
                                    <Stack gap={1}>
                                        <Typography>NFT contract address</Typography>
                                        <OutlinedInput size="small" placeholder='bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Name</Typography>
                                        <OutlinedInput size="small" placeholder='BYSC' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Link</Typography>
                                        <OutlinedInput size="small" placeholder='https://opensea.io/collection/bsyc' />
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack 
                                flexDirection={matchUpMd ? "row" : "column"} 
                                alignItems={matchUpMd ? "center" : "inherit"} 
                                justifyContent="space-between" 
                                gap={3}
                            >
                                <Typography flex="auto">Collection 2</Typography>
                                <Stack 
                                    flexDirection={matchUpMd ? "row" : "column"} 
                                    justifyContent="space-between" 
                                    flex="auto" 
                                    gap={3}
                                >
                                    <Stack gap={1}>
                                        <Typography>NFT contract address</Typography>
                                        <OutlinedInput size="small" placeholder='bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Name</Typography>
                                        <OutlinedInput size="small" placeholder='BYSC' />
                                    </Stack>
                                    <Stack gap={1}>
                                        <Typography>NFT Collection Link</Typography>
                                        <OutlinedInput size="small" placeholder='https://opensea.io/collection/bsyc' />
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>Disqualify entries if wallet balance falls below minimum?</Typography>
                                    <Typography variant="caption">
                                        PREMINT will recheck the required wallet balance after registration. 
                                        Bots tend to move money around, so this is a great way to disqualify bots.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Typography variant='h5'>Require user to own an POAP from a specific event?</Typography>    
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack 
                            flexDirection={matchUpMd ? "row" : "column"}  
                            justifyContent="flex-start" 
                            gap={3}
                        >
                            <Stack gap={1.5} flex={1}>
                                <Typography>Require POAP Ownership</Typography>
                                <OutlinedInput size="small" placeholder='12566' />
                                <Typography variant='caption'> Enter event ID to require someone who registers to have a POAP from that event.</Typography>
                            </Stack>
                            <Stack gap={1.5} flex={1}>
                                <Typography>POAP Event Name</Typography>
                                <OutlinedInput size="small" placeholder='NFT Nyc party' />
                                <Typography variant='caption'> This will be displayed to the user in the form.</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <TwitterIcon sx={{ color: '#5AC8FA' }} />
                        <Typography variant='h5'>Twitter verification</Typography>    
                    </Stack>
                    <Typography>Require users to sign into Twitter before registering for your list.</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack justifyContent="flex-start" gap={4.5}>
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>Twitter Verification</Typography>
                                    <Typography variant="caption">
                                        Require someone to verify themselves on Twitter before joining your list.
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Must Follow Account(s)</Typography>
                                <OutlinedInput placeholder='@jack' size="small" />
                            </Stack>
                            <Box>
                                <Divider />
                            </Box>
                            <Stack gap={3}>
                                <Typography>Require user to interact with a tweet</Typography>
                                <Stack flexDirection={matchUpMd ? "row" : "column"}  gap={3}>
                                    <Stack gap={1.5} flex={1}>
                                        <Typography>Tweet ID they need to interact with</Typography>
                                        <OutlinedInput size="small" placeholder="286847632789484" />
                                    </Stack>
                                    <Stack gap={1.5} flex={1}>
                                        <Typography>What does the user need to do?</Typography>
                                        <OutlinedInput size="small" placeholder="BSYC" />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <Box component="img" src="/images/discord.svg" sx={{ color: '#5AC8FA' }} />
                        <Typography variant='h5'>Discord Requirements</Typography>
                    </Stack>
                    <Typography>Require users to sign into Discord, be a member of your server, and/or have a specific role before registering for your list.</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={4.5}>
                            <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                                <Checkbox fontSize='small' sx={{ color: '#4D82F3', alignItems: 'flex-start', p:0 }} />
                                <Stack gap={.5}>
                                    <Typography>Disqualify entries if wallet balance falls below minimum?</Typography>
                                    <Typography variant="caption">
                                        PREMINT will recheck the required wallet balance after registration. 
                                        Bots tend to move money around, so this is a great way to disqualify bots.
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Must Follow Account(s)</Typography>
                                <OutlinedInput size='small' placeholder='@jack' />
                            </Stack>
                            <Box>
                                <Divider />
                            </Box>
                            <Stack gap={3}>
                                <Typography>Require user to be a member of a specific server? (All three fields required)</Typography>
                                <Stack gap={3} flexDirection={matchUpMd ? "row" : "column"}>
                                    <Stack gap={1.5} flex={1}>
                                        <Typography>Server ID</Typography>
                                        <OutlinedInput size="small" placeholder="286847632789484" />
                                    </Stack>
                                    <Stack gap={1.5} flex={1}>
                                        <Typography>Server Disply Name</Typography>
                                        <OutlinedInput size="small" placeholder="OSYC" />
                                        <Typography variant="caption">This will be displayed to the user in the form.</Typography>
                                    </Stack>
                                    <Stack gap={1.5} flex={1}>
                                        <Typography>Server Link</Typography>
                                        <OutlinedInput size="small" placeholder="https://discord.gg/osyc" />
                                        <Typography variant="caption">Add a link, we can direct people to your server who aren't yet members.</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Box>
                                <Divider />
                            </Box>
                            <Stack gap={3}>
                                <Typography>Require user joined your server by a certain date</Typography>
                                <Stack gap={1.5}>
                                    <Typography>Role ID(s)</Typography>
                                    <OutlinedInput  placeholder='09/15/2022 15:51' size="small" />
                                    <Stack flexDirection="row">
                                        <Typography variant="caption" sx={{ fontFamily: 'Inter-Bold' }}>(GMT+0600) Asia/Dhaka &nbsp;</Typography>
                                        <Typography variant="caption">Set a time that the user must have joined your server if you want to avoid a bunch of new people jumping in the server to register.</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <TitleIcon />
                        <Typography variant='h5'>Custom Field</Typography>
                    </Stack>
                    <Typography>Require that the user fill out an extra form field</Typography>    
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={3}>
                            <Stack gap={1}>
                                <Typography>Required Custom Field Label</Typography>
                                <OutlinedInput placeholder='Required Custom Field Label' size="small" />
                                <Typography variant="caption">
                                If you would like users to fill out a custom field (500 character max) with each entry, enter the label for the field here.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <LockIcon sx={{ color: '#E8A94B' }} />
                        <Typography variant='h5'>Password</Typography>
                    </Stack>
                    <Typography>Would you like users to enter a password before being able to access your LOREM list?</Typography>    
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={3}>
                            <Stack gap={1}>
                                <Typography>Password</Typography>
                                <OutlinedInput placeholder='Password' size="small" />
                                <Typography variant="caption">
                                This allows you to password protect this page. Visitors will be asked to enter a password before they can see the content.
                                </Typography>
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