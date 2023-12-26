# PGRM
A full-stack web application created in order to manage inventory outside of the mobile game Punishing Gray Raven. This application allows its user to track each individual resource they possess in-game and have access to the quantity on any device with Google+ authentication.

**Link to project:** [https://pgr-api.vercel.app/](https://pgrm.vercel.app/)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, node.JS, mongoDB Google+ OAuth

This project uses a combination of HTML, CSS and JavaScript with node.JS, mongoDB and Google+ OAuth in order to deliver a full-stack application that stores resource quantity for the mobile game Punishing: Gray Raven (shortened to PGR). This project was further organized using MVC design architecture.

This project was created using a culmination of my full-stack web development skillset. I used mongoDB to create a database that stored quantity information per user which was verified and reinforced with Google+ OAuth for seamless transition between devices. I utilized a schema to homogenize my database and provide consistent documents from which
my application could parse information.

## Optimizations

I have three core optimizations I would like to implement going forward as I was unable to due to time constraints. The first optimization implementation is a filter to filter through different types and rarities of resources. The second optimization implementation is a database for constructs to allow users to do calculations in how many
resources they need to fulfill character requirements. The third optimization implementation is additional login support by introducing various other passport strategy methods. 

Retrospectively, I would also like to condense my localStorage code. It is significantly repetitive and can be simplified by creating an array of all items and iterating through this array. This would save significant processing time, decrease the bloatedness of my JavaScript file and increase optimization of my website by a considerable 
amount.

## Lessons Learned:

This project allowed me to utilize my entire full-stack skillset in order to create an application that an entire community of people can use to make their engagement with PGR smoother. One lesson I learned was how to effectively connect my front-end to the back-end through JavaScript that interacts with passport strategy, mongoDB and front-end
manipulation.
