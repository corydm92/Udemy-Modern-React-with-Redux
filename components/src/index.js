import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>Are you sure you want to do this?</ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImage={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText="First comment" 
                />  
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatarImage={faker.image.avatar()} 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    commentText="Second comment" 
                /> 
            </ApprovalCard> 

            <ApprovalCard>
                <CommentDetail 
                    avatarImage={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    commentText="Third comment" 
                />  
            </ApprovalCard>
        </div>
    );  
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);