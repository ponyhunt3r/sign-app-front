import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    border: '2px solid lightsteelblue',
    background: 'rgb(236, 236, 255)',
    marginTop: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  wrapper: {
    padding: '2rem'
  },
  button: {
    backgroundColor: 'steelblue',
    position: 'fixed',
    right: '2rem',
    bottom: '30px',
    zIndex: 99,

  },
  icon: {
    color: 'white'
  }
});
export default function Courses() {

  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    let fetched = false;
    async function fetchCourses() {
      const result = await axios.get('http://localhost:3000/courses/all')
      if (!fetched) {
        setCourses(result.data)
      }
    }
    fetchCourses()
    return () => { fetched = true; }
  });
  return (
    <div className={classes.wrapper}>
      {courses.map((item) => (
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {item.description}
            </Typography>
            <Typography variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography color="textSecondary">
              {item.members}
            </Typography>
            <Typography variant="body2" component="p">
              {item.noOfMembers}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
      <IconButton
        className={classes.button}
        aria-label="add">
        <AddIcon className={classes.icon} />
      </IconButton>
    </div>

  )
}