import t from"axios";const e=t.create({baseURL:"https://api.zapfy.me/v1"});var n,a;!function(t){var n,a,o;(n=t.Instance||(t.Instance={})).connect=async t=>{try{return(await e.post(`/instance/${t.instanceKey}/token/${t.instanceToken}/connect`)).data}catch(t){throw new Error(t)}},n.disconnect=async t=>{try{return(await e.post(`/instance/${t.instanceKey}/token/${t.instanceToken}/disconnect`)).data}catch(t){throw new Error(t)}},n.getState=async t=>{try{return(await e.get(`/instance/${t.instanceKey}/token/${t.instanceToken}/getState`)).data}catch(t){throw new Error(t)}},n.updateWebhook=async t=>{try{const{instanceKey:n,instanceToken:a,webhookUrl:o}=t;return(await e.post(`/instance/${n}/token/${a}/updateWebhook`,{webhookUrl:o})).data}catch(t){throw new Error(t)}},(a=t.Profile||(t.Profile={})).verifyIfNumberIsInWhatsApp=async t=>{try{const{instanceKey:n,instanceToken:a,phoneNumber:o}=t;return(await e.post(`/instance/${n}/token/${a}/onWhatsApp`,{phoneNumber:o})).data}catch(t){throw new Error(t)}},a.getProfileStatus=async t=>{try{const{instanceKey:n,instanceToken:a,phoneNumber:o}=t;return(await e.post(`/instance/${n}/token/${a}/getProfileStatus`,{phoneNumber:o})).data}catch(t){throw new Error(t)}},a.updateProfileStatus=async t=>{try{const{instanceKey:n,instanceToken:a,status:o}=t;return(await e.post(`/instance/${n}/token/${a}/updateProfileStatus`,{status:o})).data}catch(t){throw new Error(t)}},a.updateProfileName=async t=>{try{const{instanceKey:n,instanceToken:a,name:o}=t;return(await e.post(`/instance/${n}/token/${a}/updateProfileName`,{name:o})).data}catch(t){throw new Error(t)}},a.getProfilePictureUrl=async t=>{try{const{instanceKey:n,instanceToken:a,phoneNumber:o}=t;return(await e.post(`/instance/${n}/token/${a}/getProfilePictureUrl`,{phoneNumber:o})).data}catch(t){throw new Error(t)}},a.blockUser=async t=>{try{const{instanceKey:n,instanceToken:a,phoneNumber:o}=t;return(await e.post(`/instance/${n}/token/${a}/blockUser`,{phoneNumber:o})).data}catch(t){throw new Error(t)}},a.unblockUser=async t=>{try{const{instanceKey:n,instanceToken:a,phoneNumber:o}=t;return(await e.post(`/instance/${n}/token/${a}/unblockUser`,{phoneNumber:o})).data}catch(t){throw new Error(t)}},a.getBusinessProfile=async t=>{try{const{instanceKey:n,instanceToken:a,phoneNumber:o}=t;return(await e.post(`/instance/${n}/token/${a}/getBusinessProfile`,{phoneNumber:o})).data}catch(t){throw new Error(t)}},(o=t.Message||(t.Message={})).sendTextMessage=async t=>{try{const{instanceKey:n,instanceToken:a,text:o,destination:s}=t;return(await e.post(`/instance/${n}/token/${a}/message?type=text`,{text:o,destination:s})).data}catch(t){throw new Error(t)}},o.sendButtonsMessage=async t=>{try{const{instanceKey:n,instanceToken:a,destination:o,buttons:s,text:r,footer:c}=t;return(await e.post(`/instance/${n}/token/${a}/message?type=buttons`,{text:r,footer:c,buttons:s,destination:o})).data}catch(t){throw new Error(t)}},o.sendListMessage=async t=>{try{const{text:n,buttonText:a,title:o,destination:s,sections:r,instanceKey:c,instanceToken:i}=t;return(await e.post(`/instance/${c}/token/${i}/message?type=list`,{text:n,buttonText:a,title:o,destination:s,sections:r,instanceKey:c,instanceToken:i})).data}catch(t){throw new Error(t)}},o.sendLocationMessage=async t=>{try{const{lat:n,long:a,instanceKey:o,instanceToken:s}=t;return(await e.post(`/instance/${o}/token/${s}/message?type=location`,{lat:n,long:a,instanceKey:o,instanceToken:s})).data}catch(t){throw new Error(t)}}}(n||(n={})),a||(a={});export{n as ZapfySdk,a as ZapfyTypes};
//# sourceMappingURL=zapfy-sdk.modern.js.map