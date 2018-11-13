# SchoolDatabase

Link to tutorial video:
https://youtu.be/4yqu8YF29cU

Learning Objectives:
Build and deploy a website. This time around a little less hand-holding.
Understand the relationship between routes, models (and schemas), and views
Understand the role of databases with a website. 

Problems:
I had one main issue that I couldn't quite figure out. It was my understanding that we were supposed to set it up so a student's school references the database we have of schools. While I got that you're suppose have school's type set like:
    school: { type: Schema.Types.ObjectId, ref: 'School', required: true }
I couldn't figure what else to do to make the reference successful.

Conclusions:
Since the project was a lot simpler this time around, I found I learned a lot more. Whereas before this project I could hint at what was going on between the routes, models, and views, I feel as though now I could actually explain it to someone.
