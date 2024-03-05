import { useState, useEffect } from 'react';
import { 
    Box,
    Stack,
    Typography,
    IconButton,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import EastIcon from '@mui/icons-material/East';
import request from '../../utils/request';
import { convertDate } from '../../utils/date'

export default function Home () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    const [project, setProject] = useState();

    useEffect(() => {
        async function get () {
            await getProject();
        }

        get();
    }, [])

    const getProject = async () => {
        const data = {
            creator: "0x176B6eB693792Ad7081E25B537D8E14bea130Ff8"
        }
        const response = await request('/project/find', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        })

        console.log(response)

        setProject(response.success.project)
    }
    return (
        <Box>
            <Box>
                <Stack
                    flexDirection={matchUpMd ? "row" : "column"}
                    alignItems={matchUpMd ? "flex-start" : "center"}
                    justifyContent="space-between"
                    sx={{
                        background: theme.palette.background.paper,
                        boxShadow: '0px 17px 26px -9px #E2E8F0',
                        borderRadius: 4,
                        py: 4,
                        px: 2
                    }}
                    
                >
                    <Stack alignItems="center" gap={1} flex={1} sx={{ position: 'relative', pb: matchUpMd ? 0 : 5 }}>
                        <Box sx={{ 
                            position: 'absolute', 
                            width: matchUpMd ? '100%' : '1px', 
                            height: matchUpMd ?  '1px' : '100%', 
                            bgcolor:  theme.palette.divider,
                            left: '50%',
                            top: 20
                        }} /> 
                        <Stack flexDirection="row">
                            <IconButton sx={{ bgcolor: theme.palette.success.main }}>
                                <CheckIcon sx={{ color: theme.palette.background.paper }} />
                            </IconButton>
                        </Stack>
                        <Typography variant="subtitle1">Open Lists</Typography>
                    </Stack>
                    <Stack alignItems="center" gap={1} flex={1} sx={{ position: 'relative', pb: matchUpMd ? 0 : 5 }}>
                        <Box sx={{ 
                            position: 'absolute', 
                            width: matchUpMd ? '100%' : '1px', 
                            height: matchUpMd ?  '1px' : '100%', 
                            bgcolor:  theme.palette.divider,
                            left: '50%',
                            top: 20
                        }} /> 
                        <Stack flexDirection="row">
                            <IconButton sx={{ bgcolor: '#CBD4E1' }}>
                                <CheckIcon sx={{ color: theme.palette.background.paper }} />
                            </IconButton>
                        </Stack>
                        <Typography variant="subtitle1" sx={{ color: '#BB86FC' }}>Collecting Entries</Typography>
                    </Stack>
                    <Stack alignItems="center" gap={1} flex={1} sx={{ position: 'relative', pb: matchUpMd ? 0 : 5 }}>
                        <Box sx={{ 
                            position: 'absolute', 
                            width: matchUpMd ? '100%' : '1px', 
                            height: matchUpMd ?  '1px' : '100%', 
                            bgcolor:  theme.palette.divider,
                            left: '50%',
                            top: 20
                        }} /> 
                        <Stack flexDirection="row">
                            <IconButton sx={{ bgcolor: '#CBD4E1' }}>
                                <CheckIcon sx={{ color: theme.palette.background.paper }} />
                            </IconButton>
                        </Stack>
                        <Typography variant="subtitle1" sx={{ color: '#BB86FC' }}>Pick Winners</Typography>
                    </Stack>
                    <Stack alignItems="center" gap={1} flex={1}>
                        <Stack flexDirection="row">
                            <IconButton sx={{ bgcolor: '#CBD4E1' }}>
                                <CheckIcon sx={{ color: theme.palette.background.paper }} />
                            </IconButton>
                        </Stack>
                        <Typography variant="subtitle1" sx={{ color: '#BB86FC' }}>Finalize/Notify Winners</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Stack
                flexDirection={matchUpMd ? "row" : "column"}
                gap={4}
                sx={{
                    pt: 8
                }}
            >
                <Stack flex={6} gap={8}>
                    <Box
                    >
                        <Typography variant="h4">Details</Typography>
                        <Box
                            sx={{
                                pt: 3,
                            }}
                        >
                            <Stack
                                flexDirection={matchUpLg ? "row" : "column"}
                                justifyContent="space-between"
                                alignItems="center"
                                gap={matchUpLg ? 0 : 4}
                                sx={{
                                    py: 5,
                                    px: matchUpMd ? 8 : matchUpSm ? 2 : 0,
                                    background: theme.palette.background.paper,
                                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                                    borderRadius: 4,
                                }}
                            >
                                <Stack justifyContent="center" alignItems="center">
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary }}>28th Sept, 2022</Typography>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>Mint Date</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary }}>0.045ETH</Typography>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>Mint Price</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary }}>99,0000</Typography>
                                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>Supply</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    <Box>
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="h4">Valid Entries</Typography>
                            <Stack flexDirection="row" justifyContent="center" alignItems="center" gap={1}>
                                <Typography sx={{ color: '#BB86FC' }}>See Entry List</Typography>
                                <EastIcon fontSize="small" sx={{ color: '#BB86FC' }} />
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                pt: 3,
                            }}
                        >
                            <Stack
                                flexDirection="row"
                                justifyContent="space-between"
                                sx={{
                                    py: 5,
                                    px: 4,
                                    background: theme.palette.background.paper,
                                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                                    borderRadius: 4,
                                }}
                            >
                                <Typography variant="h1">120,850.000</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
                <Box flex={6}>
                    <Typography variant="h4">Schedule</Typography>
                    <Box 
                        sx={{
                            pt: 3,
                        }}
                    >
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                            sx={{
                                py: 5,
                                px: matchUpMd ? 4 : 2,
                                background: theme.palette.background.paper,
                                boxShadow: '0px 17px 26px -9px #E2E8F0',
                                borderRadius: 4,
                            }}
                        >
                            <Stack gap={5} sx={{ position: 'relative' }}>
                                <Box 
                                    sx={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: 3,
                                        left: 6.5,
                                        top: 8,
                                        bgcolor: '#4D82F3'
                                    }}
                                />
                                <Stack flexDirection="row" gap={3}>
                                    <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#4D82F3' }}></Box>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, lineHeight: 1 }}>Registration Opens</Typography>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>Sept. 4, 2022 4:45 a.m</Typography>
                                    </Box>
                                </Stack>
                                <Stack flexDirection="row" gap={3}>
                                    <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#4D82F3' }}></Box>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, lineHeight: 1 }}>Registration Close</Typography>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>Sept. 4, 2022 4:45 a.m</Typography>
                                    </Box>
                                </Stack>
                                <Stack flexDirection="row" gap={3}>
                                    <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#4D82F3' }}></Box>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, lineHeight: 1 }}>Raffle/Pick Winners</Typography>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, color: '#BB86FC' }}>Click to pick winners</Typography>
                                    </Box>
                                </Stack>
                                <Stack flexDirection="row" gap={3}>
                                    <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#4D82F3' }}></Box>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, lineHeight: 1 }}>Notify & Finalize Winners</Typography>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, color: '#BB86FC' }}>Click to finalize winners</Typography>
                                    </Box>
                                </Stack>
                                <Stack flexDirection="row" gap={3}>
                                    <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#4D82F3' }}></Box>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary, lineHeight: 1 }}>Mint Date</Typography>
                                        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, color: '#BB86FC' }}>Click to add a mint date.</Typography>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
}