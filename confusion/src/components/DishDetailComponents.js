import React, { Component } from 'react';
import '../App.css';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {


    constructor(props) {
        super(props);

    }
    
    renderDish(dish) {
        if (dish != null)
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
        else
            return(
                <div></div>
            );
    }
/*
    mapComments(dish){
        if(dish!=null){
           dish.comments.map((comment)=>{this.renderComments(comment)});
            
        }
        else{return(<div></div>);}
    }
    renderComments(comment){
        console.log('New Click')
        console.log(comment.author)
        console.log(comment.date)
        console.log(comment.comment)
         return(
            <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {comment.author}
            </ul>

        </div>
         );
         }
        */
       renderComments(dish) {
        if (dish == null) {
            return (<div></div>)
        }
        const cmnts = dish.comments.map(comment => {
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
    render(){
        return(
        <div className="container">    
       <div className="row">
        {this.renderDish(this.props.dish)}
       {this.renderComments(this.props.dish)}
        </div>
        </div>
        );
    }
}
export default DishDetail