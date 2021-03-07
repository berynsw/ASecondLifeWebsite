Instructions for running the code :

1. Please unzip the folder ASecondLifeWebsite.
2. There should be 8 items inside including 2 folders of src and public.
3. Open the project path in terminal and run 
	npm install
4. Then
	npm install vue
5. This command should install all the node modules that are required to run vue.js. 
6. npm install json-server
7. In one terminal
	npx json-server --watch src/assets/upcycleData.json
This will host the upcycleData.json file on http://localhost:3000/upcycles so that the webpage can access it.
8. Compiles and hot-reloads for development
	npm run serve
This should open up localhost:8080 and you should see the website running.

	
	