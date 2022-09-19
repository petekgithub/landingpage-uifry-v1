# Notes 
## ( code review1 )
### 18/9/22

* react-scroll dependency is added but not being used so it can also be removed.
* both css and scss is being used, globals.css file can be converted to scss and also can be imported as “styles/globals.scss” instead of “../styles/globals.scss” to keep consistency in the project.
* code formatting is really important in a project, to have better readability and consistency across different files. you can either format the file on save by opening that setting or manually format the file. Some important points on this :
    * Dont keep multiple empty lines, only have one line at most.
    * Have the same indent level in all the files of a project. (either 4 or 2, most commonly 2 is preferred)
    * Dont keep commented code blocks unless you are going to enable them in the future
    * Have the same naming convention and try to follow most common agreed convention for the tech you are using.
*pages
    * pages / api folder can be deleted since it’s not being used. Try to keep the project clean without any unused files.
*public
* assets folder is usually used to keep all the assets belonging to a project (i.e. font files, videos, images, etc.) so it is better to use a folder like “images”, “img” or something similar to separate the asset types.
*src
    * Variables
      * Naming convention for styling folders/files are usually camelCase format and usually kept under a styles folder. And instead of using Variables/Variables (same naming twice) it can be “styles/variables.scss”, “styles/variables/default.scss” (if you have multiple theme variables) or similar.
      * variable naming convention for scss/sass is $-color-color-name, to keep common practices it is better to use it that way.
*Components
    * NavBar
      * js/ts variable naming convention is camelCase, it is better to use the commonly agreed conventions to keep consistency. (Navigation -> navigation/navigationItems/navItems, etc.)
      * try to keep only the Component functions inside component files, for example in here you can separate navigation variable and classNames function.
      * by default if you dont give a type to a function then it types whatever you are returning as the default type. Even though it is better to always type everything to prevent all the typing issues. For example if a new dev joins your team and doesnt know what should the function return then it may cause a problem.
      *Suggestion : you can create a util function for smooth scrolling which accepts either a selector string or the element itself. This way you will make sure that the behavior is the same everywhere and if a change is needed it is easier to make it from only one place.
      *try to always separate mixins / variables from module scss files, if you want to use a mixin somewhere else then you will have to re-write this or import this file.
*Button
    * Both DownloadButton and GetStartedButton has the same styling, instead of two different components one can be used with additional props as needed.
    * DownloadButton
      * className and onClick prop exists under HTML Props so if HTML props is being used than there is no need to define it once more. And className prop is not being used at the moment, it can either be removed or can be used by combining with styles.downloadbutton.
      * modular scss class naming convention is generally camelCase format, in order to keep consistency it is better to use the common format.
      * if there are no other elements then wrapping Download text with span is unnecessary in this case, it can be directly used under button tag without span.
    * GetStartedButton
      * Same notes as DownloadButton
*Pages
    * HomePage
      * import React from ‘react’ is no longer necessary as nextjs works properly without that import, so the general import should not be used.
      * h1 tag is being used multiple times in the same page. In a website there should only be one h1 and h2 tags, so that the page can be crawled properly and SEO doesnt get negatively affected.
      * while developing with nextjs, instead of using img tag Image component from next should be used to have optimizations.
      * both tags and classnames are being used to style. if tags are unique under a component then instead of giving classNames tags can be used. (<h4 className={styles.title} -> either h4 or title should be used instead of both)
      * indent stylings are not properly being used, (.container > left : left here is not a selector, and since scss is being used it should also be indented)
      * header and footer components should be used with their own tags (<header>, <footer>)
      * for alt values of images : try to give header value of the section
      * there are img tags inside h4 tags, try to keep text tags (h1,h2,h3,p, etc.) purely with text and if you really need then use a container to wrap it with the image

*FAQ
    * while using modular scss, using global styling names is not a proper approach, and since these classes are not being used they can be removed.
    * faq data may come from BE in a single array, so instead of dividing it as left and right, try to have a single wrapper and map the items together, by styling with the current approach. (nth-child)
*Intro
    * Watch video button opens the link via function, it is better to use <a> tag instead to have better UX.
    * function naming convention for react is either like “onEvent” or “handleOnEvent” instead of “event”.
*styles
    * instead of keeping general styling files separate, it is better to keep them together in a single styles folder (with the variables one)
