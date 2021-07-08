const BASE_URL =
  'https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT';

const payload = (httpMethod, bodyObj) => {
  let reqObj = {
    method: httpMethod,
    headers: {
      'Content-Type': 'application/json',
    },
  };

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
    const result = await fetch(`${BASE_URL}/posts`, payload('GET'));
    const response = await result.json();
    const { data } = response;
    // Remove this console.log before deployment.
    console.log(data.posts);
    return data.posts;
  } catch (error) {
    console.log(error.message);
  }
};
