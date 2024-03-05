    import {
        Box, 
        Button,
        Stack, 
        Typography, 
        Divider,
        OutlinedInput,
        Checkbox,
        TextareaAutosize,
        useMediaQuery
    } from '@mui/material';
    import { useTheme } from '@mui/material/styles';
    import DateRangeIcon from '@mui/icons-material/DateRange';
    import MUIRichTextEditor from 'mui-rte';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import SignLanguageIcon from '@mui/icons-material/SignLanguage';
    import GroupsIcon from '@mui/icons-material/Groups';
    import InsightsIcon from '@mui/icons-material/Insights';

    export default function ProjectInfo () {
        const theme = useTheme();
        const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

        return (
            <Box>
                <Stack gap={11} sx={{ pt: 5 }}>
                    <Stack flexDirection={matchUpMd ? "row": "column"} gap={matchUpMd ? 6: 3}>
                        <Stack flex={1} gap={1}>
                            <Typography>Name</Typography>
                            <OutlinedInput
                                size="small"
                                placeholder='project name'
                            />
                        </Stack>
                        <Stack flex={1} gap={1}>
                            <Typography>Slug</Typography>
                            <OutlinedInput 
                                size='small'
                                placeholder='slug'
                            />
                        </Stack>
                    </Stack>
                    <Stack gap={1}>
                        <Typography>Description</Typography>
                        <Box
                            sx={{
                                bgcolor: '#fff',
                                minHeight: 300,
                                maxWidth: '100%',
                                px: 2
                            }}
                        >
                            <MUIRichTextEditor 
                                label="Start typing..." 
                            />
                        </Box>
                        {/* <Box sx={{ minHeight: 200, bgcolor: '#fff' }}></Box> */}
                    </Stack>
                    <Stack flexDirection={matchUpMd ? "row" : "column"} gap={matchUpMd ? 6 : 3}>
                        <Stack flex={1} gap={1}>
                            <Typography>Official project website</Typography>
                            <OutlinedInput 
                                placeholder='official project website'
                                size="small"
                            />
                            <Typography variant="body2">
                                This is required, and should NOT be a Twitter or Discord web address. 
                                If you don't yet have an official link for your project, it might be too early to launch a PREMINT.
                            </Typography>
                        </Stack>
                        <Stack flex={1} gap={1}>
                            <Typography>YouTube, Vimeo, or Facebook Video Link</Typography>
                            <OutlinedInput 
                                size="small"
                                placeholder='YouTube, Vimeo, or Facebook Video Link'
                            />
                            <Typography variant="body2">
                                For YouTube: Use the full link (youtube.com/watch...) not the short link (youtu.be/...)
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack flexDirection={matchUpMd ? "row" : "column"} gap={matchUpMd ? 6 : 3}>
                        <Stack flex={1} gap={1}>
                            <Typography>Image</Typography>
                            <Stack 
                                flexDirection="row"
                                alignItems="center"
                                gap={2}
                                sx={{ 
                                    flexWrap: 'wrap',
                                    px: 2, 
                                    py: 1, 
                                    borderRadius: 1,
                                    bgcolor: theme.palette.background.paper,
                                    filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))'
                                }}
                            >
                                <Button variant="contained" size="small" sx={{ bgcolor: '#94A3B8' }}>Choose File</Button>
                                <Typography>No file choosen</Typography>
                            </Stack>
                            <Typography variant="body2">A square image similar to what you'd upload as your Twitter photo</Typography>
                        </Stack>
                        <Stack flex={2} gap={1}>
                            <Typography>Project Banner Image</Typography>
                            <Stack 
                                flexDirection="row"
                                alignItems="center"
                                gap={2}
                                sx={{ 
                                    flexWrap: 'wrap',
                                    px: 2, 
                                    py: 1, 
                                    borderRadius: 1,
                                    bgcolor: theme.palette.background.paper,
                                    filter: 'drop-shadow(0px 1px 2px rgba(77, 64, 85, 0.1))'
                                }}
                            >
                                <Button variant="contained" size="small" sx={{ bgcolor: '#94A3B8' }}>Choose File</Button>
                                <Typography>No file choosen</Typography>
                            </Stack>
                            <Typography variant="body2">
                                This will go at the top of the project page. 
                                We recommend 1400x300.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack gap={2}>
                        <Typography variant="h5">Connect Social Accounts</Typography>
                        <Typography>Place one address per line. We recommend adding 100 no more than at a time.</Typography>
                        <Stack 
                            flexDirection={matchUpMd ? "row" : "column"}
                            justifyContent="space-between"
                            alignItems={matchUpMd ? "center" : "inherit"}
                            gap={matchUpMd ? 4 : 0}
                            sx={{
                                p: 2,
                                px: matchUpMd ? 2: 0,
                                borderRadius: 1,
                                bgcolor: theme.palette.background.paper,
                                boxShadow: '0px 17px 26px -9px #E2E8F0'
                            }}
                        >
                            <Stack 
                                flexDirection="row" 
                                alignItems="center" 
                                justifyContent="space-between" 
                                flex={1} 
                                sx={{ 
                                    flexWrap: 'wrap',
                                    px: matchUpMd ? 5 : 3, py:2 
                                }}
                            >
                                <Stack flexDirection="row" alignItems="center" gap={1}>
                                    <TwitterIcon sx={{ color: '#5AC8FA' }} />
                                    <Typography>Twitter</Typography>
                                </Stack>
                                <Button variant="contained" color="info" sx={{ textTransform: 'uppercase', bgcolor: '#5AC8FA' }}>Connect</Button>
                            </Stack>
                            <Divider orientation={matchUpMd ? "vertical" : "horizontal"} flexItem />
                            <Stack 
                                flexDirection="row" 
                                alignItems="center" 
                                justifyContent="space-between" 
                                flex={1} 
                                sx={{ 
                                    flexWrap: 'wrap',
                                    px: matchUpMd ? 5 : 3, py:2  
                                }}
                            >
                                <Stack flexDirection="row" alignItems="center" gap={1}>
                                    <Box component="img" src="/images/discord.svg" />
                                    <Typography>Discord</Typography>
                                </Stack>
                                <Button variant="contained" color="primary" sx={{ textTransform: 'uppercase', bgcolor: '#5856D6' }}>Connect</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap={3}>
                        <Stack flexDirection="row" alignItems="center" gap={.5}>
                            <DateRangeIcon />
                            <Typography variant="h5">LOREM Registration Access</Typography>
                        </Stack>
                        <Typography>
                            Place one address per line. 
                            We recommend adding 100 no more than at a time.
                        </Typography>
                        <Stack flexDirection={matchUpMd ? "row" : "column"} gap={4}
                            sx={{
                                py: 4,
                                px: 3,
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                bgcolor: '#fff'
                            }}
                        >
                            <Stack flex={1} gap={1.5}>
                                <Typography>Registration Start date</Typography>
                                <OutlinedInput 
                                    type="datetime-local"
                                    size='small' 
                                    placeholder='09/04/2022 04:29' />
                                <Stack flexDirection="row">
                                <Typography variant="caption">
                                    <Typography component="span" sx={{ fontFamily: 'Inter-Bold' }}>(GMT+0600) Asia/Dhaka</Typography>
                                    When should people be able to join your list?
                                </Typography>
                                </Stack>
                            </Stack>
                            <Stack flex={1} gap={1.5}>
                                <Typography>Registration end date</Typography>
                                <OutlinedInput 
                                    size='small'
                                    type="datetime-local"
                                    placeholder='09/04/2022 04:29' 
                                />
                                <Stack flexDirection="row">
                                <Typography variant="caption">
                                    <Typography component="span" sx={{ fontFamily: 'Inter-Bold' }}>(GMT+0600) Asia/Dhaka</Typography>
                                    When should people be able to join your list?
                                </Typography>
                                </Stack>
                            </Stack>
                            <Stack flex={1} gap={1.5}>
                                <Typography>Close registration once it hits this many entries:</Typography>
                                <OutlinedInput
                                    size="small"
                                    type="datetime-local"
                                    placeholder='Close registration once it hits this many entries'
                                />
                                <Typography variant="caption">Leave this blank for unlimited</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap={3}>
                        <Stack flexDirection="row" alignItems="center" gap={.5}>
                            <DateRangeIcon />
                            <Typography variant="h5">Mint Info</Typography>
                        </Stack>
                        <Stack gap={matchUpMd ? 5 : 3}
                            sx={{
                                py: 4,
                                px: 3,
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                bgcolor: '#fff'
                            }}
                        >
                            <Stack flexDirection={matchUpMd ? "row" : "column"} gap={matchUpMd ? 6 : 3}>
                                <Stack flex={1} gap={1.5}>
                                    <Typography>What is the total token supply for this collection?</Typography>
                                    <OutlinedInput 
                                        size='small' 
                                        placeholder='What is the total token supply for this collection?' 
                                    />
                                    <Typography variant="caption">If you plan to have 10,000 NFTs minted, this would be 10,000.</Typography>
                                </Stack>
                                <Stack flex={1} gap={1.5}>
                                    <Typography>Mint price</Typography>
                                    <OutlinedInput 
                                        size='small' 
                                        placeholder='Mint Price' 
                                    />
                                </Stack>
                            </Stack>
                            <Stack flexDirection={matchUpMd ? "row" : "column"} gap={matchUpMd ? 6 : 3}>
                                <Stack flex={1} gap={1.5}>
                                    <Typography>Mint date</Typography>
                                    <OutlinedInput 
                                        size='small'
                                        placeholder='Mint Date' 
                                        type="datetime-local"
                                    />
                                    <Typography variant="caption">RECOMMENDED. This helps the person who is registering remember to mint.</Typography>
                                </Stack>
                                <Stack flex={1} gap={1.5}>
                                    <Typography>Mint time</Typography>
                                    <OutlinedInput 
                                        size='small'
                                        placeholder='Mint time' 
                                        type="datetime-local"
                                    />
                                    <Typography variant="caption">UTC Timezone. This is still UTC - We will be making it timezone aware soon.</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap={3}>
                        <Typography variant="h5">How many winners do you intend to pick from this PREMINT page and when?</Typography>
                        <Stack flexDirection={matchUpMd ? "row" : "column"}
                            sx={{
                                py: 4,
                                px: 3,
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                bgcolor: '#fff'
                            }}
                            gap={matchUpMd ? 6 : 3}
                        >
                            <Stack flex={1} gap={1.5}>
                                <Typography>How many spots are you giving away via this PREMINT list?</Typography>
                                <OutlinedInput 
                                    size='small' 
                                    placeholder='How many spots are you giving away via this PREMINT list?' 
                                />
                                <Typography variant="caption">If you plan to have 10,000 NFTs minted, this would be 10,000.</Typography>
                            </Stack>
                            <Stack flex={1} gap={1.5}>
                                <Typography>Planned Raffle Time</Typography>
                                <OutlinedInput 
                                    size='small' 
                                    placeholder='09/04/2022 04:29'
                                    type="datetime-local" 
                                />
                                <Typography variant="caption">
                                    <Typography sx={{ fontFamily: 'Inter-Bold' }} component="span">(GMT+0600) Asia/Dhaka</Typography>
                                    When should people be able to join your list?
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap={3}>
                        <Stack flexDirection="row" alignItems="center" gap={.5}>
                            <SignLanguageIcon />
                            <Typography variant='h5'>Collabs Only</Typography>
                        </Stack>
                        <Typography>
                            You can set your list to only be joined via official Collab pages. 
                            If you do this, you need to set up Collabs in your project dashboard for this list to be usable.
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
                                    <Typography>Registration Via collab only </Typography>
                                    <Typography variant="caption">Don’t list this project in any Lorem calenders</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack gap={3}>
                        <Typography variant='h5'>Private Project</Typography>
                        <Typography>
                        Project listed privatedly wont be considered for Lorem calnders
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
                                    <Typography>Private </Typography>
                                    <Typography variant="caption">Don’t list this project in any Lorem calenders</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack gap={3}>
                        <Stack flexDirection="row" alignItems="center" gap={.5}>
                            <GroupsIcon />
                            <Typography variant="h5">Team</Typography>
                        </Stack>
                        <Typography>
                            If there are other people you'd like to be able to see the entries and make changes to your PREMINT settings, add their wallet addresses here.
                        </Typography>
                        <Stack gap={1.5}
                            sx={{
                                py: 4,
                                px: 3,
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                bgcolor: '#fff'
                            }}
                        >
                            <Typography>Admin Wallet Address</Typography>
                            <TextareaAutosize
                                placeholder="Admin Wallet Address"
                                minRows={5}
                                style={{
                                    paddingTop:16, 
                                    paddingBottom:16, 
                                    paddingRight: 10,
                                    paddingLeft: 10,
                                    border: '1px solid #F1F4F9',
                                    borderRadius: 4,
                                }}
                            />
                            <Typography variant="caption">Add wallet addresses for users that are allowed to serve as admins for this project.</Typography>
                        </Stack>
                    </Stack>
                    
                    <Stack gap={3}>
                        <Stack flexDirection="row" gap={.5}>
                            <InsightsIcon />    
                            <Typography variant="h5">Analytics</Typography>
                        </Stack>
                        <Stack flexDirection={matchUpMd ? "row" : "column"}
                            sx={{
                                py: 4,
                                px: 3,
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 1,
                                bgcolor: '#fff'
                            }}
                            gap={matchUpMd ? 6 : 3}
                        >
                            <Stack flex={1} gap={1.5}>
                                <Typography>Google Analytics ID</Typography>
                                <OutlinedInput 
                                    size='small' 
                                    placeholder='Google Analytics ID' 
                                />
                                <Typography variant="caption" sx={{ color: '#4D82F3', cursor: 'pointer' }}>Read instructions here about how to find this</Typography>
                            </Stack>
                            <Stack flex={1} gap={1.5}>
                                <Typography>Facebook / Meta Pixel ID</Typography>
                                <OutlinedInput 
                                    size='small' 
                                    placeholder='Facebook / Meta Pixel ID'
                                />
                                <Typography variant="caption" sx={{ color: '#4D82F3', cursor: 'pointer' }}>Read instructions here about how to find this</Typography>
                            </Stack>
                            <Stack flex={1} gap={1.5}>
                                <Typography>Twitter Universal Tag ID</Typography>
                                <OutlinedInput 
                                    size='small' 
                                    placeholder='Twitter Universal Tag ID'
                                />
                                <Typography variant="caption" sx={{ color: '#4D82F3', cursor: 'pointer' }}>Read instructions here about how to find this</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack flexDirection="row" justifyContent="flex-end">
                        <Button size="small" variant='contained' sx={{ bgcolor: '#BB86FC', textTransform: 'uppercase' }}>Save Settings</Button>
                    </Stack>
                </Stack>
            </Box>
        );
    }