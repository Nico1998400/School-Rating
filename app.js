const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=skolor_ny&q=&rows=500&facet=namn&facet=omrade&facet=skoltyp&facet=huvudman', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    data.records.forEach(intoRecord => {

      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'record-container');

      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'record-title')
      h3.textContent = intoRecord.fields.namn;

      const h4 = document.createElement('h4');
      h4.setAttribute('class', 'record-title')
      h4.textContent = 'Här kommer man kunna rejta';


      container.appendChild(pplats);
      pplats.appendChild(h3);
      pplats.appendChild(h4);
      
 // });
});
}
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();