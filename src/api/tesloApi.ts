import axios from "axios";

const tesloApi = axios.create({ baseURL: import.meta.env.BASE_URL });

// TODO: Interceptores

export default tesloApi;
