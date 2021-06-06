---
title: 'Eras.page'
author: 'Lucas Eras Paiva'
link: 'https://github.com/lucaseras/eras.page'
date: '02-05-2021'
---

After working on the creation of [333-se](/projects/333-se), I was excited to
put some of my newly acquired React knowledge into practice. And because
sometimes it is nice to have a space online to share your work with others, I
decided to use it to create a personal website.
[eras.page](/) was made from scratch, using React and Next.js as its foundation.
After creating the general layout of the home page, I noticed that it would be
nice to have a way to go into more detail on the projects I have created. For
this reason, I made it so that I can use markdown files to create specific
descriptions for each of my projects.

At this point, the website had a white background with a black font. I always
appreciate when dark mode is available in the programs I use, so I decided to
implement dark mode in my website as well. To do so, I simply use React's
context to provide all throughout my website what theme and style is being used.
The theme of the website starts with the prefered theme of the device, and
automatically responds to changes in the theme of the computer.
