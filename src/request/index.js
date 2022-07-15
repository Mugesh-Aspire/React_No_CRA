import React from "react";
import axios from "axios";

import { API_BASE_URL } from "../Constants/strings";

const client = axios.create({
    baseURL: API_BASE_URL
});

export default client