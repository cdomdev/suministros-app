import{a as t}from"./axios.C8DqakIB.js";const s="http://localhost:3000",c=async r=>{try{return await t.post(`${s}/user/login`,r,{withCredentials:!0})}catch(e){throw e}},i=async r=>{try{return await t.post(`${s}/user/google-auth`,{token:r.access_token},{withCredentials:!0})}catch(e){throw e}},l=async r=>{try{return await t.post(`${s}/user/register`,r,{withCredentials:!0})}catch(e){throw e}},h=async r=>{try{return await t.post(`${s}/user/validate-email`,r,{withCredentials:!0})}catch(e){throw e}},w=async({values:r,token:e})=>{if(!e)throw new Error("Token is missing.");try{return await t.post(`${s}/reset-password/${e}`,r,{withCredentials:!0})}catch(o){throw o}},a=()=>{localStorage.clear(),sessionStorage.clear()},u=async()=>{try{await t.post("http://localhost:3000/user/logout",{},{withCredentials:!0}),a(),window.location.reload()}catch(r){console.error("Error during logout",r)}};export{w as a,i as g,u as l,l as r,h as s,c as v};
