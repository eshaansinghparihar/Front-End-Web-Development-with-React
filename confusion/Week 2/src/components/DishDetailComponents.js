import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    
   function RenderDish({dish}) {
        if (dish != null)
        {
            return(
                <div >
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
                <div >
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
            <div >
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
                return (
                    <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-2 ml-auto">
                            <RenderComments comments={props.comments} />
                        </div>
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