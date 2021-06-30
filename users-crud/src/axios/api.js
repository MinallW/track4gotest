import axios from 'axios';

export default function checkUsers() {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/users'
  });
}

export function createUsers(body) {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/users',
    data: {
      ...body
    }
  });
}

export function updateUsers(userid, body) {
  return axios({
    method: 'put',
    url: `http://localhost:8080/users/${userid}`,
    data: {
      ...body
    }
  });
}

export function deleteUser(userid) {
  return axios({
    method: 'delete',
    url: `http://localhost:8080/users/${userid}`
  });
}

