# Pets4Ever - A brief documentation

Link: https://pets4ever.site/

In this project I've used React with TypeScript, React Router Dom, Axios and Styled-Components. Other minors libs were used too, 
like react-icons and carousel. Was deployed on Vercel.

## Using Axios Interceptors

Some exceptions can occur across multiple requests. So, how can we catch these exceptions whenever they happen? The answer is: using interceptors.

![code4](https://github.com/user-attachments/assets/5d641464-1cb5-4fcc-97d1-82de4896c44f)


## Using Styled-Components with TypeScript

In order to be able to use custom props in some Components, I had to build some custom componenets like this:

![code](https://github.com/user-attachments/assets/04e9ba29-a4b4-4d31-9bb4-5861a0584b1c)

This is a typical aproach in Styled-Components, given that Styled-Components brings the logic interface directly to CSS.


## Using Classes

![code1](https://github.com/user-attachments/assets/faafaf2f-9d73-442c-866a-c6999429ec2b)

This class was build to centralize all endpoints of each feature in one class, like user, post, storie, etc. 

## Using React Router

Nested routes allowed me to change the URL while keeping the same 'page'. Let me explain: when viewing the feed, there are modals like post or story previews. How can we display these modals while changing the URL, but without making it feel like a full page navigation? The answer is nested routes.

![code2](https://github.com/user-attachments/assets/e3025aeb-5533-43c1-a715-f801e9bc3a87)

So, all theses modals will be displayed in this Outlet, as a children of Feed.

![code3](https://github.com/user-attachments/assets/8cc9ebdf-5470-4f9b-9432-2ef3394191a3)

This is the result:

https://github.com/user-attachments/assets/5730153e-8fb6-43a4-895a-aec2887dc46b



