// class name is AppController, static method name getHomnpe, method accepts request and response as arugemnt. Returns 200 status
export default class AppController {
    static getHomepage(request, response) {
        response.status(200).send('Hello Holberton School!');
    }
}