<template>
    <div class="main">
        <div class="column">
            <p class="title">
                <span class="question">A Second Life</span>
                <br>
                Katie Werner wernerk5@wwu.edu, Keili, Ashima, Beryn staubwb@wwu.edu
                <br>
                CSCI 436, Winter 2021, Dr. Shameem Ahmed
            </p>
            <br>
            <p>
                <span class="question">
                    What is the problem?
                </span>
                Consumption of disposable and one-time-use products contributes to a lot of waste and in turn has a high environmental cost. Consumable products both cost energy and other valuable resources to create and of course pollute the environment when they are thrown away.
            </p>
            <br>
            <p>
                <span class="question">
                    What are you trying to solve?
                </span>
                We are trying to make a positive impact on the issue of environmental destruction from excessive waste production.
            </p>
            <br>
            <p>
                <span class="question">
                    Which SDG goals (among 17) are you trying to achieve?
                </span>
                We are trying to achieve the SDG goals of climate action, sustainable cities and communities, responsible consumption and production, and life on land.
            </p>
            <br>
            <p>
                <span class="question">
                    Why is this an important problem? Is there any global impact?
                </span>
                Many people are not aware of ways they can reuse items in their homes. More often than not, our garbage cans get filled with all sorts of items that can be used for something else. According to the U.S. Environmental Protection Agency, the average person in America produces 4.9 pounds of municipal solid waste each day. While recycling is a great way to become more environmentally conscious, many are unaware of the importance of reusing. Products such as plastic containers and grocery bags do not break down for many years while they sit in landfills. Finding ways to reuse these products once or twice more before they potentially end up in landfills will dramatically reduce the amount of plastic entering the environment. We believe that A Second Life could have a global impact because our website can be reached by anyone with a computer and a curiosity to learn about how upcycling can have a positive impact on the environment.
            </p>
            <br>
            <p>
                <span class="question">
                    Who are the target users? Why should they care?
                </span>
                Our target users are those who want to take small steps towards a more sustainable lifestyle, especially if they do not know how. Users should care because it is important to help contribute to the sustainability of one’s community and planet.
            </p>
            <br>
            <p>
                <span class="question">
                    How many people (should be at least millions of people) will be benefited from your solution? Give evidence(s) of your claim by giving statistics from the previous studies or from any reputed organizations such as WHO, UN, CDC:
                </span>
            </p>
            <br>
            <p>
                <span class="question">
                    What is your solution?
                </span>
                Our solution is our website, “A Second Life”, which aims to help educate people how to reuse many items we would consider as "single use". Users will be able to type in the item or category of the item they would like to reuse into a search bar, and the results will be a list of creative and practical ideas guiding users to make their next step with said item. The list will include a range of ideas, such as for decoration, for storage, organization, and more. The list will also include links to resources who share the same vision of sustainability by using donated used-items for new purposes as well. Along with the list will be a short and easy to understand description educating the user on the effects that specific item (or category of item) usually has on the planet (e.g. time to break down, what ecosystems are affected, amount of production, etc.) We will use a website as our choice of technology for the purpose of being accessible to the widest range of population possible. The goal is to help people become more aware of the amount of waste they produce each day, and work towards lessening that amount over time in order to improve our environments and create a more sustainably conscious community.
            </p>
            <br>
            <p>
                <span class="question">
                    How is your solution different than the existing solutions?
                </span>
                In our research of other solutions like ours we did not find another website/app that had upcycles for single use products where you could search by material of an item to find the upcycle. Also, across our research other similar websites and apps did not include a resource page listing places to donate used items and recommendations for brands that use sustainable solutions when managing waste
            </p>
            <br>
            <p>
                <span class="question">
                    What technology have you used? Why?
                </span>
                We decided to use a website as the platform for our solution. We chose to make a website instead of an app so that our solution could reach more users including the ones that might not have access to a smartphone.
            </p>
            <br>
            <p>
                <span class="question">
                    Explain your systematic literature review. How many papers did you read? Write a summary of your findings:
                </span>

            </p>
            <br>
            <p>
                <span class="question">
                    Explain your system analysis. How many systems did you analyze? Write a summary of your findings:
                </span>
                
            </p>
            <br>
            <p>
                <span class="question">
                    Explain your user study. How many interviews did you conduct? Write a summary of your findings:
                </span>
                
            </p>
            <br>
            <p>
                <span class="question">
                    Discuss in detail the final prototype (every feature):
                </span>
                
            </p>
            <br>
            <p>
                <span class="question">
                    Discuss all the technologies/software/API you used:
                </span>
                Our app is mainly constructed using Node.js. More specifically, we used Vue.js on the front end and a simple express server on the back end. We have a JSON file that stores the data for specific upcycles. That data is delivered to the front end by an http request to the express server. Lastly, our code is being hosted on Heroku Cloud. 
            </p>
            <br>
            <p>
                <span class="question">
                    Provide the link of your code repository: 
                </span>
                <a href="https://github.com/berynsw/ASecondLifeWebsite" target="_blank">A Second Life's Github</a>
            </p>
            <br>
            <p>
                <span class="question">
                    How could your work be extended and why would that be useful?
                </span>
                In terms of the implementation of the web app, there are a variety of ways that it could be extended and made more dynamic/reusable. To start with, the website could be connected to a file storage service such as Amazon S3 to store the upcycle images. This would allow users of the app to upload their own upcycle ideas. If the website were to really get a lot of user traffic, it would probably also make sense to have a scalable hosting setup and a more automated and professional deployment setup. In terms of the overall goal for the project, it would make sense to add more functionality to the individual upcycle pages and perhaps also have overarching items pages that would provide the user with information about the environmental impacts of that particular item and the various things that the user can do to counteract problems associated with that particular item. This is something we plan to work on if we continue the project. 
            </p>


            
        </div>
    </div>
</template>

<script>
export default {
  name: 'Writeup',
}
</script>

<style scoped>
    .main{
        background-color: #a3ceae;
        color:black;
        font-size: 1.2vw;
        font-family: helvetica;
        /* padding-left: 5vw; */
        padding-top: 10vh;
        padding-bottom: 20vh;
 
    }
    .column{
        width: 50%;
        margin: auto;
    }
    .title{
        text-align: center;
    }
    .question{
        font-weight: bold;     
    }
</style>