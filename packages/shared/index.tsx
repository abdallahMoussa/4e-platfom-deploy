export const setToken = (value:any) => {
    localStorage.setItem('token',value)
}
export const getToken = () => {
  return localStorage.getItem('token');
  // return 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkY1RTFDMDJDNzk2MTYwMDZFM0VCNDZCN0Y1NjA4NTkxIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwOi8vaG9zdC5kb2NrZXIuaW50ZXJuYWw6NTExMS8iLCJuYmYiOjE3MDM0ODYyMzYsImlhdCI6MTcwMzQ4NjIzNiwiZXhwIjoxNzAzNTcyNjM2LCJhdWQiOiJVc2VyTWFuYWdlbWVudFNlcnZlciIsInNjb3BlIjpbIjRFTWljcm9TZXJ2aWNlcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6ImNsaWVudCIsInN1YiI6ImZkNTQ0ZWZjLWM1NDQtNDkwZi1mYzM3LTA4ZGMwNDk4MzM5NCIsImF1dGhfdGltZSI6MTcwMzQ4NjIzNiwiaWRwIjoibG9jYWwiLCJlbWFpbCI6IkFobWVkTXVoYW1tZWRAZ21haWwuY29tIiwicm9sZSI6InN1cGVyQWRtaW4iLCJuYW1lIjoiQWhtZWQiLCJqdGkiOiJDM0ZGQjQ2NDFCNTMxRTI0NDJBNTI1NDEyNkY4Nzk0MiJ9.s6lQvwSlMqUekvC8-fLEGJx72C85-50A3uvDLI7z8gTjnu_jUCcHNfngs0nCRy86ieK4q80KuASv151W4qEOB0_xKRSyA_ELq4M2HVNGbJ54xf33mbY9YMg9tQuJFc0BVV4Lt0fLr9dEEQiJK2F5n7jPsXy78nAWlzb_0Fe2dJdLJtfPQ6YxAgbSdAgp5gD68PFkAzuzkGTtsWgvgQooxbFT7IT41qgNqpn4hVXhqeCql4z0QIa1MUSdnMBAfWGfZId3xmvLln4DogzG5EbinmrEzVkLuwfpch_waa6GDEkrn9C73UlScsjDg-EcOxlDui4AfLU1ooCX-V3CyoOCbw';
}

export const  fetchApi = async(api: any)=> { 
    try {
      const response = await fetch(api);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
}

// consuming api
import http from "./httpServices";
export {http}