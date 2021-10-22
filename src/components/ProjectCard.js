import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import PMCIcon from '../images/PMCLogo.png'


const images = require.context('../images', true);

export default function ProjectCard({ proj }) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={images(`./${proj.imgName}.png`).default}
                alt={proj.imgName}
                sx={{ height: 1 / 2 }}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">{proj.title}</Typography>
                <Typography variant="body2" color="text.secondary">{proj.desc}</Typography>
            </CardContent>
            <CardActions >
                <Button color='inherit' href={proj.repo} startIcon={<GitHubIcon />}>GitHub</Button>
                <Button color='inherit' href={proj.pmc} startIcon={<Avatar src={PMCIcon} sx={{ width: 20, height: 20 }} />}>PlanetMinecraft</Button>
                <Button color='inherit' href={proj.dirdl} startIcon={<DownloadIcon />} />
            </CardActions >
        </Card >
    );
}
