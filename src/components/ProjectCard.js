import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <a className='text-gray-700' href={link} target="_blank">
          <CardMedia
            className='!object-contain h-[175px]'
            component="img"
            height="140"
            image={imgUrl}
            alt={title}
          />
        </a>
      </CardActionArea>
      <CardContent>
        {link ? <h6><a className='text-gray-700 hover:text-blue-500' href={link} target="_blank">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </a></h6>
          :
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        }
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}


// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, link }) => {
//   return (
//     <>
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           {link && <h6><a href={link} target="_blank">{title}</a></h6> }
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//     </>
//   )
// }
