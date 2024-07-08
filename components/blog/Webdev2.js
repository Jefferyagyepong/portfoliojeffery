import React from "react";
import Post from "./Post";
const Webdev2 = () => {
  const blogPosts = [
    {
      title: "HTML 5",
      body: "Absolutely! HTML (HyperText Markup Language) is the foundation of web development, and it's essential to understand its basics. Here's a beginner's guide to learning HTML: 1. Introduction to HTML: HTML Structure: Understand the basic structure of an HTML document. It includes elements like <!DOCTYPE html>, <html>, <head>, and <body>. 2. HTML Elements: Tags: Learn about HTML tags, which are used to define elements on a webpage. Tags are enclosed in angle brackets, like <tag>content</tag>.Attributes: Explore attributes that provide additional information about HTML elements. Attributes are added to the opening tag and provide details like class, id, src, etc. 3. Common HTML Elements: Headings: Use <h1> to <h6> for headings with varying levels of importance. Paragraphs: Employ <p> tags for paragraphs. Links: Create hyperlinks with <a> tags. Understand the href attribute for linking to other pages or resources. Lists: Use <ul>, <ol>, and <li> for unordered and ordered lists. Images: Embed images using the <img> tag with the src attribute. 4. HTML Forms: Learn how to create forms using the <form> tag. Explore form elements like <input>, <select>, <textarea>, and their attributes. 5. Semantic HTML: Understand the importance of semantic HTML for better page structure and accessibility. Semantic elements like <header>, <nav>, <main>, <article>, <section>, and <footer> provide meaning to the content. 6. HTML5: Familiarize yourself with HTML5 features and tags, such as <article>, <nav>, <section>, <header>, <footer>, <canvas>, and <video>. 7. Validation: Use the W3C Markup Validation Service to check if your HTML code is valid and follows web standards. 8. Responsive Design: Learn about responsive design principles, including the use of meta tags like <meta name=viewport content=width=device-width, initial-scale=1.0> for mobile-friendly pages. 9. HTML Entities: Understand HTML entities for special characters, such as &lt; for < and &gt; for >. 10. Practice: Apply your knowledge by creating simple web pages. Practice is crucial for reinforcing what you've learned.",

      imgUrl: "/logo-html5.svg",
    },
  ];
  return (
    <div id="html">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
export default Webdev2;
