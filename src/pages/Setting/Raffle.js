import {
    Box, Stack, Typography, Button, OutlinedInput, TextareaAutosize
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function Raffle () {
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
                        <ViewStreamIcon />
                        <Typography variant='h5'>Raffle Time</Typography>
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
                        <Stack gap={1.5}>
                            <Typography>Planned raffle time</Typography>
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
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <EmojiEventsIcon sx={{ color: '#F2AF4A' }} />
                        <Typography variant='h5'>Winner Message</Typography>
                    </Stack>
                    <Typography>This will be shown to winner registration page & verification page</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={4}>
                            <Stack gap={1}>
                                <Typography>Winner Title</Typography>
                                <OutlinedInput size='small' placeholder='winner title' />
                                <Typography variant="caption">What is the title for your winner section?</Typography>
                            </Stack>
                            <Stack gap={1}>
                                <Typography>Winner Message</Typography>
                                <TextareaAutosize placeholder="winner message" minRows={5}
                                    style={{
                                        filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))',
                                        borderRadius: 4,
                                        paddingTop: 8,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingBottom: 8,
                                        fontFamily: 'Inter'
                                    }}
                                />
                                <Typography variant="caption">What message would you like to show to winner?</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <SentimentDissatisfiedTwoToneIcon sx={{ color: '#D83232' }} />
                        <Typography variant='h5'>Non-Winner Message</Typography>
                    </Stack>
                    <Typography>This will be shown to non-winner registration page & verification page</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={4}>
                            <Stack gap={1}>
                                <Typography>Non-Winner Title</Typography>
                                <OutlinedInput size='small' placeholder='non-winner title' />
                                <Typography variant="caption">What is the title for your non-winner section?</Typography>
                            </Stack>
                            <Stack gap={1}>
                                <Typography>Non-Winner Message</Typography>
                                <TextareaAutosize placeholder="non-winner messge" minRows={5}
                                    style={{
                                        filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))',
                                        borderRadius: 4,
                                        paddingTop: 8,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingBottom: 8,
                                        fontFamily: 'Inter'
                                    }}
                                />
                                <Typography variant="caption">What message would you like to show to nonwinner?</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <TextSnippetIcon sx={{ color: '#4D82F3' }} />
                        <Typography variant='h5'>Whitelist Messages</Typography>
                    </Stack>
                    <Typography>This will be shown to whitelist registration page & verification page</Typography>
                    <Box
                        sx={{
                            bgcolor: theme.palette.background.paper,
                            border: '1px solid #F1F4F9',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 1,
                            p: 4
                        }}
                    >
                        <Stack gap={4}>
                            <Stack gap={1}>
                                <Typography>Whitelist Title</Typography>
                                <OutlinedInput size='small' placeholder='whitelist title' />
                                <Typography variant="caption">What is the title for your whitelist section?</Typography>
                            </Stack>
                            <Stack gap={1}>
                                <Typography>Whitelist Message</Typography>
                                <TextareaAutosize placeholder="whitelist messge" minRows={5}
                                    style={{
                                        filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))',
                                        borderRadius: 4,
                                        paddingTop: 8,
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingBottom: 8,
                                        fontFamily: 'Inter'
                                    }}
                                />
                                <Typography variant="caption">What message would you like to show to whitelisted?</Typography>
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