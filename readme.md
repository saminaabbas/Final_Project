

# Final_Project:
This is an online assessment platform made by Rizwan Azher Saudager and Samina Abbas as the final project of Walkover University training program. The technologies that have been used to create the web application are HTML, CSS, JavaScript and Bootstrap and for deployment we uses aws cloud and jenkins as a CI/CD tool.
Following is the public IP address of our deployed project- 13.211.207.189 and the link for the same is- http://13.211.207.189
We have also hosted our application on GitHub and following is the link for the same- https://saminaabbas.github.io/Final_Project/
# Developers:
  1. Samina Abbas.<br> 
     #GitHub profile - https://github.com/saminaabbas

  2. Rizwan azher saudager.<br>
     #GitHub profile - https://github.com/Rizwanazher
     
# Admin Page:
The link to the admin page is- https://saminaabbas.github.io/Admin_page/
Link to the Github repository of the admin page- https://github.com/saminaabbas/Admin_page

# Specifications:
1. The assessment is MCQ based.

2. There is a pool of questions for the assessment.

3. The Questions displayed in the assessment shall only be from that pool.
 
4. The test will be conducted for a time of 80 seconds and a timer has been set to ensure the same.

5. The score for the assessment will be generated at the end of the assessment.


# Tech Stack:
1. HTML
2. CSS
3. Javascript
4. Bootstrap

# Deployment:
 ---The deployment of the website has been done using AWS EC2 instance---
 1. We created the instance using EC2 in Red Hat .
 2. Then we installed the httpd server on the Red Hat instance which is operated through Putty.
 3. Then, we attached our Github repository to the httpd directory using Jenkins.
 4. Finally we hosted our website on the httpd server. 

# CI/CD setup:-
--We have used Jenkins as our CI/CD tool--
1. We created a GitHub repository of our project.

2. We installed Git via terminal.

3. Then we cloned that repository into our local computer and then added our project files to it . 

4. We commited all the changes and pushed them into our Github repository.

6. Then we installed Jenkins and Git on our Red Hat instance.


7. We setup the Github plugin on Jenkins and connected our repository which created an image of our Github file. 
   We also configured the build now button so as to fetch the data on our Github repository after every 3 minutes.
 
8. Finally, we configured the settings on Jenkins so as to send the data, fetched from our repository, to the httpd server to host our website. 


