import { HttpHeaders } from '@angular/common/http';

const URL:any = {
	default:'',
    sviluppo: 'http://94.177.163.23:8090',
    marketing_produzione: 'https://mkt.tely.it/MarketingRest',
    marketing_sviluppo: 'https://mkt.svil.itsvil.it/MarketingRest',
}

export const APIURL: string = URL.sviluppo;
export const APIURL_MARKETING_SVIL: string = URL.marketing_sviluppo;
export const APIURL_MARKETING_PROD: string = URL.marketing_produzione;

// export const httpOptions = {
//     headers: new HttpHeaders({
//     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", 
//     'Accept': 'application/json, text/plain',
//     "cache-control": "no-cache", 
//     "Access-Control-Allow-Origin": "*", 
//     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
//     "Access-Control-Allow-Credentials" : "true",
//     "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  
 
//     })
// }


export const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Accept': 'application/json, text/plain',
    'Access-Control-Allow-Origin': "*", 
    "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
    "Access-Control-Allow-Credentials" : "true",
    
    })
}