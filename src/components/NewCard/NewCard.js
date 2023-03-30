import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import './NewCard.css'

export default function NewCard({img, talt, description, title,}) {
    return (
        
        <div  className="cards">
            <Card sx={{ width: 345}}  className="cards" >
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt={talt}
                    />
                    <CardContent className="cards twhite" >
                        <Typography sx={{fontFamily: 'VT323', textAlign:'center'}} variant="h4" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{fontFamily: 'VT323', textAlign:'center', fontSize:"20px"}} variant="body2">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        
    );
}