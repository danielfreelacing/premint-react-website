import { useTheme } from "@mui/material/styles";
import { Typography, Box, Button, Checkbox, Stack, Slider, useMediaQuery } from "@mui/material";

export default function RemoveBot () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Stack gap={6} sx={{ pt: 4 }}>
            <Typography>
                Fantom helps you clean your list from possible bots and fraudulent activity. 
                Remember, it's up to you to actually decide what you consider fraudulent. 
                We just try to make it easy. 
                When you clean your list, entries are marked as disqualified and will not be considered when running the raffle. 
            </Typography>
            <Stack gap={1}>
                <Typography variant="h5">Duplicate Ips</Typography>
                <Typography>
                    These entries came from the same IP addresses as other entries. 
                    Before you disqualify, remember that some of this could be innocent. 
                    For example, roommates might both have registered from the same network.
                </Typography>
                <Box sx={{ pt: 3 }}>
                    <Stack
                        sx={{
                            bgcolor: '#fff',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 4,
                            py: 3, 
                            px: matchUpMd ? 3.5: 2
                        }}
                        gap={5}
                    >
                        <Stack flexDirection="row" alignItems={matchUpMd ? "center": 'flex-start'} gap={1}>
                            <Checkbox sx={{ p: 0 }} />
                            <Typography variant="caption">Disqualify entries made with IP addresses that created multiple entries</Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{ textAlign: 'center' }}>MAXIMUM TIMES A SINGLE IP ADDRESS CAN ENTER THE RAFFLE:</Typography>
                            <Typography variant="h4" sx={{ textAlign: 'center', pt: 2 }}>10 Entries per IP</Typography>
                            <Slider sx={{ pt: 6 }} defaultValue={30} />
                        </Stack>
                        <Stack flexDirection={matchUpMd ? "row" : "column"} gap={4}>
                            <Button 
                                variant="contained" 
                                size="large"
                                color="success" 
                                sx={{ 
                                    flex: 1,
                                    color: '#3ACE87', 
                                    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #3ACE87',
                                    borderRadius: 3,
                                    py: 1.5
                                }}>
                                <Typography variant="caption">0 entries do not have duplicate ip adress</Typography>
                            </Button>
                            <Button 
                                variant="contained" 
                                size="large"
                                color="error" 
                                sx={{ 
                                    flex: 1, 
                                    color: '#B01212',
                                    bgcolor: '#FFEBEB',
                                    borderRadius: 3,
                                    py: 1.5
                                }}
                            >
                                <Typography variant="caption">0 entries will be disqualified</Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
            <Stack gap={1}>
                <Typography variant="h5">New Twitter accounts</Typography>
                <Typography>
                    Sometimes brand new Twitter accounts are a sign that the entry is not genuine. 
                    However, also remember some people interested in NFTs might have never had a Twitter account before.
                </Typography>
                <Box sx={{ pt: 3 }}>
                    <Stack
                        sx={{
                            bgcolor: '#fff',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 4,
                            py: 3, 
                            px: matchUpMd ? 3.5: 2
                        }}
                        gap={5}
                    >
                        <Stack flexDirection="row" alignItems={matchUpMd ? "center": 'flex-start'} gap={1}>
                            <Checkbox sx={{ p: 0 }} />
                            <Typography variant="caption">Disqualify entries made by Twitter accounts with low followers</Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{ textAlign: 'center' }}>MINIMUM NUMBER OF TWITTER FOLLOWERS:</Typography>
                            <Typography variant="h4" sx={{ textAlign: 'center', pt: 2 }}>10 Followers</Typography>
                            <Slider sx={{ pt: 6 }} defaultValue={30} />
                        </Stack>
                        <Stack flexDirection={matchUpMd ? "row" : "column"} gap={4}>
                            <Button 
                                variant="contained" 
                                size="large"
                                color="success" 
                                sx={{ 
                                    flex: 1,
                                    color: '#3ACE87', 
                                    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #3ACE87',
                                    borderRadius: 3,
                                    py: 1.5
                                }}
                            >
                                <Typography variant="caption">0 entries do not have duplicate ip adress</Typography>
                            </Button>
                            <Button 
                                variant="contained" 
                                size="large"
                                color="error" 
                                sx={{ 
                                    flex: 1, 
                                    color: '#B01212',
                                    bgcolor: '#FFEBEB',
                                    borderRadius: 3,
                                    py: 1.5
                                }}
                            >
                                <Typography variant="caption">0 entries will be disqualified</Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
                <Box sx={{ pt: 3 }}>
                    <Stack
                        sx={{
                            bgcolor: '#fff',
                            boxShadow: '0px 17px 26px -9px #E2E8F0',
                            borderRadius: 4,
                            py: 3, 
                            px: matchUpMd ? 3.5: 2
                        }}
                        gap={5}
                    >
                        <Stack flexDirection="row" alignItems={matchUpMd ? "center": 'flex-start'} gap={1}>
                            <Checkbox sx={{ p: 0 }} />
                            <Typography variant="caption">Disqualify entries made by new Twitter accounts</Typography>
                        </Stack>
                        <Stack>
                            <Typography sx={{ textAlign: 'center' }}>MINIMUM AGE OF TWITTER ACCOUNT:</Typography>
                            <Typography variant="h4" sx={{ textAlign: 'center', pt: 2 }}>8 Days</Typography>
                            <Slider sx={{ pt: 6 }} defaultValue={30} />
                        </Stack>
                        <Stack flexDirection={matchUpMd ? "row" : "column"} gap={4}>
                            <Button 
                                variant="contained" 
                                size="large"
                                color="success" 
                                sx={{ 
                                    flex: 1,
                                    color: '#3ACE87', 
                                    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #3ACE87',
                                    borderRadius: 3,
                                    py: 1.5
                                }}>
                                <Typography variant="caption">0 entries do not have duplicate ip adress</Typography>
                            </Button>
                            <Button 
                                variant="contained" 
                                size="large"
                                color="error" 
                                sx={{ 
                                    flex: 1, 
                                    color: '#B01212',
                                    bgcolor: '#FFEBEB',
                                    borderRadius: 3,
                                    py: 1.5
                                }}
                            >
                                <Typography variant="caption">0 entries will be disqualified</Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
            <Stack flexDirection="row" justifyContent="flex-end">
                <Button variant="contained" sx={{ bgcolor: '#BB86FC', textTransform: 'uppercase' }}>Clean List</Button>
            </Stack>
        </Stack>
    )
}