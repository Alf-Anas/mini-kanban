import axios from "axios";
import Cookies from "js-cookie";

const host = axios.create({
    baseURL: "https://todos-project-api.herokuapp.com",
});

host.interceptors.request.use(
    (config) => {
        const tokenCookie = Cookies.get("token");
        if (tokenCookie) {
            config.headers["Authorization"] = "Bearer " + tokenCookie;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const API = {
    signUp: () => {
        const rawData = {
            name: "MiniKanban",
            email: "minikanban@dummymail.com",
            password: "12345678",
            password_confirmation: "12345678",
        };
        return host.post("/signup", rawData);
    },

    getListToDo: () => host.get("/todos"),

    postCreateToDo: (title = "", description = "") => {
        const rawData = {
            title: title,
            description: description,
        };
        return host.post("/todos", rawData);
    },

    getListItem: (id = "") => host.get("/todos/" + id + "/items"),

    postCreateItem: (id = "", name = "", progress = 0) => {
        const rawData = {
            name: name,
            progress_percentage: progress,
        };
        return host.post("/todos/" + id + "/items", rawData);
    },

    patchUpdateItem: (id = "", targetID = "", name = "") => {
        const rawData = {
            target_todo_id: targetID,
            name: name,
        };
        return host.patch("/todos/" + id + "/items/" + targetID, rawData);
    },

    deleteItem: (id = "", targetID = "") => {
        return host.delete("/todos/" + id + "/items/" + targetID);
    },
};

export default API;
