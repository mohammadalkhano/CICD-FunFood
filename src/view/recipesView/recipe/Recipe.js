import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Recipe.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: '50px',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Recipe = ({ title, image, ingredients, url, cuisineType }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="cardItem">
      <CardHeader
        // style={{ backgroundColor: 'none' }}
        // sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        avatar={
          <Avatar //Profile
            sx={{ bgcolor: '#83af5a' }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = url;
            }}
            aria-label="recipe"
          >
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={cuisineType}
      />
      <CardMedia //Image
        component="img"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = url;
        }}
        height="300"
        image={image}
        alt="error..image not found"
        title={title}
      />
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          title={'Se more about the ingredients'}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography variant="subtitle2" align="center" color="text.secondary">
            {
              <ol>
                {ingredients.map((ingredient) => (
                  <ol>{ingredient?.text} </ol>
                ))}
              </ol>
            }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Recipe;
