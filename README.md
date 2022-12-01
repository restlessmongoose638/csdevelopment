# Development

### Link to Deployed Website
If you used the stencil code, this is `https://restlessmongoose638.github.io/csdevelopment`

### Goal and Value of the Application

The goal of this application is to allow users to purchase books from the store 'Best Books'. 
This website makese it easier for users to sort and filter their books based on age categories and genre. 

### Usability Principles Considered

I tried to make the design as simple as possible, and reendered everything visually on the page so the user did not have to 
memorize anything. The design is hopefully intuitive, as all the buttons are labeled and similar functions are grouped together on the page. 

### Organization of Components

There is a main app.js file, and the individual items + an aggregator are held as separate components that are then passed into the app file. 

### How Data is Passed Down Through Components

The data is added as a static array and my variablee currentBooks is populated with the data through state. 

### How the User Triggers State Changes

The filter and sorting state are changed when the checkboxes / radio buttons are clicked. In addition, an update state 
is called onEffect so that this change is rendered visually and the array state is updated in time, as opposed to delayed. 

