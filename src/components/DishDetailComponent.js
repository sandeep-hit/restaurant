import React,{ Component} from 'react';
import {Card , CardImg , CardText ,CardBody,CardTitle} from 'reactstrap';
class DishDetail extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
    }
    renderDish(dish)
    {
        if(dish!=null)
        {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
    
    rendercomment(comments)
    {
        if(comments!=null)
        {
            
            
            const cmmnts=comments.map((comment)=> {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li>
                )
            });
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {cmmnts}
                    </ul>
    
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
   render(){
       const dish=this.props.dish;
       if (dish == null) {
        return (<div></div>)
    }

           const  dishitem=this.renderDish(dish);
           const  commentitem=this.rendercomment(dish.comments);
           return(
               <div className="row">
                   {dishitem}
                   {commentitem}
               </div>
           )
       }
}
export default DishDetail;
