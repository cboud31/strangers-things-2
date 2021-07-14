const BASE_URL =
  'https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT';

// getToken -- check for token in local storage to add to request header.
const getToken = () => {
  return localStorage.getItem('jwt');
};

const buildRequestHeaders = (httpMethod, bodyObj) => {
  let reqObj = {
    method: httpMethod,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (getToken() && bodyObj) {
    reqObj.headers['Authorization'] = `Bearer ${getToken()}`;

    reqObj = {
      ...reqObj,
      body: JSON.stringify(bodyObj),
    };
    return reqObj;
  }

  if (getToken()) {
    reqObj.headers['Authorization'] = `Bearer ${getToken()}`;

    return reqObj;
  }

  if (bodyObj) {
    reqObj = {
      ...reqObj,
      body: JSON.stringify(bodyObj),
    };
    return reqObj;
  }

  return reqObj;
};

export const fetchPosts = async () => {
  try {
    const result = await fetch(`${BASE_URL}/posts`, buildRequestHeaders('GET'));
    const response = await result.json();
    const { data } = response;
    // Remove this console.log before deployment.
    console.log(data.posts);
    return data.posts;
  } catch (error) {
    console.log(error.message);
  }
};

export const registerUser = async (username, password) => {
  try {
    const bodyObj = {
      user: {
        username,
        password,
      },
    };

    const result = await fetch(
      `${BASE_URL}/users/register`,
      buildRequestHeaders('POST', bodyObj)
    );
    const response = await result.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const bodyObj = {
      user: {
        username,
        password,
      },
    };

    const result = await fetch(
      `${BASE_URL}/users/login`,
      buildRequestHeaders('POST', bodyObj)
    );
    const response = await result.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
