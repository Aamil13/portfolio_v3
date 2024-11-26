const baseUrl = 'https://v7cfev9d83.execute-api.eu-north-1.amazonaws.com/production/api'
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }

//   export const informFunc = async()=>{
    
//     let prevSession = sessionStorage.getItem('visitor')
//     if(prevSession !== 'undefined' && prevSession !== undefined && prevSession !== null){
//     }else{
//         //@ts-ignore
//         sessionStorage.setItem('visitor',true)
//         try{ 
//             // let getIp = await axios.get('https://api.ipify.org/')
//             let newData = {
//                 dt: new Date().toLocaleString(),
//                 tp:getOS() || null,
//                 //ad:getIp?.data || null,
//                 ad: null,
//                 dm:'portfolio.aadilify.in',
//                 tz: timezone || null,
//             }       
//             await fetch(`${baseUrl}/inf/visit`, {
//                 method: 'POST',
//                 //@ts-ignore
//                 headers: {
//                     'Content-Type': 'application/json',
//                     ...newData
//                 },
//                 body: JSON.stringify({ visit: "portfolio.aadilify.in" })
//             });
            
//         }
//         catch(err){
//         }
//     }
// }