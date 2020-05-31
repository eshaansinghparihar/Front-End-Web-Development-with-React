import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    
   function RenderDish({dish}) {
        if (dish != null)
        {
            return(
                <div className="col-12 col-md-5 m-1">
                     <div className="row">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    function  RenderComments({comments}) {
    if(comments!=null){
    const cmnts = comments.map(comment => {
        return (
            <div key={comment.id}>
                <div className="col-12 col-md-5 m-1">
                <div className="row">   
                    <h4>{comment.comment}</h4>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
                </div>
                </div>
            </div>
        )
    })

        return (
            <div className='col-12 col-md-5 m-1'>
                <h3> Comments </h3>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }
}
    const  DishDetail = (props) =>{
        if(props.dish!=null){
            return(
            <div className="container">    
           <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
            </div>
            </div>
        
        
        );
            }
            else{
                return(
                    <div></div>
                );
            }
    }

export default DishDetail