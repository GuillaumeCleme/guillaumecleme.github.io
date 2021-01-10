---
title: How I learned Vue.js in 1 day
description: In this article I explain how I learned Vue.js in a single day and how you can too! 
shareUrl: https://twitter.com/intent/tweet?url=https%3A%2F%2Fguillaumecle.me%2Fblog%2F2021-01-09-how-i-learned-vuejs-in-1-day&via=GuillaumeCleme&text=I%20just%20learned%20Vue.js%20in%20a%20single%20day%2C%20and%20you%20can%20too%21&hashtags=vuejs%2Cwebdev%2Cdev
cover: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80
---

# How I learned Vue.js in 1 day
Some time ago, while reading up on my technical news, I learned about [Vue.js](https://vuejs.org/). Being familiar with several frameworks and web development in general, I grew curious. I knew I wanted to eventually try Vue.js, but I never felt as though it was urgent to do so.

After several months, I eventually made time to try Vue. I decided that the victim I would choose for this project would be my personal website. 

Knowing that Vue.js is a Single Page Application (SPA) framework and that those frameworks generally work by updating webpages within the browser, I knew that SPAs typically don’t offer great Search Engine Optimization (SEO). After validating a few assumptions around my ability to take a Vue.js application and render it server-side or even to pre-render it with the help of additional frameworks, I decided to press on.

## The starting point
So where did I start? I started with a freshly redesigned website built using Tailwind CSS. Why is that so important? I think that too often, newer web developers tend to tackle too much at once. They tend to try to learn a framework like Vue.js, React, or Angular with only a basic understanding of HTML, CSS, or perhaps even JavaScript. 

> How do you eat an elephant? One bite at a time. 

Trying to learn everything at once, is a good way to learn little in my opinion. With a working website composed of simple HTML and CSS, I could focus on simply learning what I wanted to learn, Vue.js.

I started by reading the official documentation. Knowing that a project organized following common standards would be a great way to set me up for success, I read the [getting started](https://vuejs.org/v2/guide/index.html) guide and learned about [creating a project](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) with Vue CLI. Being familiar with concepts such as Maven archetypes, Yeoman projects, etc. I knew that selecting a common project structure would accelerate my progress. Within a couple of minutes, and after briefly researching the flavor of the month in terms of testing libraries, linters, etc., I had a fresh new project.

## The conversion
From then on, the task was quite simple. I started the development environment and attacked my website. I followed a bottom-down approach. Starting with the obvious first page, index.html, I began looking for my first component. Having briefly skimmed through the [component basics](https://vuejs.org/v2/guide/components.html), I picked my first component, the hero header of my webpage. I quickly extracted only the HTML needed to create this first component into a new Vue.js component and added it to my index page. 

With my first component, I knew I could focus on setting up the rest of my framework to achieve the same look and feel as my current website. I began researching importing some of the basic dependencies my website had such as [Tailwind](https://tailwindcss.com/) and [Font Awesome](https://fontawesome.com/) and how those libraries could be imported into a Vue.js application. A short while later, all of the required dependencies were imported successfully, and I could validate the look and feel of my first page and component. I then continued looking for opportunities to componentize my website. I located any natural breaks in the HTML and found any repeating sections to be ideal for the creation of new components. Being familiar with programming concepts, I researched every potential operation such as *v-for*, *v-bind*, and *v-if* to control the flow and [dynamic behavior](https://vuejs.org/v2/guide/conditional.html) of my new components. Again being focused on learning Vue.js and building a static site (for now) I did not want to be learning several new concepts at once. I learned to create new methods and manage data but stuck with static data. I knew that fetching data dynamically would be fairly easy with a completed application. I found myself researching basic terms such as *“vue component data”* and *“vue component methods”* for which I quickly found a lot of documentation.  

I started by converting one section at a time, then began drilling down into each section to find new opportunities to componentize these sections. As a rule of thumb, if the HTML was repeated anywhere else on my web site, I could create a new reusable component. I also decided to create new components where natural breaks occurred, such as an HTML card used in a header section. Using nested imports, I rebuilt sections one at a time.

With a completed index page, I then focused on routing. I learned about creating routes to serve different pages and created subsequent pages following a similar approach. Thanks to my previous componentizing efforts, secondary pages came together much faster. Within a day most of my website was converted.

## What did I learn?

### Don’t try to learn everything at once
Your mental ability to segment, compartmentalize, and isolate challenges can go long way. Focus on specific areas of concern by reducing the overall mental footprint of those concerns. A good example would be a developer trying to write code to connect to a remote endpoint without first confirming that the location where that code is running has network connectivity to the remote endpoint. You could spend several hours debugging working code when in reality, a simple network configuration is to blame. This is something that is developed over time, but that can accelerate your growth.

### Learning quickly is what matters
Your ability to learn quickly is more valuable than the frameworks, libraries, and languages you know now. The technical world is always changing and the pace at which it changes is only accelerating. What you know now may be obsolete in 5 years. Learning quickly will always be more valuable than existing knowledge. Once you find topics worth pursuing, dive into them to gain more depth, and master certain specific skills that will help shape you.

### Don’t get caught chasing shiny objects
With so many options, it's easy to get caught in what can only be described as Analysis Paralysis. We tend to spend too much time trying to pick the best approach, and not enough time creating the end product. There are plenty of frameworks out there, too many to even list on your resume. Master the basics until you can feel comfortable knowing that you can learn anything new quickly.

## The bottom line
In the end, everything takes time and effort. Getting to the point where I can learn new frameworks and approach problems from new angles has taken me several years to learn but with enough practice, by breaking down problems into smaller ones and isolating your thought process, you can take shortcuts!

If you agree, disagree, or have any comments, use the Share button above to send me a reply!
