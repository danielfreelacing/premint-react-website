import { useState } from 'react';
import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import AddIcon from '@mui/icons-material/Add';
import NftCard from '../../components/cards/NftCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import request from '../../utils/request';

export default function Project () {
    const wallet = '0x176B6eB693792Ad7081E25B537D8E14bea130Ff8';
    const [projects, setProjects] = useState([]);
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    const getProjects = async () => {
        const data = {
            creator: wallet
        }
        const response = await request('/project/get', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const container = []
        for (let i = 0; i < 8; i ++ ) {
            container.push(response.success.projects[0])
        }
        console.log(container)
        console.log(response.success.projects);
        setProjects(container);
    }
    useEffect(() => {
        async function get () {
            await getProjects();
        }
        get();
    }, [])
    return (
        <Box>
            <Stack 
                flexDirection="row" 
                alignItems="center" 
                justifyContent="space-between"
                gap={2}
                sx={{ flexWrap: 'wrap' }}
            >
                <Typography>These are all the project you've created on FANTOM.</Typography>
                <Link to="/project/create" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{ bgcolor: '#BB86FC' }}
                    >
                        Create new project
                    </Button>
                </Link>
            </Stack>
            <Stack
                gap={3}
                sx={{ 
                    display: 'grid',
                    gridTemplateColumns: matchUpLg 
                                            ? 'repeat(4, 1fr)'
                                            : matchUpMd 
                                            ? 'repeat(3, 1fr)'
                                            : matchUpSm 
                                            ? 'repeat(2, 1fr)'
                                            : 'repeat(1, 1fr)',
                    pt: 4 
                }}
            >
            {projects.map((element, key) => 
                <NftCard key={key} {...element}  />
            )}
            </Stack>
        </Box>
    );
}