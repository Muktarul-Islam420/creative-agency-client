import React from 'react';
import FeedbackMain from '../FeedcackMain/FeedcackMain';

const Feedback = () => {
    const feedbackData = [{
        id: '1',
        name: 'Nash Patrik',
        title: 'CEO,Manpol',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur recusandae eligendi necessitatibus animi, amet dicta.',
        image: 'https://img.techpowerup.org/201014/customer-1.png',
    },{
        id: '2',
        name: 'Mirriam Barron',
        title: 'CEO,Edurekha',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur recusandae eligendi necessitatibus animi, amet dicta.',
        image: 'https://img.techpowerup.org/201014/customer-2.png',
    },{
        id: '3',
        name: 'Bria Malone',
        title: 'CEO,Emaguru',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur recusandae eligendi necessitatibus animi, amet dicta.',
        image: 'https://img.techpowerup.org/201014/customer-3.png',
    }
]
    return (
        <section style={{marginTop: '100px',marginBottom: '100px'}} className="client-feedback-container">
            <div className="client-feedback-title text-center">
            <h2 style={{color:'#363136'}} className="mt-5 mb-5" >Clients <span  style={{color: '#7ab259'}}>Feedback</span></h2> 
            </div>
            <div className="row">
                {
                    feedbackData.map(feedback =><FeedbackMain feedback={feedback} key={feedback.id}></FeedbackMain>)
                }
            </div>
           
        </section>
    );
};

export default Feedback;