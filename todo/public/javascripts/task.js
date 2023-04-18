

async function setTagAsDone(element, id) {
  

    try {
        //what is headers ? headers is an object that contains the headers to be sent with the request.
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //what is body ? body is an object that contains the body to be sent with the request. this request is a PUT request that updates the task with the id passed in the url.
        let body = JSON.stringify({ task: { done: element.checked } });
        //what is response ? response is the response from the server. the response is a promise that is resolved when the server responds. this response comes from the server after the PUT request is sent.
        let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: 'PUT' });
        //what is data ? data is the data that is returned from the server. the data is a promise that is resolved when the server responds. this data comes from the server after the PUT request is sent.
        let data = await response.json();//what is json() ? json() is a method that converts the response to json.
        let task = data.task;//what is task ? task is the task that is returned from the server.
        let parent = element.parentNode;//what is parent ? parent is the parent of the element that is passed in the function.
//if the task is done, then the checkbox is checked and the text is green and italic. if the task is not done, then the checkbox is not checked and the text is not green and italic.
        if (task.done) {//what is task.done ? task.done is a boolean that is true if the task is done and false if the task is not done.
            element.checked = true;
            parent.classList.add('has-text-success');
            parent.classList.add('is-italic');
        } else {
            element.checked = false;
            parent.classList.remove('has-text-success');
            parent.classList.remove('is-italic');
        }

    } catch (error) {
        alert('Something went wrong. Please try again later.');
    }

}