#Cloud9 Setup 

**REMINDER**: Students should log their attendance at scripted.org/attendance

**Goal: Create a Cloud9 account and learn how to create files and folders in Cloud9**

##Signing up for Cloud9

Go to https://c9.io/site/pricing/

Click "SIGN UP FOR FREE" on the left

Enter in your details. Uncheck "Receive our monthly newsletter"

You'll receive a confirmation email. Click the link.

Enter in "scripted" without the quotes as the password.

Click "Remind me later" on the next window.
    
##Files and Folders in Cloud9

Read through https://docs.c9.io/creating_new_workspace.html

Click on "Create new workspace" in the upper left

Name your workspace "SOMETHING". Click on the orange "HTML5" button. (Teachers, decide how you want to organize workspaces and add your own workspace names here.)

Read through https://docs.c9.io/ide_overview.html

Click on your new project and click on the green "Start Editing" button

Close the README.md file.

Open "hello-world.html" and remove the entire `<style type="text/css">` tag.

Go to File->New File. Paste the following code in it:

    $(document).ready(function() {

    });

Now save the file as "hello.js" (without the quotes)

Put the following in the head tag of your HTML file:

    <script src="hello.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>