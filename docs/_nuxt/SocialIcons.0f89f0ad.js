import r from"./SocialIcon.d640f6f3.js";import{J as s,o as a,E as l,R as i,S as m,c as f,r as u}from"./entry.02c1cbdf.js";const p={name:"SocialIcons",components:{SocialIcon:r},props:{appearance:{type:String,validator(o){return["light","dark"].includes(o)}}},data(){return{socialIcons:[{href:"https://www.linkedin.com/in/guillaumecleme",label:"LinkedIn",icon:["fab","linkedin-in"]},{href:"https://twitter.com/guillaumecleme",label:"Twitter",icon:["fab","twitter"]},{href:"https://www.facebook.com/guillaume.e.clement",label:"FaceBook",icon:["fab","facebook-f"]},{href:"https://www.instagram.com/guillaumecle.me/",label:"Instagram",icon:["fab","instagram"]},{href:"https://m.me/guillaume.e.clement",label:"Messenger",icon:["fab","facebook-messenger"]},{href:"https://github.com/guillaumecleme",label:"GitHub",icon:["fab","github"]},{href:"https://stackoverflow.com/users/3308078/guillaumecle.me",label:"Stack Overflow",icon:["fab","stack-overflow"]},{href:"https://www.credly.com/users/guillaumecleme/badges",label:"Credly",icon:["fas","certificate"]},{href:"https://www.goodreads.com/guillaumecleme",label:"Goodreads",icon:["fab","goodreads"]}]}}},b={name:"socialicons"};function h(o,d,c,g,t,w){const n=u("SocialIcon");return a(),l("div",b,[(a(!0),l(i,null,m(t.socialIcons,e=>(a(),f(n,{key:e.key,href:e.href,label:e.label,icon:e.icon,appearance:c.appearance},null,8,["href","label","icon","appearance"]))),128))])}const I=s(p,[["render",h]]);export{I as default};
