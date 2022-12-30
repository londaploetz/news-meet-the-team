import axios from "axios";

export default {
    APITeam: function() {
        return axios.get("https://randomuser.me/api/?results=4")
    }
}
