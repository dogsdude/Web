Hello!

Heres's how I used JavaScript in my wesbite:
There's a game on each page to find the "hidden treasure" (called rupees in the legend of zelda).
Mousing over certain text will call methods that replace, or add children (all gifs) of rupees to the site. 
The rupee count is displayed in a tracker object which is updated everytime a rupee is found with the "MouseAdd" function.
When the rupee count hits five on any give page an alert is displayed with the message "You have found all of the rupees!".
I thought this was a good way to incorporate images, the dom, functions, and eventlisteners all in one package. I also discovered
how to use a "closure" in javascript (the link to the referenced code is in my .js file) which prevented RGBspin and treasureShower from
firing more than once (they insert and append the gifs instead of replacing them, so they were orginally being called whenever
the mouse went over them, but the closure fixes that). I use the dom, objects, functions the whole bit! I really enjoyed hiding
the rupees in differrent places for each separate "site" as well!

Here's how I used CSS in my website:
Boy, this one was a lot of work. I took the time to format my homepage first and using the CSS that I wrote in their I 
based my other websites off what I had done to make sure the sites looked connected and consistent. The most difficult part here was
getting those downloaded fonts to work correctly. I had to change their file type to finally get them to work, but I'm glad I did
because the font really gives the site the look and feel of an old Zelda game. I also chose a color pallete similar to the game,
lots of greens and yellows, and applied that to my text, titles, and background of all of my elements. Additionally, CSS was really
helpful in creating the nav bar, which appears in the top left of each of the "sites" and contains links to the other sites as well
as keepin track of the users total rupee count. It uses floating, and elements of inheritance to create the common horizontal nav bar
we see on a lot of other sites, but in its own special spin, with a small dashed border with different fonts and a background.  
The color also changes if you hover over the links in the nav bar with your cursor. CSS was also really helpful in making sure that each of the
sites had a different background image. By using borders and background colors on each of my elements, I was able to successfully incorporate
those background images into the website. Finally, I tried playing with different element selectors like the "," (used to show that
both elements use the following properties), the ">", (used to apply CSS to target direct children of an element), the " ", (for example
li a, which would apply those CSS properties to an a (link) of a list element), and the ":" (which is used with "psuedo selectors)

Hope you enjoy my site! 
