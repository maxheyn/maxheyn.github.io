import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProjectCard from '../components/ProjectCard'
import config from '../config.json'

export default function Projects() {
    return (
        <div>
            <Typography variant="h6" component="h2" gutterBottom color="primary" align="center">
                Projects
            </Typography>

            <Container fixed>
                <Grid container spacing={4} justifyContent="center">
                    {
                        config.projects.map(project =>
                            <Grid item key={project.id} xs={12} md={6} lg={4}>
                                <ProjectCard proj={project} />
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div >
    );
}