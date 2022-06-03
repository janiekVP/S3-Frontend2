import axios from "axios";


const baseURL = 'http://localhost:8080/api/items';


class ItemSevice {

    GetAllItems(){
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
        // var url = baseURL + id.toString();

        try{
            return axios.get('http://localhost:8080/api/items/'+ (id));
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    Delete(id){
        axios.delete('http://localhost:8080/api/items/'+ (id))
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

    Update(item){
        axios.put('http://localhost:8080/api/items/'+ (item.id), item)
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

    CreateItem(item){
        axios.post(baseURL, {
            name: item.name,
            description: item.description,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export default new ItemSevice();