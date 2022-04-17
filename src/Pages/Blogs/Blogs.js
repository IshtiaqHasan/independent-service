import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center m-3'>Questions & Answers</h1>
            <h5>Question1: Difference between Authentication and Authorization?</h5>
            <p>Answer1: Both the authentication and authorization unit used in relation to information security allows for security in the default data system. Each area unit is one of the most important Internet-related topics as key features of its service infrastructure. However, each unit area of ​​condition is very different with completely different ideas. and it is true that they are often employed in the same place with the same tool, completely different from each other.In the Authentication process, user identity is checked to provide access to the system. During the authorization process, individual or user authorities are monitored for access to resources. Authorization process is done after the Authentication process, while the Authentication is done before the authorization process.
                <ul>
                    <li>In the Authentication process, user identity is checked to provide access to the system. While, During the authorization process, individual or user authorities are monitored for access to resources.</li>
                    <li>In the Authentication process, users or individuals are verified. While users or individuals are validated in authorization .</li>
                    <li>Authentication process is done before the authorization process. While Authorization process is done after the authentication process.</li>
                </ul>
            </p>
            <h5>Question2: Why are you using firebase? What other options do you have to implement authentication? </h5>
            <p>Answer2:In the current era, user authentication is one of the most important requirements for web development. It is important to authenticate users, and it becomes more difficult when we have to write all this code ourselves. This is done very easily with the help of Firebase.
                <ul>
                    <li>Being able to secure our users securely, gives them the customization that you customize for them based on their interests and preferences.</li>
                    <li>We can make sure they have no problems accessing their personal data while using multiple devices.</li>
                    <li>Firebase authentication supports authentication using a password, phone numbers, popular identity provider like Google, Facebook, and Twitter, etc.</li>
                    <li>We can sign in by using the FirebaseUI</li>
                </ul>
                <h6>Other options to implement authentication </h6>
                <ul>
                    <li>By Using react-firebase-hooks</li>
                    <li>'Parse' is an open source alternative that many people use instead of Firebase</li>
                    <li>'AWS Amplify' is Amazon’s cloud platform to use instead of Firebase </li>
                    <li>Back4app is a reliable Firebase alternative</li>
                </ul>
            </p>
        </div>
    );
};

export default Blogs;