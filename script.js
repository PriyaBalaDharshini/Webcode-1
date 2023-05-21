var heading = document.createElement("h1");
heading.innerHTML = "Open Brewery API";
heading.style.textAlign = "center";
heading.style.marginTop = "50px";
document.body.append(heading);

var div = document.createElement("div");
div.style.textAlign = "center";
var input = document.createElement("input");
input.setAttribute("type", "search");
input.setAttribute("id", "brewery");
input.style.width = "30%";
input.style.marginTop = "15px";
input.setAttribute("placeholder", "Enter Brewery name..");

var linebreak = document.createElement("br");
var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-secondary");
button.style.margin = "10px";
button.innerHTML = "Search";
button.addEventListener("click", displayDetails);

div.append(input, linebreak, button);
document.body.append(div);

async function displayDetails() {
    try {
        var result = await fetch("https://api.openbrewerydb.org/v1/breweries");
        var data = await result.json();

        var breweriesDiv = document.createElement("div");
        breweriesDiv.style.marginTop = "20px";
        breweriesDiv.style.textAlign = "center";

        var searchValue = input.value.toLowerCase();

        for (var i = 0; i < data.length; i++) {
            var brewery = data[i];

            if (brewery.name.toLowerCase() === searchValue) {
                var breweryName = document.createElement("h2");
                breweryName.innerHTML = brewery.name;

                var breweryType = document.createElement("p");
                breweryType.innerHTML = "Type: " + brewery.brewery_type;

                var breweryAddress = document.createElement("p");
                breweryAddress.innerHTML = "Address: " + brewery.street + ", " + brewery.city + ", " + brewery.state;

                var breweryWebsite = document.createElement("p");
                breweryWebsite.innerHTML = "Website: " + brewery.website_url;

                var breweryPhone = document.createElement("p");
                breweryPhone.innerHTML = "Phone: " + brewery.phone;

                breweriesDiv.append(breweryName, breweryType, breweryAddress, breweryWebsite, breweryPhone);
                break; // Exit the loop once the brewery is found
            }
        }

        document.body.append(breweriesDiv);
    } catch (error) {
        console.log(error);
    }
}


/* // Create an <h1> element
var h1 = document.createElement("h1");
h1.innerHTML = "Open Brewery API";
h1.style.textAlign = "center";
h1.style.marginTop = "50px";
h1.style.fontFamily = "'Times New Roman', Times, serif";
document.body.append(h1);

// Create a <div> element
var div = document.createElement("div");
div.style.textAlign = "center";
div.style.fontFamily = "'Times New Roman', Times, serif";

var select = document.createElement("select");
select.style.height = "30px"; // Increase the height of the dropdown list box

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.style.margin = "10px";
button.style.height = "30px"; // Reduce the height of the button
button.innerHTML = "Search";
button.addEventListener("click", displayDetails);

var linebreak=document.createElement("br");

div.append(select, linebreak);
div.append(button);
document.body.append(div);

var detailsDiv = document.createElement("div"); // Create a new div for displaying details
detailsDiv.style.textAlign = "center";
div.append(detailsDiv);

// Function to fetch data and populate the dropdown list
async function fetchDetails() {
  try {
    var response = await fetch("https://api.openbrewerydb.org/v1/breweries");
    var data = await response.json();

    // Clear the dropdown list
    select.innerHTML = "";

    // Populate the dropdown list with names from the API
    data.forEach(function (brewery) {
      var option = document.createElement("option");
      option.text = brewery.name;
      option.value = JSON.stringify(brewery); // Store the full object as option value
      select.add(option);
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// Function to display details on button click
function displayDetails() {
  var selectedOption = select.options[select.selectedIndex];
  var brewery = JSON.parse(selectedOption.value); // Retrieve the stored object

  // Update the detailsDiv's innerHTML to display the selected option's details
  detailsDiv.innerHTML = `
    <h2>Selected Brewery Details:</h2>
    <p><strong>Name:</strong> ${brewery.name}</p>
    <p><strong>Type:</strong> ${brewery.brewery_type}</p>
    <p><strong>URL:</strong> <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
    <p><strong>Address:</strong> ${brewery.address_1}</p>
    <p><strong>Phone:</strong> ${brewery.phone}</p>
  `;
}

// Fetch data and populate the dropdown list on page load
fetchDetails(); */