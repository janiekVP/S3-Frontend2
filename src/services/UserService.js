import axios from "axios";


const baseURL = 'http://localhost:8080/api/users';


class UserSevice {

    GetAllUsers(){
        try{
            var data = axios.get(baseURL)
            return data;
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    GetById(id){
        //var url = baseURL + id.toString();

        try{
            return axios.get('http://localhost:8080/api/users/'+ (id));
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    Delete(id){
        axios.delete('http://localhost:8080/api/users/'+ (id))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
          } else if (error.request) {
            console.error(error.request);
          } else {
            console.error("Error", error.message);
          }
        });
    }

    Update(user){
        axios.put('http://localhost:8080/api/users/'+ (user.id), user)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            if (error.response) {
              console.error(error.response.data);
              console.error(error.response.status);
              console.error(error.response.headers);
            } else if (error.request) {
              console.error(error.request);
            } else {
              console.error("Error", error.message);
            }
          });
    }

    CreateUser(user){
        axios.post('http://localhost:8080/api/users', {
          userName: user.userName,
          email: user.email
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export default new UserSevice();