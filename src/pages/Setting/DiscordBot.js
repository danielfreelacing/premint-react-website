import {
    Box, Stack, Typography, Button, OutlinedInput, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

export default function DiscordBot () {
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
                        <ViewStreamIcon />
                        <Typography variant='h5'>Discord Bot</Typography>
                    </Stack>
                    <Typography>Intall our discord bot into your server to let your community members check their status and get an assigned role.</Typography>
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
                            <Stack gap={1}>
                                <Typography>The Lorem Discord Bot has two public slash commands:</Typography>
                                <Stack component="ul" gap={1} sx={{ pl: 3 }}>
                                    <Box component="li">
                                        <Stack flexDirection="row">
                                            <Typography sx={{ color: '#4D82F3' }}>/Lorem&nbsp;</Typography>
                                            <Typography>
                                                -  If the users is registered on LOREM and connected their discord. 
                                                They can verify if they are on the list. 
                                                This command will also add a role to user if they are on the list.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    <Box component="li">
                                        <Stack flexDirection="row">
                                            <Typography sx={{ color: '#4D82F3' }}>/Lorem [ETH wallet address]&nbsp; </Typography>
                                            <Typography>
                                                -  If the users is did not connected their discord. 
                                                They can still check verify if they are on the list.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Stack>
                            <Stack flexDirection={matchUpMd ? "row" : "column"} alignItems={matchUpMd ? "center" : "inherit"} gap={5}>
                                <Box flex={1} sx={{ width: "100%" }}>
                                    <Box component="img" src="/images/discord-preview.png" sx={{ boderRadius: 2, width: '100%' }} />
                                </Box>
                                <Stack flex={1} gap={2} alignItems={matchUpMd ? "inherit" : "flex-start"}>
                                    <Typography variant="h5">Install the bot and read the instruction below. Your API key is:</Typography>
                                    <Typography variant="subtitle1" sx={{ color: '#4D82F3' }}>68d42365-130e-4899-8e61-39ffaa3ae63d</Typography>
                                    <Stack flexDirection="row" alignItems="center" gap={2}>
                                        <Button sx={{ color: '#BB86FC', textTransform: 'uppercase' }}>Read Instructions</Button>
                                        <Button variant="contained" sx={{ bgcolor: '#BB86FC', textTransform: 'uppercase' }}>Install Bot</Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Stack gap={3}>
                    <Stack flexDirection="row" alignItems="center" gap={.5}>
                        <NotificationImportantIcon sx={{ color: '#4D82F3' }} />
                        <Typography variant='h5'>Webhook Alerts</Typography>
                    </Stack>
                    <Typography>If you want discord alerts every time someone register, create a webhook channel.</Typography>
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
                            <Typography>Post new webhook registration to discord webhook</Typography>
                            <OutlinedInput size="small" placeholder='post new webhook registration to discord webhook' />
                            <Typography variant='caption'>Paste a discord webhook URL.</Typography>
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