import {
    Box, Stack, Typography, Button, Checkbox, OutlinedInput, TextareaAutosize, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BlockIcon from '@mui/icons-material/Block';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function SignupAccess () {
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
                        <Stack gap={1}>
                            <Typography>Password</Typography>
                            <OutlinedInput placeholder='Password' size="small" />
                            <Typography variant="caption">
                                This allows you to password protect this page. 
                                Visitors will be asked to enter a password before they can see the content.
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <DateRangeIcon />
                        <Typography variant='h5'>Schedule</Typography>    
                    </Stack>
                    <Typography>Open & close your list at specific time</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack flexDirection={matchUpMd ? "row" : "column"} justifyContent="flex-start" gap={matchUpMd ? 6 :3}>
                            <Stack gap={1.5} flex={1}>
                                <Typography>Registration Start date</Typography>
                                <OutlinedInput 
                                    size="small" 
                                    placeholder='09/04/2022 04:29' 
                                    type="datetime-local"
                                />
                                <Stack flexDirection="row">
                                    <Typography variant="caption" sx={{ fontFamily: 'Inter-Bold' }}>(GMT+0600) Asia/Dhaka&nbsp;</Typography>
                                    <Typography variant='caption'> When should people be able to join your list?</Typography>
                                </Stack>
                            </Stack>
                            <Stack gap={1.5} flex={1}>
                                <Typography>Registration end date</Typography>
                                <OutlinedInput 
                                    size="small" 
                                    placeholder='09/04/2022 04:29' 
                                    type="datetime-local"
                                />
                                <Stack flexDirection="row">
                                    <Typography variant="caption" sx={{ fontFamily: 'Inter-Bold' }}>(GMT+0600) Asia/Dhaka&nbsp;</Typography>
                                    <Typography variant='caption'> When should people be able to join your list?</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <AutoStoriesIcon sx={{ color: '#64748B' }} />
                        <Typography variant='h5'>Max Entries</Typography>
                    </Stack>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={1}>
                            <Typography>Max Entries</Typography>
                            <OutlinedInput placeholder='max entries' size="small" />
                            <Typography variant="caption">
                                Once your list hits this many, registration will close automatically
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <BlockIcon sx={{ color: '#E24949' }} />
                        <Typography variant='h5'>Banned Entries</Typography>    
                    </Stack>
                    <Typography>Ban certain people or ip from your whitelist</Typography>
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
                            <Stack gap={1.5}>
                                <Typography>Banned IP hashes</Typography>
                                <TextareaAutosize minRows={10} 
                                    placeholder="banned ip hashes" 
                                    style={{
                                        filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))',
                                        borderRadius: 4,
                                        paddingTop: 8,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingBottom: 8,
                                        fontFamily: 'Inter'
                                    }} />
                                <Typography variant='caption'>Once per line, this ip hases will be marked as banned.</Typography>
                            </Stack>
                            <Stack gap={1.5}>
                                <Typography>Banned Wallets</Typography>
                                <TextareaAutosize minRows={10} 
                                    placeholder="banned wallets" 
                                    style={{
                                        filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))',
                                        borderRadius: 4,
                                        paddingTop: 8,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingBottom: 8,
                                        fontFamily: 'Inter'
                                    }} />
                                <Typography variant='caption'>Once per line, this wallets will be marked as banned.</Typography>
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