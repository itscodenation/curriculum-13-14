# Scripted Lesson 3: Introduction to Version Control, Google Webpages and link shortners.

-----------------
**Reminder** Please have students log their attendance at scripted.org/attendance.

**Review** In the last lesson, students learned how make files in a directory structure and were introduced to using a text editor. 

**Goals**: In this lesson, students will set up a GitHub account, and will learn about how to version source code and sync it with an external source.  **Please note** that we will not be teaching students Git.  We have asked each partner school to download the Github app, and they we will use this to help teach them the basics of version control.  

After you have your students add their first file to Github, we'll show them how to make a website live using Google Drive, and then we'll show the students how to shorten a link using tinyurl.com


##Discussion: What is Version Control?

Start by asking the students if they've ever saved a file, and then realized that they wanted a previous version of the file? Sometimes in life, we wish we could go back to a certain point and revise something. We can't always do this in real life, but we can with computers!

When we program, we often modify, replace, fix bugs, add features, etc. However, code is very tightly linked to itself. Even small changes can cause big repercussions and have effects we did or did not intend. Very often, we need to remember how things used to be in our code: how we wrote the function first, how the line worked before it started breaking, how the feature used to be implemented. 

To this end, we use version control. Because we break our code and lose information so frequently in successive saves.

***Working in Teams***

We can't work with others on our code, unless we understand how divergent changes relate to a common source. 

For example, if person A says change the first paragraph and person B says change the second, they need a way to agree on what the common document is that they are talking about.  

Consider using Google docs as an example of this (Two people can work in the same google doc at the same time!)

##What's Git?

Our version control system, the one used by millions of programmers, is called Git. Basically, what git does is track every historical version of a document. We can move an entire file to an older version, we can move a single part of the code to an older version, and we can incorporate the changes of others into our code. We treat their changes the same way as we treat our older changes. They are simply recorded differences in some part of our code.

Discuss the idea of a document or an essay and how you might edit a paragraph, revert to an older version, etc.

##How about Github?

Github is the place that we store a copy of all our code and all these changes. This allows other people to see our record of changes, add their own, interleave their work with ours, copy our code to their computer, etc. It's both a way to share code as well as a way to collaborate.

At this point, it might be a good idea to find a few sample github pages to show the students an example page.

###Have the students create a Github account
Explain to the students that they will create github accounts. These accounts will host all of their projects going forward, and will be shared with potential internship partners.

You should model the steps below for the students on a projector screen. Have support volunteers circulate to assist students.

1. Direct the students go to github.com
2. Click the green "Sign up for Github" button
3. Log in to your github account.
4. On the right column, click the green "New Repository" button
5. Name it "scripted-lesson"
6. Make sure the public radio button is checked.
7. Click "create repository"
8. Leave this window open.
9. Open the Github application on your computer
10. If a sign-in box doesn't come up, go to preferences and login
11. On the github.com page click the green "set up in desktop" button
12. If an window comes up, allow it to launch the external application
13. In the file picker that pops up, select a folder either on a shared drive or on a thumb drive (have the students use the file they created in lesson 2!), keep the folder name "scripted-lesson"  and click "clone"
14. You should now see a sceen that says "No local commits" on the left and "select a commit" on the right

###Practice making changes and syncing
1. Navigate to the "scripted-lesson" directory on your computer or flash drive
2. Using your text editor, create a new file title "readme.md"
3. Type "Hello World" in the file and save it inside of "scripted-lesson"
4. Go back to your github application
5. Click on the "changes" tab/icon in the left rail
6. You should see a box that says "Uncommit Changes" with a "commit summary" field underneath
7. Type "New hello world file" in the summary
8. Click the "commit" button
9. Click the "sync branch" button on the upper right of the window
10. Open up your github.com window and refresh. You should see your changes

##What just happened?
You just made your first successful git commit and sync. Under the hood, you saved a new version of a file. Git recorded this change when you clicked "commit". 

*IMPORTANT NOTE: Git needs to be told when to record your changes. It only does this when you click 'commit'.*

We type a "commit message" so that, say, if we make 100 commits and something went wrong, we can figure out which commit probably caused the problem based on the message. Imagine that suddenly you notice a picture is missing on your page and you see "changed picture code" in your git commit messages, that might be a good place to look to see what changed.

Have the students look in the "history" tab of the github application. Show them the green line that has a plus next to it and says "Hello world". This is how git represents that you added a line to a file.

1. Delete hello world and write "Goodnight moon". 
2. Save, commit, and sync.
3. Now look at history. There should be a red line and green line. This shows that git realizes that you added a line (the green one) and removed another (the red one).

###End of Github Lesson:

Explain to students that they now have the tools they need to start programming. They've learned about files, folders, text editors and version control. 

###Hosting a Webpage on Google Drive

####Open
	Ask students if they would like to learn how to get their own webpage up and running today before the end of class.
	Assume that they will all be enthusiastic about this idea, and then guide them through the following excercise.
	
Steps - May be a good idea to model this on a screen and have extra volunteers around for students who don't following along as quickly.

1. Have students sign up for a Google Account if they don't have one already.  It might be a good idea to separate the class into students who have google accounts and students who do not so that the students with google accounts don't get stalled.  Encourage students who are creating new accounts to WRITE DOWN THEIR USERNAMES and PASSWORDS (Our experience has been that students will lose / forget these!)
2. Have students navigate to Google Drive within their Google Accounts
3. Have students press the red "create" button and then have them select Folder. They can call the new folder "[Name's] First website."
4. Click into the folder, and have students click the red up arrow to upload a file to the folder
5. Have students upload the "Your Name" File that they created in Lesson 2 (ie, extra directory structure practice! Let students find the file on their own, or help each other find their files.)
6. Have students click the small arrow to the Right of the file "[Name's] First Website" (on the left menu) and select Share, Then Share again.
7. Have student change the access of the website from "private" to "public" and then click "done"
8. Have students about the file in the folder (it will first bring you to a preview, you'll need to click open on the lower right hand side of the window)
9. Have students press the preview button in the file
10. This will open up a live webpage!  The students can send the links to one another and share with their friends… or, if they want to shorten the link, they can us tinyurl.com!

###Link Shortening

Explain to students that websites are just files that live on the internet (just like they live on our computer).  They have just put they're websites on the internet!  We want students to be able to easily share with their friends, so we're going to show them how to use a link shortener.

1. Have student copy the URL from their Google page (explain how to use CONTROL + C to copy).
2. Ask students to navigate to http://tinyurl.com
3. Have student paste their links into the box on the tinyurl home page, and have them make up their own extensions. Volunteers -- model this for students before they do it on their own!
4. Have students call out their links to show their pages on the screen

###Lesson Closing

Review the following with students.

1. Ask students to explain what version control is and why we use it.
2. Ask students to explain what a website is (just a file or collection of files!)
3. Preview next class: Tell students that we're going to work on making nicer webpages to share.

