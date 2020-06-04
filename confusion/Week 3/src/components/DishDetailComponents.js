import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem ,Button, Modal, ModalHeader, ModalBody, Row,Col, Label } from 'reactstrap';
    import {Control,Errors,LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len); 
    class CommentForm extends React.Component{
        constructor(props){
            super(props);
            this.state={
                isModalOpen: false,
            }
            this.toggleModal=this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
          }
          handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            //event.preventDefault();
        }
        render(){
      return(
          <div>
      <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment   </ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={{size: 12}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control" validators={{
                                            required
                                        }}
                                        >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                     />
                            </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={4}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Author Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={4}>Comments</Label>
                                <Col md={12}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" validators={{
                                            required
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit <span className="fa fa-comments-o fa-lg"></span>
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
                );
        }
    }
    
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
                            <CommentForm />
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