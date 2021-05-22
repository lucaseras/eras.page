---
title: 'Rhythm-login'
author: 'Lucas Eras Paiva'
link: 'https://github.com/lucaseras/rhythm-login'
date: '01-05-2020'
---

This project was created for the class COMP360: Information Security and
Privacy. [Zach Mines](https://www.linkedin.com/in/zachary-mines-648044154/) and
I decided to experiment with the vastly adopted authentication process of typing
a password. We wanted to check if the rhythm in which we press the keys when
inputting our password was consistent enough to be used as part of the
validation process.

The main file of the project is called main.py. Here is an example of how it
works in practice:

![Creating an account](/projects/rhythm-login/creatingAccount.png)

With an account created, we can try logging in (note: no other security features
are implemented in this project). When your typing rhythm does not match the one
stored in the database:

![Logging in](/projects/rhythm-login/failedLogin.png)

And when you succeed:

![Logging in](/projects/rhythm-login/successLogin.png)

To test for consistency, we asked for friends and family to create an account
and attempt to login. As expected, the increase in complexity of the
authentication process can come at the expense of usability. Many of our friends
struggled with logging in. Ideally, our system would work seamlessly — the user
doesn't even recognize that they are going through an extra barrier of
authentication when typing their password.

This project was inspired by the work of Recaptcha v3, in which the verification
of whether the user is a bot or not happens in the background, without the need
to ask the user for some specific action.
