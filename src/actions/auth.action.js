export const LOGIN ='LOGIN';

export const login =(user,success,fail) =>{
  const userformData = new FormData();
  userformData.append('username',user.username);
  userformData.append('password',user.password);
  async function signIn() {
    return fetch('http://localhostL8080/login',{
      method: 'post',
      body:userformData,
      credentials: 'include'
    })
  }
  const signInPromise = signIn()
      .then(res => res.json())
      .then(res =>{
        return{
          success:res.success,
          user:res.user //{username: 'Bob'}
        }
      })
      .catch(err =>{
        fail(err);
        return{

        }
      });
  return {
    type:LOGIN,
    payload: signInPromise
  };
};
