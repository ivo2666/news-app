import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function NewsCard({ data, onShare }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (Object.keys(data).length < 1) {
    return (
      <Grid pt={10} container justifyContent="center">
        <CircularProgress size={100} />
      </Grid>
    );
  }
  return (
    <Card
      sx={{ maxWidth: 345, a: { textDecoration: "none", color: "inherit" } }}
    >
      <Link to={`/details/${data.uuid}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.source?.[0].toUpperCase()}
            </Avatar>
          }
          title={data.title}
          subheader={data.source}
        />
        <CardMedia
          component="img"
          height="194"
          image={data.image_url}
          alt={data.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="share" onClick={onShare}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Published at: {data.published_at?.split("T")[0]}
          </Typography>
          <Typography paragraph>Source: {data.source}</Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
