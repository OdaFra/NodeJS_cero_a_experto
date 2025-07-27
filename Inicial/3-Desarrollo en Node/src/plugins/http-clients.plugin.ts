// const axios = require ('axios')

import axios from 'axios'


export const httpClientPlugin = {
  get: async (url:string) => {
    const { data } = await axios.get(url);
    // console.log(data);
    return data;
    // const resp = await fetch(url);
    // const data = await resp.json();
    // return data;
  },
  post: async (url:string, body:any) => {},
  put: async (url:string, body:any) => {},
  delete: async (url:string, body:any) => {},
};

// module.exports = { http: httpClientPlugin };
