import {DB_URL} from "../constants";

export const httpGet = async endPoint => {
    try {
        const response = await fetch(`${DB_URL.URL}/${endPoint}`, {method: 'GET'});
        if (response.ok) {
            console.log("R GET", response);
            const json = await response.json();
            return {json: json, message: "", type: 0}
        } else {
            return {json: {}, message: "Bad connection GET" + response.status, type: 1}
        }
    } catch (err) {
        console.warn('httpGet error ', err);
        return {json: {}, message: "httpGet error", type: 2}
    }
};

export const httpPost = async endPoint => {
    try {
        const response = await fetch(`${DB_URL.URL}/${endPoint}`, {method: 'POST'});
        if (response.ok) {
            const json = await response.json();
            return {json: json, message: ""}
        } else {
            return {json: {}, message: "Bad connection POST " + response.status}
        }
    } catch (err) {
        console.warn('httpPost error ', err);
        return {json: {}, message: "httpPost error"}
    }
};